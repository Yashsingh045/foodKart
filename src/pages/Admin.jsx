import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { supabase } from '../../supabaseClient';
import { 
  UserIcon, 
  EnvelopeIcon, 
  ClockIcon, 
  MapPinIcon,
  ShieldCheckIcon
} from '@heroicons/react/24/outline';

const Admin = () => {
  const { user } = useAuth();
  const navigate = useNavigate();
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Check if user is admin
    const checkAdmin = async () => {
      if (!user) {
        navigate('/auth');
        return;
      }

      try {
        const { data, error } = await supabase
          .from('user_data')
          .select('is_admin')
          .eq('user_id', user.id)
          .single();

        if (error) throw error;
        if (!data?.is_admin) {
          navigate('/');
          return;
        }

        fetchUsers();
      } catch (error) {
        console.error('Error checking admin status:', error);
        navigate('/');
      }
    };

    checkAdmin();
  }, [user, navigate]);

  const fetchUsers = async () => {
    try {
      setLoading(true);
      const { data, error } = await supabase
        .from('user_activity')
        .select(`
          user_id,
          email,
          activity_type,
          timestamp,
          ip_address,
          user_agent,
          user_data!inner (
            id,
            name,
            profile_picture,
            is_admin
          )
        `)
        .order('timestamp', { ascending: false });

      if (error) throw error;

      // Group activities by user
      const userMap = new Map();
      data.forEach(activity => {
        if (!userMap.has(activity.user_id)) {
          userMap.set(activity.user_id, {
            id: activity.user_id,
            email: activity.email,
            name: activity.user_data?.name || activity.email.split('@')[0],
            profilePicture: activity.user_data?.profile_picture,
            lastActivity: activity.timestamp,
            lastActivityType: activity.activity_type,
            ipAddress: activity.ip_address,
            userAgent: activity.user_agent,
            isAdmin: activity.user_data?.is_admin || false
          });
        }
      });

      setUsers(Array.from(userMap.values()));
    } catch (error) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  const formatDate = (timestamp) => {
    return new Date(timestamp).toLocaleString();
  };

  const getActivityIcon = (activityType) => {
    switch (activityType) {
      case 'login':
        return '🔑';
      case 'signup':
        return '✨';
      case 'logout':
        return '🚪';
      default:
        return '📝';
    }
  };

  if (loading) {
    return (
      <div className="flex justify-center items-center h-64">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-emerald-500"></div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="text-red-500 text-center p-4">
        Error loading users: {error}
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="bg-white rounded-lg shadow-lg p-6">
        <div className="flex items-center justify-between mb-6">
          <h1 className="text-2xl font-bold text-gray-800">Admin Dashboard</h1>
          <div className="flex items-center text-emerald-600">
            <ShieldCheckIcon className="h-6 w-6 mr-2" />
            <span className="font-medium">Admin Access</span>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-6">
          <div className="bg-emerald-50 p-4 rounded-lg">
            <h3 className="text-lg font-semibold text-emerald-700">Total Users</h3>
            <p className="text-3xl font-bold text-emerald-600">{users.length}</p>
          </div>
          <div className="bg-blue-50 p-4 rounded-lg">
            <h3 className="text-lg font-semibold text-blue-700">Active Users</h3>
            <p className="text-3xl font-bold text-blue-600">
              {users.filter(u => u.lastActivityType === 'login').length}
            </p>
          </div>
          <div className="bg-purple-50 p-4 rounded-lg">
            <h3 className="text-lg font-semibold text-purple-700">New Signups</h3>
            <p className="text-3xl font-bold text-purple-600">
              {users.filter(u => u.lastActivityType === 'signup').length}
            </p>
          </div>
        </div>

        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  User
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Last Activity
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  IP Address
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Device
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {users.map((user) => (
                <tr key={user.id} className="hover:bg-gray-50">
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="flex items-center">
                      <div className="h-10 w-10 rounded-full bg-emerald-100 flex items-center justify-center">
                        {user.profilePicture ? (
                          <img 
                            src={user.profilePicture} 
                            alt={user.name} 
                            className="h-10 w-10 rounded-full object-cover"
                          />
                        ) : (
                          <UserIcon className="h-6 w-6 text-emerald-600" />
                        )}
                      </div>
                      <div className="ml-4">
                        <div className="text-sm font-medium text-gray-900">{user.name}</div>
                        <div className="text-sm text-gray-500">{user.email}</div>
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="flex items-center">
                      <span className="text-2xl mr-2">{getActivityIcon(user.lastActivityType)}</span>
                      <div>
                        <div className="text-sm text-gray-900 capitalize">{user.lastActivityType}</div>
                        <div className="text-sm text-gray-500">{formatDate(user.lastActivity)}</div>
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm text-gray-900">{user.ipAddress}</div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm text-gray-500">{user.userAgent}</div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Admin; 
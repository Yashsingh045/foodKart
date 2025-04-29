import { useState, useRef, useEffect } from 'react';
import { useAuth } from '../context/AuthContext';
import { supabase } from '../../supabaseClient';
import { UserIcon, ArrowRightOnRectangleIcon } from '@heroicons/react/24/outline';
import { useNavigate } from 'react-router-dom';

export default function UserMenu({ userName, onClose }) {
  const { logout } = useAuth();
  const navigate = useNavigate();
  const [profilePic, setProfilePic] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const fileInputRef = useRef(null);
  const menuRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        onClose();
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [onClose]);

  // Fetch current profile picture on mount
  useEffect(() => {
    const fetchProfilePicture = async () => {
      try {
        const { data: { user } } = await supabase.auth.getUser();
        if (!user) {
          console.log('No user found when fetching profile picture');
          return;
        }

        console.log('Fetching profile picture for user:', user.id);
        const { data, error } = await supabase
          .from('user_data')
          .select('profile_picture')
          .eq('user_id', user.id)
          .single();
        
        if (!error && data?.profile_picture) {
          console.log('Profile picture found:', data.profile_picture);
          setProfilePic(data.profile_picture);
        } else {
          console.log('No profile picture found for user');
        }
      } catch (error) {
        console.error('Error fetching profile picture:', error);
      }
    };

    fetchProfilePicture();
  }, []);

  const handleProfilePicUpload = async (event) => {
    try {
      setLoading(true);
      const file = event.target.files[0];
      if (!file) return;

      // Get current user
      const { data: { user } } = await supabase.auth.getUser();
      if (!user) throw new Error('No user found');

      // Upload image to Supabase Storage
      const fileExt = file.name.split('.').pop();
      const fileName = `${user.id}-${Date.now()}.${fileExt}`;
      const { error: uploadError } = await supabase.storage
        .from('profile-pictures')
        .upload(fileName, file);

      if (uploadError) throw uploadError;

      // Get public URL
      const { data: { publicUrl } } = supabase.storage
        .from('profile-pictures')
        .getPublicUrl(fileName);

      // Update user profile with new picture URL
      const { error: updateError } = await supabase
        .from('user_data')
        .update({ profile_picture: publicUrl })
        .eq('user_id', user.id);

      if (updateError) throw updateError;

      setProfilePic(publicUrl);
    } catch (error) {
      console.error('Error uploading profile picture:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleSignOut = async () => {
    try {
      await logout();
      onClose();
      window.location.href = '/';
    } catch (error) {
      console.error('Error signing out:', error);
    }
  };

  return (
    <div
      ref={menuRef}
      className="absolute right-0 mt-2 w-64 rounded-xl shadow-xl bg-white ring-1 ring-black ring-opacity-5 focus:outline-none transform transition-all duration-200 ease-in-out"
    >
      <div className="py-2">
        <div className="px-4 py-3 border-b border-gray-100">
          <div className="flex items-center space-x-4">
            <div className="relative group">
              {profilePic ? (
                <img
                  src={profilePic}
                  alt="Profile"
                  className="h-14 w-14 rounded-full object-cover ring-2 ring-emerald-500 ring-offset-2 transition-all duration-200 group-hover:ring-emerald-600"
                />
              ) : (
                <div className="h-14 w-14 rounded-full bg-gradient-to-br from-emerald-100 to-teal-100 flex items-center justify-center ring-2 ring-emerald-500 ring-offset-2 transition-all duration-200 group-hover:ring-emerald-600">
                  <UserIcon className="h-7 w-7 text-emerald-600" />
                </div>
              )}
              <input
                type="file"
                ref={fileInputRef}
                className="hidden"
                accept="image/*"
                onChange={handleProfilePicUpload}
              />
              <button
                // onClick={() => fileInputRef.current?.click()}
                onClick={handleProfilePicUpload}
                disabled={loading}
                className="absolute bottom-0 right-0 bg-emerald-500 rounded-full p-1.5 text-white hover:bg-emerald-600 transition-all duration-200 transform hover:scale-110 shadow-lg disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {loading ? (
                  <div className="h-3.5 w-3.5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                ) : (
                  <svg className="h-3.5 w-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                  </svg>
                )}
              </button>
            </div>
            <div>
              <p className="text-sm font-semibold text-gray-900">Hi, {userName}</p>
              <p className="text-xs text-gray-500 mt-0.5">Click to change photo</p>
            </div>
          </div>
        </div>

        <button
          onClick={handleSignOut}
          className="w-full text-left px-4 py-3 text-sm text-gray-700 hover:bg-gray-50 flex items-center space-x-3 transition-colors duration-200"
        >
          <ArrowRightOnRectangleIcon className="h-5 w-5 text-gray-500" />
          <span className="font-medium">Sign out</span>
        </button>
      </div>
    </div>
  );
} 
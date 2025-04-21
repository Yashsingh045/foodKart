import { createContext, useContext, useEffect, useState } from 'react'
import { supabase, getCurrentUser, signIn, signUp, signOut } from '../../supabaseClient'

const AuthContext = createContext({})

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null)
  const [loading, setLoading] = useState(true)

  const trackActivity = async (activityType, userData) => {
    try {
      let ipAddress = 'unknown';
      try {
        const response = await fetch('https://api.ipify.org?format=json');
        const ipData = await response.json();
        ipAddress = ipData.ip;
      } catch (ipError) {
        console.error('Error fetching IP:', ipError);
      }
      
      await supabase
        .from('user_activity')
        .insert([
          {
            user_id: userData?.id,
            email: userData?.email,
            activity_type: activityType,
            ip_address: ipAddress,
            user_agent: navigator.userAgent
          }
        ]);
    } catch (error) {
      console.error('Error tracking activity:', error);
    }
  };

  useEffect(() => {
    // Check active sessions and sets the user
    const checkUser = async () => {
      try {
        const { user, error } = await getCurrentUser()
        if (error) throw error
        setUser(user)
        if (user) {
          trackActivity('login', user);
        }
      } catch (error) {
        console.error('Error checking user session:', error.message)
      } finally {
        setLoading(false)
      }
    }

    checkUser()

    // Listen for auth changes
    const { data: { subscription } } = supabase.auth.onAuthStateChange(async (_event, session) => {
      setUser(session?.user ?? null)
      if (session?.user) {
        trackActivity('login', session.user);
      }
      setLoading(false)
    })

    return () => subscription.unsubscribe()
  }, [])

  const login = async (email, password) => {
    try {
      const { data, error } = await signIn(email, password)
      if (error) throw error
      if (data?.user) {
        trackActivity('login', data.user);
      }
      return { data, error: null }
    } catch (error) {
      return { data: null, error }
    }
  }

  const register = async (email, password) => {
    try {
      const { data, error } = await signUp(email, password)
      if (error) throw error
      if (data?.user) {
        trackActivity('signup', data.user);
      }
      return { data, error: null }
    } catch (error) {
      return { data: null, error }
    }
  }

  const logout = async () => {
    try {
      const { error } = await supabase.auth.signOut();
      if (error) throw error;
      setUser(null);
    } catch (error) {
      console.error('Error signing out:', error);
      throw error;
    }
  };
  

  const value = {
    user,
    loading,
    login,
    register,
    logout,
  }

  return (
    <AuthContext.Provider value={value}>
      {!loading && children}
    </AuthContext.Provider>
  )
}

export const useAuth = () => {
  const context = useContext(AuthContext)
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider')
  }
  return context
} 
import { Link } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import { useAuth } from '../context/AuthContext';
import { useState, useEffect, useRef } from 'react';
import { 
  ShoppingCartIcon, 
  HomeIcon, 
  BuildingStorefrontIcon, 
  InformationCircleIcon, 
  EnvelopeIcon,
  Bars3Icon,
  XMarkIcon,
  UserIcon
} from '@heroicons/react/24/outline';
import { getUserData } from '../../supabaseClient';
import UserMenu from './UserMenu';

const Header = () => {
  const { cart } = useCart();
  const { user, logout } = useAuth();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [userName, setUserName] = useState('');
  const [showUserMenu, setShowUserMenu] = useState(false);
  const mobileMenuRef = useRef(null);
  
  // Calculate total items in cart
  const cartItemCount = cart.reduce((total, item) => total + item.quantity, 0);

  // Fetch user data when user is logged in
  useEffect(() => {
    const fetchUserData = async () => {
      if (user) {
        try {
          const { data, error } = await getUserData(user.id);
          if (error) throw error;
          setUserName(data?.name || user.email.split('@')[0]);
        } catch (error) {
          console.error('Error fetching user data:', error);
          setUserName(user.email.split('@')[0]);
        }
      }
    };

    fetchUserData();
  }, [user]);

  // Function to scroll to top of page
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
    // Close mobile menu when navigating
    setMobileMenuOpen(false);
  };
  
  // Function to scroll to footer/contact section
  const scrollToContact = () => {
    const contactSection = document.getElementById('contact-section');
    if (contactSection) {
      // Scroll to the contact section
      contactSection.scrollIntoView({ behavior: 'smooth' });
      
      // Add highlight class for visual feedback
      contactSection.classList.add('contact-highlight');
      
      // Remove highlight class after animation completes
      setTimeout(() => {
        contactSection.classList.remove('contact-highlight');
      }, 2000);
    }
    // Close mobile menu when navigating
    setMobileMenuOpen(false);
  };

  const handleLogout = async () => {
    try {
      await logout();
      setUserName('');
      scrollToTop();
    } catch (error) {
      console.error('Error signing out:', error);
    }
  };

  // Close mobile menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (mobileMenuRef.current && !mobileMenuRef.current.contains(event.target)) {
        setMobileMenuOpen(false);
      }
    };
    
    if (mobileMenuOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }
    
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [mobileMenuOpen]);

  // Prevent body scrolling when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
    
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [mobileMenuOpen]);

  return (
    <header className="bg-white shadow-lg sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link 
          to="/" 
          className="text-xl sm:text-2xl font-bold text-emerald-600 flex items-center hover:text-emerald-700 transition-colors duration-200"
          onClick={scrollToTop}
        >
          <BuildingStorefrontIcon className="h-7 w-7 sm:h-8 sm:w-8 mr-2" />
          FOODKART
        </Link>
        
        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          <Link 
            to="/" 
            className="flex items-center text-gray-700 hover:text-emerald-600 font-medium transition-colors duration-200"
            onClick={scrollToTop}
          >
            <HomeIcon className="h-5 w-5 mr-1.5" />
            Home
          </Link>
          <Link 
            to="/restaurants" 
            className="flex items-center text-gray-700 hover:text-emerald-600 font-medium transition-colors duration-200"
            onClick={scrollToTop}
          >
            <BuildingStorefrontIcon className="h-5 w-5 mr-1.5" />
            Restaurants
          </Link>
          <Link 
            to="/about" 
            className="flex items-center text-gray-700 hover:text-emerald-600 font-medium transition-colors duration-200"
            onClick={scrollToTop}
          >
            <InformationCircleIcon className="h-5 w-5 mr-1.5" />
            About
          </Link>
          <button 
            className="flex items-center text-gray-700 hover:text-emerald-600 font-medium bg-transparent border-none cursor-pointer transition-colors duration-200"
            onClick={scrollToContact}
          >
            <EnvelopeIcon className="h-5 w-5 mr-1.5" />
            Contact
          </button>
        </nav>
        
        <div className="flex items-center space-x-6">
          {user ? (
            <div className="relative">
              <button
                onClick={() => setShowUserMenu(!showUserMenu)}
                className="flex items-center text-gray-700 hover:text-emerald-600 font-medium transition-colors duration-200"
              >
                <span className="mr-2">Hi, {userName}</span>
                <UserIcon className="h-5 w-5" />
              </button>
              {showUserMenu && (
                <UserMenu
                  userName={userName}
                  onClose={() => setShowUserMenu(false)}
                />
              )}
            </div>
          ) : (
            <Link
              to="/auth"
              className="flex items-center text-gray-700 hover:text-emerald-600 font-medium transition-colors duration-200"
              onClick={scrollToTop}
            >
              <UserIcon className="h-5 w-5 mr-1.5" />
              Sign In
            </Link>
          )}
          <Link 
            to="/cart" 
            className="relative p-2 bg-gray-100 hover:bg-gray-200 rounded-full transition-all duration-200 transform hover:scale-105"
            onClick={scrollToTop}
          >
            <ShoppingCartIcon className="h-6 w-6 text-gray-700 hover:text-emerald-600" />
            {cartItemCount > 0 && (
              <span className="absolute -top-1 -right-1 bg-emerald-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center shadow-md">
                {cartItemCount}
              </span>
            )}
          </Link>
          
          {/* Mobile Menu Button */}
          <button 
            className="md:hidden p-2 text-gray-700 hover:text-emerald-600 focus:outline-none transition-colors duration-200"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            <Bars3Icon className="h-6 w-6" />
          </button>
        </div>
      </div>
      
      {/* Mobile Navigation Menu */}
      <div 
        ref={mobileMenuRef}
        className={`fixed inset-0 bg-white z-50 transform transition-transform duration-300 ease-in-out ${
          mobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
        } md:hidden`}
      >
        <div className="flex justify-between items-center p-4 border-b">
          <Link 
            to="/" 
            className="text-xl font-bold text-emerald-600 flex items-center hover:text-emerald-700 transition-colors duration-200"
            onClick={scrollToTop}
          >
            <BuildingStorefrontIcon className="h-6 w-6 mr-2" />
            FOODKRT
          </Link>
          <button 
            onClick={() => setMobileMenuOpen(false)}
            className="p-2 text-gray-700 hover:text-emerald-600 focus:outline-none transition-colors duration-200"
          >
            <XMarkIcon className="h-6 w-6" />
          </button>
        </div>
        
        <nav className="flex flex-col p-4 space-y-4">
          <Link 
            to="/" 
            className="flex items-center text-gray-700 hover:text-emerald-600 font-medium py-2 border-b border-gray-100 transition-colors duration-200"
            onClick={scrollToTop}
          >
            <HomeIcon className="h-6 w-6 mr-2" />
            Home
          </Link>
          <Link 
            to="/restaurants" 
            className="flex items-center text-gray-700 hover:text-emerald-600 font-medium py-2 border-b border-gray-100 transition-colors duration-200"
            onClick={scrollToTop}
          >
            <BuildingStorefrontIcon className="h-6 w-6 mr-2" />
            Restaurants
          </Link>
          <Link 
            to="/about" 
            className="flex items-center text-gray-700 hover:text-emerald-600 font-medium py-2 border-b border-gray-100 transition-colors duration-200"
            onClick={scrollToTop}
          >
            <InformationCircleIcon className="h-6 w-6 mr-2" />
            About
          </Link>
          <button 
            className="flex items-center text-gray-700 hover:text-emerald-600 font-medium bg-transparent border-none cursor-pointer py-2 border-b border-gray-100 w-full text-left transition-colors duration-200"
            onClick={scrollToContact}
          >
            <EnvelopeIcon className="h-6 w-6 mr-2" />
            Contact
          </button>
          
          {user ? (
            <div className="py-2 border-b border-gray-100">
              <button
                onClick={() => {
                  setShowUserMenu(!showUserMenu);
                  setMobileMenuOpen(false);
                }}
                className="flex items-center text-gray-700 hover:text-emerald-600 font-medium w-full text-left transition-colors duration-200"
              >
                <UserIcon className="h-6 w-6 mr-2" />
                Hi, {userName}
              </button>
              {showUserMenu && (
                <UserMenu
                  userName={userName}
                  onClose={() => setShowUserMenu(false)}
                />
              )}
            </div>
          ) : (
            <Link
              to="/auth"
              className="flex items-center text-gray-700 hover:text-emerald-600 font-medium py-2 border-b border-gray-100 transition-colors duration-200"
              onClick={scrollToTop}
            >
              <UserIcon className="h-6 w-6 mr-2" />
              Sign In
            </Link>
          )}
          
          <Link 
            to="/cart" 
            className="flex items-center text-gray-700 hover:text-emerald-600 font-medium py-2 mt-4 transition-colors duration-200"
            onClick={scrollToTop}
          >
            <ShoppingCartIcon className="h-6 w-6 mr-2" />
            Cart
            {cartItemCount > 0 && (
              <span className="ml-2 bg-emerald-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                {cartItemCount}
              </span>
            )}
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default Header; 
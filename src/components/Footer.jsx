import { Link } from 'react-router-dom';
import { useEffect } from 'react';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  // Function to scroll to top of page
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };
  
  // Add animation keyframes
  useEffect(() => {
    const style = document.createElement('style');
    style.textContent = `
      @keyframes fadeIn {
        from { opacity: 0; }
        to { opacity: 1; }
      }
      
      @keyframes highlightSection {
        0% { background-color: transparent; }
        50% { background-color: rgba(16, 185, 129, 0.2); }
        100% { background-color: transparent; }
      }
      
      .contact-highlight {
        animation: highlightSection 2s ease-in-out;
      }
    `;
    document.head.appendChild(style);
    
    return () => {
      document.head.removeChild(style);
    };
  }, []);
  
  return (
    <footer className="bg-gray-800 text-white">
      <div className="container mx-auto px-4 py-8">
        {/* Mobile divider line */}
        <div className="block sm:hidden w-full h-1 bg-emerald-500 opacity-50 rounded mb-6"></div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="text-center sm:text-left mb-6 sm:mb-0">
            <h3 className="text-xl font-bold mb-4 inline-flex items-center justify-center sm:justify-start">
              <span className="bg-emerald-600 text-white rounded-full p-1 mr-2">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </span>
              FOODKART
            </h3>
            <p className="text-gray-300 mb-4">
              Discover the best food & drinks in your area with just a few clicks.
            </p>
            <div className="flex space-x-4 mt-4 justify-center sm:justify-start">
              <a href="https://x.com/YashSingh_045" className="text-gray-300 hover:text-emerald-400 transition-colors">
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" />
                </svg>
              </a>
              <a href="https://yashveer-singh.vercel.app/" className="text-gray-300 hover:text-emerald-400 transition-colors">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-globe">
              <circle cx="12" cy="12" r="10"></circle>
                  <path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20" />
                  <path d="M2 12h20"/>
                </svg>
              </a>
              <a href="https://www.linkedin.com/in/yashveer-singh-061bb1325/" className="text-gray-300 hover:text-emerald-400 transition-colors">
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm-2 16h-2v-6h2v6zm-1-6.891c-.607 0-1.1-.496-1.1-1.109 0-.612.492-1.109 1.1-1.109s1.1.497 1.1 1.109c0 .613-.493 1.109-1.1 1.109zm8 6.891h-1.998v-2.861c0-1.881-2.002-1.722-2.002 0v2.861h-2v-6h2v1.093c.872-1.616 4-1.736 4 1.548v3.359z" />
                </svg>
              </a>
            </div>
          </div>
          
          <div className="text-center sm:text-left hidden sm:block">
            <h3 className="text-lg font-semibold mb-4 inline-flex items-center justify-center sm:justify-start">
              <span className="bg-emerald-600 text-white rounded-full p-1 mr-2">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 9l3 3m0 0l-3 3m3-3H8m13 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </span>
              Quick Links
            </h3>
            <ul className="space-y-2 flex flex-col items-center sm:items-start">
              <li>
                <Link 
                  to="/" 
                  className="text-gray-300 hover:text-emerald-400 transition-colors inline-flex items-center"
                  onClick={scrollToTop}
                >
                  <span className="mr-2">→</span>
                  Home
                </Link>
              </li>
              <li>
                <Link 
                  to="/restaurants" 
                  className="text-gray-300 hover:text-emerald-400 transition-colors inline-flex items-center"
                  onClick={scrollToTop}
                >
                  <span className="mr-2">→</span>
                  Restaurants
                </Link>
              </li>
              <li>
                <Link 
                  to="/about" 
                  className="text-gray-300 hover:text-emerald-400 transition-colors inline-flex items-center"
                  onClick={scrollToTop}
                >
                  <span className="mr-2">→</span>
                  About Us
                </Link>
              </li>
            </ul>
          </div>
          
          <div id="contact-section" className="relative p-4 rounded-lg text-center sm:text-left sm:col-span-1 col-span-1 mt-4 sm:mt-0">
            <div className="absolute -top-6 left-0 w-full h-1 bg-emerald-400 rounded hidden sm:block" 
                 style={{ animation: 'fadeIn 0.5s ease-out forwards' }}></div>
            <div className="sm:hidden w-1/2 mx-auto h-px bg-emerald-400 mb-6 opacity-50"></div>
            <h3 className="text-lg font-semibold mb-4 inline-flex items-center justify-center sm:justify-start">
              <span className="bg-emerald-500 text-white rounded-full p-1 mr-2">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </span>
              Contact Us
            </h3>
            <ul className="space-y-3 text-gray-300">
              <li className="flex items-center justify-center sm:justify-start">
                <span className="text-emerald-400 mr-2">📍</span>
                323 Your Space, Pune
              </li>
              <li className="flex items-center justify-center sm:justify-start">
                <span className="text-emerald-400 mr-2">📞</span>
                Phone: +91 6396721301
              </li>
              <li className="flex items-center justify-center sm:justify-start">
                <span className="text-emerald-400 mr-2">✉️</span>
                Email: foodkart6396@gmail.com
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-700 mt-8 pt-6 text-center text-gray-400">
          <p>© {currentYear} FOODKART. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 
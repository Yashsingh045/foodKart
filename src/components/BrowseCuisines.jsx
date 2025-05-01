import { useNavigate } from 'react-router-dom';
import { useState, useRef, useEffect } from 'react';
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/24/outline';

const BrowseCuisines = () => {
  const navigate = useNavigate();
  const scrollContainerRef = useRef(null);
  const [showScrollButtons, setShowScrollButtons] = useState(false);
  const [scrollPosition, setScrollPosition] = useState(0);
  
  // Function to scroll to top of page
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };
  
  const cuisines = [
    {
      name: 'Indian',
      image: 'https://images.unsplash.com/photo-1585937421612-70a008356c36?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      description: 'Flavorful curries, aromatic spices, and delicious bread.'
    },
    {
      name: 'Italian',
      image: 'https://images.unsplash.com/photo-1498579150354-977475b7ea0b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      description: 'Classic pizzas, pastas, and delectable desserts.'
    },
    {
      name: 'Japanese',
      image: 'https://images.unsplash.com/photo-1580822184713-fc5400e7fe10?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      description: 'Fresh sushi, sashimi, and traditional Japanese dishes.'
    },
    {
      name: 'Mexican',
      image: 'https://images.unsplash.com/photo-1615870216519-2f9fa575fa5c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      description: 'Spicy tacos, burritos, and authentic Mexican flavors.'
    },
    {
      name: 'Chinese',
      image: 'https://images.unsplash.com/photo-1563245372-f21724e3856d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      description: 'Delicious stir-fries, dumplings, and traditional dishes.'
    },
    {
      name: 'American',
      image: 'https://images.unsplash.com/photo-1551782450-17144efb9c50?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      description: 'Juicy burgers, crispy fries, and classic comfort food.'
    }
  ];
  
  // Check if should show scroll buttons
  useEffect(() => {
    const checkScrollable = () => {
      if (scrollContainerRef.current) {
        const { scrollWidth, clientWidth } = scrollContainerRef.current;
        setShowScrollButtons(scrollWidth > clientWidth);
      }
    };
    
    checkScrollable();
    window.addEventListener('resize', checkScrollable);
    
    return () => {
      window.removeEventListener('resize', checkScrollable);
    };
  }, []);
  
  // Update scroll position for button visibility
  const handleScroll = () => {
    if (scrollContainerRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = scrollContainerRef.current;
      setScrollPosition(scrollLeft / (scrollWidth - clientWidth));
    }
  };
  
  useEffect(() => {
    const scrollContainer = scrollContainerRef.current;
    if (scrollContainer) {
      scrollContainer.addEventListener('scroll', handleScroll);
      return () => scrollContainer.removeEventListener('scroll', handleScroll);
    }
  }, []);
  
  // Scroll the container left or right
  const scroll = (direction) => {
    if (scrollContainerRef.current) {
      const { clientWidth } = scrollContainerRef.current;
      const scrollAmount = direction === 'left' ? -clientWidth / 2 : clientWidth / 2;
      scrollContainerRef.current.scrollBy({
        left: scrollAmount,
        behavior: 'smooth'
      });
    }
  };
  
  const handleCuisineClick = (cuisine) => {
    // Scroll to top before navigating
    scrollToTop();
    // Navigate to cuisine details page
    navigate(`/cuisine/${cuisine}`);
  };

  return (
    <section className="bg-gray-50 py-8 sm:py-16">
      <div className="container px-4 mx-auto">
        <div className="text-center mb-8 sm:mb-12">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-800 mb-2 sm:mb-4">Browse by Cuisine</h2>
          <p className="text-gray-600 text-sm sm:text-base md:text-lg max-w-2xl mx-auto">
            Explore our diverse selection of cuisines from around the world. Click on any cuisine to view related dishes.
          </p>
        </div>
        
        {/* Mobile scrollable container */}
        <div className="relative md:hidden">
          {showScrollButtons && scrollPosition > 0.01 && (
            <button 
              onClick={() => scroll('left')}
              className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-white/80 rounded-full p-1 shadow-md"
            >
              <ChevronLeftIcon className="h-6 w-6 text-gray-700" />
            </button>
          )}
          
          <div 
            ref={scrollContainerRef}
            className="flex overflow-x-auto pb-5 scrollbar-hide snap-x snap-mandatory scroll-px-4 gap-4"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          >
            {cuisines.map((cuisine) => (
              <div
                key={cuisine.name}
                onClick={() => handleCuisineClick(cuisine.name)}
                className="snap-start scroll-ml-4 flex-shrink-0 w-[280px] bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300 cursor-pointer"
              >
                <div className="relative h-32 overflow-hidden">
                  <img 
                    src={cuisine.image} 
                    alt={`${cuisine.name} cuisine`} 
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
                  <h3 className="absolute bottom-3 left-3 text-white text-xl font-bold">{cuisine.name}</h3>
                </div>
                <div className="p-4">
                  <p className="text-gray-600 text-sm line-clamp-2">{cuisine.description}</p>
                  <div className="mt-3 text-emerald-600 text-sm font-medium flex items-center">
                    <span>View {cuisine.name} dishes</span>
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                    </svg>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          {showScrollButtons && scrollPosition < 0.99 && (
            <button 
              onClick={() => scroll('right')}
              className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-white/80 rounded-full p-1 shadow-md"
            >
              <ChevronRightIcon className="h-6 w-6 text-gray-700" />
            </button>
          )}
        </div>
        
        {/* Desktop grid layout */}
        <div className="hidden md:grid grid-cols-2 lg:grid-cols-3 gap-8">
          {cuisines.map((cuisine) => (
            <div
              key={cuisine.name}
              onClick={() => handleCuisineClick(cuisine.name)}
              className="group bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300 cursor-pointer"
            >
              <div className="relative h-48 overflow-hidden">
                <img 
                  src={cuisine.image} 
                  alt={`${cuisine.name} cuisine`} 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
                <h3 className="absolute bottom-4 left-4 text-white text-2xl font-bold">{cuisine.name}</h3>
              </div>
              <div className="p-5">
                <p className="text-gray-600">{cuisine.description}</p>
                <div className="mt-4 text-emerald-600 font-medium group-hover:text-emerald-700 flex items-center">
                  <span>View {cuisine.name} dishes</span>
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BrowseCuisines; 
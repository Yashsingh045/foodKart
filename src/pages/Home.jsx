import { useState, useEffect, useRef } from 'react';
import { useSearchParams, Link } from 'react-router-dom';
import RestaurantCard from '../components/RestaurantCard';
import BrowseCuisines from '../components/BrowseCuisines';
import { 
  MagnifyingGlassIcon, 
  AdjustmentsHorizontalIcon, 
  FireIcon, 
  ArrowRightIcon,
  StarIcon,
  ChevronDownIcon,
  ClockIcon,
  CurrencyDollarIcon,
  ArrowsUpDownIcon,
  Bars3Icon,
  SparklesIcon
} from '@heroicons/react/24/outline';
import { restaurants, menuItems } from '../utils/data';

// Add animation keyframes to the stylesheet
const addAnimationStyles = () => {
  const style = document.createElement('style');
  style.textContent = `
    @keyframes float-slow {
      0%, 100% { transform: translateY(0px); }
      50% { transform: translateY(-20px); }
    }
    @keyframes float-medium {
      0%, 100% { transform: translateY(0px); }
      50% { transform: translateY(-15px); }
    }
    @keyframes float-fast {
      0%, 100% { transform: translateY(0px); }
      50% { transform: translateY(-10px); }
    }
    .animate-float-slow {
      animation: float-slow 6s ease-in-out infinite;
    }
    .animate-float-medium {
      animation: float-medium 4s ease-in-out infinite;
    }
    .animate-float-fast {
      animation: float-fast 3s ease-in-out infinite;
    }
    @keyframes fadeIn {
      0% { opacity: 0; transform: translateY(10px); }
      100% { opacity: 1; transform: translateY(0); }
    }
    .animate-fadeIn {
      animation: fadeIn 0.6s ease-out forwards;
    }
    .delay-100 { animation-delay: 0.1s; }
    .delay-200 { animation-delay: 0.2s; }
    .delay-300 { animation-delay: 0.3s; }
    .delay-400 { animation-delay: 0.4s; }
  `;
  document.head.appendChild(style);
};

const Home = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredRestaurants, setFilteredRestaurants] = useState(restaurants);
  const [featuredRestaurants, setFeaturedRestaurants] = useState([]);
  const [selectedCuisine, setSelectedCuisine] = useState('all');
  const [searchParams, setSearchParams] = useSearchParams();
  const [isSearching, setIsSearching] = useState(false);
  const [sortBy, setSortBy] = useState('relevance');
  const [showSortDropdown, setShowSortDropdown] = useState(false);
  const [matchedMenuItems, setMatchedMenuItems] = useState({});
  const [allMatchedDishes, setAllMatchedDishes] = useState([]);
  const searchInputRef = useRef(null);
  const sortDropdownRef = useRef(null);
  
  // Add new state for search bar focus
  const [isSearchFocused, setIsSearchFocused] = useState(false);
  
  // Function to scroll to top of page
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };
  
  // Add animation styles when component mounts
  useEffect(() => {
    addAnimationStyles();
  }, []);
  
  // Extract unique cuisine types from restaurant data
  const cuisineTypes = ['all', ...new Set(restaurants.map(restaurant => restaurant.cuisine))];
  
  // Handle URL query parameters for cuisine filtering
  useEffect(() => {
    const cuisineParam = searchParams.get('cuisine');
    if (cuisineParam && cuisineTypes.includes(cuisineParam)) {
      setSelectedCuisine(cuisineParam);
    }
    
    // Check for sort parameter in URL
    const sortParam = searchParams.get('sort');
    if (sortParam) {
      setSortBy(sortParam);
    }
  }, [searchParams, cuisineTypes]);
  
  // Generate featured restaurants (top rated from each cuisine type)
  useEffect(() => {
    // Group restaurants by cuisine
    const cuisineGroups = {};
    restaurants.forEach(restaurant => {
      if (!cuisineGroups[restaurant.cuisine]) {
        cuisineGroups[restaurant.cuisine] = [];
      }
      cuisineGroups[restaurant.cuisine].push(restaurant);
    });
    
    // Sort each cuisine group by rating (descending)
    Object.keys(cuisineGroups).forEach(cuisine => {
      cuisineGroups[cuisine].sort((a, b) => b.rating - a.rating);
    });
    
    // Take the highest rated restaurant from each cuisine
    let featured = [];
    Object.keys(cuisineGroups).forEach(cuisine => {
      if (cuisineGroups[cuisine].length > 0) {
        featured.push(cuisineGroups[cuisine][0]);
      }
    });
    
    // If we have more than 6 cuisine types, take only the highest rated 6 restaurants
    if (featured.length > 6) {
      featured.sort((a, b) => b.rating - a.rating);
      featured = featured.slice(0, 6);
    }
    // If we have less than 6 cuisine types, add more restaurants from the most popular cuisines
    else if (featured.length < 6) {
      // Sort cuisines by number of restaurants (popularity)
      const popularCuisines = Object.keys(cuisineGroups)
        .sort((a, b) => cuisineGroups[b].length - cuisineGroups[a].length);
      
      let i = 0;
      while (featured.length < 6 && i < popularCuisines.length) {
        const cuisine = popularCuisines[i];
        // If this cuisine has more than one restaurant, add the second highest rated
        if (cuisineGroups[cuisine].length > 1) {
          // Check if we haven't already added this restaurant
          const secondBest = cuisineGroups[cuisine][1];
          if (!featured.some(r => r.id === secondBest.id)) {
            featured.push(secondBest);
          }
        }
        i++;
        // If we've gone through all cuisines once, start again
        if (i >= popularCuisines.length) {
          i = 0;
        }
      }
    }
    
    setFeaturedRestaurants(featured);
  }, []);
  
  // Close sort dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (sortDropdownRef.current && !sortDropdownRef.current.contains(event.target)) {
        setShowSortDropdown(false);
      }
    };
    
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  // Filter restaurants when searchTerm or selectedCuisine changes
  useEffect(() => {
    // Set isSearching to true whenever searchTerm is not empty
    setIsSearching(!!searchTerm || selectedCuisine !== 'all');
    
    let results = [];
    let menuItemMatches = {};
    let allDishes = [];
    
    if (searchTerm) {
      const term = searchTerm.toLowerCase();
      
      // First find restaurants that match by name or cuisine
      const nameMatches = restaurants.filter(restaurant => 
        restaurant.name.toLowerCase().includes(term) ||
        restaurant.cuisine.toLowerCase().includes(term)
      );
      
      // Then find restaurants that have menu items matching the search term
      const menuMatches = new Set();
      
      // Process menu items
      menuItems.forEach(item => {
        if (
          item.name.toLowerCase().includes(term) ||
          item.description.toLowerCase().includes(term) ||
          item.category.toLowerCase().includes(term)
        ) {
          menuMatches.add(item.restaurantId);
          
          // Store matched menu items for each restaurant
          if (!menuItemMatches[item.restaurantId]) {
            menuItemMatches[item.restaurantId] = [];
          }
          menuItemMatches[item.restaurantId].push(item);
          
          // Add restaurant info to each menu item for the consolidated view
          const restaurantInfo = restaurants.find(r => r.id === item.restaurantId);
          if (restaurantInfo) {
            allDishes.push({
              ...item,
              restaurantName: restaurantInfo.name,
              restaurantImage: restaurantInfo.image,
              restaurantRating: restaurantInfo.rating,
              restaurantCuisine: restaurantInfo.cuisine,
              restaurantDeliveryTime: restaurantInfo.deliveryTime,
              relevanceScore: item.name.toLowerCase().includes(term) ? 2 : 1
            });
          }
        }
      });
      
      // Find the restaurants that match the menu items
      const menuMatchingRestaurants = restaurants.filter(restaurant => 
        menuMatches.has(restaurant.id)
      );
      
      // Combine results, removing duplicates
      const combinedResults = [...nameMatches];
      menuMatchingRestaurants.forEach(restaurant => {
        if (!combinedResults.some(r => r.id === restaurant.id)) {
          combinedResults.push(restaurant);
        }
      });
      
      // For restaurants that match by name but don't have matching menu items
      // add their popular items to the dishes list
      nameMatches.forEach(restaurant => {
        if (!menuItemMatches[restaurant.id]) {
          const popularItems = menuItems.filter(item => 
            item.restaurantId === restaurant.id && item.popular
          );
          
          popularItems.slice(0, 2).forEach(item => {
            allDishes.push({
              ...item,
              restaurantName: restaurant.name,
              restaurantImage: restaurant.image,
              restaurantRating: restaurant.rating,
              restaurantCuisine: restaurant.cuisine,
              restaurantDeliveryTime: restaurant.deliveryTime,
              relevanceScore: 0 // Lower relevance for items from restaurants that match by name
            });
          });
        }
      });
      
      results = combinedResults;
    } else {
      results = [...restaurants];
    }
    
    // Filter by cuisine type
    if (selectedCuisine !== 'all') {
      results = results.filter(restaurant => 
        restaurant.cuisine === selectedCuisine
      );
      
      // Also filter the dishes by cuisine
      allDishes = allDishes.filter(dish => 
        dish.restaurantCuisine === selectedCuisine
      );
    }
    
    // Sort dishes based on sortBy state
    switch(sortBy) {
      case 'rating':
        allDishes = [...allDishes].sort((a, b) => b.restaurantRating - a.restaurantRating);
        break;
      case 'delivery_time':
        allDishes = [...allDishes].sort((a, b) => a.restaurantDeliveryTime - b.restaurantDeliveryTime);
        break;
      case 'price_low':
        allDishes = [...allDishes].sort((a, b) => a.price - b.price);
        break;
      case 'price_high':
        allDishes = [...allDishes].sort((a, b) => b.price - a.price);
        break;
      case 'popular_items':
        allDishes = [...allDishes].sort((a, b) => (b.popular ? 1 : 0) - (a.popular ? 1 : 0));
        break;
      default: // 'relevance' or any other default case
        allDishes = [...allDishes].sort((a, b) => {
          // First sort by relevance score
          if (a.relevanceScore !== b.relevanceScore) {
            return b.relevanceScore - a.relevanceScore;
          }
          
          // Then by popularity
          if (a.popular !== b.popular) {
            return a.popular ? -1 : 1;
          }
          
          // Then by rating
          return b.restaurantRating - a.restaurantRating;
        });
        break;
    }
    
    // Sort restaurants based on sortBy state (kept for fallback)
    switch(sortBy) {
      case 'rating':
        results = [...results].sort((a, b) => b.rating - a.rating);
        break;
      case 'delivery_time':
        results = [...results].sort((a, b) => a.deliveryTime - b.deliveryTime);
        break;
      case 'price_low':
        results = [...results].sort((a, b) => a.priceLevel - b.priceLevel);
        break;
      case 'price_high':
        results = [...results].sort((a, b) => b.priceLevel - a.priceLevel);
        break;
      case 'popular_items':
        // Sort by number of popular menu items
        results = [...results].sort((a, b) => {
          const aPopularItems = menuItems.filter(item => 
            item.restaurantId === a.id && item.popular
          ).length;
          const bPopularItems = menuItems.filter(item => 
            item.restaurantId === b.id && item.popular
          ).length;
          return bPopularItems - aPopularItems;
        });
        break;
      default: // 'relevance' or any other default case
        if (searchTerm) {
          results = [...results].sort((a, b) => {
            const aMatches = menuItemMatches[a.id]?.length || 0;
            const bMatches = menuItemMatches[b.id]?.length || 0;
            if (aMatches !== bMatches) return bMatches - aMatches;
            
            // If menu matches are the same, prioritize name matches
            const aNameMatch = a.name.toLowerCase().includes(searchTerm.toLowerCase()) ? 1 : 0;
            const bNameMatch = b.name.toLowerCase().includes(searchTerm.toLowerCase()) ? 1 : 0;
            return bNameMatch - aNameMatch;
          });
        }
        break;
    }
    
    setFilteredRestaurants(results);
    setMatchedMenuItems(menuItemMatches);
    setAllMatchedDishes(allDishes);
  }, [searchTerm, selectedCuisine, sortBy]);

  // Update URL when cuisine filter changes
  const handleCuisineChange = (cuisine) => {
    setSelectedCuisine(cuisine);
    if (cuisine === 'all') {
      searchParams.delete('cuisine');
    } else {
      searchParams.set('cuisine', cuisine);
    }
    setSearchParams(searchParams);
  };

  // Handle sorting change
  const handleSortChange = (sortOption) => {
    setSortBy(sortOption);
    searchParams.set('sort', sortOption);
    setSearchParams(searchParams);
    setShowSortDropdown(false);
  };
  
  const clearSearch = () => {
    setSearchTerm('');
    setSelectedCuisine('all');
    setSortBy('relevance');
    setMatchedMenuItems({});
    setAllMatchedDishes([]);
    searchParams.delete('cuisine');
    searchParams.delete('sort');
    setSearchParams(searchParams);
    setIsSearching(false);
    
    // Focus on search input after clearing
    if (searchInputRef.current) {
      searchInputRef.current.focus();
    }
  };
  
  // Format sort option display text
  const getSortOptionDisplayText = () => {
    switch(sortBy) {
      case 'rating':
        return 'Highest Rating';
      case 'delivery_time':
        return 'Fastest Delivery';
      case 'price_low':
        return 'Price: Low to High';
      case 'price_high':
        return 'Price: High to Low';
      case 'popular_items':
        return 'Most Popular Items';
      default:
        return 'Relevance';
    }
  };

  // Count total matched menu items
  const getTotalMenuItemMatches = () => {
    return allMatchedDishes.length;
  };

  // Handle search bar focus
  const handleSearchFocus = () => {
    setIsSearchFocused(true);
    if (searchTerm) {
      setIsSearching(true);
    }
    scrollToTop();
  };

  // Handle search bar blur
  const handleSearchBlur = () => {
    setIsSearchFocused(false);
    if (!searchTerm) {
      setIsSearching(false);
    }
  };

  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Enhanced Hero section with animations */}
      <div className={`relative ${isSearching ? 'h-[300px]' : 'h-[600px] md:h-[700px]'} transition-all duration-500 overflow-hidden`}>
        {/* Background image with enhanced overlay */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat" 
          style={{ 
            backgroundImage: "url('https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80')", 
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-black via-black/70 to-black/50"></div>
        </div>
        
        {/* Decorative food icons */}
        {!isSearching && (
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <div className="absolute top-[15%] left-[10%] text-5xl animate-float-slow opacity-60">🍕</div>
            <div className="absolute top-[45%] left-[30%] text-5xl animate-float-medium opacity-60">🥗</div>
          </div>
        )}
        
        {/* Content */}
        <div className="container relative z-10 px-4 flex flex-col justify-center h-full text-white">
          {!isSearching ? (
            <div className="max-w-4xl animate-fadeIn">
              <h1 className="text-5xl md:text-7xl font-bold leading-tight mb-6">
                Discover <span className="text-emerald-400">Extraordinary</span> Dining Experiences
              </h1>
              <div className="h-1 w-24 bg-emerald-400 mb-8 rounded-full animate-fadeIn delay-100"></div>
              <p className="text-xl md:text-2xl mt-2 max-w-2xl text-gray-200 animate-fadeIn delay-200">
                Find and order from the finest local restaurants in just a few clicks.
              </p>
              
              <div className="mt-12 animate-fadeIn delay-300">
                <div 
                  className={`bg-white rounded-lg shadow-xl flex items-center p-3 max-w-xl overflow-hidden transition-all duration-300 ${
                    isSearchFocused ? 'ring-2 ring-emerald-500 scale-105' : ''
                  }`}
                >
                  <MagnifyingGlassIcon className="h-6 w-6 text-gray-400 ml-3" />
                  <input
                    ref={searchInputRef}
                    type="text"
                    placeholder="Search for restaurants, cuisines, or dishes..."
                    className="flex-1 py-3 px-4 outline-none text-gray-800 font-medium"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    onFocus={handleSearchFocus}
                    onBlur={handleSearchBlur}
                  />
                  {searchTerm && (
                    <button 
                      className="bg-gray-200 hover:bg-gray-300 text-gray-700 font-medium px-3 py-2 rounded-md text-sm transition-colors mr-2"
                      onClick={clearSearch}
                    >
                      Clear
                    </button>
                  )}
                </div>
              </div>
            </div>
          ) : (
            <div className="animate-fadeIn">
              <div 
                className={`bg-white rounded-lg shadow-xl flex items-center p-3 max-w-xl overflow-hidden transition-all duration-300 ${
                  isSearchFocused ? 'ring-2 ring-emerald-500 scale-105' : ''
                }`}
              >
                <MagnifyingGlassIcon className="h-6 w-6 text-gray-400 ml-3" />
                <input
                  ref={searchInputRef}
                  type="text"
                  placeholder="Search for restaurants, cuisines, or dishes..."
                  className="flex-1 py-3 px-4 outline-none text-gray-800 font-medium"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  onFocus={handleSearchFocus}
                  onBlur={handleSearchBlur}
                  autoFocus
                />
                {searchTerm && (
                  <button 
                    className="bg-gray-200 hover:bg-gray-300 text-gray-700 font-medium px-3 py-2 rounded-md text-sm transition-colors mr-2"
                    onClick={clearSearch}
                  >
                    Clear
                  </button>
                )}
              </div>
            </div>
          )}
        </div>
        
        {/* Decorative curved shape at the bottom */}
        {!isSearching && (
          <div className="absolute -bottom-1 left-0 right-0 h-16 bg-gray-50" style={{ 
            borderTopLeftRadius: '50% 100%', 
            borderTopRightRadius: '50% 100%' 
          }}></div>
        )}
      </div>
      
      {/* Search Results section with enhanced styling */}
      {isSearching && (
        <div className="container mx-auto px-4 py-8">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6">
            <div className="flex items-center gap-4 mb-4 md:mb-0 relative">
              <button
                onClick={() => setShowSortDropdown(!showSortDropdown)}
                className="flex items-center gap-2 bg-white px-4 py-2 rounded-lg shadow-sm border border-gray-200 hover:border-emerald-500 transition-colors"
              >
                <ArrowsUpDownIcon className="h-5 w-5 text-gray-500" />
                <span className="text-gray-700">{getSortOptionDisplayText()}</span>
                <ChevronDownIcon className="h-4 w-4 text-gray-500" />
              </button>
              
              {showSortDropdown && (
                <div 
                  ref={sortDropdownRef}
                  className="absolute top-full left-0 mt-2 bg-white rounded-lg shadow-lg border border-gray-200 py-2 z-50 min-w-[200px]"
                >
                  <button
                    onClick={() => handleSortChange('relevance')}
                    className={`w-full px-4 py-2 text-left hover:bg-gray-50 ${
                      sortBy === 'relevance' ? 'text-emerald-600 font-medium' : 'text-gray-700'
                    }`}
                  >
                    Relevance
                  </button>
                  <button
                    onClick={() => handleSortChange('rating')}
                    className={`w-full px-4 py-2 text-left hover:bg-gray-50 ${
                      sortBy === 'rating' ? 'text-emerald-600 font-medium' : 'text-gray-700'
                    }`}
                  >
                    Highest Rating
                  </button>
                  <button
                    onClick={() => handleSortChange('delivery_time')}
                    className={`w-full px-4 py-2 text-left hover:bg-gray-50 ${
                      sortBy === 'delivery_time' ? 'text-emerald-600 font-medium' : 'text-gray-700'
                    }`}
                  >
                    Fastest Delivery
                  </button>
                  <button
                    onClick={() => handleSortChange('price_low')}
                    className={`w-full px-4 py-2 text-left hover:bg-gray-50 ${
                      sortBy === 'price_low' ? 'text-emerald-600 font-medium' : 'text-gray-700'
                    }`}
                  >
                    Price: Low to High
                  </button>
                  <button
                    onClick={() => handleSortChange('price_high')}
                    className={`w-full px-4 py-2 text-left hover:bg-gray-50 ${
                      sortBy === 'price_high' ? 'text-emerald-600 font-medium' : 'text-gray-700'
                    }`}
                  >
                    Price: High to Low
                  </button>
                  <button
                    onClick={() => handleSortChange('popular_items')}
                    className={`w-full px-4 py-2 text-left hover:bg-gray-50 ${
                      sortBy === 'popular_items' ? 'text-emerald-600 font-medium' : 'text-gray-700'
                    }`}
                  >
                    Most Popular Items
                  </button>
                </div>
              )}
            </div>
            
            <div className="flex flex-wrap items-center gap-2">
              {/* Show active sort if not default */}
              {sortBy !== 'relevance' && (
                <div className="flex items-center bg-gray-100 text-gray-700 rounded-full px-3 py-1 text-sm">
                  <span>Sort: {getSortOptionDisplayText()}</span>
                  <button 
                    className="ml-2 text-gray-500 hover:text-gray-700"
                    onClick={() => handleSortChange('relevance')}
                  >
                    ✕
                  </button>
                </div>
              )}
              
              {/* Results count */}
              <div className="text-sm text-gray-500">
                {allMatchedDishes.length > 0 ? (
                  <>
                    {allMatchedDishes.length} {allMatchedDishes.length === 1 ? 'dish' : 'dishes'} found
                    {selectedCuisine !== 'all' && <span> in {selectedCuisine}</span>}
                    {searchTerm && <span> matching "{searchTerm}"</span>}
                  </>
                ) : (
                  <>
                    {filteredRestaurants.length} {filteredRestaurants.length === 1 ? 'restaurant' : 'restaurants'} found
                    {selectedCuisine !== 'all' && <span> in {selectedCuisine}</span>}
                    {searchTerm && <span> matching "{searchTerm}"</span>}
                  </>
                )}
              </div>
            </div>
          </div>

          {/* Cuisine Filters */}
          <div className="mb-8">
            <div className="flex flex-wrap gap-2 overflow-x-auto pb-2">
              {cuisineTypes.map((cuisine, index) => {
                // Assign cuisine-specific icons based on cuisine type
                let cuisineIcon;
                
                switch(cuisine) {
                  case 'Indian':
                    cuisineIcon = '🍛';
                    break;
                  case 'Italian':
                    cuisineIcon = '🍕';
                    break;
                  case 'Chinese':
                    cuisineIcon = '🥢';
                    break;
                  case 'Mexican':
                    cuisineIcon = '🌮';
                    break;
                  case 'Japanese':
                    cuisineIcon = '🍱';
                    break;
                  case 'American':
                    cuisineIcon = '🍔';
                    break;
                  default:
                    cuisineIcon = cuisine === 'all' ? '🍽️' : '🍴';
                }
                
                return (
                  <button
                    key={cuisine}
                    className={`px-4 py-2 rounded-full text-sm font-medium transition-all border flex items-center whitespace-nowrap animate-fadeIn ${
                      selectedCuisine === cuisine 
                        ? 'bg-emerald-500 text-white border-emerald-500 shadow-sm' 
                        : 'bg-white text-gray-700 border-gray-200 hover:border-emerald-300 hover:shadow-sm'
                    }`}
                    style={{ animationDelay: `${index * 0.05}s` }}
                    onClick={() => handleCuisineChange(cuisine)}
                  >
                    <span className="mr-2">{cuisineIcon}</span>
                    {cuisine === 'all' ? 'All Cuisines' : cuisine}
                  </button>
                );
              })}
            </div>
          </div>
          
          {/* Dish-centric Search Results */}
          {allMatchedDishes.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {allMatchedDishes.map((dish, index) => (
                <Link 
                  key={`${dish.id}-${index}`}
                  to={`/restaurant/${dish.restaurantId}?itemId=${dish.id}`}
                  className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow animate-fadeIn"
                  style={{ animationDelay: `${index * 0.05}s` }}
                >
                  <div className="flex">
                    <div className="w-1/3 h-32">
                      <img 
                        src={dish.image} 
                        alt={dish.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="w-2/3 p-4">
                      <h3 className="font-bold text-gray-800">{dish.name}</h3>
                      <p className="text-sm text-gray-500 line-clamp-1 mt-1">{dish.description || dish.category}</p>
                      
                      <div className="mt-2 flex items-center">
                        <span className="font-semibold text-emerald-600">${dish.price.toFixed(2)}</span>
                      </div>
                      
                      <div className="text-xs text-gray-500 mt-2 flex items-center">
                        <span>From</span>
                        <span className="font-medium text-gray-700 mx-1">{dish.restaurantName}</span>
                        <div className="flex items-center ml-1">
                          <StarIcon className="h-3 w-3 text-yellow-500 mr-0.5" />
                          <span>{dish.restaurantRating}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          ) : filteredRestaurants.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
              {filteredRestaurants.map((restaurant, index) => (
                <div key={restaurant.id} className="animate-fadeIn" style={{ animationDelay: `${index * 0.05}s` }}>
                  <RestaurantCard restaurant={restaurant} />
                </div>
              ))}
            </div>
          ) : (
            <div className="text-center py-12">
              <p className="text-gray-500 text-lg">No restaurants or food items found. Try another search.</p>
            </div>
          )}
        </div>
      )}
      
      {/* Featured Restaurants section with enhanced styling */}
      {!isSearching && (
        <div className="container py-20 px-4 relative">
          {/* Decorative elements */}
          <div className="absolute top-0 right-0 w-32 h-32 bg-emerald-50 rounded-full opacity-70"></div>
          
          <div className="max-w-6xl mx-auto">
            <div className="flex flex-col items-center mb-12 text-center">
              <div className="bg-orange-100 p-4 rounded-full mb-6">
                <FireIcon className="h-8 w-8 text-orange-500" />
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Featured Restaurants</h2>
              <div className="h-1 w-20 bg-orange-400 mb-4 rounded-full"></div>
              <p className="text-lg text-gray-600 max-w-xl">
                Discover our handpicked selection of the finest dining establishments in your area
              </p>
            </div>
          
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {featuredRestaurants.map((restaurant, index) => (
                <div key={restaurant.id} className="animate-fadeIn" style={{ animationDelay: `${index * 0.1}s` }}>
                  <RestaurantCard restaurant={restaurant} />
                </div>
              ))}
            </div>

            {/* Browse All Restaurants button */}
            <div className="mt-16 text-center">
              <Link 
                to="/restaurants" 
                className="inline-flex items-center px-8 py-4 rounded-md bg-emerald-500 text-white font-medium hover:bg-emerald-600 transition-colors shadow-md"
                onClick={scrollToTop}
              >
                Browse All Restaurants
                <ArrowRightIcon className="h-5 w-5 ml-2" />
              </Link>
            </div>
          </div>
        </div>
      )}
      
      {/* Browse Cuisines Section with scrolling wave divider */}
      {!isSearching && (
        <>
          <div className="bg-gray-50 w-full h-16" style={{ 
            borderTopLeftRadius: '50% 100%', 
            borderTopRightRadius: '50% 100%',
            marginTop: '-2rem',
            backgroundColor: 'white'
          }}></div>
          <div className="bg-white py-12">
            <BrowseCuisines />
          </div>
        </>
      )}
    </div>
  );
};

export default Home; 
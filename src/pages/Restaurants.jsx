import { useState, useEffect, useRef } from 'react';
import RestaurantCard from '../components/RestaurantCard';
import { Link } from 'react-router-dom';
import { 
  MagnifyingGlassIcon, 
  AdjustmentsHorizontalIcon, 
  ChevronDownIcon,
  StarIcon,
  ClockIcon,
  MapPinIcon,
  CurrencyDollarIcon,
  FunnelIcon,
  XMarkIcon,
  ChevronUpIcon,
  ArrowsUpDownIcon,
  AdjustmentsVerticalIcon
} from '@heroicons/react/24/outline';
import { restaurants, menuItems } from '../utils/data';

const Restaurants = () => {
  const [filteredRestaurants, setFilteredRestaurants] = useState(restaurants);
  const [cuisines, setCuisines] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCuisine, setSelectedCuisine] = useState('');
  const [sortBy, setSortBy] = useState('rating');
  const [sortOrder, setSortOrder] = useState('desc');
  const [showSortDropdown, setShowSortDropdown] = useState(false);
  const [matchingMenuItems, setMatchingMenuItems] = useState([]);
  const [isSearching, setIsSearching] = useState(false);
  const [showMobileFilters, setShowMobileFilters] = useState(false);
  const [showCuisineDropdown, setShowCuisineDropdown] = useState(false);
  const filterSheetRef = useRef(null);
  
  // Sorting options
  const sortOptions = [
    { id: 'rating', name: 'Rating (Highest First)', order: 'desc', icon: <StarIcon className="h-4 w-4" /> },
    { id: 'rating', name: 'Rating (Lowest First)', order: 'asc', icon: <StarIcon className="h-4 w-4" /> },
    { id: 'deliveryTime', name: 'Delivery Time (Fastest First)', order: 'asc', icon: <ClockIcon className="h-4 w-4" /> },
    { id: 'deliveryTime', name: 'Delivery Time (Slowest First)', order: 'desc', icon: <ClockIcon className="h-4 w-4" /> },
    { id: 'distance', name: 'Distance (Nearest First)', order: 'asc', icon: <MapPinIcon className="h-4 w-4" /> },
    { id: 'distance', name: 'Distance (Farthest First)', order: 'desc', icon: <MapPinIcon className="h-4 w-4" /> },
    { id: 'minOrder', name: 'Min Order (Lowest First)', order: 'asc', icon: <CurrencyDollarIcon className="h-4 w-4" /> },
    { id: 'minOrder', name: 'Min Order (Highest First)', order: 'desc', icon: <CurrencyDollarIcon className="h-4 w-4" /> },
  ];
  
  // Get current active sort option
  const activeSortOption = sortOptions.find(option => 
    option.id === sortBy && option.order === sortOrder
  );
  
  useEffect(() => {
    // Extract unique cuisines
    const uniqueCuisines = [...new Set(restaurants.map(restaurant => restaurant.cuisine))];
    setCuisines(uniqueCuisines);
    
    // Close bottom sheet when clicking outside
    const handleClickOutside = (event) => {
      if (filterSheetRef.current && !filterSheetRef.current.contains(event.target) && 
          !event.target.closest('.filter-toggle-btn')) {
        setShowMobileFilters(false);
      }
    };
    
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);
  
  // Prevent body scrolling when filter sheet is open
  useEffect(() => {
    if (showMobileFilters) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
    
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [showMobileFilters]);

  // Function to search menu items
  const searchMenuItems = (query) => {
    if (!query) return [];
    
    const lowerQuery = query.toLowerCase();
    const results = menuItems.filter(item => 
      item.name.toLowerCase().includes(lowerQuery) || 
      item.description.toLowerCase().includes(lowerQuery)
    );
    
    // Add restaurant information to each menu item
    return results.map(item => {
      const restaurant = restaurants.find(r => r.id === item.restaurantId);
      return {
        ...item,
        restaurantName: restaurant ? restaurant.name : 'Unknown Restaurant',
        restaurantCuisine: restaurant ? restaurant.cuisine : 'Unknown',
        restaurantRating: restaurant ? restaurant.rating : 0,
      };
    });
  };
  
  useEffect(() => {
    // Set searching state
    setIsSearching(!!searchQuery);
    
    if (searchQuery) {
      // Search for menu items first
      const menuResults = searchMenuItems(searchQuery);
      setMatchingMenuItems(menuResults);
      
      // If we have cuisine filter, apply it to menu items
      if (selectedCuisine) {
        const filteredMenuItems = menuResults.filter(item => 
          item.restaurantCuisine === selectedCuisine
        );
        setMatchingMenuItems(filteredMenuItems);
      }
      
      // Filter restaurants for normal view when not searching
      let restaurantResults = [...restaurants];
      
      // Apply search filter on restaurants
      restaurantResults = restaurantResults.filter(restaurant => 
        restaurant.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        restaurant.cuisine.toLowerCase().includes(searchQuery.toLowerCase())
      );
      
      // Apply cuisine filter if selected
      if (selectedCuisine) {
        restaurantResults = restaurantResults.filter(restaurant => 
          restaurant.cuisine === selectedCuisine
        );
      }
      
      // Sort restaurants
      restaurantResults.sort((a, b) => {
        const valueA = a[sortBy];
        const valueB = b[sortBy];
        
        if (sortOrder === 'asc') {
          return valueA - valueB;
        } else {
          return valueB - valueA;
        }
      });
      
      setFilteredRestaurants(restaurantResults);
    } else {
      // No search query, just filter and sort restaurants
      let results = [...restaurants];
      
      // Apply cuisine filter if selected
      if (selectedCuisine) {
        results = results.filter(restaurant => restaurant.cuisine === selectedCuisine);
      }
      
      // Sort results
      results.sort((a, b) => {
        const valueA = a[sortBy];
        const valueB = b[sortBy];
        
        if (sortOrder === 'asc') {
          return valueA - valueB;
        } else {
          return valueB - valueA;
        }
      });
      
      setFilteredRestaurants(results);
      setMatchingMenuItems([]);
    }
  }, [searchQuery, selectedCuisine, sortBy, sortOrder]);
  
  const handleSearch = (e) => {
    setSearchQuery(e.target.value);
  };
  
  const handleCuisineFilter = (cuisine) => {
    setSelectedCuisine(cuisine === selectedCuisine ? '' : cuisine);
    setShowCuisineDropdown(false);
  };
  
  const handleSort = (option) => {
    setSortBy(option.id);
    setSortOrder(option.order);
    setShowSortDropdown(false);
  };

  // Function to sort menu items based on current sort settings
  const getSortedMenuItems = () => {
    if (!matchingMenuItems.length) return [];
    
    // Create a copy to sort
    const sorted = [...matchingMenuItems];
    
    // Sort by price as the default for menu items
    if (sortBy === 'minOrder') {
      return sorted.sort((a, b) => 
        sortOrder === 'asc' ? a.price - b.price : b.price - a.price
      );
    }
    // Sort by restaurant rating
    else if (sortBy === 'rating') {
      return sorted.sort((a, b) => 
        sortOrder === 'asc' ? a.restaurantRating - b.restaurantRating : b.restaurantRating - a.restaurantRating
      );
    }
    // For other sort options, fall back to restaurant properties
    else {
      const restaurantMap = {};
      restaurants.forEach(r => {
        restaurantMap[r.id] = r;
      });
      
      return sorted.sort((a, b) => {
        const restA = restaurantMap[a.restaurantId];
        const restB = restaurantMap[b.restaurantId];
        
        if (!restA || !restB) return 0;
        
        const valueA = restA[sortBy];
        const valueB = restB[sortBy];
        
        return sortOrder === 'asc' ? valueA - valueB : valueB - valueA;
      });
    }
  };
  
  const sortedMenuItems = getSortedMenuItems();

  // Function to get cuisine icon
  const getCuisineIcon = (cuisine) => {
    let cuisineIcon;
    let bgColor = selectedCuisine === cuisine ? 'bg-emerald-500' : 'bg-white';
    
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
        cuisineIcon = '🍽️';
    }
    
    return (
      <span className={`mr-2 ${bgColor}`}>{cuisineIcon}</span>
    );
  };
  
  return (
    <div className="container mx-auto px-4 py-8 relative">
      <h1 className="text-3xl font-bold mb-8 text-center">All Restaurants</h1>
      
      {/* Search Bar */}
      <div className="relative max-w-xl mx-auto mb-8">
        <input
          type="text"
          placeholder="Search for restaurants, cuisines, or food items..."
          className="w-full py-3 pl-12 pr-4 rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent shadow-sm"
          value={searchQuery}
          onChange={handleSearch}
        />
        <MagnifyingGlassIcon className="absolute left-4 top-3.5 h-5 w-5 text-gray-400" />
      </div>
      
      {/* Active Filters Display */}
      {(selectedCuisine || (sortBy !== 'rating' || sortOrder !== 'desc')) && (
        <div className="flex flex-wrap items-center gap-2 mb-6 max-w-4xl mx-auto">
          <span className="text-sm text-gray-500">Applied:</span>
          
          {/* Cuisine Filter Tag */}
          {selectedCuisine && (
            <span className="bg-emerald-50 text-emerald-700 border border-emerald-200 px-3 py-1 rounded-full text-sm font-medium flex items-center shadow-sm">
              <span className="mr-1">{getCuisineIcon(selectedCuisine)}</span> 
              {selectedCuisine}
              <button 
                onClick={() => setSelectedCuisine('')} 
                className="ml-1 text-emerald-700 hover:text-emerald-900"
              >
                <XMarkIcon className="h-3.5 w-3.5" />
              </button>
            </span>
          )}
          
          {/* Sort Filter Tag */}
          {(sortBy !== 'rating' || sortOrder !== 'desc') && activeSortOption && (
            <span className="bg-gray-50 text-gray-700 border border-gray-200 px-3 py-1 rounded-full text-sm font-medium flex items-center shadow-sm">
              <span className="mr-1">{activeSortOption.icon}</span>
              {activeSortOption.name.split(' (')[0]}
              <button 
                onClick={() => handleSort({ id: 'rating', order: 'desc' })} 
                className="ml-1 text-gray-500 hover:text-gray-700"
              >
                <XMarkIcon className="h-3.5 w-3.5" />
              </button>
            </span>
          )}
          
          {/* Clear All Button */}
          {(selectedCuisine || (sortBy !== 'rating' || sortOrder !== 'desc')) && (
            <button 
              onClick={() => {
                setSelectedCuisine('');
                setSortBy('rating');
                setSortOrder('desc');
              }}
              className="text-xs text-gray-500 hover:text-gray-800 underline"
            >
              Clear all
            </button>
          )}
        </div>
      )}
      
      {/* Desktop Filters Bar */}
      <div className="hidden md:block mb-8 bg-white rounded-xl shadow-md p-4">
        <div className="flex flex-wrap justify-between items-center">
          {/* Cuisine Filters */}
          <div className="w-full md:w-auto mb-4 md:mb-0">
            <h3 className="text-sm font-medium text-gray-700 mb-2">Cuisine:</h3>
            <div className="flex flex-wrap gap-2">
              <button
                onClick={() => setSelectedCuisine('')}
                className={`px-3 py-1.5 rounded-full text-xs font-medium transition-all border ${
                  selectedCuisine === ''
                    ? 'bg-emerald-500 text-white border-emerald-500 shadow-sm'
                    : 'bg-white text-gray-700 border-gray-200 hover:border-emerald-300'
                }`}
              >
                All
              </button>
              {cuisines.map(cuisine => (
                <button
                  key={cuisine}
                  onClick={() => handleCuisineFilter(cuisine)}
                  className={`px-3 py-1.5 rounded-full text-xs font-medium transition-all border flex items-center ${
                    selectedCuisine === cuisine
                      ? 'bg-emerald-500 text-white border-emerald-500 shadow-sm'
                      : 'bg-white text-gray-700 border-gray-200 hover:border-emerald-300'
                  }`}
                >
                  <span className="mr-1 text-xs">{getCuisineIcon(cuisine)}</span>
                  {cuisine}
                </button>
              ))}
            </div>
          </div>
          
          {/* Sort Options */}
          <div className="relative">
            <button
              className="flex items-center px-4 py-2 bg-gray-50 hover:bg-gray-100 border border-gray-200 rounded-lg text-sm font-medium"
              onClick={() => setShowSortDropdown(!showSortDropdown)}
            >
              <ArrowsUpDownIcon className="h-4 w-4 mr-2" />
              {activeSortOption ? activeSortOption.name.split(' (')[0] : 'Sort By'}
              <ChevronDownIcon className="ml-2 h-4 w-4" />
            </button>
            
            {showSortDropdown && (
              <div className="absolute right-0 mt-2 w-56 bg-white rounded-lg shadow-lg z-20 border border-gray-200">
                <ul className="py-1">
                  {sortOptions.map((option, index) => (
                    <li key={index}>
                      <button
                        className={`w-full text-left px-4 py-2 text-sm hover:bg-gray-50 flex items-center ${
                          sortBy === option.id && sortOrder === option.order ? 'text-emerald-600 font-medium' : 'text-gray-700'
                        }`}
                        onClick={() => handleSort(option)}
                      >
                        <span className="mr-2">{option.icon}</span>
                        {option.name}
                      </button>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        </div>
      </div>
      
      {/* Mobile Floating Filter Button */}
      <button 
        onClick={() => setShowMobileFilters(!showMobileFilters)}
        className="md:hidden filter-toggle-btn fixed bottom-6 right-6 z-30 bg-emerald-500 text-white p-3 rounded-full shadow-lg flex items-center justify-center hover:bg-emerald-600 transition-all"
        aria-label="Filter & Sort"
      >
        <AdjustmentsVerticalIcon className="h-6 w-6" />
        {(selectedCuisine || (sortBy !== 'rating' || sortOrder !== 'desc')) && (
          <span className="absolute -top-1 -right-1 bg-orange-500 text-white text-xs h-5 w-5 flex items-center justify-center rounded-full">
            {(selectedCuisine ? 1 : 0) + ((sortBy !== 'rating' || sortOrder !== 'desc') ? 1 : 0)}
          </span>
        )}
      </button>
      
      {/* Mobile Bottom Sheet */}
      <div 
        className={`md:hidden fixed inset-0 bg-black bg-opacity-50 z-40 transition-opacity duration-300 ${
          showMobileFilters ? 'opacity-100' : 'opacity-0 pointer-events-none'
        }`}
      >
        <div 
          ref={filterSheetRef}
          className={`absolute bottom-0 left-0 right-0 bg-white rounded-t-xl shadow-lg transform transition-transform duration-300 ease-in-out ${
            showMobileFilters ? 'translate-y-0' : 'translate-y-full'
          }`}
          style={{ maxHeight: '90vh', overflowY: 'auto' }}
        >
          {/* Drag Handle */}
          <div className="w-full flex justify-center pt-2 pb-1">
            <div className="w-12 h-1.5 bg-gray-300 rounded-full"></div>
          </div>
          
          {/* Header */}
          <div className="px-4 py-3 border-b flex items-center justify-between">
            <h3 className="font-semibold text-gray-800 flex items-center">
              <AdjustmentsHorizontalIcon className="h-5 w-5 mr-2" />
              Filters & Sorting
            </h3>
            <button 
              onClick={() => setShowMobileFilters(false)}
              className="text-gray-400 hover:text-gray-600"
            >
              <XMarkIcon className="h-6 w-6" />
            </button>
          </div>
          
          {/* Cuisine Filter Section */}
          <div className="px-4 py-4 border-b">
            <h4 className="font-medium text-gray-700 mb-3 flex items-center">
              <span className="mr-2">🍽️</span>
              Cuisine
            </h4>
            
            <div className="flex flex-nowrap overflow-x-auto pb-2 -mx-1 hide-scrollbar gap-2">
              <button
                onClick={() => handleCuisineFilter('')}
                className={`flex-shrink-0 px-3 py-1.5 rounded-full text-xs font-medium transition-all ${
                  selectedCuisine === ''
                    ? 'bg-emerald-500 text-white shadow-sm'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                All Cuisines
              </button>
              {cuisines.map(cuisine => (
                <button
                  key={cuisine}
                  onClick={() => handleCuisineFilter(cuisine)}
                  className={`flex-shrink-0 px-3 py-1.5 rounded-full text-xs font-medium transition-all flex items-center ${
                    selectedCuisine === cuisine
                      ? 'bg-emerald-500 text-white shadow-sm'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                >
                  <span className="mr-1">{getCuisineIcon(cuisine)}</span>
                  {cuisine}
                </button>
              ))}
            </div>
          </div>
          
          {/* Sort Options Section */}
          <div className="px-4 py-4">
            <h4 className="font-medium text-gray-700 mb-3 flex items-center">
              <ArrowsUpDownIcon className="h-4 w-4 mr-2" />
              Sort By
            </h4>
            
            <div className="space-y-2">
              {sortOptions.map((option, index) => (
                <button
                  key={index}
                  className={`w-full text-left px-4 py-3 text-sm rounded-lg flex items-center ${
                    sortBy === option.id && sortOrder === option.order 
                      ? 'bg-emerald-50 text-emerald-700 border border-emerald-200' 
                      : 'bg-gray-50 text-gray-600 border border-gray-100 hover:bg-gray-100'
                  }`}
                  onClick={() => {
                    handleSort(option);
                    setShowMobileFilters(false);
                  }}
                >
                  <span className="mr-2">{option.icon}</span>
                  {option.name}
                  {sortBy === option.id && sortOrder === option.order && (
                    <span className="ml-auto">
                      <span className="bg-emerald-100 text-emerald-800 text-xs px-2 py-1 rounded-full">Active</span>
                    </span>
                  )}
                </button>
              ))}
            </div>
          </div>
          
          {/* Apply & Reset Buttons */}
          <div className="px-4 py-4 border-t sticky bottom-0 bg-white shadow-md">
            <div className="flex gap-3">
              <button 
                onClick={() => {
                  setSelectedCuisine('');
                  setSortBy('rating');
                  setSortOrder('desc');
                }}
                className="flex-1 py-2.5 border border-gray-300 text-gray-600 rounded-lg text-sm font-medium"
              >
                Reset All
              </button>
              <button 
                onClick={() => setShowMobileFilters(false)}
                className="flex-1 py-2.5 bg-emerald-500 text-white rounded-lg text-sm font-medium"
              >
                Apply Filters
              </button>
            </div>
          </div>
        </div>
      </div>
      
      {/* Display search results - Food items take precedence when searching */}
      {isSearching && sortedMenuItems.length > 0 ? (
        <div>
          <h2 className="text-xl font-semibold mb-4">
            Food Items matching "{searchQuery}" 
            {selectedCuisine && <span> in {selectedCuisine} Cuisine</span>}
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {sortedMenuItems.map(item => (
              <Link 
                key={item.id} 
                to={`/restaurant/${item.restaurantId}?itemId=${item.id}`}
                className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow"
              >
                <div className="h-48 overflow-hidden">
                  <img 
                    src={item.image} 
                    alt={item.name} 
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-4">
                  <h3 className="font-bold text-lg text-gray-800">{item.name}</h3>
                  <p className="text-sm text-gray-600 mt-1 line-clamp-2">{item.description}</p>
                  <div className="mt-4 flex justify-between items-center">
                    <span className="font-bold text-emerald-600">₹{item.price}</span>
                    <span className="text-sm text-gray-500">From: {item.restaurantName}</span>
                  </div>
                  <div className="mt-2 text-xs text-gray-500">
                    Category: {item.category.charAt(0).toUpperCase() + item.category.slice(1)}
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      ) : (
        <div>
          {isSearching && (
            <h2 className="text-xl font-semibold mb-4">
              Restaurants {searchQuery ? `matching "${searchQuery}"` : ''}
              {selectedCuisine && <span> in {selectedCuisine} Cuisine</span>}
            </h2>
          )}
          
          {/* Restaurant Grid */}
          {filteredRestaurants.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {filteredRestaurants.map(restaurant => (
                <RestaurantCard key={restaurant.id} restaurant={restaurant} />
              ))}
            </div>
          ) : (
            <div className="text-center py-8">
              <p className="text-gray-500 text-lg">No restaurants or food items found. Try another search.</p>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default Restaurants; 
import { useState, useEffect, useRef } from 'react';
import { useParams, useLocation } from 'react-router-dom';
import { 
  StarIcon, 
  ClockIcon, 
  CurrencyDollarIcon, 
  MapPinIcon 
} from '@heroicons/react/24/outline';
import MenuItem from '../components/MenuItem';
import { restaurants, menuItems } from '../utils/data';

const RestaurantDetails = () => {
  const { id } = useParams();
  const location = useLocation();
  const [restaurant, setRestaurant] = useState(null);
  const [menu, setMenu] = useState([]);
  const [activeCategory, setActiveCategory] = useState('all');
  const [highlightedItemId, setHighlightedItemId] = useState(null);
  const itemRefs = useRef({});
  
  // Parse query params to get itemId if present
  useEffect(() => {
    const queryParams = new URLSearchParams(location.search);
    const itemId = queryParams.get('itemId');
    
    if (itemId) {
      setHighlightedItemId(parseInt(itemId));
    } else {
      setHighlightedItemId(null);
    }
  }, [location.search]);

  useEffect(() => {
    // Find restaurant by id
    const foundRestaurant = restaurants.find(r => r.id === parseInt(id) || r.id === id);
    setRestaurant(foundRestaurant);
    
    // Get menu items for this restaurant
    const restaurantMenu = menuItems.filter(item => item.restaurantId === parseInt(id) || item.restaurantId === id);
    setMenu(restaurantMenu);
    
    // If we have a highlighted item, find its category and set it as active
    if (highlightedItemId) {
      const highlightedItem = restaurantMenu.find(item => item.id === highlightedItemId);
      if (highlightedItem) {
        setActiveCategory(highlightedItem.category);
      } else {
        // Set first category as active if exists
        if (restaurantMenu.length > 0) {
          const categories = [...new Set(restaurantMenu.map(item => item.category))];
          setActiveCategory(categories[0] || 'all');
        }
      }
    } else {
      // Set first category as active if exists
      if (restaurantMenu.length > 0) {
        const categories = [...new Set(restaurantMenu.map(item => item.category))];
        setActiveCategory(categories[0] || 'all');
      }
    }
  }, [id, highlightedItemId]);
  
  // Scroll to highlighted item if it exists
  useEffect(() => {
    if (highlightedItemId && itemRefs.current[highlightedItemId]) {
      setTimeout(() => {
        itemRefs.current[highlightedItemId].scrollIntoView({ 
          behavior: 'smooth',
          block: 'center'
        });
      }, 300); // Add slight delay to ensure component is rendered
    }
  }, [highlightedItemId, activeCategory]);

  if (!restaurant) {
    return (
      <div className="container py-20 text-center">
        <p className="text-xl">Loading restaurant details...</p>
      </div>
    );
  }

  // Get all unique categories
  const categories = ['all', ...new Set(menu.map(item => item.category))];
  
  // Filter menu items by active category
  const filteredMenu = activeCategory === 'all' 
    ? menu 
    : menu.filter(item => item.category === activeCategory);

  return (
    <div>
      {/* Restaurant header */}
      <div className="bg-gray-800 text-white">
        <div className="container py-8">
          <div className="flex flex-col md:flex-row md:items-center">
            <div className="flex-1">
              <h1 className="text-3xl font-bold">{restaurant.name}</h1>
              <p className="text-gray-300 mt-2">{restaurant.cuisine}</p>
              
              <div className="mt-4 flex flex-wrap gap-4">
                <div className="flex items-center">
                  <StarIcon className="h-5 w-5 text-yellow-400 mr-1" />
                  <span>{restaurant.rating}</span>
                </div>
                <div className="flex items-center">
                  <ClockIcon className="h-5 w-5 mr-1" />
                  <span>{restaurant.deliveryTime} min</span>
                </div>
                <div className="flex items-center">
                  <CurrencyDollarIcon className="h-5 w-5 mr-1" />
                  <span>Min order: ₹{restaurant.minOrder || '100'}</span>
                </div>
                <div className="flex items-center">
                  <MapPinIcon className="h-5 w-5 mr-1" />
                  <span>{restaurant.distance} km away</span>
                </div>
              </div>
            </div>
            
            {restaurant.image && (
              <div className="mt-4 md:mt-0 md:ml-6">
                <img 
                  src={restaurant.image} 
                  alt={restaurant.name}
                  className="h-32 w-32 object-cover rounded-lg" 
                />
              </div>
            )}
          </div>
        </div>
      </div>
      
      {/* Menu section */}
      <div className="container py-8">
        {/* Category tabs */}
        <div className="mb-6 overflow-x-auto">
          <div className="flex space-x-2 min-w-max">
            {categories.map(category => (
              <button
                key={category}
                className={`px-4 py-2 rounded-full font-medium transition-colors ${
                  activeCategory === category 
                    ? 'bg-orange-500 text-white' 
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
                onClick={() => setActiveCategory(category)}
              >
                {category.charAt(0).toUpperCase() + category.slice(1)}
              </button>
            ))}
          </div>
        </div>
        
        {/* Menu items */}
        <div className="bg-white rounded-lg shadow-sm p-6">
          {filteredMenu.length > 0 ? (
            filteredMenu.map(item => (
              <div 
                key={item.id}
                ref={el => itemRefs.current[item.id] = el}
                className={`${highlightedItemId === item.id ? 'bg-amber-50 -mx-4 px-4 py-2 rounded-md ring-2 ring-amber-400' : ''}`}
              >
                <MenuItem 
                  item={item} 
                  restaurantId={restaurant.id} 
                />
              </div>
            ))
          ) : (
            <p className="text-center py-8 text-gray-500">
              No menu items available in this category.
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default RestaurantDetails; 
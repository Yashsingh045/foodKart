import { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { restaurants, menuItems } from '../utils/data';
import { ArrowLeftIcon } from '@heroicons/react/24/outline';

const CuisineDetails = () => {
  const { cuisine } = useParams();
  const [cuisineRestaurants, setCuisineRestaurants] = useState([]);
  const [cuisineMenuItems, setCuisineMenuItems] = useState([]);
  
  // Find restaurants and menu items for this cuisine
  useEffect(() => {
    if (cuisine) {
      // Find restaurants with this cuisine
      const filteredRestaurants = restaurants.filter(
        restaurant => restaurant.cuisine === cuisine
      );
      setCuisineRestaurants(filteredRestaurants);
      
      // Get restaurant IDs to filter menu items
      const restaurantIds = filteredRestaurants.map(restaurant => restaurant.id);
      
      // Find menu items for these restaurants
      const filteredMenuItems = menuItems.filter(
        item => restaurantIds.includes(item.restaurantId)
      );
      setCuisineMenuItems(filteredMenuItems);
    }
  }, [cuisine]);
  
  // Group menu items by restaurant name
  const menuByRestaurant = cuisineMenuItems.reduce((groups, item) => {
    const restaurant = restaurants.find(r => r.id === item.restaurantId);
    if (!restaurant) return groups;
    
    if (!groups[restaurant.name]) {
      groups[restaurant.name] = {
        restaurant,
        items: []
      };
    }
    
    groups[restaurant.name].items.push(item);
    return groups;
  }, {});
  
  if (!cuisine) {
    return <div className="container py-16 text-center">Loading...</div>;
  }

  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Hero section */}
      <div className="relative h-[300px] md:h-[400px]">
        {/* Find a suitable image based on cuisine type */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat" 
          style={{ 
            backgroundImage: `url('${cuisineRestaurants[0]?.image || 'https://images.unsplash.com/photo-1555396273-367ea4eb4db5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80'}')`, 
          }}
        >
          <div className="absolute inset-0 bg-black/60"></div>
        </div>
        
        {/* Content */}
        <div className="container relative z-10 px-4 flex flex-col justify-center h-full text-white">
          <Link to="/" className="inline-flex items-center text-white mb-4 hover:text-emerald-300 transition-colors">
            <ArrowLeftIcon className="h-5 w-5 mr-2" />
            Back to Home
          </Link>
          <h1 className="text-4xl md:text-5xl font-bold">
            {cuisine} <span className="text-emerald-400">Cuisine</span>
          </h1>
          <p className="text-xl mt-4 text-gray-200 max-w-2xl">
            Explore delicious {cuisine} dishes from our featured restaurants.
          </p>
        </div>
      </div>
      
      <div className="container py-16 px-4">
        <h2 className="text-3xl font-bold text-gray-800 mb-8">
          {cuisine} Restaurants ({cuisineRestaurants.length})
        </h2>
        
        {/* Restaurants grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {cuisineRestaurants.map(restaurant => (
            <Link 
              to={`/restaurant/${restaurant.id}`}
              key={restaurant.id}
              className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all hover:-translate-y-1"
            >
              <div className="h-48 overflow-hidden relative">
                <img 
                  src={restaurant.image}
                  alt={restaurant.name}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
                <div className="absolute bottom-4 left-4 right-4">
                  <div className="flex items-center justify-between">
                    <h3 className="text-xl font-bold text-white">{restaurant.name}</h3>
                    <div className="bg-emerald-500 text-white rounded-full px-2 py-1 text-sm font-medium">
                      {restaurant.rating} ★
                    </div>
                  </div>
                </div>
              </div>
              <div className="p-4">
                <div className="flex justify-between items-center mb-2">
                  <span className="text-gray-500">{restaurant.cuisine}</span>
                  <span className="text-gray-500">{restaurant.deliveryTime} mins</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-500">{restaurant.distance} km away</span>
                  <span className="text-gray-500">Min ₹{restaurant.minOrder}</span>
                </div>
              </div>
            </Link>
          ))}
        </div>
        
        <h2 className="text-3xl font-bold text-gray-800 mb-8">
          Popular {cuisine} Dishes
        </h2>
        
        {/* Menu items by restaurant */}
        {Object.entries(menuByRestaurant).map(([restaurantName, data]) => (
          <div key={restaurantName} className="mb-12">
            <h3 className="text-xl font-semibold text-gray-800 mb-4 flex items-center">
              <span>From {restaurantName}</span>
              <Link 
                to={`/restaurant/${data.restaurant.id}`}
                className="ml-4 text-sm bg-emerald-50 text-emerald-600 px-3 py-1 rounded-full hover:bg-emerald-100 transition-colors"
              >
                View Restaurant
              </Link>
            </h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {data.items.map(item => (
                <div 
                  key={item.id}
                  className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-shadow flex flex-col"
                >
                  <div className="h-48 overflow-hidden">
                    <img 
                      src={item.image}
                      alt={item.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="p-4 flex-grow flex flex-col">
                    <div className="flex justify-between items-start mb-2">
                      <h4 className="font-bold text-gray-800">{item.name}</h4>
                      <span className="font-medium text-emerald-600">₹{item.price}</span>
                    </div>
                    <p className="text-gray-600 text-sm mb-4">{item.description}</p>
                    <Link 
                      to={`/restaurant/${item.restaurantId}`}
                      className="mt-auto bg-emerald-500 hover:bg-emerald-600 text-center py-2 rounded-md text-white font-medium transition-colors"
                    >
                      Order Now
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
        
        {cuisineMenuItems.length === 0 && (
          <div className="text-center py-16 bg-white rounded-lg shadow-sm">
            <img 
              src="https://illustrations.popsy.co/amber/taking-notes.svg" 
              alt="No items found" 
              className="w-64 h-64 mx-auto"
            />
            <p className="text-xl text-gray-600 mt-6">
              No menu items found for {cuisine} cuisine.
            </p>
            <Link 
              to="/"
              className="inline-block mt-4 text-emerald-600 font-medium hover:text-emerald-700"
            >
              Back to Home
            </Link>
          </div>
        )}
      </div>
    </div>
  );
};

export default CuisineDetails; 
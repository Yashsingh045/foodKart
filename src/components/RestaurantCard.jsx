import { Link } from 'react-router-dom';
import { StarIcon } from '@heroicons/react/24/solid';
import { ClockIcon, MapPinIcon } from '@heroicons/react/24/outline';

const RestaurantCard = ({ restaurant }) => {
  const { id, name, image, cuisine, rating, deliveryTime, distance } = restaurant;
  
  // Function to scroll to top of page
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };
  
  return (
    <Link 
      to={`/restaurant/${id}`} 
      className="group block h-full"
      onClick={scrollToTop}
    >
      <div className="h-full bg-white rounded-xl shadow-md overflow-hidden transition-all duration-300 hover:shadow-xl hover:translate-y-[-5px]">
        <div className="relative h-48 sm:h-56 overflow-hidden">
          <img 
            src={image} 
            alt={name} 
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          <div className="absolute top-3 right-3 bg-white px-2 py-1 rounded-lg text-sm font-semibold flex items-center shadow-lg">
            <StarIcon className="h-4 w-4 text-yellow-500 mr-1" />
            <span>{rating}</span>
          </div>
          <div className="absolute bottom-3 left-3 bg-emerald-500 px-3 py-1 rounded-full text-xs font-medium text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 sm:opacity-100">
            {cuisine}
          </div>
        </div>
        
        <div className="p-3 sm:p-5">
          <h3 className="text-base sm:text-lg font-bold text-gray-800 mb-1 sm:mb-2 group-hover:text-emerald-600 transition-colors line-clamp-1">{name}</h3>
          <p className="text-gray-500 text-xs sm:text-sm mb-2 sm:mb-4">{cuisine} Cuisine</p>
          
          <div className="flex justify-between text-xs sm:text-sm text-gray-600">
            <div className="flex items-center">
              <ClockIcon className="h-3 w-3 sm:h-4 sm:w-4 text-emerald-500 mr-1" />
              <span>{deliveryTime} min</span>
            </div>
            <div className="flex items-center">
              <MapPinIcon className="h-3 w-3 sm:h-4 sm:w-4 text-emerald-500 mr-1" />
              <span>{distance} km</span>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default RestaurantCard; 
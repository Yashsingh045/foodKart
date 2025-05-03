import { PlusIcon, MinusIcon, TrashIcon } from '@heroicons/react/24/outline';
import { useCart } from '../context/CartContext';
import { useState } from 'react';

const CartItem = ({ item }) => {
  const { id, name, price, image, quantity } = item;
  const { updateQuantity, removeFromCart } = useCart();
  const [imageLoaded, setImageLoaded] = useState(false);

  const handleIncrease = () => {
    updateQuantity(id, quantity + 1);
  };

  const handleDecrease = () => {
    if (quantity > 1) {
      updateQuantity(id, quantity - 1);
    } else {
      removeFromCart(id);
    }
  };

  const handleRemove = () => {
    removeFromCart(id);
  };

  const handleImageLoad = () => {
    setImageLoaded(true);
  };

  return (
    <div className="flex flex-col sm:flex-row sm:items-center py-3 sm:py-4 border-b border-gray-200">
      <div className="flex items-start mb-2 sm:mb-0">
        {image && (
          <div className="h-16 w-16 rounded-md overflow-hidden mr-4 flex-shrink-0 bg-gray-100">
            <div className={`w-full h-full flex items-center justify-center ${imageLoaded ? 'hidden' : ''}`}>
              <div className="w-6 h-6 border-2 border-emerald-500 border-t-transparent rounded-full animate-spin"></div>
            </div>
            <img 
              src={image} 
              alt={name} 
              className={`h-full w-full object-cover ${imageLoaded ? '' : 'opacity-0'}`} 
              onLoad={handleImageLoad}
              loading="lazy"
            />
          </div>
        )}
        
        <div className="flex-1">
          <h3 className="font-medium text-sm sm:text-base line-clamp-1">{name}</h3>
          <p className="text-orange-500 font-medium mt-1 text-sm">₹{price.toFixed(2)}</p>
          
          {/* Mobile layout - controls below item details */}
          <div className="flex items-center mt-2 sm:hidden">
            <div className="flex items-center border border-gray-300 rounded-full">
              <button 
                onClick={handleDecrease}
                className="h-7 w-7 flex items-center justify-center rounded-full hover:bg-gray-100"
                aria-label="Decrease quantity"
              >
                <MinusIcon className="h-3 w-3" />
              </button>
              <span className="mx-2 font-medium text-xs">{quantity}</span>
              <button 
                onClick={handleIncrease}
                className="h-7 w-7 flex items-center justify-center rounded-full hover:bg-gray-100"
                aria-label="Increase quantity"
              >
                <PlusIcon className="h-3 w-3" />
              </button>
            </div>
            
            <button 
              onClick={handleRemove}
              className="ml-3 text-gray-400 hover:text-red-500 p-1"
              aria-label="Remove from cart"
            >
              <TrashIcon className="h-4 w-4" />
            </button>
          </div>
        </div>
      </div>
      
      {/* Desktop layout - controls to the right */}
      <div className="hidden sm:flex items-center ml-auto">
        <div className="flex items-center border border-gray-300 rounded-full mr-4">
          <button 
            onClick={handleDecrease}
            className="h-8 w-8 flex items-center justify-center rounded-full hover:bg-gray-100"
            aria-label="Decrease quantity"
          >
            <MinusIcon className="h-4 w-4" />
          </button>
          <span className="mx-2 font-medium text-sm">{quantity}</span>
          <button 
            onClick={handleIncrease}
            className="h-8 w-8 flex items-center justify-center rounded-full hover:bg-gray-100"
            aria-label="Increase quantity"
          >
            <PlusIcon className="h-4 w-4" />
          </button>
        </div>
        
        <div className="text-right w-24">
          <p className="font-medium">₹{(price * quantity).toFixed(2)}</p>
        </div>
        
        <button 
          onClick={handleRemove}
          className="ml-4 text-gray-400 hover:text-red-500"
          aria-label="Remove from cart"
        >
          <TrashIcon className="h-5 w-5" />
        </button>
      </div>
      
      {/* Mobile layout - total price */}
      <div className="flex justify-between items-center mt-1 sm:hidden">
        <span className="text-gray-500 text-xs">Total:</span>
        <p className="font-medium">₹{(price * quantity).toFixed(2)}</p>
      </div>
    </div>
  );
};

export default CartItem;
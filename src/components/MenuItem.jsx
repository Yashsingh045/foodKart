import { useState, useEffect } from 'react';
import { PlusIcon, MinusIcon, ShoppingCartIcon } from '@heroicons/react/24/outline';
import { useCart } from '../context/CartContext';

const MenuItem = ({ item, restaurantId }) => {
  const { id, name, description, price, image, category } = item;
  const [quantity, setQuantity] = useState(0);
  const { addToCart, updateQuantity, removeFromCart, cart } = useCart();
  const [imageLoaded, setImageLoaded] = useState(false);
  
  // Check if item is already in cart to show proper quantity
  const cartItem = cart.find(cartItem => cartItem.id === id);
  
  // Initialize quantity from cart if exists
  useEffect(() => {
    if (cartItem) {
      setQuantity(cartItem.quantity);
    }
  }, [cartItem]);

  const handleAddToCart = () => {
    const newItem = {
      id,
      name,
      price,
      image,
      restaurantId,
      quantity: 1
    };
    
    addToCart(newItem);
    setQuantity(prevQuantity => prevQuantity + 1);
  };

  const handleRemoveFromCart = () => {
    if (quantity === 1) {
      removeFromCart(id);
    } else {
      updateQuantity(id, quantity - 1);
    }
    
    setQuantity(prevQuantity => prevQuantity - 1);
  };

  const handleImageLoad = () => {
    setImageLoaded(true);
  };

  return (
    <div className="border-b border-gray-200 py-3 sm:py-4 flex flex-col sm:flex-row">
      {/* Mobile layout (image at top) */}
      <div className="sm:hidden w-full flex mb-2">
        {image && (
          <div className="w-20 h-20 rounded-lg overflow-hidden flex-shrink-0 mr-3">
            <div className={`w-full h-full bg-gray-100 ${imageLoaded ? 'hidden' : 'flex items-center justify-center'}`}>
              <div className="w-8 h-8 border-2 border-emerald-500 border-t-transparent rounded-full animate-spin"></div>
            </div>
            <img 
              src={image} 
              alt={name} 
              className={`w-full h-full object-cover ${imageLoaded ? '' : 'opacity-0'}`}
              onLoad={handleImageLoad}
              loading="lazy"
            />
          </div>
        )}
        <div className="flex-1">
          <h3 className="font-medium text-sm sm:text-base line-clamp-1">{name}</h3>
          <p className="text-gray-500 text-xs sm:text-sm mt-1 line-clamp-2">{description}</p>
        </div>
      </div>

      {/* Desktop and tablet layout */}
      <div className="flex-1 hidden sm:block">
        <h3 className="font-medium text-base">{name}</h3>
        <p className="text-gray-500 text-sm mt-1 line-clamp-2">{description}</p>
        <p className="text-orange-500 font-medium mt-2">₹{price.toFixed(2)}</p>
      </div>
      
      <div className="w-full sm:w-auto flex justify-between items-center sm:ml-4 sm:flex-col sm:items-end">
        {/* Mobile price display */}
        <p className="text-orange-500 font-medium sm:hidden">₹{price.toFixed(2)}</p>
        
        {/* Desktop image */}
        {image && (
          <div className="hidden sm:block w-24 h-24 rounded-lg overflow-hidden mb-2">
            <div className={`w-full h-full bg-gray-100 ${imageLoaded ? 'hidden' : 'flex items-center justify-center'}`}>
              <div className="w-8 h-8 border-2 border-emerald-500 border-t-transparent rounded-full animate-spin"></div>
            </div>
            <img 
              src={image} 
              alt={name} 
              className={`w-full h-full object-cover ${imageLoaded ? '' : 'opacity-0'}`}
              onLoad={handleImageLoad}
              loading="lazy"
            />
          </div>
        )}
        
        <div className="flex items-center">
          {quantity > 0 ? (
            <div className="flex items-center border border-gray-300 rounded-full">
              <button 
                onClick={handleRemoveFromCart}
                className="h-8 w-8 flex items-center justify-center rounded-full hover:bg-gray-100"
                aria-label="Remove one item"
              >
                <MinusIcon className="h-4 w-4" />
              </button>
              <span className="mx-2 font-medium text-sm">{quantity}</span>
              <button 
                onClick={handleAddToCart}
                className="h-8 w-8 flex items-center justify-center rounded-full hover:bg-gray-100"
                aria-label="Add one item"
              >
                <PlusIcon className="h-4 w-4" />
              </button>
            </div>
          ) : (
            <button 
              onClick={handleAddToCart}
              className="btn btn-sm sm:btn btn-primary"
              aria-label="Add to cart"
            >
              <ShoppingCartIcon className="h-4 w-4 mr-1" />
              <span>Add</span>
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default MenuItem; 
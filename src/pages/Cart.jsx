import { Link } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import CartItem from '../components/CartItem';
import { ShoppingBagIcon } from '@heroicons/react/24/outline';

const Cart = () => {
  const { cart, total, clearCart } = useCart();

  // Group items by restaurant
  const itemsByRestaurant = cart.reduce((acc, item) => {
    const restaurantId = item.restaurantId;
    
    if (!acc[restaurantId]) {
      acc[restaurantId] = [];
    }
    
    acc[restaurantId].push(item);
    return acc;
  }, {});

  if (cart.length === 0) {
    return (
      <div className="container py-12 text-center">
        <div className="max-w-md mx-auto">
          <ShoppingBagIcon className="h-24 w-24 mx-auto text-gray-300" />
          <h2 className="text-2xl font-bold mt-4">Your cart is empty</h2>
          <p className="text-gray-600 mt-2">
            Looks like you haven't added any items to your cart yet.
          </p>
          <Link to="/" className="btn btn-primary mt-6 inline-block">
            Browse Restaurants
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="container py-12">
      <h1 className="text-3xl font-bold mb-8">Your Cart</h1>
      
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2">
          {Object.entries(itemsByRestaurant).map(([restaurantId, items]) => (
            <div 
              key={restaurantId}
              className="bg-white rounded-lg shadow-sm p-6 mb-6"
            >
              <h2 className="text-xl font-bold mb-4">
                Restaurant #{restaurantId}
              </h2>
              
              {items.map(item => (
                <CartItem key={item.id} item={item} />
              ))}
            </div>
          ))}
          
          <button 
            onClick={clearCart}
            className="text-red-500 hover:text-red-700 font-medium"
          >
            Clear Cart
          </button>
        </div>
        
        <div className="lg:col-span-1">
          <div className="bg-white rounded-lg shadow-sm p-6 sticky top-24">
            <h2 className="text-xl font-bold mb-4">Order Summary</h2>
            
            <div className="border-t border-gray-200 pt-4 mt-4">
              <div className="flex justify-between mb-2">
                <span className="text-gray-600">Subtotal</span>
                <span>₹{total.toFixed(2)}</span>
              </div>
              <div className="flex justify-between mb-2">
                <span className="text-gray-600">Delivery Fee</span>
                <span>₹40.00</span>
              </div>
              <div className="flex justify-between mb-2">
                <span className="text-gray-600">Tax</span>
                <span>₹{(total * 0.05).toFixed(2)}</span>
              </div>
              
              <div className="border-t border-gray-200 mt-4 pt-4 flex justify-between font-bold">
                <span>Total</span>
                <span>₹{(total + 40 + total * 0.05).toFixed(2)}</span>
              </div>
              
              <Link 
                to="/checkout" 
                className="btn btn-primary w-full mt-6 text-center"
              >
                Proceed to Checkout
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
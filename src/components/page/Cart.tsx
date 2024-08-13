import React from 'react';
import { useCart } from '../../context/Context';

type CartItem = {
  id: string;
  title: string;
  price: number;
  quantity: number;
  image: string;
};

type CartProps = {
  items: CartItem[];
  onRemoveItem: (id: string) => void;
  onUpdateQuantity: (id: string, newQuantity: number) => void;
};

const Cart: React.FC<CartProps> = () => {
    const { cart, removeFromCart, updateQuantity } = useCart();

  const calculateTotal = () => {
    return cart.reduce((total, item) => total + item.price * item.quantity, 0);
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Your Cart</h1>
      {cart.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <>
          <div className="space-y-4">
            {cart.map((item) => (
              <div key={item.id} className="flex items-center border-b pb-4">
                <img src={item.image} alt={item.title} className="w-20 h-20 object-cover mr-4" />
                <div className="flex-grow">
                  <h2 className="text-lg font-semibold">{item.title}</h2>
                  <p className="text-gray-600">${item.price.toFixed(2)}</p>
                  <div className="flex items-center mt-2">
                    <button
                      onClick={() => updateQuantity(item.id, item.quantity - 1)}
                      className="bg-gray-200 px-2 py-1 rounded"
                    >
                      -
                    </button>
                    <span className="mx-2">{item.quantity}</span>
                    <button
                      onClick={()=>updateQuantity(item.id,item.quantity+1)}
                      className="bg-gray-200 px-2 py-1 rounded"
                    >
                      +
                    </button>
                  </div>
                </div>
                <button
                  onClick={() => removeFromCart(item.id)}
                  className="text-red-500 hover:text-red-700"
                >
                  Remove
                </button>
              </div>
            ))}
          </div>
          <div className="mt-8">
            <h2 className="text-xl font-semibold">Order Summary</h2>
            <div className="flex justify-between mt-4">
              <span>Subtotal:</span>
              <span>${calculateTotal().toFixed(2)}</span>
            </div>
            <div className="flex justify-between mt-2">
              <span>Discount:</span>
              <span>$0.00</span>
            </div>
            <div className="flex justify-between mt-2 text-lg font-bold">
              <span>Total:</span>
              <span>${calculateTotal().toFixed(2)}</span>
            </div>
            <button className="w-full bg-indigo-600 text-white py-2 px-4 rounded-md font-medium hover:bg-indigo-700 transition-colors duration-300 mt-4">
              Proceed to Checkout
            </button>
          </div>
        </>
      )}
    </div>
  );
};

export default Cart;
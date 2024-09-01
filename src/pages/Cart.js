import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeFromCart, toggleShipping } from '../redux/cartSlice';

// This component is mainly in control of the cart feature. However it does recieve context from the CartSlice from the Redux File.

function Cart() {
  const cart = useSelector((state) => state.cart.items);
  const includeShipping = useSelector((state) => state.cart.includeShipping);
  const dispatch = useDispatch();

  const calculateTotal = () => {
    const productTotal = cart.reduce((sum, product) => sum + product.price, 0);
    return includeShipping ? productTotal + 2 : productTotal;
  };

  return (
    <div className="p-4">
      <h1 className="text-3xl font-baskervville mb-6">Your Cart</h1>
      {cart.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <div>
          <ul>
            {cart.map((item, index) => (
              <li key={index} className="mb-4">
                <div className="flex justify-between items-center">
                  <div>
                    <img
                      src={item.selectedImage}
                      alt={item.name}
                      className="w-20 h-20 object-cover rounded mr-4"
                    />
                    <h2 className="text-xl">{item.name}</h2>
                    <p className="text-brown">${item.price.toFixed(2)}</p>
                  </div>
                  <button
                    onClick={() => dispatch(removeFromCart(item.id))}
                    className="bg-red-500 text-pale py-1 px-3 rounded"
                  >
                    Remove
                  </button>
                </div>
              </li>
            ))}
          </ul>
          <div className="mt-4">
            <label className="inline-flex items-center">
              <input
                type="checkbox"
                checked={includeShipping}
                onChange={() => dispatch(toggleShipping())}
                className="mr-2"
              />
              <span className="text-darkGreen">Include Shipping ($2)</span>
            </label>
          </div>
          <div className="mt-4">
            <h3 className="text-2xl">Total: ${calculateTotal().toFixed(2)}</h3>
          </div>
        </div>
      )}
    </div>
  );
}

export default Cart;

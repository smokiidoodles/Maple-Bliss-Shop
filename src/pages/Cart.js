import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeFromCart, setShippingMethod } from '../redux/cartSlice';
import { toggleShipping } from '../redux/cartSlice';

function Cart() {
  const cart = useSelector((state) => state.cart.items);
  const shippingMethod = useSelector((state) => state.cart.shippingMethod);
  const includeShipping = useSelector((state) => state.cart.includeShipping);
  const dispatch = useDispatch();
  const [showHelpModal, setShowHelpModal] = useState(false);

  const shippingOptions = {
    standard: 2,
    express: 5,
    overnight: 10,
  };

  const handleShippingChange = (e) => {
    const selectedMethod = e.target.value;
    dispatch(setShippingMethod(selectedMethod));
  };

  const calculateTotal = () => {
    const productTotal = cart.reduce((sum, product) => sum + product.price, 0);
    return includeShipping ? productTotal + shippingOptions[shippingMethod] : productTotal;
  };

  const toggleHelpModal = () => {
    setShowHelpModal(!showHelpModal);
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
            <label htmlFor="shipping" className="block mb-2">Select Shipping Method:</label>
            <select
              id="shipping"
              value={shippingMethod}
              onChange={handleShippingChange}
              className="p-2 border rounded"
            >
              <option value="standard">Standard Shipping ($2.00)</option>
              <option value="express">Express Shipping ($5.00)</option>
              <option value="overnight">Overnight Shipping ($10.00)</option>
            </select>
            <button
              onClick={toggleHelpModal}
              className="ml-4 text-blue-500 underline"
            >
              Need Help?
            </button>
          </div>

          <div className="mt-4">
            <h3 className="text-2xl">Total: ${calculateTotal().toFixed(2)}</h3>
          </div>
        </div>
      )}

      {/* Help Modal */}
      {showHelpModal && (
        <div className="fixed inset-0 bg-gray-600 bg-opacity-75 flex justify-center items-center">
          <div className="bg-white p-4 rounded shadow-lg max-w-md">
            <h2 className="text-xl mb-4">Shipping Options</h2>
            <ul>
              <li><strong>Standard Shipping:</strong> Delivered in 2-5 days for $2.00</li>
              <li><strong>Express Shipping:</strong> Delivered in 1-2 days for $5.00</li>
              <li><strong>Overnight Shipping:</strong> Delivered in 1 day for $10.00</li>
            </ul>
            <button
              onClick={toggleHelpModal}
              className="mt-4 text-blue-500 underline"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default Cart;

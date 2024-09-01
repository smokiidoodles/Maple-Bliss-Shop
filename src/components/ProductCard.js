import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addToCart } from '../redux/cartSlice';

// This component styles the product card. This is in order to minimise code when using an Object Map to display items.
function ProductCard({ product }) {
  const [selectedColorIndex, setSelectedColorIndex] = useState(0);
  const dispatch = useDispatch();

  const handleColorChange = (e) => {
    setSelectedColorIndex(e.target.value);
  };

  const handleAddToCart = () => {
    dispatch(addToCart({
      ...product,
      selectedImage: product.images[selectedColorIndex],
    }));
  };

  return (
    <div className="border p-4 rounded-lg shadow-lg transition-transform transform hover:scale-105 hover:shadow-2xl flex flex-col items-center">
      <img 
        src={product.images[selectedColorIndex]} 
        alt={product.name} 
        className="w-full max-w-[300px] h-auto max-h-[300px] object-cover rounded-lg transition-opacity duration-300 ease-in-out mb-4"
      />
      <h2 className="text-xl font-baskervville mb-2 text-center">{product.name}</h2>
      <p className="text-brown mb-4 text-center">${product.price.toFixed(2)}</p>
      <div className="mb-4 w-full">
        <label htmlFor={`color-select-${product.id}`} className="block font-baskervville mb-2 text-center">Choose a color:</label>
        <select 
          id={`color-select-${product.id}`} 
          onChange={handleColorChange} 
          value={selectedColorIndex} 
          className="w-full p-2 border-2 border-darkGreen rounded transition-colors duration-300 ease-in-out hover:border-darkGreen-dark"
        >
          {product.images.map((img, index) => (
            <option key={index} value={index}>Color {index + 1}</option>
          ))}
        </select>
      </div>
      <button 
        onClick={handleAddToCart} 
        className="bg-darkGreen text-pale py-2 px-4 w-full rounded transition-transform duration-300 ease-in-out hover:scale-105 hover:bg-darkGreen-dark"
      >
        Add to Cart
      </button>
    </div>
  );
}

export default ProductCard;

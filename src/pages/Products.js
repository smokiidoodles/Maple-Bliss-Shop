//This component uses a Object Map function to display each product on the MapleBliss Website.

//The images for the products were taken by me. They are household items that I own that were edited on Photoshop.
import React from 'react';
import ProductCard from '../components/ProductCard';
import BluePlate from '../assets/Products/plateBlue.jpg';
import GreenPlate from '../assets/Products/plateGreen.jpg';
import PurplePlate from '../assets/Products/platePurple.jpg';
import Mug from "../assets/Products/cupWhite.jpg"
import BluePlacemat from '../assets/Products/placematPlain.jpg';
import PatternPlacemat from '../assets/Products/placematPatterned.jpg';
import YellowSmallPillow from '../assets/Products/smallPillowYellow.jpg';
import RedSmallPillow from '../assets/Products/smallPillowRed.jpg';
import WhiteSmallPillow from '../assets/Products/smallPillowWhite.jpg';
import LargePillowLight from '../assets/Products/pillowBlue.jpg';
import LargePillowDark from '../assets/Products/pillowBlack.jpg';
import LargePillowGreen from '../assets/Products/pillowGreen.jpg';
import GreyBlanket from '../assets/Products/blanketGrey.jpg';
import LilacBlanket from '../assets/Products/blanketLilac.jpg';
import BlueBlanket from '../assets/Products/blanketBlue.jpg';
import Towel from '../assets/Products/kitchenTowelBlue.jpg';
import MintTowel from '../assets/Products/kitchenTowelMint.jpg';
import RedTowel from '../assets/Products/kitchenTowelRed.jpg';

const products = [
  { id: '1', name: 'Colour Pop Plates', price: 15.99, images: [BluePlate, GreenPlate, PurplePlate] },
  { id: '2', name: 'Organic Cup', price: 5.50, images: [Mug]},
  { id: '3', name: 'Country-Side Placemat', price: 10.99, images: [BluePlacemat, PatternPlacemat]},
  { id: '4', name: 'Small Button Pillow', price: 9.99, images: [YellowSmallPillow, RedSmallPillow,WhiteSmallPillow]},
  { id: '5', name: 'Lovely Local Pillow', price: 14.99, images: [LargePillowLight,LargePillowGreen,LargePillowDark]},
  { id: '6', name: 'Fireside Blanket', price: 30.00, images: [GreyBlanket, BlueBlanket,LilacBlanket]},
  { id: '7', name: 'Kitchenette Towel', price: 10.00, images: [Towel, MintTowel,RedTowel]},

];

function Products() {
  return (
    <div className="p-4">
      <h1 className="text-3xl font-baskervville mb-6">Our Products</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {products.map(product => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
}

export default Products;

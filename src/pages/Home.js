import React from 'react';
import Logo from '../assets/Branding/logoDark.svg';

//This landing page provides a simple home page for the web application.
//The branding visuals and Logo were created by me. This was made using Adobe Illustrator.
function Home() {
  return (
    <div className="p-4 flex flex-col items-center justify-center min-h-screen bg-pale">
       <div className="animate-bounce">
        <img src={Logo} alt="MapleBliss Logo" className="w-full max-w-24" />
      </div>
      <div className="text-center mb-8 animate-fadeInUp">
        <h1 className="text-4xl font-baskervville mb-4">Welcome to MapleBliss</h1>
        <p className="text-lg">Your home for cozy and stylish fall-inspired homeware.</p>
      </div>
      <p className='text-wrap m-10'>Welcome to MapleBliss, where every day feels like a crisp autumn morning.
        Inspired by the warm hues and comforting essence of fall, we create homeware that transforms your space into a cozy retreat.
        At MapleBliss, we believe that the colder seasons are meant to be cherished, with every item designed to bring a touch of fun and comfort to your indoor life.
        Whether you're snuggling up with a soft blanket or sipping cocoa from a charming mug, our collections invite you to embrace the simple pleasures of home.
        Let MapleBliss make your home the perfect haven for every cozy moment.
        </p>
  
    </div>
  );
}

export default Home;

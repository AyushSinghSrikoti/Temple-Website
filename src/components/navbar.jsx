import React from 'react';
import { animateScroll as scroll } from 'react-scroll';
import { Link } from 'react-router-dom';

function Navbar() {

  //function to automatically scroll to the top of the pages on navigation
  
  const scrollToTop = () => {
    scroll.scrollToTop();
  };

  return (
    <>
    <div className="h-32 m-auto flex flex-wrap justify-around items-center sticky top-0 bg-white border-b-2">
      <div className="flex flex-col justify-center items-center" onClick={scrollToTop}>
        <Link to="/">
          <div className="text-3xl text-black cursor-pointer">
            <b>Kedarnath</b>
          </div>
          <div className="cursor-pointer">
            <i>Eternal Serenity</i>
          </div>
        </Link>
      </div>

      <div className="flex gap-6">
        <div>
          <Link to="/about" className="cursor-pointer hover:border-b-2 hover:border-gray-500" onClick={scrollToTop}>
            About
          </Link>
        </div>
        <div>
          <Link to="/gallery" className="cursor-pointer hover:border-b-2 hover:border-gray-500" onClick={scrollToTop}>
            Gallery
          </Link>
        </div>
        <div>
          <Link to="/travel" className="cursor-pointer hover:border-b-2 hover:border-gray-500" onClick={scrollToTop}>
            Travel
          </Link>
        </div>
        <div>
          <Link to="/accomodations" className="cursor-pointer hover:border-b-2 hover:border-gray-500" onClick={scrollToTop}>
            Accomodations
          </Link>
        </div>
        <div>
          <Link to="/contact" className="cursor-pointer hover:border-b-2 hover:border-gray-500" onClick={scrollToTop}>
            Contacts
          </Link>
        </div>
      </div>

      <div
        onClick={scrollToTop}
        className="flex text-xl h-16 justify-center items-center border-2 border-gray-500 cursor-pointer hover:bg-gray-500 hover:text-white p-4 transition duration-500 ease-in-out"
      >
        <a href='https://badrinath-kedarnath.gov.in/' target='__blank'>Official Website</a>
      </div>
    </div>
    </>
  );
}

export default Navbar;

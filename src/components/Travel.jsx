import React from 'react';
import Navbar from "./navbar";
import Footer from "./Footer";
import { ClipLoader } from "react-spinners";
import { useState, useEffect } from "react";

function Travel() {

  //preloader logic
  
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const checkImageLoading = () => {
      setTimeout(() => {
        setLoading(false);
      }, 3000);
    };
    checkImageLoading();
  }, []);


  return (
    <>
    {loading ? (
      <div className="flex justify-center items-center h-screen">
      <ClipLoader color="black" loading={loading} size={150} />
    </div>
    ): <><Navbar />
    <div className="p-8 flex flex-col flex-wrap gap-4">
      <div><h1 className="text-4xl font-bold mb-6">Travel to Kedarnath</h1></div>

      <div>
      <h2 className="text-2xl font-bold mb-4">How to Travel</h2>
      <div className='flex flex-wrap'>
          <div className='/*bg-yellow-300*/ w-1/2 flex justify-center'><img src='./travel/route.jpg' className='h-92 w-3/4'></img></div>
          <div className='/*bg-red-300*/ w-1/2 flex items-center text-xl'> <p>
        Traveling to Kedarnath involves multiple modes of transportation. There are no direct buses or trains from Delhi to Kedarnath. The recommended route is to reach Rishikesh or Srinagar Gadwal first, and from there, proceed to the base for Kedarnath.
      </p></div>
      </div>
      </div>

      <div>
      <h2 className="text-2xl font-bold mb-4">Transportation Services</h2>
      <div className='flex flex-wrap'>
      <div className='/*bg-red-300*/ w-1/2 flex items-center text-xl'> <p>
        From Rishikesh or Srinagar, buses are available to Sonprayag. From Sonprayag, shared Sumo Gold cars are available for the 5 km journey to Gaurikund. Trekking services like ponies and horses are available from Gaurikund to Kedarnath. Helicopter services can also be availed from Fata village and Guptkashi for a quicker journey.
      </p></div>
          <div className='/*bg-yellow-300*/ w-1/2 flex justify-center'><img src='./travel/helicopter.jpg' className='h-92 w-3/4'></img></div>

      </div>
      </div>

      <div>
      <h2 className="text-2xl font-bold mb-4">Bus and Train Booking</h2>
      <div className='flex flex-wrap'>
          <div className='/*bg-yellow-300*/ w-1/2 flex justify-center'><img src='./travel/bus.jpg' className='h-92 w-3/4'></img></div>
          <div className='/*bg-red-300*/ w-1/2 flex items-center text-xl'> <p>
        Plan your journey with ease by booking buses or trains. Click the buttons below to redirect to the official websites for online bookings:
        <div className="flex space-x-4 mt-2">
        <a href="https://www.irctc.co.in/" target="_blank" rel="noopener noreferrer" className="bg-blue-500 text-white py-2 px-4">Book Train</a>
        <a href="https://www.utconline.uk.gov.in/" target="_blank" rel="noopener noreferrer" className="bg-green-500 text-white py-2 px-4">Book Bus</a>
      </div>
      </p></div>
      </div>
      </div>

    </div>
    <Footer /> </>}
      
    </>
  );
}

export default Travel;

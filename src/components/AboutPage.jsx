import React from 'react';
import Navbar from './navbar';
import Footer from './Footer';
import { ClipLoader } from "react-spinners";
import { useState, useEffect } from "react";

function AboutPage() {
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
      {loading ? <div className="flex justify-center items-center h-screen">
      <ClipLoader color="black" loading={loading} size={150} />
    </div> : <><Navbar />
      <div className="p-8">
        <h1 className="text-4xl font-bold mb-4">About Kedarnath Temple Website</h1>

        <p className="mb-4">
          Welcome to our dedicated website for Kedarnath Temple – a sacred abode of Lord Shiva nestled in the
          breathtaking Himalayan range. Our platform aims to provide comprehensive information and services to
          enhance your pilgrimage experience to this divine destination.
        </p>

        <div className="mb-8">
          <h2 className="text-2xl font-bold mb-2">Accommodations</h2>
          <div className="flex flex-col lg:flex-row items-center lg:justify-between mb-4 gap-4">
            <div className="lg:w-1/2 mb-4 lg:mb-0">
              <img src="./images/accomodations.jpg" alt="Accommodation" className="w-full h-80 object-cover mb-2" />
            </div>
            <div className="lg:w-1/2">
              <p>
              Discover a range of accommodations that cater to your preferences. From cozy lodges nestled in the lap of nature to comfortable guesthouses with stunning views, we ensure that your stay near Kedarnath Temple is not just restful but an integral part of your spiritual journey. Immerse yourself in the tranquility of the surroundings, and let our curated list of accommodations become your home away from home.
              </p>
            </div>
          </div>
        </div>

        <div className="mb-8">
          <h2 className="text-2xl font-bold mb-2">Travel</h2>
          <div className="flex flex-col lg:flex-row items-center lg:justify-between mb-4 gap-4">
            <div className="lg:w-1/2 mb-4 lg:mb-0 order-2 lg:order-1">
              <img src="./images/sumo.jpg" alt="Travel" className="w-full h-80 object-cover mb-2" />
            </div>
            <div className="lg:w-1/2 order-1 lg:order-2">
              <p>
              Embark on a soul-stirring journey to Kedarnath with our comprehensive travel services. Whether you choose the scenic route by road, opt for a convenient air travel experience, or brave the trekking trails, our platform provides guidance on the best routes, transportation options, and essential travel tips. Allow us to be your companion on this pilgrimage, ensuring a seamless and memorable adventure to the divine abode.
              </p>
            </div>
          </div>
        </div>

        <div className="mb-8">
          <h2 className="text-2xl font-bold mb-2">Services</h2>
          <div className="flex flex-col lg:flex-row items-center lg:justify-between mb-4 gap-4">
            <div className="lg:w-1/2 mb-4 lg:mb-0">
              <img src="./images/services.jpg" alt="Services" className="w-full h-80 object-cover mb-2" />
            </div>
            <div className="lg:w-1/2">
              <p>
              Our commitment to your spiritual experience goes beyond information. We offer a range of services to make your Kedarnath Yatra truly enriching. Explore our guided tours, where knowledgeable guides share the history and significance of the temple. Engage in special pooja arrangements to deepen your connection with the divine. Our team also provides assistance with permits and logistics, ensuring a hassle-free and spiritually fulfilling journey for every pilgrim. Trust us to elevate your Kedarnath experience, making it not just a visit but a sacred pilgrimage of a lifetime.
              </p>
            </div>
          </div>
        </div>

        <p>
          At Kedarnath Temple Website, we are dedicated to serving pilgrims and enthusiasts alike, making their
          journey to Kedarnath an enriching and hassle-free experience. Feel free to explore our website and plan your
          visit to this divine destination.
        </p>
      </div>
      <Footer /></>}
      
    </>
  );
}

export default AboutPage;

import React from 'react';
import Navbar from "./navbar";
import Footer from "./Footer";
import { ClipLoader } from "react-spinners";
import { useState, useEffect } from "react";

function Gallery() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const checkImageLoading = () => {
      setTimeout(() => {
        setLoading(false);
      }, 3000);
    };
    checkImageLoading();
  }, []);

  const galleryImages = [
    { src: './gallery/sunset.jpg', description: 'Beautiful sunset over Kedarnath Temple' },
    { src: './gallery/view.jpg', description: 'Scenic view of the Himalayan range' },
    { src: './gallery/devotees.jpg', description: 'Devotees in prayer at Kedarnath' },
    { src: './gallery/snow.jpg', description: 'Snow-capped peaks surrounding the temple' },
    { src: './gallery/ceremony.jpg', description: 'Traditional ceremonies at Kedarnath' },
    { src: './gallery/vasukiTal.jpg', description: 'Vasuki tal 7kms from the temple' },
  ];

  return (
    <>
      {loading ? <div className="flex justify-center items-center h-screen">
      <ClipLoader color="black" loading={loading} size={150} />
    </div> : <><Navbar />
      <div className="p-8">
        <h2 className="text-4xl font-bold mb-6">Gallery</h2>

        <div className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-4">
          {galleryImages.map((item, index) => (
            <div key={index} className="mb-4 text-center">
              <img src={item.src} alt={`Gallery Image ${index + 1}`} className="w-full h-64 object-cover mb-2" />
              <p className="text-sm">{item.description}</p>
            </div>
          ))}
        </div>

        <div className="mt-8">
  <h2 className="text-4xl font-bold mb-2">Contribute to Our Gallery</h2>
  <p>
    Be a part of our shared journey to Kedarnath Temple! We invite you to contribute your cherished Kedarnath
    moments to our gallery. Share the breathtaking landscapes, sacred rituals, and the spiritual essence of your
    visit. Your images will not only become a part of our growing collection but also inspire and connect with
    fellow devotees and travelers.
  </p>
  <p>
    To submit your photos, simply click the button below and follow the instructions. We appreciate your
    contribution in helping us create a diverse and vibrant visual tapestry of the Kedarnath experience.
  </p>
</div>
      </div>
      <Footer /></>}
      
    </>
  );
}

export default Gallery;

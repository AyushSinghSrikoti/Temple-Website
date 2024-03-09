import React, { useState, useEffect } from "react";
import Navbar from "./navbar";
import Banner from "./banner";
import About from "./About";
import Footer from "./Footer";
import { ClipLoader } from "react-spinners";

function Home() {

    //preloader logic used
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
        {/* conditional rendering based on loader logic */}
      {loading ? (
        <div className="flex justify-center items-center h-screen">
          <ClipLoader color="black" loading={loading} size={150} />
        </div>
      ) : (
        <>
          <Navbar />
          <Banner />
          <About />
          <Footer />
        </>
      )}
    </>
  );
}

export default Home;

import { useState , useEffect } from "react";

function Banner(){

    const [photos, setPhotos] = useState([
        './images/kedarnath.jpg', 
        './images/kedarnath2.jpg', 
        './images/kedarnath3.jpg', 
        './images/kedarnath4.jpg', 
        './images/kedarnath5.jpg', 
      ]);

    const [currentPhotoIndex, setCurrentPhotoIndex] = useState(0);  

    useEffect(() => {
        const interval = setInterval(() => {
          setCurrentPhotoIndex((prevIndex) =>
            prevIndex === photos.length - 1 ? 0 : prevIndex + 1
          );
        }, 2000);
        return () => clearInterval(interval);
    }, [currentPhotoIndex, photos.length]);

    return(
        <>
        <div className=" w-screen bg-black bg-cover bg-center" style={{height: "80vh", backgroundImage: `url("${photos[currentPhotoIndex]}")` , backgroundRepeat: "no-repeat" , backgroundPosition: "center" , transition: "backgroundImage 1s ease-in-out"}}>
            
        </div>
        </>
    )
}

export default Banner;
import { useState , useEffect } from "react";

function Banner(){

    //set of photos used (can also be used by making different file and then importing from there)

    const [photos, setPhotos] = useState([
        './images/kedarnath.jpg', 
        './images/kedarnath2.jpg', 
        './images/kedarnath3.jpg', 
        './images/kedarnath4.jpg', 
        './images/kedarnath5.jpg', 
      ]);

    //state to keep track of current photo index

    const [currentPhotoIndex, setCurrentPhotoIndex] = useState(0);  


    //hook to change photos using set interval

    useEffect(() => {
        const interval = setInterval(() => {
          setCurrentPhotoIndex((prevIndex) =>
            prevIndex === photos.length - 1 ? 0 : prevIndex + 1
          );
        }, 4000);
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
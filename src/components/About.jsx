import { Link } from "react-router-dom";

function About(){
    return(
        <>
            <div className="/*bg-yellow-500*/ w-4/5 m-auto my-8 flex flex-wrap justify-center gap-8 text-lg" id="about">
                <div className="text-3xl /*bg-green-300*/"><b>Kedarnath Temple: Sanctuary in the Himalayas</b></div>
                <div className="/*bg-blue-300*/ flex flex-col gap-3">
                    <div>Discover the divine presence of Kedarnath Temple, nestled in the serene Rudra Himalaya range of Uttarakhand, India. Situated at an elevation of 3,583 meters, this sacred shrine is cradled by the breathtaking Garhwal Himalayas, offering pilgrims and travelers a spiritual haven amidst snow-capped peaks.</div>
                    <div className="text-xl"><b>Embarking on a Sacred Journey:</b></div>
                    <div>To reach Kedarnath, pilgrims embark on a soul-stirring trek through the mesmerizing landscapes of the Himalayas. The pilgrimage route, featuring picturesque meadows and dense forests, includes key stops like Gaurikund and Rambara. This journey is not only a spiritual odyssey but also an immersion into the raw beauty of the Himalayan region.</div>
                    <div className="text-xl"><b>Breathtaking Scenery:</b></div>
                    <div>Immerse yourself in the enchanting beauty surrounding Kedarnath Temple. The temple stands gracefully by the Mandakini River, with the majestic Kedarnath Peak towering in the background. The snow-covered peaks and pristine surroundings make it a divine retreat for devotees and nature enthusiasts alike.</div>
                    <div className="text-xl"><b>Spiritual Significance:</b></div>
                    <div>As one of the twelve Jyotirlingas, Kedarnath holds unparalleled significance in Hinduism. Devotees believe that seeking the blessings of Lord Shiva here brings spiritual liberation. The tranquil ambiance and sacred atmosphere make Kedarnath a revered destination for those seeking a profound connection with the divine.</div>
                    <div className="text-xl"><b>Limited Access:</b></div>
                    <div>Due to the challenging weather conditions, Kedarnath Temple opens its doors to pilgrims from late April to early November. During the winter months, the temple remains closed, surrounded by a blanket of snow.Efforts have been made to enhance the pilgrimage experience, providing amenities such as accommodation, medical facilities, and food services for the convenience of devotees.
                         Explore the sacred journey to Kedarnath Temple, where spirituality meets the majestic Himalayas. Plan your visit and embark on a pilgrimage that transcends the ordinary, offering a profound connection with the divine.</div>
                </div>
            </div>

            <div className="/*bg-yellow-300*/ h-96 w-full m-8 flex flex-wrap ">
                <div className="/*bg-green-300*/ h-full w-1/2 flex flex-wrap justify-center" style={{background: 'url("./images/pix.jpg")'}}></div>
                <div className="/*bg-red-100*/ h-full w-1/2 flex flex-wrap flex-col justify-center items-center text-center gap-4">
                    <div className="text-3xl font-bold">ॐ त्र्यम्बकं यजामहे सुगन्धिं पुष्टिवर्धनम्
                        उर्वारुकमिव बन्धनान्मृत्योर्मुक्षीय माऽमृतात्</div>
                    <Link to="/gallery"><div className="flex text-xl h-16 justify-center items-center border-2 border-gray-500 cursor-pointer hover:bg-gray-500 hover:text-white p-4 transition duration-500 ease-in-out">Explore →</div></Link>
                </div>
            </div>
        </>
    )
}

export default About;
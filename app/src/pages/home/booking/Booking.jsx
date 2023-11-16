import Header from "../../../components/header/Header"
import Navbar from "../../../components/navbar/Navbar"
import "./booking.css"
import MailList from "../../../components/mailList/MailList"
import Footer from "../../../components/footer/Footer"

const Booking = () => {

    const photos=[
        {
            src:"https://www.kayak.com/rimg/himg/77/df/8d/ice-191835-99721951-973318.jpg?width=1366&height=768&crop=true"
        },
        {
            src:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSI-YQ7hjboHof9j45yoSvWn0-IypWmemyWoQ&usqp=CAU"
        },
        {
            src:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRDz7qDDXkBPw5-WrdYi1P5l1Fk36WjIsWZyw&usqp=CAU"
        },
        {
            src:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR4nZ1hU8jjiTJqfoNqkbdRfhTHe4WGNiOAUA&usqp=CAU"
        },
        {
            src:"https://www.hilton.com/im/en/MAAHIHI/4800954/hilton-chennai-lobby-low-res.jpg?impolicy=crop&cw=4000&ch=1679&gravity=NorthWest&xposition=0&yposition=349&rw=1920&rh=806"
        },
        {
            src:"https://www.hilton.com/im/en/MAAHIHI/4813244/vintage-bank-2-.jpg?impolicy=crop&cw=3000&ch=1259&gravity=NorthWest&xposition=0&yposition=365&rw=1920&rh=806"
        },
    ];
    return(
        <div>
            <Navbar/>
            <Header type="list"/>
            <div className="hotelContainer">
                <div className="slider">
                    
                </div>
                <div className="hotelWrapper">
                    <button className="bookNow">Reserve or Book Now!</button>
                    <h1 className="hotelTitle">Hilton</h1>
                    <div className="hotelAddress">
                    <i class="fa-solid fa-location-dot"></i>
                        <span> 124, 1, 100 Feet Rd, Poomagal Nagar, Guindy, Chennai, Tamil Nadu 600032</span>
                        <span className="hotelDistance">Excellent Location - 1 km from Station</span>
                        <span className="hotelPriceHighlight">Book a stay over Rs 4650 at this property and get a free Railway Taxi</span>
                        <div className="hotelImages">
                           {photos.map(photo=>(
                            <div className="hotelImgWrapper">
                                  <img src={photo.src} alt="" className="hotelImg" /> 
                             </div>   
                              ))}
                        </div>
                        <div className="hotelDetails">
                            <div className="hotelDetailsTexts">
                                <h1 className="hotelTitle">Stay in the heart of Chennai</h1>
                                <p className="hotelDesc">
                                The 9-storied hotel is built on a 42-ground land 6 and has 204 rooms, including 2 Executive Suites, 16 Junior Suite, 7 Hilton Deluxe Room, 58 Hilton Executive Rooms, 121 Hilton King Guest Rooms. The interiors were designed by Hong Kong's DiLeonardo and Dallas-based Wilson and Associates. There are 5 food and beverage offerings at the hotel namely, Ayna pan-Indian restaurant, Vintage Bank wine and cheese bar, Q Bar a rooftop bar and grill, Vasco an all-day dining global cuisine restaurant with live kitchens on the third floor and Est 24 hour contemporary cafe and lounge.
                                </p>
                            </div>
                            <div className="hotelDetailsPrice">
                                <h1>Perfect for a 5-night stay</h1>
                                <span>
                                    Located in the real heart of Chennai, This property has an excellent location score of 9.8!
                                </span>
                                <h2>
                                    <b>Rs 1500 per night</b>
                                </h2>
                                <button>Reserve or Book Now!</button>
                            </div>
                        </div>
                    </div>
                </div>
                <MailList/>
                <Footer/>
            </div>
        </div>
    )
}
export default Booking;
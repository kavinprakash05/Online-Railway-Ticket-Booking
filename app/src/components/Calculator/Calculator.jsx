import React, { useState } from 'react';
import axios from 'axios';
import './calculator.css';
import { useNavigate } from 'react-router-dom';
function Calculator() {
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        destination: '',
        arrival: '',
        class: '1A',
        adults: 1,
        children: 0,
        tripType: 'Up Only',
        date: '',
    });
    const [to,set]=useState(0);

    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setFormData(prevData => ({ ...prevData, [name]: value }));
    };

    const calculateFare = () => {
        const BASE_FARE = 500;
        let multiplier = 1;

        switch (formData.class) {
            case '1A':
                multiplier = 2;
                break;
            case '2A':
                multiplier = 1.5;
                break;
            case '3A':
                multiplier = 1;
                break;
            default:
                break;
        }

        let fareForAdults = formData.adults * BASE_FARE * multiplier;
        let fareForChildren = formData.children * (BASE_FARE * multiplier * 0.5);

        let totalFare = fareForAdults + fareForChildren;

        if (formData.tripType === 'Up and Down') {
            totalFare *= 2;
        }

        return totalFare;
    }

    function loadScript(src) {
        return new Promise((resolve) => {
            const script = document.createElement("script");
            script.src = src;
            script.onload = () => {
                resolve(true);
            };
            script.onerror = () => {
                resolve(false);
            };
            document.body.appendChild(script);
        });
    }
      async function checkoutHandler(fare) {
        const res = await loadScript(
            "https://checkout.razorpay.com/v1/checkout.js"
        );
    
        if (!res) {
            alert("Razorpay SDK failed to load. Are you online?");
            return;
        }
    
        // creating a new order
        const result = await axios.post("http://localhost:3005/custom_pay",{
          amount: fare
        });
    
        if (!result) {
            alert("Server error. Are you online?");
            return;
        }
    
        // Getting the order details back
        const { amount, id: order_id, currency } = result.data;
    
        const options = {
            key: "rzp_test_zpcvSUNJXUqrLv", // Enter the Key ID generated from the Dashboard
            currency: currency,
            name: "Test Corp.",
            description: "Test Transaction",
            order_id: order_id,
            handler: async function (response) {
                const data = {
                    orderCreationId: order_id,
                    razorpayPaymentId: response.razorpay_payment_id,
                    razorpayOrderId: response.razorpay_order_id,
                    razorpaySignature: response.razorpay_signature,
                };
                navigate('/');
            },
            theme: {
                color: "#61dafb",
            },
        };
    
        const paymentObject = new window.Razorpay(options);
        paymentObject.open();
    }

    const handleSubmit = async(event) => {
        event.preventDefault();

        // Validation Checks
        if (formData.destination === formData.arrival) {
            alert("Destination and Arrival cannot be the same.");
            return;
        }

        if (!formData.destination || formData.destination === "-- Select --") {
            alert("Please select a valid Destination station.");
            return;
        }

        if (!formData.arrival || formData.arrival === "-- Select --") {
            alert("Please select a valid Arrival station.");
            return;
        }
        // If all validations pass, calculate the fare
        const fare = calculateFare();
        alert(`The ticket fare is Rs${fare}`);
        const response = await axios.post(`http://localhost:3005/b/${fare}`, formData);
        await checkoutHandler(fare);
        console.log("ki");
        if (response.data.user) {
        console.log("ko");
        } else {
          alert("Fill all the fields")
        }
        
    };

    return (
        <div class="booking-page">
        <div className="booking-container">
            <h2>Railway Management System: Book Tickets</h2>
            <form onSubmit={handleSubmit}>
                {/* Destination */}
                <div className="form-group">
                    <label >Destination Station:</label>
                    <select name="destination" value={formData.destination} onChange={handleInputChange}>
                        <option value="-- Select --">-- Select --</option>
                        <option value="Chennai">Chennai</option>
                        <option value="Madurai">Madurai</option>
                        <option value="Coimbatore">Coimbatore</option>
                        <option value="Erode">Erode</option>
                        <option value="Dindigul">Dindigul</option>
                        <option value="Trichy">Trichy</option>
                        <option value="Kanyakumari">Kanyakumari</option>
                        <option value="Tirunelveli">Tirunelveli</option>
                        <option value="Vilupuram">Vilupuram</option>
                        <option value="Vellore">Vellore</option>
                    </select>
                </div>

                {/* Arrival */}
                <div className="form-group">
                    <label>Arrival Station:</label>
                    <select name="arrival" value={formData.arrival} onChange={handleInputChange}>
                        <option value="-- Select --">-- Select --</option>
                        <option value="Chennai">Chennai</option>
                        <option value="Madurai">Madurai</option>
                        <option value="Coimbatore">Coimbatore</option>
                        <option value="Erode">Erode</option>
                        <option value="Dindigul">Dindigul</option>
                        <option value="Trichy">Trichy</option>
                        <option value="Kanyakumari">Kanyakumari</option>
                        <option value="Tirunelveli">Tirunelveli</option>
                        <option value="Vilupuram">Vilupuram</option>
                        <option value="Vellore">Vellore</option>
                    </select>
                </div>

                {/* Class */}
                <div className="form-group">
                    <label>Class:</label>
                    <select name="class" value={formData.class} onChange={handleInputChange}>
                        <option value="1A">1A</option>
                        <option value="2A">2A</option>
                        <option value="3A">3A</option>
                    </select>
                </div>

                {/* Adults */}
                <div className="form-group">
                    <label>No. of Adults:</label>
                    <input type="number" name="adults" value={formData.adults} onChange={handleInputChange} />
                </div>

                {/* Children */}
                <div className="form-group">
                    <label>No. of Children:</label>
                    <input type="number" name="children" value={formData.children} onChange={handleInputChange} />
                </div>
                <div className="form-group">
                    <label>Email:</label>
                <input
          type="email"
          name="email"
          placeholder="Email"
          value={formData.email}
          onChange={handleInputChange}
          required
        /></div>

                {/* Trip Type */}
                <div className="form-group">
                    <label>Type of Trip:</label>
                    <select name="tripType" value={formData.tripType} onChange={handleInputChange}>
                        <option value="Up Only">Up Only</option>
                        <option value="Up and Down">Up and Down</option>
                    </select>
                </div>

                {/* Date */}
                <div className="form-group">
                    <label>Date:</label>
                    <input type="date" name="date" value={formData.date} onChange={handleInputChange} />
                </div>

                {/* Submit Button */}
                <div className="form-group">
                    <button type="submit">Book Ticket</button>
                </div>
            </form>
        </div>
        </div>
    );
}

export default Calculator;

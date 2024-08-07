
import Header from '../Header/Header'
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../Booking/Booking.css'
import axios from 'axios'
import '../Home/Assets/Aleg.ttf'
import Footer from '../Footer/Footer';


function Booking(){


    const navigate= useNavigate()
    const [formData, setForm] = useState({
        name: "",
        email: "",
        phone: "",
        date: "",
        service: ""
    });

    const [error, setError] = useState({});
    const [confirmation, setConfirmation] = useState("");

    const handleChange = (e) => {
        const { name, value } = e.target;
        setForm((prevData) => ({
            ...prevData,
            [name]: value
        }));
        setError((prevError) => ({
            ...prevError,
            [name]: ""
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        
        if ((formData.name)&&(formData.email)&&(formData.phone)&&(formData.date)
            &&(formData.service)){
                const response = await axios.post('http://localhost:3001/bookAppointment', formData);
                const { token } = response.data;
                alert(`Your appointment has been booked successfully!`);
                setConfirmation("Your appointment has been booked successfully!");
                navigate('/')
        }

        else {
            
            setError({
                ...error,
                name: "* Enter the Name",
                email: "* Enter the Password",
                phone: "* Enter the Phone no",
                date: "* Enter the Date",
                service: "* Enter the Service"
            });
            return
        } 
        
    };
    return(
        <div>
            <Header></Header>
            <div className='back'>
        <div className="appointment-booking">
           
            <h1>Book an Appointment</h1>
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label htmlFor="name">Name:</label>
                    <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                    />
                    {error.name && <p className="error">{error.name}</p>}
                </div>
                <div className="form-group">
                    <label htmlFor="email">Email:</label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                    />
                    {error.email && <p className="error">{error.email}</p>}
                </div>
                <div className="form-group">
                    <label htmlFor="phone">Phone:</label>
                    <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                    />
                    {error.phone && <p className="error">{error.phone}</p>}
                </div>
                <div className="form-group">
                    <label htmlFor="date">Date:</label>
                    <input
                        type="date"
                        id="date"
                        name="date"
                        value={formData.date}
                        onChange={handleChange}
                    />
                    {error.date && <p className="error">{error.date}</p>}
                </div>
                
                <div className="form-group">
                    <label htmlFor="service">Service:</label>
                    <select
                        id="service"
                        name="service"
                        value={formData.service}
                        onChange={handleChange}
                    >
                        <option value="">Select a service</option>
                        <option value="consultation">Consultation</option>
                        <option value="checkup">Check-up</option>
                        <option value="therapy">Therapy</option>
                    </select>
                    {error.service && <p className="error">{error.service}</p>}
                </div>
                <button type="submit" className='book-btn'>Book Appointment</button>
            </form>
            {confirmation && <p className="confirmation">{confirmation}</p>}

            
        </div>
        </div>
        <Footer></Footer>
        </div>
    )
}

export default Booking
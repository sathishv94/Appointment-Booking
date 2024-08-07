import React, { useEffect, useState } from "react";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import axios from "axios";

function Hospital() {
    const [appointments, setAppointments] = useState([]);

    useEffect(() => {
        const fetchAppointments = async () => {
            try {
                const response = await axios.get('http://localhost:3001/appointments');
                setAppointments(response.data);
            } catch (error) {
                console.error("Error fetching the appointments data", error);
            }
        };

        fetchAppointments();
    }, []);

    return (
        <div>
            <Header />
            <section className="Appointments">
                <h1 className='text-primary'>Appointments</h1>
                <ol>
                    {appointments.map(appointment => (
                      <h5>  <li key={appointment._id}>
                            <h3>{appointment.name}</h3>
                            <p>{new Date(appointment.date).toLocaleString()}</p>
                            <h6>{appointment.phone}</h6>
                            <h6>{appointment.service}</h6>
                        </li></h5>
                    ))}
                </ol>
            </section>
            <Footer />
        </div>
    );
}

export default Hospital;

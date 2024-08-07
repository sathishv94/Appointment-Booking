
import axios from 'axios'
import React, { useState, } from 'react'
import { useNavigate } from 'react-router-dom'
import Regi from '../Home/Assets/Regi.jpg'
import '../Register/Register.css'
import '../Home/Assets/Aleg.ttf'
import '../Booking/Booking'
import Footer from '../Footer/Footer'


function Register() {
    const navigate = useNavigate()
    

    const [formData, setForm] = useState({
        Name: "",
        Password: ""
    })

    const [error, setError] = useState({
        
    })

    const handleChange = (e) => {
        const { name, value } = e.target
        setForm((prevData) => {
            return {
                ...prevData,
                [name]: value
            }
        })
        setError((prevError) => ({
            ...prevError,
            [name]: ""
        }));
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        // console.log(formData)//
       if ((formData.Name)&&(formData.Password)){
            const response = await axios.post("http://localhost:3001/postData", formData);
            // console.log(response.data);//
            navigate('/login')
        }
        else  {

            setError({
                ...error,
                Name: "* Enter the Name",
                Password:"* Enter the Password"
            })
            return
        }
    }
  


    return (
        <div>
            <section >
                <div className='Regi'>
                    <div className='Regi-img '><img src={Regi}></img></div>
                    <div className='Regi-form '>
                        <h1 className='text-primary'>Register Form</h1>
                        <br></br>
                        <form onSubmit={handleSubmit} >
                            <h5 className='text-primary'>Name</h5>
                        <div className='Regi-input'>    <input
                                type='text'
                                name='Name'
                                
                                value={formData.Name}
                                onChange={handleChange}></input>
                                <p className="errortext" >{error.Name}</p>
                                </div>
                            <br></br>
                            <h5 className='text-primary'>Password</h5>
                            <input type='Password'
                                name='Password'
                                value={formData.Password}
                                onChange={handleChange}></input>
                             <p className="errortext" >{error.Password}</p>
                            <br></br><br></br>
                            <div className='re-btn'>
                            <button type='submit' className='regi-btn'><h6 className='text-primary'>Register</h6></button>
                            <button type='submit' className='Log-btn' onClick={() => navigate('/login')}><h6 className='text-primary'>Login</h6></button>
                            </div>
                        </form>
                    </div>
                </div>
            </section>
            <Footer></Footer>
        </div>
    )
}

export default Register
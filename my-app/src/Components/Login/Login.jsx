import React, { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import axios from "axios"
import Header from "../Header/Header"
import Regi2 from '../Home/Assets/Regi2.jpg'
import '../Login/Login.css'
import '../Home/Assets/Aleg.ttf'
import Footer from "../Footer/Footer"

function Login() {

    const navigate1 = useNavigate()
    function Booking() {
        navigate1('/booking')
    }
    const [userData, setUserData] = useState({
        Name: "",
        Password: ""
    })
    const [readData, setReadData] = useState({
        Name: "",
        Password: ""
    })
    const [error, setError] = useState({

    })
    useEffect(() => {
        getData()
    }, [])

    const handleChangein = (e) => {
        e.preventDefault();
        const { name, value } = e.target;

        setUserData({
            ...userData,
            [name]: value
        })
    }
    async function getData() {
        try {
            const response = await axios.get('http://localhost:3001/getData');
            // console.log('Data received:', response.data);
            setReadData(response.data)
         
        } catch (error) {
            console.error('Error fetching data:', error);
            
        }
    }
    const handleSignIn = (e) => {
        e.preventDefault()
        getData()
        readData.map((e) => {
            if (userData.Name && (e.Name === userData.Name) && (e.Password === userData.Password) && userData.Password) {
                navigate1('/booking')
            }
            else {
                // console.log("hi")
                setError({
                    ...error,
                    Name: "* Enter the valid username",
                    Password: "* Enter the valid password"
                })
            }
            setUserData({
                Name: "",
                Password: ""
            })
        })
    }
    return (
        <div>
            <Header></Header>
            <section>
            <div className='Logi'>
            <div className='Logi-img '><img src={Regi2}></img></div>
            <div className='Logi-form '>
            <h1 className='text-success'>Login Form</h1>
            <br></br>
            <form onSubmit={handleSignIn}>
            <h5 className='text-success'>Name</h5>
           <div className="Log-input">     <input 
                    
                    type='text'
                    name='Name'
                    value={userData.Name}
                    onChange={handleChangein}></input>
                    </div>
                <p className="errortext">{error.Name}</p>
                <br></br>
                <h5 className='text-success'>Password</h5>
                <div className="Log-input">
                <input type='Password'
                    name='Password'
                    value={userData.Password}
                    onChange={handleChangein}></input>
                    </div>
                <p className="errortext">{error.Password}</p>
                <br></br>
                <div className="Lo-btn">
                <button type='submit' className='Logi-btn' onClick={getData}><h6 className='text-success'>Login</h6></button>
                </div>
            </form>
</div>
</div>
            </section>
            <Footer></Footer>
        </div>
    )
}

export default Login
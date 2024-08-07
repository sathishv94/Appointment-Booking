import React, { useState } from "react";
import Header from "../Header/Header";
import '../Admin/Admin.css'
import Footer from "../Footer/Footer";
import { useNavigate } from "react-router-dom";

function Admin(){

    const navigate=useNavigate()

    const [username,setUsername]=useState({
        Name:"",
        Password:""
    })
    const [error,setError]=useState({
        Name:"",
        Password:''
    })
    
    const handleChange=(e)=>{
        const {name, value}=e.target
        setUsername((prevData) => {
            return{
                ...prevData,
                [name]: value
            }
        })
        setError((prevError) => ({
            ...prevError,
            [name]: ""
        }));
    }
    const handleSubmit =  (e) => {
        e.preventDefault()
       if (username.Name === 'admin' && username.Password  === 'admin'){
        setError({})
        navigate('/hospital')
       }
        else  {

            setError({
                ...error,
                Name: "* Enter the valid Name",
                Password:"* Enter the valid Password"
            })
            return
        }
    }
  
    return(
        <div>
            <Header></Header>
            <section className="Admin">
            
            <div className='Ad-form '>
            <h1 className='text-primary'>Admin</h1>
            <br></br>
            <form onSubmit={handleSubmit} >
            <h5 className='text-primary'>Name</h5>
           <div className="Ad-input">     <input 
                    
                    type='text'
                    name='Name'
                    value={username.Name}
                    onChange={handleChange}
                    ></input>
                    </div>
                <p className="errortext">{error.Name}</p>
                <br></br>
                <h5 className='text-primary'>Password</h5>
                <div className="Ad-input">
                <input type='Password'
                    name='Password'
                    value={username.Password}
                    onChange={handleChange}
                    ></input>
                    </div>
                <p className="errortext">{error.Password}</p>
                <br></br>
                <div className="Ad-btn">
                <button type='submit' className='Admi-btn' ><h6 className='text-primary'>Login</h6></button>
                </div>
            </form>
</div>

            </section>
            <Footer></Footer>
        </div>
    )
}
export default Admin
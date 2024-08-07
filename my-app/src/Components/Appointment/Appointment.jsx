import React from "react";
import Header from "../Header/Header";
import Register from "../Register/Register";
import { Link } from "react-router-dom";

function Appointment(){
    return(
        <div>
            <Header></Header>
            <Register></Register>
   <Link to='/register'></Link>
   <Link to='/login'></Link>
        </div>
    )
}

export default Appointment 
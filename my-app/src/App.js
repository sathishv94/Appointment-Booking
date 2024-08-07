import { useState } from 'react'
import './App.css'
import Home from './Components/Home/Home'
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import img1 from './Components/Home/Assets/medi.png'
import Facility from './Components/Facility/Facility'
import Footer from './Components/Footer/Footer'
import logo from './Components/Home/Assets/medi.png'
import Header from './Components/Header/Header'
import Appointment from './Components/Appointment/Appointment'
import Login from './Components/Login/Login';
import Booking from './Components/Booking/Booking'
import Admin from './Components/Admin/Admin';
import Hospital from './Components/Hospital/Hospital'



function App() {

  return (
    <div>
      
       <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/facility" element={<Facility />} />
        <Route path="/appointment" element={<Appointment/>}/>
        <Route path='/login' element={<Login></Login>}/>
        <Route path='/booking' element={<Booking></Booking>}/>
        <Route path='/admin' element={<Admin></Admin>}></Route>
        <Route path='/hospital' element={<Hospital></Hospital>}></Route>
      </Routes>
    </Router>
    </div>
  )
}

export default App

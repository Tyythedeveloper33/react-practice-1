import React,  { useState } from 'react'
import "../App.css";


//
const Lognsig = ({onLogIn, onSignUp, clickIn, clickUp}) =>{





   return (
  <div className='Lognsig'>

  <button className="btn btn-primary" onClick={onLogIn}>LOG IN</button>
  <button className="btn btn-primary" onClick={onSignUp}>SIGN UP</button>
  </div>
  )









}






export default Lognsig

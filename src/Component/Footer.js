import React from 'react'
import {FaFacebook,FaInstagram} from 'react-icons/fa'


function Footer() {

  return (
    <div style={{backgroundColor:'lightblue' ,display:'flex',height:"150px",paddingTop:"30px"}}>
        <div style={{paddingLeft:'100px',textDecoration:"underline"}}>
        <h6>About Us</h6>
        <h6>Services</h6>
        <h6>Help & Contact </h6>
        </div>
        
        <div style={{paddingLeft:'500px'}}>
        <h6> Sell</h6>
        <ul > 
            <li>
                Start selling 
            </li>
            <li>
                Learn to Sell
            </li>
            
        </ul>
       </div> 
        
        <div style={{paddingLeft:'300px'}}>
        <h6> Social Media</h6>
        <ul style={{  listStyleType: "none"}}> 
            <li>
                <FaFacebook size="25px" color="blue"/>      Facebook 
            </li>
            <li>
               <FaInstagram size="25px" color="purple"/>    Instagram
            </li>
            
        </ul>
        </div>
    </div>
  )
}

export default Footer
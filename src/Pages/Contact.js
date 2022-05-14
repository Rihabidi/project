import React from 'react'
import { Form ,Button} from 'react-bootstrap'
import user1 from "../Images/user1.png"
import './Contact.css'
import {GiShoppingBag} from "react-icons/gi";
import {FaUserAlt} from "react-icons/fa";
import { Link } from "react-router-dom";


function Contact() {
  const handleSubmit = (event) => {
    event.preventDefault();
    
  }

  return (
    <div >
      <div>
            <Link to="/cart">
            <GiShoppingBag size="36px" color="green" style={{position: 'absolute',top: '3px', right: '20px',}}/>
            </Link>
            <Link to={"/contact"}>
            <FaUserAlt size="32px" color="black" style={{position: 'absolute',top: '3px', right: '80px',}}/>
            </Link>
          </div>
      <center>
        <Form className='formulaire' onSubmit={handleSubmit}>
        <img src={user1} alt='user'className='user' />
           
        <Form.Group className="mb-3" controlId="formBasicEmail" >
    
      <Form.Control type="text" placeholder="Enter name"/>
      </Form.Group>
    <Form.Group className="mb-3" controlId="formBasicEmail">
      
      <Form.Control type="email" placeholder="Enter email" />
      
    </Form.Group>
  <Form.Group className="mb-3" controlId="formBasicPassword">
     
      <Form.Control type="password" placeholder="Password" />
    </Form.Group>
    <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
     <Form.Control as="textarea" rows={3} placeholder="Enter you message" />
  </Form.Group>
 
    <Button variant="primary" type="submit">
      Submit
    </Button>
  </Form>
  </center>
  
  </div>
  )
}

export default Contact
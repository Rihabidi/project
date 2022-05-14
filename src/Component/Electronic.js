import React from 'react'
import { Card ,Button} from 'react-bootstrap'
import { Link } from 'react-router-dom'
import {useDispatch} from "react-redux"
import {GiShoppingBag} from "react-icons/gi";
import {FaUserAlt} from "react-icons/fa";
import {add} from "../Redux/action"





function Electronic({products}) {
 
  const dispatch=useDispatch();
  

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
      
      
      <div style={{display:"flex",flexWrap:"wrap",gap:"80px",paddingTop:"20px",paddingBottom:"20px"}}>
      {products.filter((el)=>el.name=="phones"||el.name=="laptop" ).map(el=>{
        return(
          <div>
            <Card style={{ width: '16rem' ,height:"400px"}}>
            <Card.Img variant="top" src={el.image} style ={{height:"250px"}} />
            <Card.Body>
            <Card.Title style={{fontSize:"18px"}}>{el.model}</Card.Title>
           <Card.Text>{el.price}  TND </Card.Text>
           <Button variant="primary" as={Link} to={`/details/${el.id}`}>Details</Button>
           <Button variant="success" style={{transform:"translate(20%,0%)"}} onClick={()=>dispatch(add(el))}>Add to cart</Button>
           </Card.Body>
           </Card>
         </div>)})}
      </div>
      
      

  </div>)}

export default Electronic
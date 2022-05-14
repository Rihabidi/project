import React from 'react'
import { Card ,Button} from 'react-bootstrap';
import { useNavigate, useParams } from 'react-router-dom';
import {GiShoppingBag} from "react-icons/gi";
import {FaUserAlt} from "react-icons/fa";
import { Link } from "react-router-dom";
import {useDispatch} from "react-redux"
import {add} from "../Redux/action"

function Details({products}) {
    let { id } = useParams();
    let navigate=useNavigate();
    const dispatch=useDispatch();
  return (
    <div>
     
    
        {products.filter((el)=>el.id==id).map((el)=>
           <div > 
              <div>
            <Link to="/cart">
            <GiShoppingBag size="36px" color="green" style={{position: 'absolute',top: '3px', right: '20px',}}/>
            </Link>
            <Link to={"/contact"}>
            <FaUserAlt size="32px" color="black" style={{position: 'absolute',top: '3px', right: '80px',}}/>
            </Link>
              </div>
             
              <Card style={{ width: '1000px',height:'600px',marginTop:"25px",marginBottom:"25px",marginLeft:"170px",display: "flex" }}>
              <center>
              <h1 >{el.model}</h1>
              <Card.Img variant="top" src={el.image} style ={{height:"300px", width: '250px'}} />
              </center>
             <Card.Body>
              <Card.Text>{el.description}</Card.Text>
              </Card.Body>
              <h4 style ={{paddingLeft: '20px',textDecoration:"underline"}}>{`Price:   ${el.price}`}</h4>
              <Button variant="primary" onClick={()=>navigate("/electronic")} style={{width:"200px" ,transform:"translate(0%,56%)"}}>go back</Button> 
              <Button variant="success" style={{width:"200px" ,transform:"translate(400%,-35%)"}} onClick={()=>dispatch(add(el))} >Add to cart</Button>
              </Card>
            </div>)}
    </div>

    
  )
}

export default Details
import React from 'react'
import {GiShoppingBag} from "react-icons/gi";
import {FaUserAlt} from "react-icons/fa";
import {TiArrowBack} from "react-icons/ti";
import { Link } from "react-router-dom";
import { useSelector,useDispatch } from 'react-redux';
import { Button } from 'react-bootstrap';
import './Panier.css'
import { add, dlt, remove } from '../Redux/action';




function Panier() {
  const cart=useSelector((state)=>state.carts);
  console.log(cart)
  const dispatch = useDispatch();
  const addition = (acc, currentvalue) => {
    return acc + currentvalue.price * currentvalue.quantity;
  };
  const total = cart.reduce(addition, 0);
  
  return (
    <div >
          <div>
            <Link to="/cart">
            <GiShoppingBag size="36px" color="green" style={{position: 'absolute',top: '3px', right: '20px',}}/>
            </Link>
            <Link to={"/contact"}>
            <FaUserAlt size="32px" color="black" style={{position: 'absolute',top: '3px', right: '80px',}}/>
            </Link>
            <Link to={"/electronic"}>
            <TiArrowBack size="42px" color="black" style={{position: 'absolute',top: '150px', left: '30px',}}/>
            </Link>
          </div>
          
          
          <div className="cart" >
            {cart.filter((el)=>el.name=="phones"||el.name=="laptop" ).map(el=>{
              return(

                <div className='cartstyle' >
              <div >
              <div className='crt'> 
              <img src={el.image}  />
              <h3 >{el.model}</h3>
              <p >Price: {el.price}  TND</p>
              <p >Amount: {Math.ceil(el.price*el.quantity)}  TND</p>
              </div>
              <Button variant="danger"  style={{transform: "translate(60%,20%)"}} onClick={()=>dispatch(remove(el.id))}>remove</Button>

              </div>
              
            <div>
              <Button variant="success"  onClick={()=>dispatch(add(el))}  >+</Button>
              <p>{el.quantity}</p>
              <Button variant="success" onClick={el.quantity <=1 ? ()=>dispatch(remove(el.id)) : ()=>dispatch(dlt(el))}>-</Button>
            </div>  
               </div>  
              
              )}) }
          </div>
          <hr/>
          
          {total > 0 && <h2 style={{textDecoration:"underline",paddingLeft:"950px"}}>Total: {Math.ceil(total)} TND</h2>}    
         
    </div>
  )
}

export default Panier
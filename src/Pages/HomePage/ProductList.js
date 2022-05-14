import React from 'react'
import ProductCard from './ProductCard'
import {products} from '../../Data'
import './ProductList.css'
import {GiShoppingBag} from "react-icons/gi";
import {FaUserAlt} from "react-icons/fa";
import { Link } from "react-router-dom";



function ProductList() {
 
  
  return (
    <div>
      <div>
            <Link to="/cart">
            <GiShoppingBag size="36px" color="green" style={{position: 'absolute',top: '3px', right: '20px',}}/>
            </Link>
            <Link to={"/contact"}>
            <FaUserAlt size="32px" color="black" style={{position: 'absolute',top: '3px', right: '80px',}}/>
            </Link>
          </div>
     <h2 >Electronics</h2>
      <br/>
      <div className=' style'  > 
      { products.filter(el=>el.id==="electronic").map(product=><ProductCard product={product}/>) }
      </div>
      <h2  >Fashion</h2>
      <br/>
      <div className=' style'  >
      { products.filter(el=>el.id==="fashion").map(product=><ProductCard product={product}/>) }
      </div>
      <h2>Beauty</h2>
      <br/>
      <div className=' style'   >
      { products.filter(el=>el.id==="beauty").map(product=><ProductCard product={product}/>) }
      </div>

      
    </div>
  )
}

export default ProductList
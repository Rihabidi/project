import React, { useEffect, useState } from "react";
import { Card ,Button} from 'react-bootstrap'
import axios from "axios";
import {GiShoppingBag} from "react-icons/gi";
import {FaUserAlt} from "react-icons/fa";
import { Link } from "react-router-dom";


function Fashion() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    axios
      .get('https://fakestoreapi.com/products')
      .then((res) => {
        setProducts(res.data);
        setLoading(false);
      })
      .catch((err) => console.log(err));
  }, []);
  console.log({ msg: "list of products", products });

  return (
    <div
      style={{
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "center",
        alignItems: "center",
        gap: "30px",
      }}
    >
      <div>
            <Link to="/cart">
            <GiShoppingBag size="36px" color="green" style={{position: 'absolute',top: '3px', right: '20px',}}/>
            </Link>
            <Link to={"/contact"}>
            <FaUserAlt size="32px" color="black" style={{position: 'absolute',top: '3px', right: '80px',}}/>
            </Link>
          </div>
      {loading ? (
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/b/b1/Loading_icon.gif?20151024034921"
          alt="details"
        />
      ) : (
        products.map((el) => <div>
          <Card style={{ width: '16rem' ,height:"400px"}}>
        <Card.Img variant="top" src={el.image} style ={{height:"250px"}} />
        <Card.Body>
          <Card.Title style={{fontSize:"15px"}}>{el.title}</Card.Title>
          <Button variant="primary" >Details</Button>
          <Button variant="success" style={{transform:"translate(20%,0%)"}}>Add to cart</Button>
        </Card.Body>
      </Card>
      </div>)
      )}
    </div>
  );
}

export default Fashion;
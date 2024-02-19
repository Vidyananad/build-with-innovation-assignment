import React, {useEffect, useState} from 'react';
import './home.css'
import { useNavigate } from 'react-router-dom';
import { CiShoppingCart } from "react-icons/ci";

function Home() {

const navigate = useNavigate();
const [product, setproduct] = useState([])
const [search, setsearch] = useState([])
const [count,setcount] = useState(0)


useEffect(()=>{
  const token = localStorage.getItem("token");
  
  if (!token){
     navigate("/login");
     return;
  }

  fetch('https://dummyjson.com/products')
    .then(res => res.json())
    .then(data => setproduct(data.products));        
}, [navigate]);

useEffect(()=>{
  fetch(`https://dummyjson.com/products/search?q=${search}`)
  .then(res => res.json())
  .then(data => setproduct(data.products));      
},[search])


const handleOnClick =()=>{
    fetch('https://dummyjson.com/products')
    .then(res => res.json())
    .then(data => setproduct(data.products.filter((each)=>{return (each.price>100)})))  
}

const handleOnClick2 =()=>{
  fetch('https://dummyjson.com/products?&select=title,price')
  .then(res => res.json())
  .then(data => setproduct(data.products.filter((each)=>{return (each.price<100)})))  
}


  return(
    <div className="container">
        <center><h1>Products List</h1></center>
        <div className='cartContainer'>
        <center>
          <div>
            <div>
               <h3>
                 <label htmlFor='cartImage'>Cart</label>
                 <CiShoppingCart /><span>:{count}</span>
                </h3>
            </div>
          </div>
        </center>
        </div>
        <label htmlFor='filter'>Filter by Price:</label>
        <button type="button" className='button' onClick={handleOnClick}>Price{'>'}$100</button>
        <button type="button" className='button' onClick={handleOnClick2}>Price{'<'}$100</button>
        <center>
          <div>
              <label htmlFor='search'>Search product: </label>
              <input name="search" onChange={e=>{setsearch(e.target.value)}} value={search} placeholder='search'/>
          </div>
        </center>
        <div className="listContainer">
          {product.map(eachproduct => {
            return (
                <div key={(eachproduct.id)} className="productCard">
                    <h2>{eachproduct.title}</h2>
                    <h4>{eachproduct.description}</h4>
                    <h4><span>$</span>{eachproduct.price}</h4>
                    <button type="button" onClick={()=>{setcount(count+1)}} className='button'>Add to Cart</button>
                </div>
            )
          })}
        </div>
    </div>
    
  );
  
}

export default Home

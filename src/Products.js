import React, {useEffect, useState} from "react";
import './products.css';

const Products=()=>{
    const [data,setData]=useState([]);
    const [filter,setFilter]=useState(data);
    const [loading, setLoading]=useState(true);

    let componentMounted=true;
    
    useEffect( ()=>{
      const getProducts=async ()=>{
        setLoading(true);
        const response=await fetch('https://fakestoreapi.com/products');

        if(componentMounted){
          setData(await response.clone().json());
          setFilter(await response.json());
          setLoading(false);
          console.log(filter);
        }
      }

      getProducts();

      return()=>{
        componentMounted=false;
      }

    },[]);

    return(<div>
      <div className="container">
          {filter.map((element)=>{
            return (
              <div className="product_box">{element.title}</div>
            )
          })}
          
      </div>
    </div>)
}
export default Products;
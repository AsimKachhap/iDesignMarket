import React, { useEffect } from "react";
import axios from "axios";
import {useSelector} from "react-redux";
import Product from "./SingleProduct";

const ProductListing = () => {
    const products = useSelector((state)=>state);

    const fetchProducts = async()=>{
        const response = await axios
            .get("https://dummyjson.com/products?limit=100")
            .catch((err)=>{
                console.log("Error", err);
            });
        console.log(response.data);
    }
     
    useEffect(()=>{
        fetchProducts()
    }, []);
    
  return (
    <Product/>
  )
}

export default ProductListing
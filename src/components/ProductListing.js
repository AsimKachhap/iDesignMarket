import React, { useEffect } from "react";
import axios from "axios";
import {useDispatch, useSelector} from "react-redux";
import ProductComponent from "./ProductComponent";
import { getProducts } from "../actions/productActions";

const ProductListing = () => {
    const products = useSelector((state)=>state);
    const dispatch = useDispatch();

    const fetchProducts = async()=>{
        const response = await axios
            .get("https://dummyjson.com/products?limit=100")
            .catch((err)=>{
                console.log("Error", err);
            });
        dispatch(getProducts(response.data));
    }
     
    useEffect(()=>{
        fetchProducts()
    }, []);
    console.log(products);
    
  return (
    <ProductComponent/>
  )
}

export default ProductListing
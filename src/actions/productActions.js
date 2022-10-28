import { GET_PRODUCT, GET_PRODUCTS } from "../constatnts/actionTypes"


export const getProducts = (products)=>{
    return{
        type: GET_PRODUCTS,
        payload: products,
    };
};

export const getProduct = (product)=>{
    return{
        type: GET_PRODUCT,
        payload: product,
    };
};


import { GET_PRODUCTS } from "../constatnts/actionTypes"


const initialState = {
    products:[],
};

export const productReducer = (state=initialState, {type, payload})=>{

    switch(type){
        case GET_PRODUCTS:
            return {...state, products:payload};
        default:
            return state;
    };
};
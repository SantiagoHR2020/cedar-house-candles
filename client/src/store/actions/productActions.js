import axios from "axios";
import { GET_PRODUCTS, GET_PRODUCT } from "./types";

export const getProducts = () => async (dispatch) => {
    try {
        const res = await fetch("/api/products");
        const data = await res.json();

        dispatch({
            type: GET_PRODUCTS,
            payload: data,
        });
    } catch (error) {
        console.error(error);
    }
};

export const getProduct = (id) => async (dispatch) => {
    try {
        const res = await fetch(`/api/products/${id}`);
        const data = await res.json();
        dispatch({
            type: GET_PRODUCT,
            payload: data,
        });
    } catch (error) {
        console.error(error);
    }
};

export const updateProductStock = async (productId, qty) => {
    try {
        await axios.put(`/api/products/product/${productId}/updateqty`, {
            qty: qty,
        });
    } catch (error) {
        console.error(error);
    }
};

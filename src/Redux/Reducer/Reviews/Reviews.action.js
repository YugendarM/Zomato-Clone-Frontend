import axios from "axios";
import { GET_REVIEWS,POST_REVIEWS } from "./Reviews.type";

export const getReviews = (resId) => async(dispatch) => {
    try{
        const reviewsList = await axios({
            method: "GET",
            url: `/reviews/${resId}`
        }) 
        return dispatch({type: GET_REVIEWS, payload: reviewsList.data});
    }
    catch (error){
        return dispatch({type: "Error", payload: error});
    }
};

export const postReviews = (reviewData) => async(dispatch) => {
    try{
        await axios({
            method: "POST",
            url:"/reviews/new"
        })
        return dispatch({
            type: POST_REVIEWS,
            payload: reviewData
        })
    }
    catch (error){
        return dispatch({type: "Error", payload: error});
    }
};


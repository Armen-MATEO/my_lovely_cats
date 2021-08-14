import {MORE_CATS,FETCH_ALL_CATS, FETCH_NAME, FETCH_CATEGORIES, START_LOADING, END_LOADING } from "../constants/actionTypes";
import * as api from '../api/index';

export const getCategories = () => async (dispatch) => {
    try {
      dispatch({ type: START_LOADING });
  
      const { data } = await api.fetchCategories();
  
      dispatch({ type: FETCH_CATEGORIES, payload: {  data } });
      dispatch({ type: END_LOADING });
    } catch (error) {
      console.log(error);
    }
  };


  export const getImages = () => async (dispatch) => {
    try {
      dispatch({ type: START_LOADING });
  
      const { data } = await api.fetchImages();
  
      dispatch({ type: FETCH_CATEGORIES, payload: {  data } });
      dispatch({ type: END_LOADING });
    } catch (error) {
      console.log(error);
    }
  };

  export const getName=(id)=>async(dispatch)=>{
    try {
      const {data}=await api.fetchName(id)
      dispatch({type: FETCH_NAME, payload: {data}})
    } catch (error) {
      console.log(error);
    }
  }

  export const getAllCats=()=> async(dispatch)=>{
    try {
      const {data}= await api.fetchAllCats()
      dispatch({type: FETCH_ALL_CATS, payload: {data}})
    } catch (error) {
      console.log(error);
    }
  }

  export const moreCats =()=> async(dispatch)=>{
    try {
      const {data} = await api.fetchMoreCats()
      dispatch({type:MORE_CATS, payload:{data }})
    } catch (error) {
      console.log(error);
    }
  }
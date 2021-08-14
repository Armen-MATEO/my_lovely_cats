
import {MORE_CATS,FETCH_ALL_CATS,FETCH_NAME, FETCH_CATEGORIES, FETCH_IMAGES, START_LOADING, END_LOADING } from "../constants/actionTypes";


const catsReducer = (state={categories:[], isLoading:true, images:[], more:[]},action)=>{

 switch(action.type){
    case START_LOADING:
        return { ...state, isLoading: true };
      case END_LOADING:
        return { ...state, isLoading: false };

    case FETCH_CATEGORIES: return{
        ...state,
        categories: action.payload.data,
        
    }
    case FETCH_IMAGES: return {
        ...state,
        images: action.payload.data
    }  
    case FETCH_NAME: return {
        ...state,
        images: action.payload.data,
        more:[]

    } 
    case FETCH_ALL_CATS: return {
       ...state,
        images: action.payload.data
    }
    case MORE_CATS: return{
        ...state,
        more: action.payload.data
    }



    default: return state
 }


}
export default catsReducer;
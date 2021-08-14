import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import {getAllCats, moreCats } from '../actions/cats'

const Image = (image) => {


const dispatch = useDispatch()
    
useEffect(()=>{
   dispatch(getAllCats())
},[dispatch])

const showMore=()=>{
    dispatch(moreCats())
}


const images = useSelector((state)=>state.catsReducer.images ) 
const moreImages = useSelector((state)=>state.catsReducer.more)   
    //console.log(images);

    return ( <>
    <h2>Cats photos</h2>
    
    {images.map((image)=>(

        <img key={image.id} src={image.url} alt='cats' height={image.height} width={image.width}/>
    ))}
   <div>
   <button className='btn' onClick={()=>{showMore()}}>show more</button>
   </div>
   {moreImages.map((image)=>(
 <img key={image.id} src={image.url} alt='cats' height={image.height} width={image.width}/>
   )) }
    
    </> );
}
 
export default Image;
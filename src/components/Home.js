import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import  {getCategories  } from '../actions/cats'
import Categorie from './Categorie'
import Image from './Iamge'

const Home = () => {

    const dispatch = useDispatch()

 useEffect(()=>{

     dispatch(getCategories())
     
 },[dispatch]) 
 
 
 const categories = useSelector((state)=>state.catsReducer.categories) 
 
  //console.log(categories);
    return ( 
    <>
    <h1>lovey cats</h1>
    <section>
       
       
       
      <div>
          
        {categories.map((categorie)=>(

            <Categorie

            key={categorie.id}
            name={categorie.name}
            id={categorie.id}

            
            />
         ) )}
          </div> 
          
       
<Image/>


    </section>

    </> 
    );
}
 
export default Home;
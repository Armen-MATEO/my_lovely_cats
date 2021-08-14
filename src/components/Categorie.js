import {  useDispatch } from "react-redux" 

import { getName } from "../actions/cats"



const Categorie = ({name, id}) => {
     const dispatch =useDispatch()


    

    const filterItems = (id)=>{
        dispatch(getName(id))
      
    }
    return ( 
    <>
   
    <div>
        <button
        className='sidebtn'
        onClick={()=>filterItems(id)}
        >

        {name}
        </button>
    </div>

    
    
    </>
     );
}
 
export default Categorie;
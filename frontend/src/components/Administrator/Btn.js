import React from "react";
import { Link } from "react-router-dom";
const Btn=({id, deleteFunction, updateFunction, viewDetails})=>{
    return(
        <>
        
        {updateFunction?
            <a onClick={()=>updateFunction(id)}><i className="fa-solid fa-pen btn btn-primary m-1"></i></a>
        :''}
        {viewDetails?	
            <a onClick={()=>viewDetails(id)}><i className="fa-solid fa-eye btn btn-warning m-1"></i></a>
        :""}
        {deleteFunction?
            <a onClick={()=>deleteFunction(id)} ><i className="fa-solid fa-trash btn btn-danger"></i></a>
        :""}
        </>
    );
}
export default Btn;
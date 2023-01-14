import { Link, useParams } from "react-router-dom";
import react, { useState, useEffect } from "react";
import axios from "axios";
import toastr from "toastr";
import MetaData from "./MetaData";
const Sidebar=({posts})=>{
    let {cname, slug} = useParams();
   
    return(
        <>
        
            <div className="list-group">
           
            {posts!== '' ?
                posts.map((item) => {
                    return(

                        
                        <Link to={`${cname}/${item.slug}`} className="list-group-item text-capitalize" key={item._id}>{item.title}</Link>
                        
                        
                        
                    
                    );
                })
            : ''}   
            </div>

        </>
    );
}
export default Sidebar;
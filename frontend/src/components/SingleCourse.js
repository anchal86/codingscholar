import { Link, useParams, useNavigate } from "react-router-dom";
import React, {useState, useEffect} from "react";
import Sidebar from "./layouts/Sidebar";
import Newsletter from "./layouts/Newsletter";
import axios from "axios";
import MetaData from "./layouts/MetaData";
const SingleCourse=()=>{
    let {slug, cname} = useParams();
    const [courseName, setCourseName]=useState('');
    const [postContent, setPostContent]=useState('');
    const [prevPost, setPrevPost]=useState('');
    const [nextPost, setNextPost]=useState('');
    const [val, setVal]=useState('');
    const navigate = useNavigate();
    useEffect(() => {
		(async () => {
            await axios.get(`http://localhost:8000/api/v1/post/slug/${slug}`,
				{
					headers: {
						'Content-Type': 'application/json'
					}
				}
			).then(async function (data) {
                // console.log(data)
				if (data.data.msg) {
                  
                    // console.log(data.data.msg.courseID)
					setPostContent(data.data.msg);
                    
				}
			})

            
		})()
	},[slug])

    const handlePrevClick=async(id, cname)=>{
        await axios.get(`http://localhost:8000/api/v1/post/prev/${id}`,
				{
					headers: {
						'Content-Type': 'application/json'
					}
				}
			).then(async function (data) {
                console.log(data)
				if (data.data.msg) {
                  
                    // console.log(data.data.msg)
					navigate(`/course/${cname}/${data.data.msg[0].slug}`);
                   
                  
                    
				}
			})
    }

    const handleNextClick=async(id,cname)=>{
        await axios.get(`http://localhost:8000/api/v1/post/next/${id}`,
				{
					headers: {
						'Content-Type': 'application/json'
					}
				}
			).then(async function (data) {
                console.log(data)
				if (data.data.msg) {
                  
                    // console.log(data.data.msg)
					navigate(`/course/${cname}/${data.data.msg[0].slug}`);
                   
                  
                    
				}
			})
    }

    return(
        <>
            
            { postContent!=='' ?
                
                <>
                    
                    <MetaData  
                        title={postContent.title +" - "+ cname.replace(/\-+/g, ' ')}
                        metaDescription={postContent.metaDescription} 
                        metaKeywords={postContent.metaKeywords} 
                        canonical={cname/postContent.slug}
                        
                        
                    />
                    <div className="post-title py-2 mb-5">
                        <h1 className="text-center text-white mt-3">{postContent.title}</h1>
                    </div>
                     <div>{postContent.postContent}</div>
                    <nav aria-label="..." className="w-100" >
                        
                        <p className="d-flex  flex-wrap justify-content-between ">
                            <button onClick={()=>handlePrevClick(postContent._id, cname)} className="btn btn-dark btn-10">
                                <i className="fa-solid fa-arrow-left-long"></i> Previous 
                            </button>
                                

                            <button onClick={()=>handleNextClick(postContent._id, cname)} className="btn btn-dark btn-10">
                                Next <i className="fa-solid fa-arrow-right-long">
                            </i></button>
                                

                        </p>

                    </nav>
                </>
            :''}

        
        </>
    );
}
export default SingleCourse;
import { Outlet } from "react-router";
import Sidebar from "./Sidebar";
import Newsletter from "./Newsletter";
import { useParams } from "react-router";
import React, {useEffect, useState} from "react";
import axios from "axios";
import MetaData from "./MetaData";
const PostLayout=()=>{
    let {cname} = useParams();
    let str = cname.replace(/\-+/g, ' ');

    const [posts, setPosts]=useState('');
    const [course, setCourse]=useState('');

    useEffect(() => {
		(async () => {
			await axios.get(`http://localhost:8000/api/v1/course/name/${str}`,
				{
					headers: {
						'Content-Type': 'application/json'
					}
				}
			).then(async function (data) {

				if (data.data.msg) {
                    // console.log(data.data.msg);
					setCourse(data.data.msg);
                    postDetails(data.data.msg[0]._id);
                    
                    
				}
			})

         

            
		})()
	}, [])

    const postDetails = async (data) => {
        // console.log(data)

        await axios.get(`http://localhost:8000/api/v1/course/${data}`,
            {
                headers: {
                    'Content-Type': 'application/json'
                }
            }
        ).then(function (data) {

           if (data.data.msg) {
            // console.log(data.data.posts)
               
                setPosts(data.data.posts);
                
            }
        })
    }

    return(
        <>
            <section className="py-5">
                <div className="container">
    
                    <div className="row">
                        <div className="col-lg-3 mb-4 sidebar">
                            <Sidebar posts={posts}  />
                        </div>
                        <div className="col-lg-9 mb-4">
                            <Outlet/>
                        </div>
                    </div>
                </div>
            </section>
            <Newsletter/> 
        </>
    );
}
export default PostLayout;
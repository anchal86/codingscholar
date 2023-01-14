import { Link, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import toastr from "toastr";
import axios from "axios";
import CourseSpeciality from "./layouts/CourseSpeciality";
import Newsletter from "./layouts/Newsletter";
import MetaData from "./layouts/MetaData";

const Courses=()=>{
    const [allCourses, setAllCourses]=useState('');
    const [val, setVal] = useState('');
    const navigate = useNavigate();

	useEffect(() => {
		(async () => {
			
			await axios.get(`http://localhost:8000/api/v1/course`,
				{
					headers: {
						'Content-Type': 'application/json'
					}
				}
			).then(function (data) {

				if (data.data.errors) {
					toastr.options.progressBar = true;
					toastr.warning(data.data.errors)
				} else if (data.data.msg) {
					setAllCourses(data.data.msg);
				}
			})
		})()
	}, [val])

    const urlNavigate=(cname, slug)=>{
        navigate(`/course/${cname}/${slug}`);
    }

    return(
        <>
        <MetaData title="Courses" canonical="courses" />
        <div className="jumbotron py-2">
                <h1 className="text-center text-white mt-5 py-3">Our Courses</h1>
        </div>
        {/*courses-start */}
        <section className="py-5 pcourses">
            <div className="container">
                
            <div className="d-flex justify-content-around align-items-center flex-wrap py-5">    
                {allCourses!== '' ?
                allCourses.map((item) => {
                    let cname = item.course.name.replace(/\s+/g, '-');  
                    
                return (  
                    <div className="card m-2 shadow-lg p-3 bg-body rounded" 
                        onClick={()=>urlNavigate(cname, item.firstPost.slug)} 
                        key={item.course._id}
                    >
                        <div className="img">
                            <img src="img/1.png" className="card-img-top w-100" alt="..." />
                        </div>
                        <div className="card-body">
                            {/* <h6 className="card-subtitle mt-3 mb-3 text-muted">Photoshop</h6> */}
                            <h5 className="card-title text-uppercase">{item.course.name}</h5>
                        </div>
                        
                        <div className="card-footer bg-transparent">
                            {item.postCount== 0 ?
                            <button className="btn btn-dark disabled">Coming Soon...</button> 
                            :
                            <button className="btn btn-dark">Start Here...</button> 
                            }    
                        </div>

                    </div>          
                    );
                })
                
            : ''}   
    
                </div>
            </div>
            
        </section>

        {/*courses-end */}
        <CourseSpeciality/>
        <Newsletter/>

        </>
    );
}
export default Courses;
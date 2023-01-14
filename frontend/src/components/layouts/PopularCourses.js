import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from "axios";
import toastr from 'toastr';
import './css/popular-courses.css'
const PopularCourses=()=>{
    const [allCourses, setAllCourses]=useState('');
    const [val, setVal] = useState('');
    const navigate = useNavigate();

    useEffect(() => {
		(async () => {
			
			await axios.get(`http://localhost:8000/api/v1/course/latest`,
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
{/* popular-courses-start */}
    <section className="py-5">
        <div className="container text-center">
            <div className="col-xl-12">
                    <h3 className="display-4 text-center">Popular Courses</h3>
                    <p className="p text-center text-muted">Your domain control panel is designed for ease-of-use and <br/> allows for all aspects of your
                            domains.</p>
            </div>
            <div className="pcourses d-flex justify-content-around align-items-center flex-wrap py-5">      
            {allCourses!== '' ?
                allCourses.map((item) => {
                    
                let cname = item.course.name.replace(/\s+/g, '-');
                return(
                    <div className="card m-2 shadow-lg p-3 bg-body rounded"
                    onClick={()=>urlNavigate(cname, item.firstPost.slug)} 
                    key={item.course._id}>
                        <div className="img">
                            <img src="img/1.png" className="card-img-top w-100" alt="..." />
                        </div>
                        <div className="card-body">
                            
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
            <Link to="/courses" className="btn btn-outline-info mbtn mt-4 ">More Courses</Link>
        </div>
        
    </section>

{/* popular-courses-end */}
        </>
    );
}
export default PopularCourses;
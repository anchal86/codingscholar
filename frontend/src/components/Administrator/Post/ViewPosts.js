import { useEffect, useState } from "react";
import { useParams, useNavigate, Link} from 'react-router-dom';
import axios from "axios";
import Btn from "../Btn";
import toastr from "toastr";
const ViewPosts=()=>{
    const user = JSON.parse(localStorage.getItem('user'));
    const [allPosts, setAllPosts]=useState('');
    const[courseID, setCourseID]=useState('');
    const [val, setVal]=useState('');
    const navigate=useNavigate('');

    let i = 0;
	useEffect(() => {
		(async () => {
			
			await axios.get(`http://localhost:8000/api/v1/post`,
				{
					headers: {
						"Authorization": `Bearer ${user.token}`,
						'Content-Type': 'application/json'
					}
				}
			).then(function (data) {

				if (data.data.errors) {
					toastr.options.progressBar = true;
					toastr.warning(data.data.errors)
				} else if (data.data.msg) {
					// setAllPosts(data.data.msg);
                    
				}
			})

            await axios.get(`http://localhost:8000/api/v1/course`,
				{
					headers: {
						"Authorization": `Bearer ${user.token}`,
						'Content-Type': 'application/json'
					}
				}
			).then(function (data) {

				if (data.data.errors) {
					toastr.options.progressBar = true;
					toastr.warning(data.data.errors)
				} else if (data.data.msg) {
                   console.log(data.data.msg)
					setCourseID(data.data.msg);
                    
				}
			})

		})()
	}, [val])

    const deleteFunction = async (data) => {
		if (window.confirm("Are you Sure, you want to delete") == true) {
			await axios.delete(`http://localhost:8000/api/v1/post/${data}`,
				{
					headers: {
						"Authorization": `Bearer ${user.token}`,
						'Content-Type': 'application/json'
					}
				}
			).then(function (data) {
				if (data.data.msg) {
					toastr.options.progressBar = true;
					toastr.success("Post Delete Successfully!")
				} else if (data.data.errors) {
					toastr.options.progressBar = true;
					toastr.warning("Something Went Wrong");
                    setVal();

                    // navigate("admininstrator/course/view");
				}
			})
		}
	}

    return(
        <>
        <div className="alert alert-secondary text-center form-heading text-wrap">
            View Posts
        </div>
        <div className="d-flex flex-wrap justify-content-around align-items-center mb-5">
            <div className="card card-width mt-2">
                <div className="card-header">
                    
                        <Link to="/administrator/post" className="btn btn-primary m-1">
                            <i className="fa-solid fa-circle-plus"></i> New Post
                        </Link>
                        
                    
                </div>
                <div className="card-body">    
                    <div className="table-responsive">
                        <table className="table table-hover table-bordered">
                            <thead className="thead-dark bg-dark text-white">
                                <tr>
                                    <th scope="col">Sr.</th>
                                    <th scope="col">Title</th>
                                    <th scope="col">Course</th>
                                    <th scope="col">Action</th>
                                </tr>
                            </thead>
                            <tbody>
                            {allPosts!== '' ?
                                allPosts.map((item) => {
                                    i++;
                                        
                                return (
                                    <tr key={item._id}>
                                        <th scope="row">{i}.</th>
                                        <td>{item.title}</td>
                                        <td>
                                        {courseID !== '' ?
                                                courseID.map((data) => {
                                                    if (data.course._id == item.courseID) {

                                                        return (
                                                        <Link to={`/administrator/course/${data.course._id}`} className="">
                                                           {data.course.name}
                                                        </Link>
                                                        )
                                            	    }

                                                })

                                            : ''}
                                        </td>
                                        <td>
                                            <Btn
                                                id={item._id}          
                                                updateFunction={(data) => navigate(`/administrator/post/update/${data}`)}
                                                deleteFunction={deleteFunction}
                                                /* viewDetails={viewDetails} */

                                            />
                                        </td>
                                    </tr>
                                            
                                    );
                                })
                            : ''}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
        </>
    );
}
export default ViewPosts;
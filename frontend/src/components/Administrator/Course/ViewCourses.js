import { useEffect, useState } from "react";
import { useParams, useNavigate, Link} from 'react-router-dom';
import axios from "axios";
import Btn from "../Btn";
import toastr from "toastr";
const ViewCourses=()=>{
    const user = JSON.parse(localStorage.getItem('user'));
    const [allCourses, setAllCourses]=useState('');
    const [courseID, setCourseID]=useState('');
    const [val, setVal] = useState('');
	const navigate = useNavigate('');

    let i = 0;
	useEffect(() => {
		(async () => {
			
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
                    // console.log(data.data.msg)
					setAllCourses(data.data.msg);
                    
				}
			})

            
		})()
	}, [val])
   
    const deleteFunction = async (data) => {
		if (window.confirm("Are you Sure, you want to delete") == true) {
			await axios.delete(`http://localhost:8000/api/v1/course/${data}`,
				{
					headers: {
						"Authorization": `Bearer ${user.token}`,
						'Content-Type': 'application/json'
					}
				}
			).then(function (data) {
				if (data.data.msg) {
					toastr.options.progressBar = true;
					toastr.success("Course Delete Successfully!")
                   
				} else if (data.data.errors) {
					toastr.options.progressBar = true;
					toastr.warning("Something Went Wrong!");
                   
				}
                setVal();
			})
		}
	}
    return(
        <>
            
        <div className="alert alert-secondary text-center form-heading text-wrap">
            View Courses
        </div>
        <div className="d-flex flex-wrap justify-content-around align-items-center mb-5">
            <div className="card card-width mt-2">
                <div className="card-header">
                    
                        <Link to="/administrator/course" className="btn btn-primary">
                            <i className="fa-solid fa-circle-plus"></i> New Course
                        </Link>
                    
                </div>
                <div className="card-body">    
                    <div className="table-responsive">
                        <table className="table table-hover table-bordered">
                            <thead className="thead-dark bg-dark text-white">
                                <tr>
                                    <th scope="col">Sr.</th>
                                    <th scope="col">Name</th>
                                    <th scope="col">Total Posts</th>
                                    <th scope="col">Action</th>
                                </tr>
                            </thead>
                            <tbody>
                            {allCourses!== '' ?
                                allCourses.map((item) => {
                                    i++;
                                        
                                return (
                                    <tr key={item.course._id}>
                                        <th scope="row">{i}</th>
                                        <td>{item.course.name}</td>
                                        <td className="text-center">
                                            <Link to={`/administrator/course/${item.course._id}`}>
                                            Posts &nbsp;
                                            <span className="badge bg-dark">{item.postCount}</span>
                                            </Link>
                                        </td>
                                       
                                        <td>
                                            <Btn
                                                id={item.course._id}          
                                                updateFunction={(data) => navigate(`/administrator/course/update/${data}`)}
                                                deleteFunction={deleteFunction}
                                                // viewDetails={(data) => navigate(`/administrator/course/${data}`)}

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
    )
}
export default ViewCourses;
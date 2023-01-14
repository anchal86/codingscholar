import { useEffect, useState } from "react";
import { useParams, useNavigate, Link} from 'react-router-dom';
import axios from "axios";
import Btn from "./Btn";
import toastr from "toastr";
const Dashboard=()=>{
    const user = JSON.parse(localStorage.getItem('user'));
    
    const [latestPosts, setLatestPosts]=useState('');
    const [course, setCourse]=useState('');
    const [stats, setStats]=useState('');
    const [val, setVal] = useState('');
	const navigate = useNavigate('');
    
    let i = 0;
	useEffect(() => {
		(async () => {
			

           await axios.get(`http://localhost:8000/api/v1/post/latest`,
				{
					headers: {
						"Authorization": `Bearer ${user.token}`,
						'Content-Type': 'application/json'
					}
				}
			).then(function (data) {

				if (data.data.msg) {
                    
                    setLatestPosts(data.data.msg);
				} else if (data.data.msg) {
                    // console.log(data.data);
					setLatestPosts(data.data.msg);
                    
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

				if (data.data.msg) {
					setCourse(data.data.msg);
				}
                //  else if (data.data.msg) {
				// 	setCourse(data.data.msg);
                    
				// }
			})

            await axios.get(`http://localhost:8000/api/v1/stats`,
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
                // console.log(data.data.msg);
                setStats(data.data.msg);
                
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
        <section className="py-3">
            <div className="container">
                <div className="d-flex justify-content-around align-items-center flex-wrap"> 
            
                    <Link to={`/administrator/course/view`}>   
                        <div className="card m-2 shadow-sm bg-dark text-white rounded">
                            <div className="card-body text-center justify-content-center">
                                
                                <h5 className="card-title">Total Courses</h5>
                                <p className="card-text"><span className="badge bg-danger">{stats.courses!== '' ?stats.courses:'0'}+</span></p>
                            </div>
                        </div>
                    </Link>  
                    
                    <Link to={`/administrator/subscribers/view`}>
                    <div className="card m-2 shadow-sm bg-dark text-white rounded">
                        <div className="card-body text-center justify-content-center">
                            
                            <h5 className="card-title">Subscribers</h5>
                            <p className="card-text"><span className="badge bg-danger">{stats.subscribers!== '' ?stats.subscribers:'0'}+</span></p>
                        </div>
                    
                    </div>
                    </Link>
                    <Link to={`/administrator/requests/view`}>
                    <div className="card m-2 shadow-sm bg-dark text-white rounded">
                        <div className="card-body text-center justify-content-center">
                            
                            <h5 className="card-title">Contact Requests</h5>
                            <p className="card-text"><span className="badge bg-danger">{stats.contacts!== '' ?stats.contacts:'0'}+</span></p>
                        </div>
                        
                    </div>
                    </Link>
                    
                </div>
            </div>

        </section>
        <section className="py-5 mb-5">
            <div className="container">
                <h3>Latest Posts</h3>
                <div className="d-flex flex-wrap">
                    
                    <div className="table-responsive w-100">
                            <table className="table table-hover table-bordered">
                                <thead className="thead-dark bg-dark text-white">
                                    <tr>
                                        <th scope="col">Sr.</th>
                                        <th scope="col">Post Title</th>
                                        <th scope="col">Course</th>
                                        <th scope="col">Action</th>
                                    </tr>
                                </thead>
                                <tbody>
                                {latestPosts!== '' ?
                                    latestPosts.map((item) => {
                                        i++;
                                            
                                    return (
                                        <tr key={item._id}>
                                            <th scope="row">{i}.</th>
                                            <td>{item.title}</td>
                                            <td>
                                            {course !== '' ?
                                                course.map((data) => {
                                                    if (data.course._id == item.courseID) {

                                                        return (
                                                        <Link to={`/administrator/course/${data.course._id}`} className="" key={data.course._id}>
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
           
        </section>

        </>
    );
}
export default Dashboard;
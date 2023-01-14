import { useEffect, useState } from "react";
import { useParams, useNavigate, Link} from 'react-router-dom';
import axios from "axios";
import Btn from "../Btn";
import toastr from "toastr";
const FullCourse=()=>{
    const {id}=useParams();
    const user = JSON.parse(localStorage.getItem('user'));
    const [course, setCourse]=useState('');
    const [posts, setPosts]=useState('');
    const [val, setVal] = useState('');
	const navigate = useNavigate('');

    let i = 0;
	useEffect(() => {
		(async () => {
			
			await axios.get(`http://localhost:8000/api/v1/course/${id}`,
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
					setCourse(data.data.msg);
                    setPosts(data.data.posts);
                    
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
        <div className="alert alert-secondary text-center form-heading text-wrap text-uppercase">
            {course.name}
        </div>
        <div className="d-flex flex-wrap justify-content-around align-items-center mb-5">
            <div className="card card-width mt-2">
                <div className="card-header">
                    
                        <Link to="/administrator/post" className="btn btn-primary">
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
                                    <th scope="col">Action</th>
                                </tr>
                            </thead>
                            <tbody>
                            {posts!== '' ?
                                posts.map((item) => {
                                    i++;
                                        
                                return (
                                    <tr key={item._id}>
                                        <th scope="row">{i}</th>
                                        <td>{item.title}</td>
                                       
                                        <td>
                                            <Btn
                                                id={item._id}          
                                                updateFunction={(data) => navigate(`/administrator/post/update/${data}`)}
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
    );
}
export default FullCourse;
import { useEffect, useState } from "react";
import { useNavigate} from 'react-router-dom';
import axios from "axios";
import toastr from "toastr";
import Btn from "../Btn";
const ViewSubscribers=()=>{
    const user = JSON.parse(localStorage.getItem('user'));
    const [subscribers, setSubscribers]=useState('');
    const [val, setVal] = useState('');
    const navigate = useNavigate('');

    let i = 0;
	useEffect(() => {
		(async () => {
			
			await axios.get(`http://localhost:8000/api/v1/subscriber`,
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
					setSubscribers(data.data.msg);
                    
				}
			})
		})()
	}, [val])
    const deleteFunction = async (data) => {
		if (window.confirm("Are you Sure, you want to delete") == true) {
			await axios.delete(`http://localhost:8000/api/v1/subscriber/${data}`,
				{
					headers: {
						"Authorization": `Bearer ${user.token}`,
						'Content-Type': 'application/json'
					}
				}
			).then(function (data) {
				if (data.data.msg) {
					toastr.options.progressBar = true;
					toastr.success("Subscriber Delete Successfully!")
				} else if (data.data.errors) {
					toastr.options.progressBar = true;
					toastr.warning("Something Went Wrong!");
                    // navigate("admininstrator/course/view");
				}
			})
		}
	}
    return(
        <>
        <div className="alert alert-secondary text-center form-heading text-wrap">
                Subscribers
        </div>

        <div className="d-flex flex-wrap justify-content-around align-items-center mb-5">
            <div className="card card-width mt-2">
                <div className="card-body">    
                    <div className="table-responsive">
                        <table className="table table-hover table-bordered">
                            <thead className="thead-dark bg-dark text-white">
                                <tr>
                                    <th scope="col">Sr.</th>
                                    <th scope="col">Email</th>   
                                    <th scope="col">Action</th>
                                </tr>
                            </thead>
                            <tbody>
                            {subscribers!== '' ?
                                subscribers.map((item) => {
                                    i++;
                                        
                                return (
                                    
                                    <tr key={item._id}>
                                        <th scope="row">{i}</th>
                                        <td>{item.email}</td>
                                        <td>
                                        <Btn
                                                id={item._id}          
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
export default ViewSubscribers;
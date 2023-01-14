import { useEffect, useState } from "react";
import axios from "axios";
import toastr from "toastr";
import Btn from "../Btn";
const ViewRequests=()=>{
    const user = JSON.parse(localStorage.getItem('user'));
    const [contactRequest, setContactRequest]=useState('');
    const [message, setMessage]=useState('');
    const [val, setVal]=useState('');
    let i = 0;
	useEffect(() => {
		(async () => {
			
			await axios.get(`http://localhost:8000/api/v1/contact`,
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
					setContactRequest(data.data.msg);
                    
				}
			})
		})()
	}, [])
    var popup=document.querySelector('.popup')
    const viewDetails=async(id)=>{
        await axios.get(`http://localhost:8000/api/v1/contact/${id}`,
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
				setMessage(data.data.msg);
                popup.classList.add('d-block')
                popup.classList.remove('d-none')
				
			}
		})

    }

    const deleteFunction = async (data) => {
		if (window.confirm("Are you Sure, you want to delete") == true) {
			await axios.delete(`http://localhost:8000/api/v1/contact/${data}`,
				{
					headers: {
						"Authorization": `Bearer ${user.token}`,
						'Content-Type': 'application/json'
					}
				}
			).then(function (data) {
				if (data.data.msg) {
					toastr.options.progressBar = true;
					toastr.success(data.data.msg)
				} else if ("Contact Request Deleted Successfully!") {
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
            Contact Request
        </div>

        <div className="d-flex flex-wrap justify-content-around align-items-center mb-5 display-container">
            <div className="card card-width mt-2">
                <div className="card-body">    
                    <div className="table-responsive">
                        <table className="table table-hover table-bordered">
                            <thead className="thead-dark bg-dark text-white">
                                <tr>
                                    <th scope="col">Sr.</th>
                                    <th scope="col">Name</th>
                                    <th scope="col">Email</th>
                                    <th scope="col">PhoneNo.</th>
                                    <th scope="col">Action</th>
                                </tr>
                            </thead>
                            <tbody>
                            {contactRequest!== '' ?
                                contactRequest.map((item) => {
                                    i++;
                                        
                                return (
                                    <tr key={item._id}>
                                        <th scope="row">{i}</th>
                                        <td>{item.name}</td>
                                        <td>{item.email}</td>
                                        <td>{item.phoneNo}</td>
                                        <td>
                                            <Btn
                                                id={item._id}
                                                deleteFunction={deleteFunction}
                                                viewDetails={viewDetails}
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
            <div className="popup d-none bg-info w-50 text-center">
                <div>
                {message!== '' ?
                <>
                    <div className="p-5">
                   
                   
                        <p className="fw-bold">Name: {message.name}</p>
                        <p className="fw-bold">Email: {message.email}</p>
                        <p className="fw-bold">Phone: {message.phoneNo}</p>
                        <p className="fw-bold">Message: {message.message}</p>
                      
                    

                    </div>
                    <div className="p-2 close" onClick={() =>{
                        popup.classList.remove("d-block")
                        popup.classList.add("d-none")
                    }}>
                        <i className="fa-solid h4 fa-xmark m-0"></i>
                    </div>
                </>
                 : ''}
                  
                </div>
            </div>
            

        </div>
        </>
    );
}
export default ViewRequests;
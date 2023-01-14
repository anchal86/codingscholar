import React, {useState, useEffect} from "react";
import InputFields from '../../InputFields';
import axios from "axios";
import toastr from "toastr";
import { useNavigate, Link} from "react-router-dom";
const NewCategory=()=>{
    const user = JSON.parse(localStorage.getItem('user'));
    const [name, setName]=useState('');
    const [image, setImage]=useState('');
    const [error, setError]=useState('');
    const navigate = useNavigate();

    const setImageFunction=(data)=>{
        if(!data) return
        const reader=new FileReader()
        reader.readAsDataURL(data)
        reader.onloadend=()=>setImage(reader.result)
    }
    const handleSubmit=async(e)=>{
        e.preventDefault();
        setError('');
		await axios.post(`http://localhost:8000/api/v1/course`,
			{ 
                // "parentCategoryID" : courseID,
				"name" : name,
                "image": image

            },
			{
				headers: {
					"Authorization": `Bearer ${user.token}`,
					'Content-Type': 'application/json'
				}
			}
		).then(function (data) {
            // console.log(data.data);
			if (data.data.errors) {
                // console.log(data.data.errors)
				setError(data.data.errors)
			} else if (data.data.msg) {
                setTimeout(() => {
                    toastr.options.progressBar = true;
                    toastr.info("New Course Added Successfully.");
                }, 3000);
                // console.log(data.data.msg);
				
                navigate("view");

	
			}
		})
    }
    console.log(error.image)
    return(
        <>
        <div className="d-flex justify-content-around align-items-center flex-wrap mb-4 py-5">
            <div className="card card-width mt-2">
                <div className="card-header">
                    
                        <Link to="/administrator/course/view" className="btn btn-dark">
                            <i className="fa-solid fa-eye"></i> View Courses
                        </Link>
                    
                    <h3 className="text-center form-heading">New Course</h3>
                </div>
                <div className="card-body">
                
                <form className="py-2" onSubmit={handleSubmit}>
                
                    <div className="control-group form-group m-2 p-2">
                        <div className="controls">
                            <InputFields
								label="Course Name"
                                mandatory="*"
								type="text"
                                name="name"
								value={name}
								placeholder=" Enter Course Name"
								dataTransfer={(e) => setName(e)}
							/>
                             <span className="error">{error.name}</span> 
                        </div>
                    </div>
                    <div className="control-group form-group m-2 p-2">
                        <div className='form-group my-2' >
                            <label htmlFor='InputFields' className="mb-2">Course Image 
                            <span className="text-danger px-1 h4 m-0">*</span>
                            </label>
                            <input 
                            className="form-control"
                            type="file"
                            onChange={(val)=>setImageFunction(val.target.files[0])}
                            />
                        </div>
                        <span className="error">{error.image}</span> 
                    </div>
                      
                    <div id="success"></div>
                    {/* For success/fail messages */}
                    <button type="submit" className="btn cbtn btn-block btn-10 m-3"><i className="fa-solid fa-circle-plus"></i> Add Course</button>
                </form>
                </div>  
            </div>
        </div>
        </>
    );
}
export default NewCategory;
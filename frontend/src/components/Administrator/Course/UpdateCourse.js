import React, { useState, useEffect } from "react";
import InputFields from "../../InputFields";
import toastr from "toastr";
import axios from "axios";
import { useNavigate, useParams, Link } from "react-router-dom";
const UpdateCourse=()=>{

    const user = JSON.parse(localStorage.getItem('user'));
    const [_id, setID]=useState('');
    const [name, setName]=useState('');
    const [image, setImage]=useState(null);
    const [img, setImg]=useState('');
    const [imag, setImag]=useState('');
    const [error, setError]=useState('');
    const navigate = useNavigate();
    const {id}=useParams();

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
                    console.log(data.data)
                    setID(data.data.msg._id);
                    setName(data.data.msg.name);
                    setImg(data.data.msg.image.url);
                    setImag(data.data.msg.image);
                
                }
            })
            
            
        })()
    }, [])

    const setImageFunction=(data)=>{
        if(!data) return
        const reader=new FileReader()
        reader.readAsDataURL(data)
        reader.onloadend=()=>setImage(reader.result)
    }

    const handleSubmit=async(e)=>{
        e.preventDefault();

        setError('');
        let img = image!=null?image:imag
		await axios.put(`http://localhost:8000/api/v1/course/${id}`,
			{ 
                // "parentCategoryID" : courseID,
				"name" : name,
                "image": img

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
				setError(data.data.errors[0])
			} else if (data.data.msg) {
               
				toastr.options.progressBar = true;
				toastr.info("Course Updated Successfully.");
                navigate(`view`);

	
			}
		})
    }

    // console.log(id);

    return(
        <>
        {/* <div className="alert alert-secondary text-center form-heading text-wrap">
           Update Course
        </div> */}
        <div className="d-flex justify-content-around align-items-center flex-wrap mb-4 py-5">
            <div className="card card-width mt-2">
                <div className="card-header">
                    <Link to="/administrator/Course" className="btn btn-primary m-1">
                            <i className="fa-solid fa-circle-plus"></i> New Course
                    </Link>
                    <Link to="/administrator/course/view" className="btn btn-dark">
                        <i className="fa-solid fa-eye"></i> View Courses
                    </Link>
                
                <h3 className="text-center form-heading">Update Course</h3>
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
                            <br/><br/>
                            <img src={`${img}`} className="display-img"/>
                            <br/><br/>
                            <input 
                            className="form-control"
                            type="file"
                            name="image"
                            onChange={(val)=>setImageFunction(val.target.files[0])}
                            />
                        </div>
                        {/* <span className="error">{error.name}</span>  */}
                    </div>
                      
                    <div id="success"></div>
                    {/* For success/fail messages */}
                    <button type="submit" className="btn cbtn btn-block btn-10 m-3"><i className="fa-solid fa-floppy-disk"></i> Save Changes</button>
                </form>
                </div>  
            </div>
        </div>
        </>
    );
}
export default UpdateCourse;
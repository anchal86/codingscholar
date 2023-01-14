import React, {useState} from "react";
import InputFields from "../InputFields";
import axios from "axios";
import { Outlet, useNavigate } from "react-router-dom";

const Signin=({setRefresh})=>{
    const[username,setUsername]=useState("");
    const[password,setPassword]=useState("");
    const[error,setError]=useState('');
    const navigate=useNavigate();

    const onSubmit=async(e)=>{
        e.preventDefault();
        if(username!=="" && password!==""){
            // console.log(username);
            // console.log(password);
            await axios.post(`${process.env.REACT_APP_URL}/user/signin`,
                {
                    "username":username,
                    "password":password
                },{ headers:{'Content-Type':'application/json'} }
            ).then(function(data){
                
                if(data.data.errors){
                    let arr=[]
                    data.data.errors.forEach(element => {
                        let key=Object.keys(element)
                        let value=Object.values(element)[0]
                        arr[key]=value 
                    });
                    setError(arr)
                    // console.log(data.data.errors)
                }else if(data.data.user){
                    const user=localStorage.setItem('user',JSON.stringify({"user":data.data.user,"token":data.data.token}))
                    navigate('/administrator/dashboard');
                    setRefresh('Successfully Login')

                }
            }).catch(err=>console.log(err))
        }
    }
    return(
        <>
        <div className="jumbotron py-2">
            <h1 className="text-center text-white mt-5 py-3">Administrator Login</h1>
        </div>
        <section className="py-5">
            <div className="container">
            <div className="row">
                <div className="d-flex justify-content-around align-items-center flex-wrap mb-4 py-5">
                    <div className="contact card m-1 shadow-lg bg-contact rounded">
                        <div className="card-body">
                        <form className="py-2" onSubmit={onSubmit}>
                            <div className="control-group form-group m-2 p-2">
                                <div className="controls">
                                    <InputFields
                                        label="Username"
                                        type="text"
                                        value={username}
                                        placeholder="Please Enter Your Username"
                                        dataTransfer={(e)=>setUsername(e)}
                                    />
                                    <span className="error">{error.username}</span>
                                </div>
                            </div>
                            <div className="control-group form-group m-2 p-2">
                                <div className="controls">
                                    <InputFields
                                        label="Password"
                                        type="password"
                                        value={password}
                                        placeholder="Please Enter Your Password"
                                        dataTransfer={(e)=>setPassword(e)}
                                    />
                                    <span className="error">{error.password}</span>
                                </div>
                            </div>
                            
                            <div id="success"></div>
                            {/* For success/fail messages */}
                            <button type="submit" className="btn cbtn btn-md btn-block btn-10 m-3">Login</button>
                        </form>
                        </div>
                    </div>
                   
                </div>

            </div>
        </div>
        </section>
        </>
    );
}
export default Signin;
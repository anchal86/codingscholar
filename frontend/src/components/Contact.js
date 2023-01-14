import axios from "axios";
import InputFields from "./InputFields";
import toastr from 'toastr';
import { useState } from 'react';
import MetaData from "./layouts/MetaData";
const Contact=()=>{
    const [name, setName]=useState('');
    const [email, setEmail]=useState('');
    const [phoneNo, setPhoneNo]=useState('');
    const [message, setMessage]=useState('');
    const [error, setError]=useState('');

    const onSubmit=async(e)=>{
        e.preventDefault();
        setError('');
        await axios.post(`http://localhost:8000/api/v1/contact`,
			{ 
                "name":name,
                "email": email,
                "phoneNo":phoneNo,
                "message":message
                
            },{headers:{'Content-Type':'application/json'}}
		).then(function (data) {

            console.log(data.data);

			if (data.data.errors) {
                let arr=[]
                data.data.errors.forEach(element => {
                    let key=Object.keys(element)
                    let value=Object.values(element)[0]
                    arr[key]=value 
                });
                setError(arr)
                // console.log(error);
			} else if (data.data) {
                  toastr.info('Contact Request Send!');
                 setName('');
                 setEmail('');
                 setPhoneNo('');
                 setMessage('');

			}
		}).catch(err=>console.log(err))
    }
    return(
        <>
        <MetaData title="Contact Us" canonical="contact-us" />
        <div className="jumbotron py-2">
                <h1 className="text-center text-white mt-5 py-3">Contact Us</h1>
        </div>
        <section className="py-5">
            <div className="container">
        {/* Embedded Google Map */}
            <iframe className="map" title="map" src="https://maps.google.com/maps?q=Coding%20Scholar,%20Shop%20No.%2014%201st%20Floor,%20Block-14%20Shoe%20Market,%20Sanjay%20Place,%20Agra,%20Uttar%20Pradesh%20282002&t=&z=13&ie=UTF8&iwloc=&output=embed"></iframe>
            

            <div className="row">
                <div className="d-flex justify-content-around align-items-center flex-wrap mb-4 py-5">
                    <div className="contact card m-1 shadow-lg bg-contact rounded">
                        <div className="card-body">
                        <h3 className="display-6 text-center">Get in Touch</h3>
                        <form onSubmit={onSubmit} className="py-2">
                            <div className="control-group form-group m-2 p-2">
                                <div className="controls">
                                    <InputFields
                                        label="Full Name:"
                                        mandatory="*"
                                        type="text"
                                        value={name}
                                        placeholder="Please enter your name."
                                        dataTransfer={(e) => setName(e)}
                                    />
                                    <span className="error">{error.name}</span>
                                </div>
                            </div>
                            <div className="control-group form-group m-2 p-2">
                                <div className="controls">
                                    <InputFields
                                        label="Phone Number:"
                                        mandatory="*"
                                        type="text"
                                        value={phoneNo}
                                        placeholder="Please enter your phone number."
                                        dataTransfer={(e) => setPhoneNo(e)}
                                    />
                                    <span className="error">{error.phoneNo}</span>
                                </div>
                            </div>
                            <div className="control-group form-group m-2 p-2">
                                <div className="controls">
                                    <InputFields
                                        label="Email Address:"
                                        mandatory="*"
                                        type="text"
                                        value={email}
                                        placeholder="Please enter your email address."
                                        dataTransfer={(e) => setEmail(e)}
                                    />
                                    <span className="error">{error.email}</span>
                                </div>
                            </div>
                            <div className="control-group form-group m-2 p-2">
                                <div className="controls">
                                    <label className="mb-2">Message:</label>
                                    <textarea rows="10" cols="100" 
                                    className="form-control" value={message}
                                    onChange={(val)=>setMessage(val.target.value)}
                                    ></textarea>
                                    <span className="error">{error.message}</span>
                                </div>
                            </div>
                            <div id="success"></div>
                            {/* For success/fail messages */}
                            <button type="submit" className="btn cbtn btn-10 m-3">Send Message</button>
                        </form>
                        </div>
                    </div>
                    
                
               
                    <div className="card m-1 shadow-lg bg-contact rounded">
                        <div className="card-body">
                        <h3 className="display-6 text-center">Contact Details</h3>
                        <p className="py-2">
                            <i className="fa-solid fa-building-columns"></i>&nbsp;&nbsp; 
                            Shop No. 14 1st Floor,&nbsp;<br/> 
                            Block-14 Shoe Market, &nbsp;<br/> 
                            Sanjay Place Agra,&nbsp;<br/> 
                            Uttar Pradesh 282002
                            <br/>
                        </p>
                        <p>
                        <i className="fa-solid fa-headphones-simple"></i>&nbsp;&nbsp; (0562) 430-8606
                        </p>
                        <p>
                            <i className="fa-solid fa-envelope"></i>&nbsp;&nbsp;
                            info@codingscholar.com
                        </p>
                        <p>
                        <i className="fa-solid fa-business-time"></i>&nbsp;&nbsp; Monday - Saturday: 10 :00 AM to 6:00 PM
                        </p>
                        </div>

                    </div>
                    
                
                </div>

            </div>
        </div>
        </section>
        
        </>
    );
}
export default Contact;
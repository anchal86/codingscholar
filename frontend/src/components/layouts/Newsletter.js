import './css/newsletter.css'
import axios from "axios";
import { useState } from 'react';
const Newsletter=()=>{
    const [email, setEmail]=useState('');
    const [error, setError]=useState('');

    const dataTransfer =(e)=>{
        setEmail(e.target.value);
      }
    const onSubmit=async(e)=>{
        e.preventDefault();
        setError('');
        await axios.post(`http://localhost:8000/api/v1/subscriber`,
			{ 
                "email": email
                
            },{headers:{'Content-Type':'application/json'}}
		).then(function (data) {

            // console.log(data.data);

			if (data.data.errors) {
                setError(data.data.errors[0])
                console.log(error.email);
			} else if (data.data.msg) {
				
                console.log("done");
			}
		}).catch(err=>console.log(err))
    }
    return(
        <>
{/* subscribe-newsletter-start */}
        <section className="newsletter py-5 mb-5">
            <div className="container">
                <div className="row">
                    <div className="col-sm-12">
                        <div className="content">
                            <h2>SUBSCRIBE TO OUR NEWSLETTER</h2>
                            <form onSubmit={onSubmit}>
                                <div className="input-group">
                                
                                    
                                    <input type="email" 
                                    value={email} className="form-control" 
                                    placeholder="Enter your email" 
                                    onChange={(e)=> {dataTransfer(e)}} />
                                   
                                    
                                    <span className="input-group-btn">
                                        <button className="btn" type="submit">Subscribe Now</button>
                                    </span>
                                </div>
                            </form>
                            <br/>
                                <p className="error" id="msg">{error.email}</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
{/* subscribe-newsletter-end */}
        </>
    );
}
export default Newsletter;
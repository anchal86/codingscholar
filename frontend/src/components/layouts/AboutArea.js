import { NavLink } from 'react-router-dom';
import './css/about-area.css'
const AboutArea=()=>{
    return(
        <>
{/* about-area-start */}
    <section className="about_area">
        <div className="container px-5">
            <div className="row">
                <div className="col-xl-5 col-lg-6 my-4">
                    <div className="">
                        <h3>Over 7000 Tutorials<br/>
                        from 20 Courses</h3>
                        <p>Our set he for firmament morning sixth subdue darkness creeping gathered divide our let god
                            moving. Moving in fourth air night bring upon you're it beast let you dominion likeness open
                            place day great wherein heaven sixth lesser subdue fowl </p>
                        <NavLink to="/courses" className="btn button btn-info">Enroll a Course</NavLink>
                    </div>
                    
                </div>
                <div className="stats col-xl-6 offset-xl-1 col-lg-6 my-4">
                  <h2 className=" d-flex justify-content-center align-items-center item circle blue-circle">20+ <br/>Courses</h2>
                  <h2 className=" d-flex justify-content-center align-items-center item circle pink-circle">7638 <br/>Courses</h2>
                  <h2 className=" d-flex justify-content-center align-items-center item circle red-circle">230+ <br/>Courses</h2>
                </div>
             
            </div>
        </div>
    </section>
{/* about-area-end */}
        </>
    );
}
export default AboutArea;
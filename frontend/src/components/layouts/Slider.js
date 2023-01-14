import { NavLink } from 'react-router-dom';
import './css/slider.css'
const Slider=()=>{
    return(
        <>
        {/* slider-area-start */}
        <div className="slider_bg py-4 container-fluid">
                <div className="row justify-content-around align-items-center">
                    <div className="col-12 col-md-6 col-lg-5 ">
                        <div className="illastrator_png">
                            <img src="img/edu_ilastration.png" alt="" className="img-fluid mx-auto d-block" />
                        </div>
                    </div>
                    <div className="col-12 col-md-6 col-lg-5">
                        <div className="fw-content mx-auto">
                            <h1 className="text-light py-2"> Learn your <br />
                                Favorite Course <br />
                                From Online</h1>
                            <NavLink to="#" className="btn button btn-info">Browse Our Courses</NavLink>
                        </div>
                    </div>
                </div>
        </div>
        {/* slider-area-end */}
        </>
    );
}
export default Slider;
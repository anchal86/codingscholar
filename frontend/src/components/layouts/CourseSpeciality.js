import './css/course-speciality.css'
const CourseSpeciality=()=>{
    return(
        <>
{/* course-speciality-start */}
    <section className="py-5">
        <div className="container">
            <div className="col-xl-12">
                    <h3 className="display-4 text-center">Course Speciality</h3>
                    <p className="p text-center text-muted">Your domain control panel is designed for ease-of-use and <br/> allows for all aspects of your
                            domains.</p>
            </div>

            <div className="d-flex justify-content-around align-items-center flex-wrap py-5">      
                <div className="card scourse m-2 shadow-sm bg-body rounded">
                    <div className="card-body text-center justify-content-center">
                        <img src="img/icon.png" className="mb-2" alt='course' />
                        <h5 className="card-title">Mobile App</h5>
                        <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    </div>
                </div>
                    
                <div className="card m-2 scourse shadow-sm bg-body rounded">
                    <div className="card-body text-center justify-content-center">
                       <img src="img/icon.png" className="mb-2" alt='course' />
                        <h5 className="card-title">Mobile App</h5>
                        <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                       
                    </div>
                </div>
                    
                <div className="card m-2 scourse shadow-sm bg-body rounded">
                    <div className="card-body text-center justify-content-center">
                        <img src="img/icon.png" className="mb-2" alt='course'/>
                        <h5 className="card-title">Mobile App</h5>
                        <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        
                    </div>
                </div>
                <div className="card m-2 scourse shadow-sm bg-body rounded">
                    <div className="card-body text-center justify-content-center">

                        <img src="img/icon.png" className="mb-2" alt='course'/>
                        <h5 className="card-title">Mobile App</h5>
                        <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    </div>
                </div>
                
            </div>

        </div>
    </section>
{/* course-speciality-end */}
        </>
    );
}
export default CourseSpeciality;
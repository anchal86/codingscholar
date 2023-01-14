import React from 'react';
import { Link } from 'react-router-dom';
import './footer.css'
const Footer=()=>{
    return (
        <>
            {/* footer-start */}

            <footer className="footer-bg  text-center text-lg-start text-color">
                {/* Section: Social media */}
                <section className="d-flex justify-content-center justify-content-lg-between p-4 border-bottom">
                    {/* Left */}
                    <div className="me-5 d-none d-lg-block">
                        <span>Get connected with us on social networks:</span>
                    </div>
                    {/* Left */}

                    {/* Right */}
                    <div>
                        <a href="https://www.facebook.com/Coding-Scholar-108043868697097/" className="me-4 text-reset" target="_blank">
                            <i className="fab fa-facebook-f"></i>
                        </a>
                        <a href="https://twitter.com/coding_scholar" className="me-4 text-reset" target="_blank">
                            <i className="fab fa-twitter"></i>
                        </a>
                        <a href="https://www.pinterest.com/codingscholar/" className="me-4 text-reset" target="_blank">
                            <i className="fab fa-pinterest"></i>
                        </a>
                        <a href="https://www.instagram.com/codingscholar/" className="me-4 text-reset" target="_blank">
                            <i className="fab fa-instagram"></i>
                        </a>
                        <a href="https://www.linkedin.com/company/coding-scholar/" className="me-4 text-reset" target="_blank">
                            <i className="fab fa-linkedin"></i>
                        </a>
                       
                    </div>
                    {/* Right */}
                </section>
                {/* Section: Social media */}

                {/* Section: Links */}
                <section className="">
                    <div className="container text-md-start mt-5">
                        {/* Grid row */}
                        <div className="row mt-3 justify-content-between">
                            {/* Grid column */}
                            <div className="col-md-3 col-lg-4 col-xl-3  mx-auto mb-4">
                                {/* Content */}
                                <h6 className="text-uppercase fw-content fw-bold mb-4">
                                    <i className="fas fa-gem me-3"></i>Coding Scholar
                                </h6>
                                <p className='fw-content'>
                                    Here you can use rows and columns to organize your footer content. Lorem ipsum
                                    dolor sit amet, consectetur adipisicing elit.
                                </p>
                            </div>
                            {/* Grid column */}

                            {/* Grid column */}
                            <div className=" col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
                                {/* Links */}
                                <h6 className="fw-content text-uppercase fw-bold mb-4 ">
                                    Courses
                                </h6>
                                <div className='fw-content px-2'>
                                    <p className=''>
                                        <Link to="#!" className="text-reset">Angular</Link>
                                    </p>
                                    <p>
                                        <Link to="#!" className="text-reset">React</Link>
                                    </p>
                                    <p>
                                        <Link to="#!" className="text-reset">Vue</Link>
                                    </p>
                                    <p>
                                        <Link to="#!" className="text-reset">Laravel</Link>
                                    </p>
                                </div>
                            </div>
                            {/* Grid column */}

                            {/* Grid column */}
                            <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">
                                {/* Links */}
                                <h6 className="text-uppercase fw-content fw-bold mb-4">
                                    Useful links
                                </h6>
                                <div className="fw-content px-2">

                                    <p>
                                        <Link to="/about" className="text-reset">About</Link>
                                    </p>
                                    <p>
                                        <Link to="/contact" className="text-reset">Contact</Link>
                                    </p>
                                    <p>
                                        <Link to="/privacy-policy" className="text-reset">Privacy Policy</Link>
                                    </p>
                                    <p>
                                        <Link to="/terms-conditions" className="text-reset">Terms & Conditions</Link>
                                    </p>

                                </div>
                                
                            </div>
                            {/* Grid column */}

                            {/* Grid column */}
                            <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
                                {/* Links */}
                                <h6 className="text-uppercase fw-content fw-bold mb-4">Contact</h6>
                                <div className="fw-content px-2">
                                    <p><i className="fas fa-home me-3"></i> Sanjay Place Agra,&nbsp;<br/> 
                                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Uttar Pradesh 282002</p>
                                    <p>
                                        <i className="fas fa-envelope me-3"></i>
                                        info@codingscholar.com
                                    </p>
                                    <p><i className="fas fa-phone me-3"></i> (0562) 430-8606</p>
                                    <p><i className="fas fa-print me-3"></i> (0562) 430-8606</p>
                                </div>
                                
                            </div>
                            {/* Grid column */}
                        </div>
                        {/* Grid row */}
                    </div>
                </section>
                {/* Section: Links */}

                {/* Copyright */}
                <div className="copyright text-center p-4">
                    © 2021 Copyright &nbsp;&nbsp;
                    <Link className="text-reset fw-bold" to="/">Coding Scholar</Link>
                </div>
                {/* Copyright */}
            </footer>
            {/* footer-end */}
        </>
    );
}
export default Footer;
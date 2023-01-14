import { Link } from "react-router-dom";
const Nav=()=>{
    return(
        <>
            <nav aria-label="..." className="w-100" >

                <p className="d-flex  flex-wrap justify-content-between ">
                    <Link to="#" className="btn btn-dark btn-10"><i className="fa-solid fa-arrow-left-long"></i> Previous </Link>
                        

                    <Link to="#" className="btn btn-dark btn-10">Next <i className="fa-solid fa-arrow-right-long"></i></Link>
                        

                </p>

            </nav>
        </>
    );
}
export default Nav;
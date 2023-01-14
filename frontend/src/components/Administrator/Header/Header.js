import React from 'react';
import { Link, NavLink, useNavigate } from 'react-router-dom';
import './header.css';
const Header = ({setRefresh}) => {
  const navigate = useNavigate();
  const logout=()=>{
    const user=localStorage.clear('user');
    
    navigate(`/administrator/signin`)
    setRefresh("change")
  }
    return (
        <>
{/* header-start */}
        <header className="header" style={{height:'40px'}}>
          <nav className="navbar navbar-expand-lg theme-nav" id="navbar">
            <div className="container-fluid">
              <Link className="navbar-brand" to="/">Coding Scholar</Link>
              <button className="navbar-toggler custom-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent"
                aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className=""><i className="fa-solid fa-bars text-light"></i></span>
              </button>
              <div className="collapse navbar-collapse justify-content-between align-items-end" id="navbarSupportedContent">
                <ul className="navbar-nav ms-auto mb-lg-0  mt-3">
                  <li className="nav-item px-2">
                    <NavLink className="nav-link active nav-item-link " aria-current="page" to="/administrator">Dashboard</NavLink>
                  </li>

                  <li className="nav-item px-2">
                    <NavLink className="nav-link nav-item-link" to="/administrator/course/view">Courses</NavLink>
                  </li>
                  <li className="nav-item px-2">
                    <NavLink className="nav-link nav-item-link" to="/administrator/post/view">Posts</NavLink>
                  </li>
                  <li className="nav-item px-2">
                    <NavLink className="nav-link nav-item-link" to="/administrator/subscribers/view">Subscribers</NavLink>
                  </li>
                  <li className="nav-item px-2">
                    <NavLink className="nav-link nav-item-link" to="/administrator/requests/view">Contacts</NavLink>
                  </li>
                </ul>
                <ul className="navbar-nav ms-auto mb-3 mt-3">
                  <button className="btn nav-btn mx-4" onClick={()=>logout()}> <i className="fa-solid fa-right-from-bracket"></i> Logout</button>
                </ul>
              </div>
            </div>
          </nav>
          
        </header>
        <div style={{padding:"35px"}}></div>
{/* header-end */}


            </>
            );
}
export default Header;
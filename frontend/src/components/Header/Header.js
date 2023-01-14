import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import './header.css';
const Header = () => {
    return (
        <>
{/* header-start */}
        <header className="header">
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
                    <NavLink className="nav-link active nav-item-link " aria-current="page" to="/">Home</NavLink>
                  </li>

                  <li className="nav-item px-2">
                    <NavLink className="nav-link nav-item-link" to="/courses">Courses</NavLink>
                  </li>
                  <li className="nav-item px-2">
                    <NavLink className="nav-link nav-item-link" to="/about">About</NavLink>
                  </li>
                  <li className="nav-item px-2">
                    <NavLink className="nav-link nav-item-link" to="/">Blog</NavLink>
                  </li>
                  <li className="nav-item px-2">
                    <NavLink className="nav-link nav-item-link" to="/contact">Contact</NavLink>
                  </li>
                </ul>
                <ul className="navbar-nav ms-auto mb-3 mt-3">
                  <button className="btn nav-btn mx-4"> <i className="fa-solid fa-graduation-cap"></i> Enroll Now</button>
                </ul>
              </div>
            </div>
          </nav>
        </header>
        <div className="py-4"></div>
{/* header-end */}
            </>
            );
}
export default Header;
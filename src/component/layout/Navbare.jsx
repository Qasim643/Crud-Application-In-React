import React from "react";
import { Link, NavLink } from "react-router-dom";
const Navbare =()=>{
    return(
        
       <nav className="navbar navbar-expand-lg navbar-dark bg-primary ">
        
      <div className="container-fluid">
      
        <a className="navbar-brand" href="#">React Crud</a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <NavLink className="nav-link" aria-current="page" to="/">Home</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link " aria-current="page" to="/about">About</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link " aria-current="page" to="/contact">Contact</NavLink>
            </li>
          </ul>
        </div>
        <Link className="btn btn-outline-light w-20" to="/user/add">Add Users</Link>
      </div>
 
    </nav>

    );

}
export default Navbare;
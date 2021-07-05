import React from 'react';
import './Navbar.css';
import logo from './../images/yourchallenge-logo.png';

const Navbar = () => {
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-light ">
                <div className="container-fluid">
                    <a className="navbar-brand" href="/"><img src={logo} alt="" /></a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                        <div className="navbar-nav ms-auto">
                            <a className="nav-link active active_nav nav_option " aria-current="page" href="#/">Product</a> 
                            <a className="nav-link active nav_option " aria-current="page" href="#/">Download</a> 
                            <a className="nav-link active nav_option " aria-current="page" href="#/">Pricing</a> 
                        </div>
                    </div>
                </div>
            </nav>
        </div>
    );
};

export default Navbar;
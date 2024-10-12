import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import styled from "styled-components";

export const NavLink = styled.a`
  font-weight: 600;
  cursor: pointer;
`;


const Navbar = () => {
    const cartCount = useSelector(state => state.allProducts?.ecommerceCart?.length)
    return (
        <nav className="navbar navbar-expand-sm navbar-dark bg-dark shadow fixed-top">
            <div className="container-fluid">
                <span className="navbar-brand">
                    <Link to="/"
                        style={{
                            textDecoration: "none",
                            display: "flex",
                            alignItems: "center",
                            color: "white",
                        }}>
                        <i className="fa fa-audio-description fa-2x mr-1" aria-hidden="true"></i>
                    </Link>
                </span>
                {/* <button
                    className="navbar-toggler"
                    type="button"
                    data-toggle="collapse"
                    data-target="#navbarNavAltMarkup"
                    aria-controls="navbarNavAltMarkup"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                >
                    <span className="navbar-toggler-icon"></span>
                </button> */}
                <form className="form-inline my-2 mr-auto">
                    <input className="form-control mr-sm-2 " type="search" placeholder="Search" aria-label="Search" />
                    <button className="btn btn-outline-light my-2 my-sm-0" type="submit">Search</button>
                </form>
                {/* <div className="collapse navbar-collapse" id="navbarNavAltMarkup"> */}
                <div className="navbar-nav ml-auto">
                    <i className="user icon userAndCartIcon mr-3" ></i>
                    <Link to="/ecommerceCart">
                        <i className="shop icon userAndCartIcon"
                            style={{
                                textDecoration: "none"
                            }}></i>
                    </Link>
                    <span class="cartItems">{cartCount || "0"}</span>
                    {/* <NavLink className="nav-link" href="#about">About</NavLink>
                        <NavLink className="nav-link" href="#skills">Skills</NavLink>
                        <NavLink className="nav-link" href="#experience">Experience</NavLink>
                        <NavLink className="nav-link" href="#projects">Projects</NavLink>
                        <NavLink className="nav-link" href="#education">Education</NavLink> */}
                </div>
                {/* </div> */}
            </div>
        </nav >
    )
}

export default Navbar
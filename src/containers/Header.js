import React from "react";
import styled from "styled-components";

export const NavLink = styled.a`
  font-weight: 600;
  cursor: pointer;
`;

const Header = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark shadow fixed-top">
            <div className="container-fluid">
                <span className="navbar-brand">
                    <a
                        href="#about"
                        style={{
                            textDecoration: "none",
                            display: "flex",
                            alignItems: "center",
                            color: "white",
                        }}
                    >
                        <i className="fa fa-audio-description fa-2x mr-1" aria-hidden="true"></i>
                    </a>
                </span>
                <button
                    className="navbar-toggler"
                    type="button"
                    data-toggle="collapse"
                    data-target="#navbarNavAltMarkup"
                    aria-controls="navbarNavAltMarkup"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                >
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                    <div className="navbar-nav ml-auto">
                        <NavLink className="nav-link" href="#about">About</NavLink>
                        <NavLink className="nav-link" href="#skills">Skills</NavLink>
                        <NavLink className="nav-link" href="#experience">Experience</NavLink>
                        <NavLink className="nav-link" href="#projects">Projects</NavLink>
                        <NavLink className="nav-link" href="#education">Education</NavLink>
                    </div>
                </div>
            </div>
        </nav>
    );
}

export default Header


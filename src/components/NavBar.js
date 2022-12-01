import React from 'react'
import { Link } from "react-router-dom";

const NavBar = () => {

    return (
        <div>
            <nav className="navbar fixed-top navbar-expand-lg navbar-dark bg-dark">
                <div className="container-fluid">
                    <a className="navbar-brand" to="/">GDSC News</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <a className="nav-link" aria-current="page" to="/">Home</a></li>
                            {/* <li className="nav-item"><a className="nav-link" to="/business">Business</a></li>
                            <li className="nav-item"><a className="nav-link" to="/entertainment">Entertainment</a></li>
                            <li className="nav-item"><a className="nav-link" to="/general">General</a></li>
                            <li className="nav-item"><a className="nav-link" to="/health">Health</a></li>
                            <li className="nav-item"><a className="nav-link" to="/science">Science</a></li>
                            <li className="nav-item"><a className="nav-link" to="/sports">Sports</a></li>
                            <li className="nav-item"><a className="nav-link" to="/technology">Technology</a></li> */}
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    )

}

export default NavBar

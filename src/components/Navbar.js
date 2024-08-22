import React from "react";
import "../App.css"
import { Link } from "react-router-dom";

import ThemeToggle from "./ThemeToggle";

const Navbar= () => {
    const [isOpen, setIsOpen] = React.useState(false);
  
    const toggleMenu = () => {
      setIsOpen(!isOpen);
    };
  
    return (
      <nav className="navbar">
        <div className="navbar-container">
        <ThemeToggle/>
          <a href="/" className="navbar-logo">
            Gamor
          </a>
          <div className={`menu-icon ${isOpen ? 'open' : ''}`} onClick={toggleMenu}>
            <div className="bar1"></div>
            <div className="bar2"></div>
            <div className="bar3"></div>
          </div>
          {/* <ul className={`nav-menu ${isOpen ? 'active' : ''}`}>
            <li className="">
              <a href="/singin" className="nav-link">Sing in</a>
            </li>
            <li className="create-account">
              <Link to="/login" className=" ">Create account</Link>
            </li>
           </ul> */}
           <ul className={`cta-buttons nav-menu ${isOpen ? 'active' : ''}`}>
                <li><Link to="/singin" class="nav-sign nav-item">Sign in</Link></li>
                <li><Link to="/login" className="nav-create nav-item">Create account</Link></li>
            </ul>
        </div>
      </nav>
    );
  }

export default Navbar
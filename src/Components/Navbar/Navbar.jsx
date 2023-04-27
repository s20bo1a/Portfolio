import React from 'react'
import './Navbar.css';
// import { Link } from 'react-scroll';
import Toggle from '../Toggle/Toggle';
const Navbar = () => {
  return (
    <div className="n-wrapper" id="Navbar">
      <div className="n-left">
        <div className="n-name">Sindhu</div>
        <Toggle />
      </div>
      <div className="n-right">
        <div className="n-list">
          <ul style={{ listStyleType: "none" }}>
            <li>
            {/* <Link spy={true} to='Navbar' smooth={true} activeClass='activeClass'>
               Home
            </Link> */}
            Home
            </li>
            <li>
              Services
            {/* <Link spy={true} to='Experince' smooth={true} activeClass='activeClass'>
              Services
            </Link> */}
            </li>
            <li>
            {/* <Link spy={true} to='Experince' smooth={true} activeClass='activeClass'>
              Experience
            </Link> */}
            Experience
            </li>
            <li>
            {/* <Link spy={true} to='Projects' smooth={true} activeClass='activeClass'> */}
              portfolio
            {/* </Link> */}
            </li>
            <li>
            {/* <Link spy={true} to='Contact' smooth={true} activeClass='activeClass'> */}
              testmonial
            {/* </Link> */}
            </li>
          </ul>
        </div>
        {/* <Link to="contact" spy={true}smooth={true}> */}
        <button className="button n-button">Contact</button>
        {/* </Link> */}
      </div>
    </div>
  );
};

export default Navbar;
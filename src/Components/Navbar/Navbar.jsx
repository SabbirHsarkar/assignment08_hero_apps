import React from 'react';
import logo from "../../assets/asset/logo.png"
import { FaGithub } from "react-icons/fa";

const Navbar = () => {
    return (
        <div className="navbar  shadow-sm bg-[#FFFFFF]">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
      </div>
      <ul
        tabIndex={0}
        className="menu menu-sm dropdown-content bg-cyan-300 rounded-box z-1 mt-3 w-52 p-2 shadow">
        <li><a>Home</a></li>
        <li><a>Apps</a></li>
       
        <li><a>Installation</a></li>
      </ul>
    </div>
    <div className='flex items-center'>

<img className='w-[40px] h-[40px]' src={logo} alt="" />
    <a className="btn btn-ghost text-xl">HERO.IO</a>
    </div>
    
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
      <li><a>Home</a></li>
      <li><a>Apps</a></li>
     
      <li><a>Installation</a></li>
    </ul>
  </div>
  <div className="navbar-end ">
   
    <a href='https://github.com/SabbirHsarkar' className="btn text-white bg-gradient-to-r from-[#632EE3] to-[#9F62F2]
"><FaGithub />Contribute</a>
  </div>
</div>
    );
};

export default Navbar;
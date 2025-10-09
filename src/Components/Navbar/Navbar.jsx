import React from 'react';
import logo from "../../assets/asset/logo.png"
import { FaGithub } from "react-icons/fa";
import {Link, NavLink } from 'react-router';

const Navbar = () => {
     const links = <>
     <NavLink to='/'
            className={
                ({ isActive }) => `btn m-3 items-center
            ${isActive
                 ? ' text-black underline decoration-blue-500'
                 : 'bg-transparent'
                    }
            `
            }
        >Home</NavLink>

        <NavLink to='/apps'
        className={
       ({ isActive }) => `btn m-3 item-center
       ${isActive
            ?  'text-black underline decoration-blue-500'
            : 'bg-transparent'
            }
            `
            }
        >Apps</NavLink>

        <NavLink to='/installation'
            className={
                ({ isActive }) => `btn m-3 items-center
            ${isActive
            ? ' text-black underline decoration-blue-500'
              : 'bg-transparent'
               }
            `
            }
        >Installation</NavLink>

    </>

    return (

      <div className="navbar bg-white ">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                    </div>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">{links}</ul>
                </div>
                <Link to='/' className="btn btn-ghost text-xl">
                    <div className='flex flex-col md:flex-row justify-center items-center'>
                        <img className='w-4 md:w-10' src={logo} alt="" />
                        <p>HERO.IO</p>
                    </div>
                </Link>
            </div>
            <div className="navbar-center hidden md:flex">
                <ul className="menu menu-horizontal px-1">{links}</ul>
            </div>
            <div className="navbar-end">
                <Link to={'https://github.com/SabbirHsarkar'} className="btn bg-gradient-to-r from-[#632EE3] to-[#9F62F2] text-white">
                    <img src="" alt="" />
                    <FaGithub />Contribute</Link>
            </div>
        </div>

    );
};

export default Navbar;
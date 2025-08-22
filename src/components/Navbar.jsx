import React from 'react';
import ThemeToggle from './ThemeToggle';
import Link from 'next/link';

const Navbar = () => {
    const navMenu = <>
        <li><Link href={'/'}> Home </Link></li>
        <li><Link href={'/services'}> Services </Link></li>
        <li><Link href={'/about'}> About </Link></li>
        <li><Link href={'/dashboard'}> DashBoard </Link></li>
    </>
    return (
        <div className="navbar fixed z-50 bg-base-300 shadow-sm">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                    </div>
                    <ul
                        tabIndex={0}
                        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
                        {navMenu}
                    </ul>
                </div>
                < Link href={"/"} className=" text-3xl font-black">NextMart</Link>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {navMenu}
                </ul>
            </div>
            <div className="navbar-end gap-2">
                <ThemeToggle />
                <a className="btn btn-primary">SignIn</a>
            </div>
        </div>
    );
};

export default Navbar;
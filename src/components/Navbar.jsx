// src/components/Navbar.jsx

import { getUserSession, logoutUser } from '@/app/actions/auth/loginUser';
import ThemeToggle from './ThemeToggle';
import Link from 'next/link';
import { FaUserCircle } from 'react-icons/fa';
import { RiLogoutBoxRLine } from "react-icons/ri";


export default async function Navbar() {
    const user = await getUserSession();


    const LogoutForm = () => {
        return (
            <form action={logoutUser}>
                <button type="submit" className="flex items-center gap-2 w-full text-left">
                    <RiLogoutBoxRLine size={20} />
                    Logout
                </button>
            </form>
        );
    };

    const navMenu = (
        <>
            <li><Link href={'/'}>Home</Link></li>
            <li><Link href={'/products'}>Products</Link></li>
            <li><Link href={'/about'}>About</Link></li>
            {user && (
                <li className="dropdown dropdown-end">
                    <div
                        tabIndex={0}
                        role="button"
                        className="flex items-center gap-2"
                    >
                        Dashboard
                    </div>
                    <ul
                        tabIndex={0}
                        className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52"
                    >
                        <li>
                            <Link href="/dashboard/add-product">
                                <span className="font-semibold">Add New Product</span>
                            </Link>
                        </li>
                        <li>
                            <Link href="/dashboard/my-products">
                                <span className="font-semibold">My Products</span>
                            </Link>
                        </li>
                    </ul>
                </li>
            )}
        </>
    );

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
                <Link href={"/"} className="text-3xl font-black">NextMart</Link>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {navMenu}
                </ul>
            </div>
            <div className="navbar-end gap-2">
                <ThemeToggle />
                {user ? (
                    <div className="dropdown dropdown-end">
                        <div
                            tabIndex={0}
                            role="button"
                            className="btn btn-ghost btn-circle avatar"
                        >
                            <div className="w-10 rounded-full">
                                <FaUserCircle size={40} />
                            </div>
                        </div>
                        <ul tabIndex={0} className="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52">
                            <li>
                                <span className="font-semibold">{user.name}</span>
                            </li>
                            <li>
                                <LogoutForm />
                            </li>
                        </ul>
                    </div>
                ) : (
                    <Link href={"/login"} className="btn btn-primary">SignIn</Link>
                )}
            </div>
        </div>
    );
}

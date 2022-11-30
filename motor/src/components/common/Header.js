import React, { useContext } from 'react'
import { NavLink, Link } from 'react-router-dom'
import { AuthContext } from '../../contexts/AuthProvider';
import { FaBars } from "react-icons/fa";

export const Header = () => {

    const { user, logOut } = useContext(AuthContext);
    return (
        <>
            <header className="text-gray-400  bg-stone-800 body-font">
                <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
                    <a className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
                        <img src="/logo.png" alt="Moons-Law" className="h-20" />
                    </a>
                    <nav className="md:mr-auto md:ml-4 md:py-1 md:pl-4 md:border-l md:border-gray-400 text-xl flex flex-wrap items-center text-base justify-center">
                        <NavLink to="/" className="mr-5 hover:text-gray-100">Home</NavLink>
                        <NavLink to="/blog" className="mr-5 hover:text-gray-100">Blog</NavLink>
                        {
                            user?.uid &&
                            <NavLink to="/dashbord" className="mr-5 hover:text-gray-100">Dashbord</NavLink>
                        }
                    </nav>

                    {
                        user?.uid ?
                            <>
                                <button onClick={logOut} className="inline-flex items-center btn-primary border-0 py-1 px-3 focus:outline-none rounded text-gray-100 mt-4 md:mt-0">Log Out
                                    <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4 ml-1" viewBox="0 0 24 24">
                                        <path d="M5 12h14M12 5l7 7-7 7"></path>
                                    </svg>
                                </button>
                                {/* <label htmlFor="my-drawer" className='m-5' ><FaBars /></label> */}
                            </>
                            :
                            <Link to="/login" className="inline-flex items-center btn-secondary border-0 py-1 px-3 focus:outline-none rounded text-gray-100 mt-4 md:mt-0">Log In
                                <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4 ml-1" viewBox="0 0 24 24">
                                    <path d="M5 12h14M12 5l7 7-7 7"></path>
                                </svg>
                            </Link>
                    }
                </div>
            </header>

        </>
    )
}

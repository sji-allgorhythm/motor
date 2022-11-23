import React from 'react'
import { NavLink , Link} from 'react-router-dom'

export const Header = () => {
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
                    </nav>
                    <Link to="/login" className="inline-flex items-center btn-primary border-0 py-1 px-3 focus:outline-none rounded text-gray-100 mt-4 md:mt-0">Log In
                        <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-4 h-4 ml-1" viewBox="0 0 24 24">
                            <path d="M5 12h14M12 5l7 7-7 7"></path>
                        </svg>
                    </Link>
                </div>
            </header>

        </>
    )
}

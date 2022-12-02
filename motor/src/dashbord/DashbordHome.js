import React, { useContext } from 'react'
import { AuthContext } from '../contexts/AuthProvider';

export const DashbordHome = () => {
    const { user } = useContext(AuthContext);
    return (
        <>
            <section className="text-gray-600 body-font relative">
                <div className="container px-5 py-24 mx-auto">
                    <div className="flex flex-col text-center w-full mb-12">
                        <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">Hello Motor</h1>
                        <div className="flex my-4 justify-center">
                            <img className='w-24 bg-primary p-5 rounded' src="/logo.png" alt="motor" />
                        </div>
                        <p className="lg:w-2/3 mx-auto leading-relaxed text-base text-xl">Welcome {user && user?.displayName}</p>
                        <p className="lg:w-2/3 mx-auto leading-relaxed text-base">email: {user && user?.email}</p>
                    </div>
                </div>
            </section>
        </>
    )
}

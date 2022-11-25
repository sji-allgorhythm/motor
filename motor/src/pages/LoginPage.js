import React, { useContext } from 'react'
import toast from 'react-hot-toast';
import { Link, useLocation, useNavigate } from 'react-router-dom'
import { FaGoogle } from "react-icons/fa";
import { GoogleAuthProvider } from 'firebase/auth';
import { AuthContext } from '../contexts/AuthProvider';
import axios from 'axios';

export const LoginPage = () => {

    // Provider
    const googleProvider = new GoogleAuthProvider();

    // dynamic Route Link 
    const location = useLocation();
    const from = location.state?.from?.pathname || '/';
    const navigate = useNavigate()

    const { providerLogin, signIn } = useContext(AuthContext);

    // user and password loing 
    const handleSubmit = e => {
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;

        signIn(email, password)
            .then((result) => {

                const user = result.user;

                const currentUser = {
                    email: user.email
                }

                navigate(from, { replace: true });
                toast.success('Login Successful ');


            })
            .catch((error) => {
                const errorMessage = error.message;
                toast.error(errorMessage);
            });
    }


    // Gmail login 
    const handleProviderLogin = (provider) => {
        providerLogin(provider)
            .then((result) => {

                const name = result.user.displayName
                const email = result.user.email

                const currentUser = {
                    name,
                    email,
                    role: "buyer"

                }

                axios({
                    method: 'put',
                    url: `${process.env.REACT_APP_url}/api/user/${email}`,
                    data: currentUser
                })
                    .then(function (response) {
                        if (response.data.acknowledged) {
                            navigate(from, { replace: true });
                            toast.success('Login Successful');
                        }
                    })
                    .catch(function (error) {
                        console.log(error);
                    });

            })
            .catch((error) => {
                const errorMessage = error.message;
                toast.error(errorMessage);

            });
    }

    return (
        <section className="py-10 dark:bg-gray-900">
            <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto lg:py-0">
                <div className="w-full bg-stone-800 rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
                    <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
                        <img src="/logo.png" alt="Moons-Law" />
                        <h1 className="text-2xl font-bold leading-tight tracking-tight text-gray-200 md:text-2xl dark:text-white">
                            Sign in to your account
                        </h1>
                        <form className="space-y-4 md:space-y-6" onSubmit={handleSubmit}>
                            <div>
                                <label htmlFor="email" className="block mb-2 text-md font-medium text-gray-300 dark:text-white">Your email</label>
                                <input type="email" name="email" id="email" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="name@company.com" required="" />
                            </div>
                            <div>
                                <label htmlFor="password" className="block mb-2 text-md font-medium text-gray-300 dark:text-white">Password</label>
                                <input type="password" name="password" id="password" placeholder="••••••••" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required="" />
                            </div>
                            <button type="submit" className="w-full btn btn-primary text-gray-200">Sign in</button>
                            <p className="text-sm font-light text-gray-500 dark:text-gray-400">
                                Don’t have an account yet? <Link to="/register" className="font-medium text-secondary hover:underline dark:text-primary-500">Register</Link>
                            </p>
                        </form>
                        <div className="p-2 w-full pt-8 mt-8 border-t border-gray-200 text-center">

                            <p className="block mb-2 text-md font-medium text-gray-500">Login as a simple buyer with ...</p>
                            <button className="badge badge-primary p-4 mt-3 text-white" onClick={() => handleProviderLogin(googleProvider)}><FaGoogle /> <span className='ml-4'> Google</span></button>

                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

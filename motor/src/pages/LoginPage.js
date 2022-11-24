import React, { useContext } from 'react'
import toast from 'react-hot-toast';
import { Link } from 'react-router-dom'
import { FaGoogle } from "react-icons/fa";
import { GoogleAuthProvider } from 'firebase/auth';
import { AuthContext } from '../contexts/AuthProvider';

export const LoginPage = () => {

    // Provider
    const googleProvider = new GoogleAuthProvider();

    const { providerLogin } = useContext(AuthContext);


    // Gmail login 
    const handleProviderLogin = (provider) => {
        providerLogin(provider)
            .then((result) => {

                const user = result.user;
                const currentUser = {
                    email: user.email
                }

                toast.success('Login Successful ');


            })
            .catch((error) => {
                const errorMessage = error.message;
                toast.error(errorMessage);

            });
    }

    const handleSubmit = () => {
        console.log("test")
    }
    return (
        <section class="py-10 dark:bg-gray-900">
            <div class="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
                <div class="w-full bg-stone-800 rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
                    <div class="p-6 space-y-4 md:space-y-6 sm:p-8">
                        <img src="/logo.png" alt="Moons-Law" />
                        <h1 class="text-2xl font-bold leading-tight tracking-tight text-gray-200 md:text-2xl dark:text-white">
                            Sign in to your account
                        </h1>
                        <form class="space-y-4 md:space-y-6" action="#">
                            <div>
                                <label for="email" class="block mb-2 text-md font-medium text-gray-300 dark:text-white">Your email</label>
                                <input type="email" name="email" id="email" class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="name@company.com" required="" />
                            </div>
                            <div>
                                <label for="password" class="block mb-2 text-md font-medium text-gray-300 dark:text-white">Password</label>
                                <input type="password" name="password" id="password" placeholder="••••••••" class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required="" />
                            </div>
                            <button type="submit" class="w-full btn btn-primary text-gray-200">Sign in</button>
                            <p class="text-sm font-light text-gray-500 dark:text-gray-400">
                                Don’t have an account yet? <Link to="/register" class="font-medium text-secondary hover:underline dark:text-primary-500">Sign up</Link>
                            </p>
                        </form>
                        <div class="p-2 w-full pt-8 mt-8 border-t border-gray-200 text-center">

                            <p class="block mb-2 text-md font-medium text-gray-600 dark:text-white">Login with ...</p>
                            <button className="badge badge-primary p-4 mt-3 text-white" onClick={() => handleProviderLogin(googleProvider)}><FaGoogle /> <span className='ml-4'>Google</span></button>

                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { useForm } from "react-hook-form";
import toast from 'react-hot-toast';
import { AuthContext } from '../contexts/AuthProvider';
import axios from 'axios';


export const RegisterPage = () => {

  const { createUser, updateUserInfo } = useContext(AuthContext);
  const { register, handleSubmit } = useForm();
  const onSubmit = data => {

    const name = data.name
    const email = data.email
    const password = data.password
    const role = data.role
    const verified = false

    const newUser = {
      email,
      name,
      role,
      verified,
    }

    createUser(email, password)
      .then((result) => {
        // const user = result.user;

        axios({
          method: 'post',
          url: `${process.env.REACT_APP_url}/api/user`,
          data: newUser
        })
          .then(function (response) {
            if (response.data.acknowledged) {
              toast.success('Login Successful');
              handleUpdateUserProfile(name);
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

  // USER PROFILE UPDATE 
  const handleUpdateUserProfile = name => {
    const profile = {
      displayName: name,
    }

    updateUserInfo(profile)
      .then(() => { })
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
              Register for your account
            </h1>
            <form className="space-y-4 md:space-y-6" onSubmit={handleSubmit(onSubmit)}>
              <div>
                <label htmlFor="name" className="block mb-2 text-md font-medium text-gray-300 dark:text-white">Your name</label>
                <input type="text" name="name" {...register("name")} className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="name@company.com" required="" />
              </div>
              <div>
                <label htmlFor="email" className="block mb-2 text-md font-medium text-gray-300 dark:text-white">Your email</label>
                <input type="email" name="email" {...register("email")} className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="name@company.com" required="" />
              </div>
              <div>
                <label htmlFor="password" className="block mb-2 text-md font-medium text-gray-300 dark:text-white">Password</label>
                <input type="password" name="password" {...register("password")} placeholder="••••••••" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required="" />
              </div>
              <div>
                <label htmlFor="role" className="block mb-2 text-md font-medium text-gray-300 dark:text-white">Select Your Role</label>
                <select id="role" {...register("role")} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                  <option value="buyer">Join as Buyer</option>
                  <option value="seller">Join as Seller</option>
                </select>
              </div>
              <button type="submit" className="w-full btn btn-primary text-gray-200">Register</button>
              <p className="text-sm font-light text-gray-500 dark:text-gray-400">
                Already have an account? <Link to="/login" className="font-medium text-secondary hover:underline dark:text-primary-500">Sign in</Link>
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}

import React, { useContext } from 'react'
import { useForm } from 'react-hook-form';
import { AuthContext } from '../../contexts/AuthProvider';

export const OrderModal = ({ data }) => {

    const { user } = useContext(AuthContext);
    const { register, handleSubmit, reset } = useForm();
    const onSubmit = data => {
        console.log('data', data)
    }
    return (
        <>
            <input type="checkbox" id="book_now" className="modal-toggle" />
            <label htmlFor="book_now" className="modal cursor-pointer">
                <label className="modal-box relative" htmlFor="">
                    <h3 className="text-lg font-bold">Order Now!</h3>
                    <h3 className="text-md my-3 font-bold">{data?.product_name}</h3>


                    <form onSubmit={handleSubmit(onSubmit)} className="flex flex-wrap -m-2">

                        <div className="p-2 w-full">
                            <div className="relative">
                                <label htmlFor="name" className="leading-7 text-md text-gray-600">Product Name</label>
                                <input type="text" id="name" name="name"  {...register("product_name")} readOnly value={data?.product_name} className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                            </div>
                            <label htmlFor="book_now" className="btn btn-sm btn-circle absolute right-2 top-6 bg-primary">✕</label>
                        </div>

                        <div className="p-2 w-full">
                            <div className="relative">
                                <label htmlFor="re_price" className="leading-7 text-md text-gray-600">Resale Price</label>
                                <input type="number" id="re_price" name="re_price" {...register("re_price")} readOnly value={data?.resell_price} className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                            </div>
                        </div>

                        <div className="p-2 w-full">
                            <div className="relative">
                                <label htmlFor="mobile" className="leading-7 text-md text-gray-600">Mobile Number</label>
                                <input type="number" id="mobile" name="mobile" {...register("mobile")} className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                            </div>
                        </div>

                        <div className="p-2 w-full">
                            <div className="relative">
                                <label htmlFor="pickUp_location" className="leading-7 text-md text-gray-600">Pick Up Location</label>
                                <input type="text" id="pickUp_location" name="pickUp_location" {...register("pickUp_location")} className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                            </div>
                        </div>

                        <div className="flex flex-col w-full border-opacity-50">
                            <div className="divider text-lg">Additional Info</div>
                        </div>

                        <div className="p-2 w-1/2">
                            <div className="relative">
                                <label htmlFor="user_name" className="leading-7 text-md text-gray-600">Your Name</label>
                                <input type="text" id="user_name" name="user_name" readOnly value={user?.displayName} {...register("seller_name")} className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                            </div>
                        </div>

                        <div className="p-2 w-1/2">
                            <div className="relative">
                                <label htmlFor="user_email" className="leading-7 text-md text-gray-600">Your Email</label>
                                <input type="email" id="user_email" name="user_email" readOnly value={user?.email} {...register("seller_email")} className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                            </div>
                        </div>

                        <div className="modal-action">
                            <label htmlFor="book_now" type="submit" className="cursor-pointer py-2 px-6 ml-2 rounded text-white bg-primary">
                                Submit
                            </label>
                        </div>

                    </form>
                </label>
            </label>
        </>
    )
}

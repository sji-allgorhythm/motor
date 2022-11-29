import React, { useContext, useState } from 'react'
import { FaRegFileExcel } from 'react-icons/fa';
import { useLoaderData } from 'react-router-dom'
import { AuthContext } from '../contexts/AuthProvider';

export const Product = () => {

  const { user } = useContext(AuthContext);
  const data = useLoaderData()

  const [showModal, setShowModal] = useState(false);

  const handleSubmit = e => {
    e.preventDefault();

    const form = e.target;
    const product_name = form.name.value;
    const product_resellPrice = form.re_price.value;
    const buyer_mobile = form.user_mobile.value;
    const buyer_pickUp_location = form.pickUp_location.value;
    const buyer_name = form.user_name.value;
    const buyer_email = form.user_email.value;

    const order = {
      product_name,
      product_resellPrice,
      buyer_mobile,
      buyer_pickUp_location,
      buyer_name,
      buyer_email,
    }

    setShowModal(false)
    console.log(order)
  }

  return (
    <>

      <section className="text-gray-600 body-font">
        <div className="container px-5 py-24 mx-auto flex flex-col">
          <div className="lg:w-4/6 mx-auto">
            <div className="rounded-lg overflow-hidden">
              <img alt="content" className="object-cover object-center h-full w-full" src={data?.product_img} />
            </div>

            <div className="flex flex-col sm:flex-row mt-10">
              <div className="sm:w-1/3 text-center sm:pr-8 sm:py-8">
                <div className="flex flex-col items-center text-center justify-center">
                  <h2 className='text-xl'>Seller Info</h2>
                  <h3 className="font-medium title-font mt-4 text-gray-900 text-lg">Name: <span className='text-accent'>{data?.seller_name}</span></h3>
                  <span className="flex ml-3 pl-3 py-1 space-x-2s">
                  </span>
                  <span className="flex ml-3 pl-3 py-1 space-x-2s">
                    <span className="text-gray-600 ml-3">Phone: <span className='text-accent'>{data?.seller_mobile}</span></span>
                  </span>
                  <span className="flex ml-3 pl-3 py-1 space-x-2s">
                    <span className="text-gray-600 ml-3">Email: <span className='text-accent'>{data?.seller_email}</span></span>
                  </span>
                  <span className="flex ml-3 pl-3 py-1 space-x-2s">
                    <span className="text-gray-600 ml-3">Pick Up Location: <span className='text-accent'>{data?.seller_location}</span></span>
                  </span>
                  <div className="w-12 h-1 bg-primary rounded mt-2 mb-4"></div>
                  <span className="flex items-center py-1">
                    <span className="text-gray-600 ml-3">Condition: <span className='text-accent uppercase'>{data?.product_condition}</span></span>
                  </span>
                  <span className="flex items-center py-1">
                    <span className="text-gray-600 ml-3">Years of Used: <span className='text-accent'>{data?.used_time} years</span></span>
                  </span>
                </div>
              </div>

              <div className="lg:w-2/3 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
                <h2 className="text-sm title-font text-gray-500 tracking-widest">{data?.category_name}</h2>
                <h1 className="text-gray-900 text-3xl title-font font-medium mb-1">{data?.product_name}</h1>
                <div className="flex mb-4">
                  <span className="flex items-center">
                    <span className="text-gray-600">Original Price: {data?.original_price}</span>
                  </span>
                </div>
                <p className="leading-relaxed">{data?.product_description}</p>
                <div className="flex mt-5">
                  <span className="title-font font-medium text-2xl text-gray-900">৳ {data?.resell_price}</span>
                  <button
                    className="cursor-pointer flex ml-auto text-white bg-primary border-0 py-2 px-6 focus:outline-none rounded"
                    type="button"
                    onClick={() => setShowModal(true)}>
                    Open regular modal
                  </button>
                  <button className='cursor-pointer text-white bg-accent rounded border-0 py-2 px-6 ml-2'><FaRegFileExcel /></button>
                </div>
              </div>
            </div>
          </div>
        </div>


        {showModal ? (
          <>
            <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed m-5 inset-0 z-50 outline-none focus:outline-none">
              <div className="relative w-auto my-6 mx-auto max-w-3xl">
                <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">

                  <div className="p-5 flex items-start justify-between p-5 border-b border-solid border-slate-200 rounded-t">
                    <h3 className="text-3xl font-semibold">
                      Order Now!
                    </h3>
                  </div>

                  <form onSubmit={handleSubmit} className="flex flex-wrap -m-2 p-5 ">

                    <div className="p-2 w-full">
                      <div className="relative">
                        <label htmlFor="name" className="leading-7 text-md text-gray-600">Product Name</label>
                        <input type="text" id="name" name="name" readOnly value={data?.product_name} className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                      </div>
                    </div>

                    <div className="p-2 w-full">
                      <div className="relative">
                        <label htmlFor="re_price" className="leading-7 text-md text-gray-600">Resale Price</label>
                        <input type="number" id="re_price" name="re_price" readOnly value={data?.resell_price} className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                      </div>
                    </div>

                    <div className="p-2 w-full">
                      <div className="relative">
                        <label htmlFor="mobile" className="leading-7 text-md text-gray-600">Mobile Number</label>
                        <input type="number" id="mobile" name="user_mobile" className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                      </div>
                    </div>

                    <div className="p-2 w-full">
                      <div className="relative">
                        <label htmlFor="pickUp_location" className="leading-7 text-md text-gray-600">Pick Up Location</label>
                        <input type="text" id="pickUp_location" name="pickUp_location" className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                      </div>
                    </div>

                    <div className="flex flex-col w-full border-opacity-50">
                      <div className="divider text-lg">Additional Info</div>
                    </div>

                    <div className="p-2 w-1/2">
                      <div className="relative">
                        <label htmlFor="user_name" className="leading-7 text-md text-gray-600">Your Name</label>
                        <input type="text" id="user_name" name="user_name" readOnly value={user?.displayName} className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                      </div>
                    </div>

                    <div className="p-2 w-1/2">
                      <div className="relative">
                        <label htmlFor="user_email" className="leading-7 text-md text-gray-600">Your Email</label>
                        <input type="email" id="user_email" name="user_email" readOnly value={user?.email} className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                      </div>
                    </div>




                    <div className="flex items-center justify-end p-2">
                      <button
                        className="bg-primary text-white font-bold uppercase text-sm px-5 py-3 rounded shadow outline-none mb-1 ease-linear transition-all duration-150"
                        type="submit"
                      // onClick={() => setShowModal(false)}
                      >
                        Save Changes
                      </button>
                      <button
                        className="ml-3 bg-accent text-white font-bold uppercase text-sm px-5 py-3 rounded shadow outline-none mb-1 ease-linear transition-all duration-150"
                        type="button"
                        onClick={() => setShowModal(false)}
                      >
                        Close
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
            <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
          </>
        ) : null}


      </section >
    </>
  )
}

import React from 'react'
import { useLoaderData } from 'react-router-dom'

export const Product = () => {
  const data = useLoaderData()

  console.log(data)
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

              <div class="lg:w-2/3 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
                <h2 class="text-sm title-font text-gray-500 tracking-widest">{data?.category_name}</h2>
                <h1 class="text-gray-900 text-3xl title-font font-medium mb-1">{data?.product_name}</h1>
                <div class="flex mb-4">
                  <span class="flex items-center">
                    <span class="text-gray-600">Original Price: {data?.original_price}</span>
                  </span>
                </div>
                <p class="leading-relaxed">{data?.product_description}</p>
                <div class="flex mt-5">
                  <span class="title-font font-medium text-2xl text-gray-900">৳ {data?.resell_price}</span>
                  <button class="flex ml-auto text-white bg-primary border-0 py-2 px-6 focus:outline-none rounded">Book Now</button>

                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

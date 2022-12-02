import React from 'react'
import { useLoaderData } from 'react-router-dom'

export const Wishlist = () => {

    const products = useLoaderData()

    return (
        <section className="text-gray-600 body-font relative">
            <div className="container px-5 py-24 mx-auto">
                <h3 className='sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900'>List of All your Wishlist Item</h3>

                <div className="overflow-x-auto">
                    {
                        products.length ? <table className="table w-full">
                            <thead>
                                <tr>
                                    <th></th>
                                    <th>Product Image</th>
                                    <th>Product Name</th>
                                    <th>Original Price</th>
                                    <th>Resell Price</th>
                                    <th>Reller Name</th>
                                    <th>Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    products.map((product, i) => product?.wishlist &&

                                        <tr key={product?._id}>
                                            <th>{i + 1}</th>
                                            <td>

                                                <div className="avatar">
                                                    <div className="w-24 rounded">
                                                        <img src={product?.product_img} />
                                                    </div>
                                                </div>
                                            </td>
                                            <td>{product?.product_name}</td>
                                            <td>{product?.original_price}</td>
                                            <td>{product?.resell_price}</td>
                                            <td>{product?.seller_name}</td>
                                            <td>
                                                <button className='flex items-center py-2 text-primary'>Make Payment</button>
                                            </td>

                                        </tr>
                                    )
                                }

                            </tbody>
                        </table>

                            :
                            <span className='font-medium title-font mt-4 text-gray-900 text-lg text-accent'>No Product Found !!</span>
                    }
                </div>

            </div>
        </section>
    )
}

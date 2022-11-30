import React from 'react'
import { useLoaderData } from 'react-router-dom'

export const MyOrder = () => {
    const data = useLoaderData()
    console.log(data)
    return (
        <section className="text-gray-600 body-font relative">
            <div className="container px-5 py-24 mx-auto">
                <h3 className='sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900'>List of My Products</h3>
                <div className="overflow-x-auto">
                    <table className="table w-full">
                        <thead>
                            <tr>
                                <th></th>
                                <th>Product Name</th>
                                <th>Purchase Price</th>
                                <th>Meeting Location</th>
                                <th>Seller Name</th>
                                <th>Seller Phone</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                data.map((order, i) =>
                                    <tr key={order?._id}>
                                        <th>{i + 1}</th>

                                        <td>{order?.product_name}</td>
                                        <td>{order?.product_resellPrice}</td>
                                        <td>{order?.meeting_location}</td>
                                        <td>{order?.seller_name}</td>
                                        <td>{order?.seller_mobile}</td>

                                    </tr>
                                )
                            }

                        </tbody>
                    </table>
                </div>
            </div>
        </section>
    )
}

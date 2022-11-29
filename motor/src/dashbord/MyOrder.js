import React from 'react'

export const MyOrder = () => {
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
                                <th>Your Phone</th>
                                <th>Meeting Location</th>
                                <th>Buyer Name</th>
                            </tr>
                        </thead>
                        {/* <tbody>
                            {
                                products.map((product, i) =>
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

                                    </tr>
                                )
                            }

                        </tbody> */}
                    </table>
                </div>
            </div>
        </section>
    )
}

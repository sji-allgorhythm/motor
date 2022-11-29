import React, { useContext, useEffect, useState } from 'react'
import toast from 'react-hot-toast';
import { FaRegTrashAlt } from 'react-icons/fa';

export const AllProducts = () => {

    const [products, setProducts] = useState([])
    const [refresh, setRefresh] = useState(false)

    useEffect(() => {
        fetch(`${process.env.REACT_APP_url}/api/all/product`)
            .then(res => res.json())
            .then(data => {
                setProducts(data)
            })
            .catch(err => console.error(err))

    }, [refresh])

    // console.log(products)

    // Action Delete
    const handleDelete = id => {

        // sending the data to server
        fetch(`${process.env.REACT_APP_url}/api/product/${id}`, {
            method: 'Delete',
            headers: {
                'Content-Type': 'application/json'
            },

        })
            .then((res) => res.json())
            .then((data) => {
                console.log("delete", data)
                if (data.acknowledged) {
                    toast.success('Product Deleted')
                }
                setRefresh(!refresh)
            })
    }

    return (
        <section className="text-gray-600 body-font relative">
            <div className="container px-5 py-24 mx-auto">
                <h3 className='sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900'>List of All Products</h3>
                <div className="overflow-x-auto">
                    <table className="table w-full">
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
                                        <td>{product?.seller_name}</td>
                                        <td>
                                            <button onClick={() => handleDelete(product?._id)} className='flex items-center py-2 text-primary'><FaRegTrashAlt /> Delete</button>
                                        </td>

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

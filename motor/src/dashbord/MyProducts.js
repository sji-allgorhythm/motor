import React, { useContext, useEffect, useState } from 'react'
import { AuthContext } from '../contexts/AuthProvider';

export const MyProducts = () => {

    const [products, setProducts] = useState([])
    const [refresh, setRefresh] = useState(false)

    const { user } = useContext(AuthContext);

    console.log(user?.email)

    useEffect(() => {
        fetch(`${process.env.REACT_APP_url}/api/product/?email=${user?.email}`)
            .then(res => res.json())
            .then(data => {
                setProducts(data)
            })
            .catch(err => console.error(err))

    }, [user?.email, refresh])

    console.log(products)

    return (
        <section className="text-gray-600 body-font relative">
            <div className="container px-5 py-24 mx-auto">
                <h3 className='sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900'>List of My Products</h3>
                <div className="overflow-x-auto">
                    <table className="table w-full">
                        <thead>
                            <tr>
                                <th></th>
                                <th>Product Image</th>
                                <th>Product Name</th>
                                <th>Original Price</th>
                                <th>Resell Price</th>
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

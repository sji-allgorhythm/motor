import React from 'react'
import { FaSearchLocation } from 'react-icons/fa'
import { Link } from 'react-router-dom'

export const AdvPage = ({ advPro }) => {

    return (
        <>
            <div className="card  bg-base-100 shadow-xl image-full w-1/3 mx-3">
                <figure><img src={advPro?.product_img} alt={advPro?.product_name} /></figure>
                <div className="card-body">
                    <h2 className="card-title text-2xl text-white">{advPro?.product_name}</h2>
                    <p className="text-white text-xl">{advPro?.resell_price} ৳</p>
                    <div className="card-actions justify-end">
                        <Link to={`/product/single/${advPro?._id}`} className="btn btn-primary">Book Now</Link>
                    </div>
                </div>
            </div>
        </>
    )

}

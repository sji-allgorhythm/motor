import React from 'react'
import { FaRegSadCry } from "react-icons/fa";
import { Link, useRouteError } from 'react-router-dom';

export const ErrorPage = () => {
    const error = useRouteError()
    return (
        <div className='h-screen flex justify-center flex-col content-center text-center w-full'>
            <span className='w-full flex justify-center'><FaRegSadCry style={{ fontSize: "200px" }} /></span>
            <h3 className='mt-3 t-primary'>Opps..</h3>
            {
                error && (
                    <div className='text-center mt-3 pb-5'>
                        <div className='fs-1 fw-bold'>{error.status}</div>
                        <div className='fs-3 text-danger'>{error.statusText || error.message}</div>
                    </div>
                )
            }
            <span className='w-full flex justify-center'>
                <Link to="/" className='btn btn-primary'>Go to Home</Link>
            </span>
        </div>
    )
}

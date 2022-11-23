import React from 'react'
import { Link } from 'react-router-dom'

export const Dart = () => {
    return (
        <>
            <section class="text-gray-600 bg-white body-font">
                <div class="container mx-auto flex px-5 md:flex-row flex-col items-center">
                    <div class="md:w-1/2 w-full">
                        <img class="object-cover object-center rounded" alt="hero" src="dart.jpg" />
                    </div>
                    <div class="md:w-1/2 w-full ">
                        <h2 className="title-font sm:text-5xl text-10xl mb-4 font-medium text-stone-800 font-extrabold">KINGS OF THE DIRT </h2>
                        <h3 className='title-font sm:text-5xl text-10xl mb-4 font-medium text-primary font-extrabold'>BEST MOTOCROSS GEAR</h3>
                        <Link to='/' className="btn btn-primary text-gray-200">Read Blogs</Link>
                    </div>
                </div>
            </section>
        </>
    )
}

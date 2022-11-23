import React from 'react'
import { Link } from 'react-router-dom'

const Hero = () => {
    return (
        <>
            <div className="carousel w-full">
                <div id="slide1" className="carousel-item hero" style={{ backgroundImage: `url("hero.jpg")` }}>
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide1" className="btn btn-circle">❮</a>
                        <a href="#slide2" className="btn btn-circle">❯</a>
                    </div>
                    <div className="hero-overlay bg-opacity-80"></div>
                    <div className="container">
                        <div className="text-white py-52">
                            <div className="max-w-xl px-5">
                                <h1 className="mb-5 text-5xl font-bold">Thousands of like-new, unique items added every day.</h1>
                                <p className="mb-5 text-lg">Millions of people buying and selling like-new, and preowned items.</p>
                                <Link to='/' className="btn btn-primary text-gray-200">Sign up now</Link>
                            </div>
                        </div>
                    </div>
                </div>

                <div id="slide2" className="carousel-item hero" style={{ backgroundImage: `url("hero-2.jpg")` }}>
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide1" className="btn btn-circle">❮</a>
                        <a href="#slide2" className="btn btn-circle">❯</a>
                    </div>
                    <div className="hero-overlay bg-opacity-80"></div>
                    <div className="container">
                        <div className="text-white py-52">
                            <div className="max-w-xl px-5">
                                <h1 className="mb-5 text-5xl font-bold">Secondhand season</h1>
                                <p className="mb-5 text-lg">Its the season for saving. Shop on-of-a-kind gifts.</p>
                                <Link to='/' className="btn btn-primary text-gray-200">Sign up now</Link>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </>
    )
}

export default Hero
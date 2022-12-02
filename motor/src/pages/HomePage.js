import React, { useEffect, useState } from 'react'
import { Dart } from '../components/Dart'
import Hero from '../components/Hero'
import { HomeCategory } from '../components/HomeCategory'
import { AdvPage } from './AdvPage'

export const HomePage = () => {

    const [products, setProducts] = useState([])

    useEffect(() => {


        fetch(`${process.env.REACT_APP_url}/api/all/product`)
            .then(res => res.json())
            .then(data => setProducts(data))

    }, [])

    return (
        <>
            <Hero />

            <section className="container px-5 mx-auto">
                <div className="flex pt-24">
                    {
                        products.map((advPro,i) => advPro.advertise &&
                            <AdvPage key={i} advPro={advPro} />

                        )
                    }
                </div>
            </section>

            <HomeCategory />
            <Dart />

        </>
    )
}


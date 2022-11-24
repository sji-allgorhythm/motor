import React, { useEffect, useState } from 'react'

export const HomeCategory = () => {

    const [category, setCategory] = useState([])

    useEffect(() => {
        fetch('http://localhost:5000/api/category')
            .then(res => res.json())
            .then(data => setCategory(data))

    }, [])



    return (
        <>
            <section class="text-gray-600 body-font">
                <div class="container px-5 py-24 mx-auto">
                    <div class="flex flex-wrap -m-4">
                        {
                            category.map(cat =>
                                <div class="p-4 md:w-1/4">
                                    <div class="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
                                        <img src={cat?.brandImg} alt={cat?.brandName} />
                                        <div class="p-6 bg-white flex justify-between">
                                            <h2 className="card-title">{cat?.brandName}</h2>
                                            <div className="btn btn-sm btn-primary font-bold text-white">View Details</div>
                                        </div>
                                    </div>
                                </div>
                            )
                        }
                    </div>
                </div>
            </section>
        </>
    )
}

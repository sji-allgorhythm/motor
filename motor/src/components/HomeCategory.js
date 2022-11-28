import React, { useEffect, useState } from 'react'
import { Loader } from './common/Loader'

export const HomeCategory = () => {

  const [category, setCategory] = useState([])

  useEffect(() => {


    fetch(`${process.env.REACT_APP_url}/api/category`)
      .then(res => res.json())
      .then(data => setCategory(data))

  }, [])



  return (
    <>
      <section className="text-gray-600 body-font">
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-wrap -m-4">
            {
              category.length ?
                category.map(cat =>

                  <div key={cat?._id} className="p-4 md:w-1/4">
                    <div className="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
                      <img src={cat?.brandImg} alt={cat?.brandName} />
                      <div className="p-6 bg-white flex justify-between">
                        <h2 className="card-title">{cat?.brandName}</h2>
                        <div className="btn btn-sm btn-primary text-white capitalize">View Items</div>
                      </div>
                    </div>
                  </div>

                )
                :
                <Loader />
            }
          </div>
        </div>
      </section>
    </>
  )
}

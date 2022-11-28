import React from 'react'
import { useLoaderData } from 'react-router-dom'

export const AllSeller = () => {
  const users = useLoaderData()

  const allSeller = users.filter(buyer => buyer.role === "seller")

  return (
    <section class="text-gray-600 body-font relative">
      <div class="container px-5 py-24 mx-auto">
        <h3 className='sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900'>All Seller List </h3>
        <div className="overflow-x-auto">
          <table className="table w-full">
            <thead>
              <tr>
                <th></th>
                <th>Name</th>
                <th>Email</th>
                <th>Verified</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {
                allSeller.map((user, i) =>
                  <tr key={user?._id}>
                    <th>{i + 1}</th>
                    <td>{user?.name}</td>
                    <td>{user?.email}</td>
                    <td>{user?.verified ? <>yes</> : <>No</>}</td>
                    <td>Delete</td>
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

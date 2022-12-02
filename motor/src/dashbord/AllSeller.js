import React, { useState } from 'react'
import toast from 'react-hot-toast'
import { FaCheckCircle, FaRegTrashAlt } from 'react-icons/fa'
import { useLoaderData, useNavigate } from 'react-router-dom'


export const AllSeller = () => {
  const users = useLoaderData()
  const navigate = useNavigate()
  const allSeller = users.filter(buyer => buyer.role === "seller")

  // Action Delete
  const handleDelete = id => {


    // sending the data to server
    fetch(`${process.env.REACT_APP_url}/api/user/${id}`, {
      method: 'Delete',
      headers: {
        'Content-Type': 'application/json'
      },

    })
      .then((res) => res.json())
      .then((data) => {
        if (data.acknowledged) {
          toast.success('Seller Deleted')
          navigate("/dashbord/all/sellers")
        }
      })
  }


  return (
    <section className="text-gray-600 body-font relative">
      <div className="container px-5 py-24 mx-auto">
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
                    <td>
                      <button onClick={() => handleDelete(user?._id)} className='flex items-center py-2 text-primary'><FaRegTrashAlt /> Delete</button>
                      <button className='flex items-center py-2 text-accent'><FaCheckCircle /> Verified</button>
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

import React, { useContext } from 'react'
import { Header } from '../components/common/Header'
import { FaBars } from "react-icons/fa";
import { Sidebar } from '../components/common/Sidebar';
import { HomeCategory } from '../components/HomeCategory';
import { AuthContext } from '../contexts/AuthProvider';

const Dashbord = () => {
  const { user } = useContext(AuthContext);

  return (

    <>
      {/* <Header /> */}


      <div className="drawer">
        <input id="my-drawer" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content">
          <div className="flex justify-between bg-zinc-200">
            <label htmlFor="my-drawer" className="btn btn-primary drawer-button m-3"><FaBars /></label>
            <div className='m-5 flex items-center'>
              <svg aria-hidden="true" class="flex-shrink-0 w-6 h-6 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clip-rule="evenodd"></path></svg>
              <span class="flex-1 ml-1 mt-1 whitespace-nowrap font-bold">{user.displayName}</span>
            </div>

          </div>


          <HomeCategory />

        </div>
        <div className="drawer-side">
          <label htmlFor="my-drawer" className="drawer-overlay"></label>
          <Sidebar />
        </div>
      </div>


    </>
  )
}

export default Dashbord
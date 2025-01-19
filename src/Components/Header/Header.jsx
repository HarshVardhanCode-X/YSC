import React from 'react'
import { IoNotificationsOutline } from "react-icons/io5";
import { FiMoon } from "react-icons/fi";



function Header() {
  return (
    <>
      <header className="bg-[#F7F7F7] text-[#29415C] flex justify-between items-center py-2 px-6">

        <div className="flex items-center justify-center gap-2">
          <img src="/Images/p1.png" alt="Logo" className="w-10 h-10 mr-2" />
          <p className='hidden md:block'><span className="text-2xl font-extralight">Youth Space </span><span className=' text-2xl font-bold'>Council</span> </p>
        </div>
        
        <div className='flex items-center justify-center gap-8'>
          <IoNotificationsOutline size={20}/>
          <FiMoon size={20}/>
          <div className='flex justify-center items-center gap-2'>
            <img src='/Images/download1.png' alt='Profile' className='rounded-full w-6'/>
            <span className='hidden md:block text-[15px]'>User Name</span>
          </div>
        </div>
        
      </header>
    </>
  )
}

export default Header
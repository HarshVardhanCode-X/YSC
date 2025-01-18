import React from 'react'

function Header() {
  return (
    <>
      <header className="bg-[#F7F7F7] text-[#29415C] flex justify-between items-center py-2 px-6">

        <div className="flex items-center justify-center gap-2">
          <img src="/Images/p1.png" alt="Shield Icon" className="w-10 h-10 mr-2" />
          <span className="text-2xl font-extralight">Youth Space</span><span className=' text-2xl font-bold'> Council</span> 
        </div>
        
        
      </header>
    </>
  )
}

export default Header
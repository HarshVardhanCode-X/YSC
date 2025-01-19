import React from 'react'
import Sidebar from '../Sidebar/Sidebar'
import CustomCalendar from '../Calender/Calender';

function Home() {

  const markedDates = [
    new Date(2025, 0, 18), 
    new Date(2025, 0, 20), 
  ];

  return (
    <>
    <div className='flex'>
      <Sidebar />
      <CustomCalendar markedDates={markedDates} />
    </div>

    </>
  )
}

export default Home

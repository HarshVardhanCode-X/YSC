import Sidebar from '../Sidebar/Sidebar'
import CustomCalendar from '../Calender/Calender';
import WeeklyGraph from '../Graph/Graph';

function Dashboard() {

  const markedDates = [
    new Date(2025, 0, 18),
    new Date(2025, 0, 20),
  ];

  return (
    <>
      <div className='flex'>
        <Sidebar />
        <WeeklyGraph />
        <CustomCalendar markedDates={markedDates} />
      </div>
    </>
  )
}

export default Dashboard;

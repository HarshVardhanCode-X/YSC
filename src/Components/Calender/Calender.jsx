import React, { useState } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import { FaExpand, FaPlus, FaChevronLeft, FaChevronRight } from "react-icons/fa";

const CustomCalendar = ({ markedDates }) => {
  const [value, setValue] = useState(new Date());


  return (
    <div
      className= "max-w-md mx-auto border max-h-[40vh] border-gray-200 rounded-xl shadow-lg bg-white">
      {/* Header */}
      <div className="flex justify-between items-center border-b border-gray-200 p-4">
        <h2 className="text-lg font-bold text-gray-700">{value.toDateString()}</h2>
        <div className="flex space-x-2">
          <button className="p-2 bg-gray-100 hover:bg-gray-200 rounded-full text-gray-600">
            <FaPlus />
          </button>
        </div>
      </div>

      {/* Calendar */}
      <Calendar
        onChange={setValue}
        value={value}
        tileClassName={({ date }) => {
          if (markedDates?.find((d) => d.toDateString() === date.toDateString())) {
            return "bg-green-500 text-white rounded-lg"; // Highlight marked dates
          }
          return "hover:bg-gray-100";
        }}
        prevLabel={<FaChevronLeft />}
        nextLabel={<FaChevronRight />}
        className="p-4"
      />
    </div>
  );
};

export default CustomCalendar;

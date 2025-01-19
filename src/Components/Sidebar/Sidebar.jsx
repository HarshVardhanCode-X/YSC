import React, { useState } from 'react';
import { FaSearch } from "react-icons/fa";
import { RxDashboard } from "react-icons/rx";
import { LuSquareUser } from "react-icons/lu";
import { MdOutlineFactCheck } from "react-icons/md";
import { MdOutlineEventNote } from "react-icons/md";
import { IoVideocamOutline } from "react-icons/io5";
import { BiMessageRoundedDetail } from "react-icons/bi";
import { FiUserPlus } from "react-icons/fi";
import { GrDocumentUpdate } from "react-icons/gr";
import { SiAwsorganizations } from "react-icons/si";
import { CiUser } from "react-icons/ci";
import { IoSettingsOutline } from "react-icons/io5";
import { FiLogOut } from "react-icons/fi";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";

export default function Sidebar() {
  const [isCollapsed, setIsCollapsed] = useState(false);

  return (
    <div className="flex text-[15px] h-screen overflow-y-scroll scrollbar-hide">
    
    <div
  className={`${
    isCollapsed ? "w-20" : "w-64"
  } bg-[#f7f7f7]  transition-all duration-300 flex flex-col`}
>

  <div className="flex-grow">

    <div className="p-4 flex   items-center space-x-2">
      {!isCollapsed && (
        <div className="relative flex-1">
          <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-gray-500">
            <FaSearch />
          </span>
          <input
            type="text"
            placeholder="Search here"
            className="pl-10 px-4 py-2 border border-gray-300 rounded-full w-full"
          />
        </div>
      )}
      <button
        onClick={() => setIsCollapsed(!isCollapsed)}
        className="p-2 rounded-full hover:bg-gray-200"
      >
        {isCollapsed ? <FiChevronRight /> : <FiChevronLeft />}
      </button>
    </div>
    <div className="p-4">
      <ul className="space-y-2 cursor-pointer">
        <li className="flex items-center p-2 rounded-md text-gray-700 hover:bg-gray-200">
          <RxDashboard className="mr-3" />
          {!isCollapsed && <span>Dashboard</span>}
        </li>
        <li className="flex items-center p-2 rounded-md text-gray-700 hover:bg-gray-200">
          <LuSquareUser className="mr-3" />
          {!isCollapsed && <span>Courses</span>}
        </li>
        <li className="flex items-center p-2 rounded-md text-gray-700 hover:bg-gray-200">
          <MdOutlineFactCheck className="mr-3" />
          {!isCollapsed && <span>Projects</span>}
        </li>
        <li className="flex items-center p-2 rounded-md text-gray-700 hover:bg-gray-200">
          <MdOutlineEventNote className="mr-3" />
          {!isCollapsed && <span>Events</span>}
        </li>
        <li className="flex items-center p-2 rounded-md text-gray-700 hover:bg-gray-200">
          <IoVideocamOutline className="mr-3" />
          {!isCollapsed && <span>Meeting</span>}
        </li>
        <li className="flex items-center p-2 rounded-md text-gray-700 hover:bg-gray-200">
          <BiMessageRoundedDetail className="mr-3" />
          {!isCollapsed && <span>Message</span>}
        </li>
        <li className="flex items-center p-2 rounded-md text-gray-700 hover:bg-gray-200">
          <FiUserPlus className="mr-3" />
          {!isCollapsed && <span>Teams</span>}
        </li>
        <li className="flex items-center p-2 rounded-md text-gray-700 hover:bg-gray-200">
          <GrDocumentUpdate className="mr-3" />
          {!isCollapsed && <span>Updates</span>}
        </li>
        <li className="flex items-center p-2 rounded-md text-gray-700 hover:bg-gray-200">
          <SiAwsorganizations className="mr-3" />
          {!isCollapsed && <span>Organization</span>}
        </li>
        <li className="flex items-center p-2 rounded-md text-gray-700 hover:bg-gray-200">
          <CiUser className="mr-3" />
          {!isCollapsed && <span>Account</span>}
        </li>
        <li className="flex items-center p-2 rounded-md text-gray-700 hover:bg-gray-200">
          <IoSettingsOutline className="mr-3" />
          {!isCollapsed && <span>Setting</span>}
        </li>
      </ul>
      

    </div>
    <div className="p-4">
  <button
    className={`flex items-center p-2 w-full text-gray-700 hover:bg-gray-200 rounded-md ${
      isCollapsed ? "justify-center" : ""
    }`}
  >
    <FiLogOut className="mr-3" />
    {!isCollapsed && <span>Logout</span>}
  </button>
</div>
  </div>  
  </div>
  </div>

  );
}

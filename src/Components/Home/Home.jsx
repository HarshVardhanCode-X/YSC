import React from 'react'
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


export default function Home() {
  return (
    <div className="bg-[#f7f7f7] min-h-screen w-64 shadow-md">

      <div className="p-4">
        <div className="relative">
          <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-gray-500">
            <FaSearch />
          </span>
          <input
            type="text"
            placeholder="Search here"
            className="pl-10 px-4 py-2 border border-gray-300 rounded-full w-full"
          />
        </div>
      </div>

      
      <div className="p-4">
        <ul className="space-y-2 cursor-pointer">
          <li className="flex items-center p-2 rounded-md text-gray-700 hover:bg-gray-200">
            <RxDashboard 
            className="mr-3" />
            <span>Dashboard</span>
          </li>
          <li className="flex items-center p-2 rounded-md text-gray-700 hover:bg-gray-200">
            <LuSquareUser className="mr-3" />
            <span>Courses</span>
          </li>
          <li className="flex items-center p-2 rounded-md text-gray-700 hover:bg-gray-200">
            <MdOutlineFactCheck className="mr-3" />
            <span>Projects</span>
          </li>
          <li className="flex items-center p-2 rounded-md text-gray-700 hover:bg-gray-200">
            <MdOutlineEventNote className="mr-3" />
            <span>Events</span>
          </li>
          <li className="flex items-center p-2 rounded-md text-gray-700 hover:bg-gray-200">
            <IoVideocamOutline  className="mr-3" />
            <span>Meeting</span>
          </li>
          <li className="flex items-center p-2 rounded-md text-gray-700 hover:bg-gray-200">
            <BiMessageRoundedDetail className="mr-3" />
            <span>Message</span>
          </li>
          <li className="flex items-center p-2 rounded-md text-gray-700 hover:bg-gray-200">
            <FiUserPlus className="mr-3" />
            <span>Teams</span>
          </li>
          <li className="flex items-center p-2 rounded-md text-gray-700 hover:bg-gray-200">
            <GrDocumentUpdate className="mr-3" />
            <span>Updates</span>
          </li>
          <li className="flex items-center p-2 rounded-md text-gray-700 hover:bg-gray-200">
            <SiAwsorganizations className="mr-3" />
            <span>Organization</span>
          </li>
          <li className="flex items-center p-2 rounded-md text-gray-700 hover:bg-gray-200">
            <CiUser className="mr-3" />
            <span>Account</span>
          </li>
          <li className="flex items-center p-2 rounded-md text-gray-700 hover:bg-gray-200">
            <IoSettingsOutline className="mr-3" />
            <span>Setting</span>
          </li>
        </ul>
      </div>

      
      <div className=" bottom-4 w-full px-4">
        <button className="flex items-center p-2 w-full text-gray-700 hover:bg-gray-200 rounded-md">
          <FiLogOut className="mr-3" />
          <span>Logout</span>
        </button>
      </div>
    </div>

  )
}

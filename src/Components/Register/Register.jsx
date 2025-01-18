import React from 'react'
import { FcGoogle } from "react-icons/fc";
import { Link } from 'react-router-dom';


function Register() {
    return (
        <>
            <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-blue-50 via-purple-50 to-indigo-100">
                <div className="flex justify-evenly w-full bg-gradient-to-r from-blue-50 via-purple-50 to-indigo-100 rounded-lg overflow-hidden">

                    <div className="w-full max-w-xl md:w-1/2 p-8">
                        <h2 className="text-4xl font-bold text-gray-800 pt-4 mb-4">Create Your Account</h2>
                        <p className="text-gray-600 mb-8">Join us and get started with Youth Space Council!</p>

                        <form>
                            <div className="mb-4">
                                <input
                                    type="text"
                                    placeholder="Enter your name"
                                    className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#2A425D] placeholder-gray-400"
                                />
                            </div>

                            <div className="mb-4">
                                <input
                                    type="email"
                                    placeholder="Enter your email"
                                    className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#2A425D] placeholder-gray-400"
                                />
                            </div>

                            <div className="mb-4">
                                <input
                                    type="text"
                                    placeholder="Enter your phone"
                                    className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#2A425D] placeholder-gray-400"
                                />
                            </div>

                            <div className="mb-4">
                                <input
                                    type="password"
                                    placeholder="Enter your password"
                                    className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#2A425D] placeholder-gray-400"
                                />
                            </div>

                            <div className="mb-4">
                                <input
                                    type="password"
                                    placeholder="Confirm your password"
                                    className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#2A425D] placeholder-gray-400"
                                />
                            </div>

                            <div>
                                <button className="w-full py-3 bg-[#2A425D] text-white rounded-lg hover:bg-[#476e9b] shadow-md transition duration-300">
                                    Register
                                </button>
                            </div>
                        </form>

                        <div className="mt-8 flex flex-col items-center">
                            <p className="text-gray-500 text-sm mt-2 mb-2">
                                Already Registered? <Link to="/" className="text-indigo-500 hover:underline">Login now</Link>
                            </p>
                            <p className="text-gray-500 text-sm mb-4">Or sign up with</p>
                            <div className="flex gap-4">
                                <button className="bg-gray-100 p-2 rounded-full shadow-md hover:shadow-lg transition-transform transform hover:scale-105">
                                    <FcGoogle size={30} />
                                </button>
                                <button className="bg-gray-100 p-2 rounded-full shadow-md hover:shadow-lg transition-transform transform hover:scale-105">
                                    <img src='./Images/download1.png' className="w-7" alt="GitHub Sign Up" />
                                </button>
                            </div>
                        </div>
                    </div>

                    <div className="hidden md:block w-full content-center md:w-1/2 max-w-xl bg-gradient-to-r from-blue-50 via-purple-50 to-indigo-100 relative">
                        <img
                            src='./Images/new.webp'
                            alt="Illustration"
                            className="object-cover w-full h-full max-h-[500px] md:max-h-[600px]"
                        />
                    </div>
                </div>
            </div>
        </>
    )
}

export default Register
import React from 'react'
import { FcGoogle } from "react-icons/fc";
import { Link } from 'react-router-dom';

function Login() {

    return (
        <>
            <div className="h-screen flex items-center justify-center bg-gradient-to-r from-blue-50 via-purple-50 to-indigo-100">
                <div className="flex justify-evenly w-full bg-gradient-to-r from-blue-50 via-purple-50 to-indigo-100 rounded-lg overflow-hidden">

                    <div className="w-full max-w-xl md:w-1/2 p-8">
                        <h2 className="text-4xl font-bold text-gray-800 pt-4 mb-4">Welcome To Youth Space Council!</h2>
                        <p className="text-gray-600 mb-8">Welcome back, you've been missed!</p>

                        <form>
                            <div className="mb-4 relative">
                                <input
                                    type="email"
                                    placeholder="Enter username"
                                    className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#2A425D] placeholder-gray-400"
                                />
                                <span className="absolute inset-y-0 left-3 flex items-center text-gray-400">
                                    <i className="fas fa-envelope"></i>
                                </span>
                            </div>

                            <div className="mb-4 relative">
                                <input
                                    type="password"
                                    placeholder="Password"
                                    className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#2A425D] placeholder-gray-400"
                                />
                                <span className="absolute inset-y-0 left-3 flex items-center text-gray-400">
                                    <i className="fas fa-lock"></i>
                                </span>
                                <div className="flex justify-between items-center text-center mt-2 ml-2 mr-2">
                                    <a href="#" className="text-sm text-indigo-500 hover:underline">Recovery Password</a>
                                    <p className="text-gray-500 text-sm mt-2">
                                        Not a member? <Link to="/Register" className="text-indigo-500 hover:underline">Register now</Link>
                                    </p>
                                </div>
                            </div>

                            <div>
                                <Link to="/Home">
                                    <button className="w-full py-3 bg-[#2A425D] text-white rounded-lg hover:bg-[#476e9b] shadow-md transition duration-300">
                                        Sign In
                                    </button>
                                </Link>
                            </div>
                        </form>

                        <div className="mt-8 flex flex-col items-center">
                            <p className="text-gray-500 text-sm mb-4">Or continue with</p>
                            <div className="flex gap-4">
                                <button className="bg-gray-100 p-2 rounded-full shadow-md hover:shadow-lg transition-transform transform hover:scale-105">
                                    <FcGoogle size={30} />
                                </button>
                                <button className="bg-gray-100 p-2 rounded-full shadow-md hover:shadow-lg transition-transform transform hover:scale-105">
                                    <img src='./Images/download1.png' className="w-7" alt="GitHub Login" />
                                </button>
                            </div>
                        </div>
                    </div>

                    <div className="hidden md:block w-full md:w-1/2 md:h-[600px] max-w-xl bg-transparent relative">
                        <img
                            src='./Images/new.webp'
                            alt="Illustration"
                            className="object-cover w-full h-full max-h-[500px] md:max-h-[600px]"
                        />
                        {/* <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-t from-purple-600 to-transparent opacity-40"></div> */}
                    </div>
                </div>
            </div>
        </>
    )
}

export default Login
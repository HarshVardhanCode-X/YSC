import React from 'react'
import { FcGoogle } from "react-icons/fc";

function Login() {
    return (
        <>
            <div className="min-h-screen flex items-center justify-center bg-gray-100">
                <div className="flex w-full max-w-4xl bg-white shadow-2xl rounded-lg overflow-hidden">

                    <div className="hidden md:block md:w-1/2 bg-purple-200 relative">
                        <img
                            src='./Images/chat1.webp'
                            alt="Illustration"
                            className="object-cover w-full h-full"
                        />
                    </div>


                    <div className="w-full md:w-1/2 p-8">
                        <div className="text-right">
                            <p className="text-gray-500 text-sm" >
                                Not a member? <a href="#" className="text-blue-500">Register now</a>
                            </p>
                        </div>
                        <h2 className="text-3xl font-bold text-gray-800 pt-4 mb-4">Welcome To ChatHive!</h2>
                        <p className="text-gray-500 mb-8">Welcome back you've been missed!</p>

                        <form>
                            <div className="mb-4">
                                <input
                                    type="email"
                                    placeholder="Enter username"
                                    className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                                    />
                            </div>
                            <div className="input-box1 mb-4">
                                <input
                                    type="password"
                                    placeholder="Password"
                                    className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                                    />
                                <div className="text-right mt-2" >
                                    <a href="#" className="text-sm text-blue-500" >Recovery Password</a>
                                </div>
                            </div>

                            <div>
                                <button className="w-full py-3 bg-blue-500 text-white rounded-lg hover:bg-blue-700 transition duration-300"
                                   >
                                    Sign In
                                </button>
                            </div>
                        </form>

                        <div className="sign-button mt-8 flex items-center justify-center">
                            <p className="text-gray-500 text-sm">Or continue with</p>
                            <div className="flex gap-4 ml-4">
                                <button  className="bg-gray-100 p-2 rounded-full">
                                    <FcGoogle size={30} />
                                </button>
                                <button  className="signin-git bg-gray-100 p-2 rounded-full">
                                    <img src='./Images/download1.png' className="w-7" />
                                </button>
                                {/* <button className="bg-gray-100 p-2 rounded-full">
                                    <img src='./Images/download2.png' className="w-7"/>
                                </button> */}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Login
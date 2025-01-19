import { useState } from "react";
import { FcGoogle } from "react-icons/fc";
import { Link, useNavigate } from 'react-router-dom';
import { isEmailValid } from "../../utils";
import { errorToast, successToast, warnToast } from "../../helpers/toast";
import { EMAIL_REQUIRED, INCORRECT_EMAIL, PASSWORD_REQUIRED, INVALID_PASSWORD } from "../../constants/stringConstants";
import { login } from "../../helpers/api";
import { storeLocalData } from "../../helpers";
import { USER_DATA } from "../../constants/appConstants";

const Login = () => {
    const navigate = useNavigate();

    const [isLoading, setIsLoading] = useState(false);
    const [loginData, setLoginData] = useState({ email: "", password: "" });

    const handleLogin = async (e) => {
        e.preventDefault();

        if (!isLoading) {
            const { email, password } = loginData;

            if (!email) {
                warnToast(EMAIL_REQUIRED);
            } else if (!isEmailValid(email)) {
                warnToast(INCORRECT_EMAIL);
            } else if (!password) {
                warnToast(PASSWORD_REQUIRED);
            } else if (password.length < 6) {
                warnToast(INVALID_PASSWORD);
            } else {
                setIsLoading(true);
                const resp = await login({ email, password });
                if (resp?.ok) {
                    storeLocalData(USER_DATA, resp?.data);
                    navigate('/dashboard');
                    successToast(resp?.message);
                } else {
                    errorToast(resp?.message);
                };
                setIsLoading(false);
            };
        };
    };

    return (
        <div className="h-screen flex items-center justify-center bg-gradient-to-r from-blue-50 via-purple-50 to-indigo-100">
            <div className="flex justify-evenly w-full bg-gradient-to-r from-blue-50 via-purple-50 to-indigo-100 rounded-lg overflow-hidden">

                <div className="w-full max-w-xl md:w-1/2 p-8">
                    <h2 className="text-4xl font-bold text-gray-800 pt-4">Welcome back to</h2>
                    <h2 className="text-4xl font-bold text-gray-800 mb-4">Youth Space Council!</h2>
                    <p className="text-gray-600 mb-8">You've been missed!</p>

                    <div className="mb-4 relative">
                        <input
                            type="email"
                            placeholder="Enter your email"
                            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#2A425D] placeholder-gray-400"
                            value={loginData.email}
                            onChange={e => setLoginData({ ...loginData, email: e.target.value.slice(0, 50) })}
                        />
                        <span className="absolute inset-y-0 left-3 flex items-center text-gray-400">
                            <i className="fas fa-envelope"></i>
                        </span>
                    </div>

                    <div className="mb-4 relative">
                        <input
                            type="password"
                            placeholder="Enter your Password"
                            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#2A425D] placeholder-gray-400"
                            value={loginData.password}
                            onChange={e => setLoginData({ ...loginData, password: e.target.value.slice(0, 50) })}
                        />
                        <span className="absolute inset-y-0 left-3 flex items-center text-gray-400">
                            <i className="fas fa-lock"></i>
                        </span>
                    </div>

                    <div className="flex justify-between items-center text-center mt-2 mb-4 mx-1">
                        <a href="#" className="text-sm text-indigo-500 hover:underline">Forgot Password?</a>
                        <p className="text-gray-500 text-sm mt-2">
                            Not a member? <Link to="/register" className="text-indigo-500 hover:underline">Register now</Link>
                        </p>
                    </div>

                    <button
                        onClick={handleLogin}
                        className="w-full py-3 bg-[#2A425D] text-white rounded-lg hover:bg-[#476e9b] shadow-md transition duration-300">
                        {isLoading ? "Launching..." : "Sign In"}
                    </button>

                    <div className="mt-4 flex flex-col items-center">
                        <p className="text-gray-500 text-sm mb-4">Or</p>
                        <button className="justify-center w-full py-3 bg-[#2A425D] text-white rounded-lg hover:bg-[#476e9b] shadow-md transition duration-300 flex items-center gap-3">
                            <FcGoogle size={30} />
                            <p>Sign In with Google</p>
                        </button>
                    </div>
                </div>

                <div className="hidden md:block w-full md:w-1/2 md:h-[600px] max-w-xl bg-transparent relative">
                    <img
                        src='images/new.webp'
                        alt="Illustration"
                        className="rounded-xl object-cover w-full h-full max-h-[500px] md:max-h-[600px]"
                    />
                </div>
            </div>
        </div>
    );
};

export default Login;

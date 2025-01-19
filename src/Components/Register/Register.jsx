import { useState } from 'react'
import { FcGoogle } from "react-icons/fc";
import { Link, useNavigate } from 'react-router-dom';
import { isEmailValid } from '../../utils';
import { storeLocalData } from '../../helpers';
import { errorToast, successToast, warnToast } from '../../helpers/toast';
import { USER_DATA } from '../../constants/appConstants';
import { register } from '../../helpers/api';
import { CONFIRM_PASSWORD_NOT_MATCHED, EMAIL_REQUIRED, INCORRECT_EMAIL, INVALID_PASSWORD, INVALID_PHONE, NAME_REQUIRED, PASSWORD_REQUIRED, PHONE_REQUIRED } from '../../constants/stringConstants';

const Register = () => {
    const navigate = useNavigate();

    const [isLoading, setIsLoading] = useState(false);
    const [registerData, setRegisterData] = useState({ name: "", email: "", phone: "", password: "", confirmPassword: "" });

    const handleRegister = async (e) => {
        e.preventDefault();

        if (!isLoading) {
            const { name, email, phone, password, confirmPassword } = registerData;

            if (!name) {
                warnToast(NAME_REQUIRED());
            } else if (!email) {
                warnToast(EMAIL_REQUIRED);
            } else if (!isEmailValid(email)) {
                warnToast(INCORRECT_EMAIL);
            } else if (!phone) {
                warnToast(PHONE_REQUIRED);
            } else if (phone.length !== 10) {
                warnToast(INVALID_PHONE);
            } else if (!password) {
                warnToast(PASSWORD_REQUIRED);
            } else if (password.length < 6) {
                warnToast(INVALID_PASSWORD);
            } else if (password !== confirmPassword) {
                warnToast(CONFIRM_PASSWORD_NOT_MATCHED);
            } else {
                setIsLoading(true);
                const resp = await register({ name, email, password, phone: "+91" + phone });
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
        <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-blue-50 via-purple-50 to-indigo-100 overflow-scroll">
            <div className="flex flex-wrap justify-evenly w-full bg-gradient-to-r from-blue-50 via-purple-50 to-indigo-100 rounded-lg overflow-hidden">

                <div className="flex-col items-center justify-center w-full max-w-xl md:w-1/2 p-8">
                    <h2 className="text-4xl font-bold text-gray-800 pt-2">Register with</h2>
                    <h2 className="text-4xl font-bold text-gray-800 mb-2">Youth Space Council!</h2>

                    <div className='flex-col items-center justify-center'>
                        <div className="mb-4">
                            <input
                                type="text"
                                placeholder="Enter your name"
                                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#2A425D] placeholder-gray-400"
                                value={registerData.name}
                                onChange={e => setRegisterData({ ...registerData, name: e.target.value.slice(0, 100) })}
                            />
                        </div>

                        <div className="mb-4">
                            <input
                                type="email"
                                placeholder="Enter your email"
                                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#2A425D] placeholder-gray-400"
                                value={registerData.email}
                                onChange={e => setRegisterData({ ...registerData, email: e.target.value.slice(0, 50) })}
                            />
                        </div>

                        <div className="mb-4">
                            <input
                                type="number"
                                placeholder="Enter your Phone"
                                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#2A425D] placeholder-gray-400"
                                value={registerData.phone}
                                onChange={e => setRegisterData({ ...registerData, phone: e.target.value.slice(0, 10) })}
                            />
                        </div>

                        <div className="mb-4">
                            <input
                                type="password"
                                placeholder="Enter your password"
                                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#2A425D] placeholder-gray-400"
                                value={registerData.password}
                                onChange={e => setRegisterData({ ...registerData, password: e.target.value.slice(0, 50) })}
                            />
                        </div>

                        <div className="mb-4">
                            <input
                                type="password"
                                placeholder="Confirm your password"
                                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#2A425D] placeholder-gray-400"
                                value={registerData.confirmPassword}
                                onChange={e => setRegisterData({ ...registerData, confirmPassword: e.target.value.slice(0, 50) })}
                            />
                        </div>

                        <p className="text-gray-500 text-sm mt-2 mb-4 text-center">
                            Already Member? <Link to="/" className="text-indigo-500 hover:underline">Login now</Link>
                        </p>

                        <button
                            onClick={handleRegister}
                            className="w-full py-3 bg-[#2A425D] text-white rounded-lg hover:bg-[#476e9b] shadow-md transition duration-300">
                            {isLoading ? "Launching..." : "Register"}
                        </button>
                    </div>

                    <div className="mt-4 flex flex-col items-center">
                        <p className="text-gray-500 text-sm mb-4">Or</p>
                        <button className="justify-center w-full py-3 bg-[#2A425D] text-white rounded-lg hover:bg-[#476e9b] shadow-md transition duration-300 flex items-center gap-3">
                            <FcGoogle size={30} />
                            <p>Register with Google</p>
                        </button>
                    </div>
                </div>

                <div className="hidden md:block w-full content-center md:w-1/2 md-h-[600px] max-w-xl bg-transparent relative">
                    <img
                        src='./images/new.webp'
                        alt="Illustration"
                        className="rounded-xl object-cover w-full h-full max-h-[500px] md:max-h-[600px]"
                    />
                </div>
            </div>
        </div>
    );
};

export default Register;

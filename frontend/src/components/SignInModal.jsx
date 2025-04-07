import React from 'react'
import { useState } from 'react'
export const SignInModal = ({ setIsLogin, setIsActive, setIsToken }) => {
    const [inputField, setInputField] = useState({ userName: "", password: "" })

    const handleChange = (e) => {
        const { name, value } = e.target;

        setInputField({
            ...inputField,
            [name]: value
        })

    }
    console.log(inputField)
    return (

        <div className="bg-[#1f1f1f] text-white lg:w-[420px] w-[240px] md:w-[420px]  lg:p-10 md:p-10 p-6 rounded-lg shadow-lg relative">

            <button
                onClick={() => setIsActive(false)}
                className="absolute top-3 right-4 text-gray-400 hover:text-white text-xl">&times;</button>

            <h2 className="text-2xl font-bold text-center mb-2">Sign In</h2>
            <p className="text-sm text-gray-400 text-center mb-6">
                Unlock Your World of Entertainment, Join the YouTube Community
            </p>

            <div className="flex flex-col gap-4">
                <input

                    value={inputField.userName}
                    onChange={handleChange}
                    type="email"
                    name="userName"
                    placeholder="abc@gmail.com"
                    className="bg-[#2d2d2d] text-sm px-4 py-2 rounded focus:outline-none focus:ring-2 focus:ring-red-500"
                />
                <input
                    onChange={handleChange}
                    value={inputField.password}
                    name="password"
                    type="password"
                    placeholder="123456"
                    className="bg-[#2d2d2d] text-sm px-4 py-2 rounded focus:outline-none focus:ring-2 focus:ring-red-500"
                />
            </div>

            <button
                onClick={() => {
                    setIsActive(false)
                    setIsToken(false)
                }}
                className="mt-6 w-full bg-red-600 hover:bg-red-700 transition text-white font-semibold py-2 rounded">
                Sign In
            </button>
            <p className="text-center text-sm text-gray-400 mt-4">
                Don't have an account?{' '}
                <span
                    onClick={() => { setIsLogin(false) }}
                    className="text-white font-medium cursor-pointer hover:underline">Create one</span>
            </p>
        </div>

    )
}

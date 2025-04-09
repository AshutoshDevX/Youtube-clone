import React from 'react'
import { useState } from 'react'
import profile from "../assets/profile.jpg"
import axios from 'axios'

export const SignUpModal = ({ setIsLogin, setIsActive, setIsToken }) => {
    const [uploadedImgUrl, setUploadedImgUrl] = useState(profile)
    const [inputField, setInputField] = useState({ channelName: "", name: "", userName: "", password: "", profileUrl: "" })


    const handleChange = (e) => {
        const { name, value } = e.target;

        setInputField({
            ...inputField,
            [name]: value
        })
    }

    const uploadImage = async (e) => {
        const files = e.target.files;
        const data = new FormData();

        data.append("file", files[0]);
        data.append("upload_preset", "youtube-clone")


        try {
            const response = await axios.post("https://api.cloudinary.com/v1_1/dcvnzm5nn/image/upload", data)
            const url = response.data.url
            setUploadedImgUrl(url)
            const name = e.target.name;
            setInputField({
                ...inputField,
                [name]: url
            })

        }
        catch (err) {
            console.log(err)
        }
    }


    return (
        <div className="bg-[#1f1f1f] text-white lg:w-[420px] w-[240px] md:w-[420px]  lg:p-10 md:p-10 p-6 rounded-lg shadow-lg relative">
            <button
                onClick={() => {
                    setIsActive(false);
                    setIsLogin(true);
                }}
                className="absolute top-3 right-4 text-gray-400 hover:text-white text-xl">&times;</button>
            <h2 className="text-2xl font-bold text-center mb-2">Create Your Account</h2>
            <p className="text-sm text-gray-400 text-center mb-6">
                Unlock Your World of Entertainment, Unlock Your World of Entertainment, Join the YouTube Community
            </p>

            <div className="flex flex-col gap-4">
                <input
                    onChange={handleChange}
                    value={inputField.channelName}
                    name="channelName"
                    type="text"
                    placeholder="channelName"
                    className="bg-[#2d2d2d] text-sm px-4 py-2 rounded focus:outline-none focus:ring-2 focus:ring-red-500"
                />
                <input
                    onChange={handleChange}
                    value={inputField.name}
                    name="name"
                    type="text"
                    placeholder="Name"
                    className="bg-[#2d2d2d] text-sm px-4 py-2 rounded focus:outline-none focus:ring-2 focus:ring-red-500"
                />
                <input
                    onChange={handleChange}
                    value={inputField.email}
                    name="email"
                    type="email"
                    placeholder="Email Address"
                    className="bg-[#2d2d2d] text-sm px-4 py-2 rounded focus:outline-none focus:ring-2 focus:ring-red-500"
                />
                <input
                    onChange={handleChange}
                    value={inputField.password}
                    name="password"
                    type="password"
                    placeholder="Passcode"
                    className="bg-[#2d2d2d] text-sm px-4 py-2 rounded focus:outline-none focus:ring-2 focus:ring-red-500"
                />
                <div className="flex flex-col md:flex-col lg:flex-row gap-3 w-full h-auto items-center overflow-hidden">
                    <div className="flex justify-center h-12 w-12"><img className="bg-[#2d2d2d] h-full w-full rounded-full" src={uploadedImgUrl} /></div>
                    <input
                        onChange={uploadImage}
                        name="file"
                        type="file"
                        accept="image/png, image/jpeg"
                        className="text-sm lg:max-w-70 mg:w-full w-full file:mr-4 file:rounded-full file:border-0 file:bg-violet-50 file:px-4 file:py-2 file:text-sm file:font-semibold file:text-violet-700 hover:file:bg-red-100 dark:file:bg-red-600 dark:file:text-red-100 dark:hover:file:bg-red-500 ..."
                    />
                </div>
            </div>

            <button
                onClick={() => {
                    setIsActive(false)
                    setIsToken(false)
                }}
                className="mt-6 w-full bg-red-600 hover:bg-red-700 transition text-white font-semibold py-2 rounded">
                Create Your Account
            </button>

            <p className="text-center text-sm text-gray-400 mt-4">
                Already have an account?{' '}
                <span
                    onClick={() => setIsLogin(true)}
                    className="text-white font-medium cursor-pointer hover:underline">Signin</span>
            </p>
        </div>
    )
}

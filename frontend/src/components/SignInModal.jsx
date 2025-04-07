import React from 'react'

export const SignInModal = ({ openSignUp }) => {
    return (
        <div className="fixed inset-0 flex items-center justify-center bg-black/80 z-50">
            <div className="bg-[#1f1f1f] text-white w-[380px] p-6 rounded-lg shadow-lg relative">

                <button
                    onClick={() => setIsActive(!isActive)}
                    className="absolute top-3 right-4 text-gray-400 hover:text-white text-xl">&times;</button>

                <h2 className="text-2xl font-bold text-center mb-2">Sign In</h2>
                <p className="text-sm text-gray-400 text-center mb-6">
                    Unlock Your World of Entertainment, Join the YouTube Community
                </p>

                <div className="flex flex-col gap-4">
                    <input
                        type="email"
                        placeholder="Email Address"
                        className="bg-[#2d2d2d] text-sm px-4 py-2 rounded focus:outline-none focus:ring-2 focus:ring-red-500"
                    />
                    <input
                        type="password"
                        placeholder="Passcode"
                        className="bg-[#2d2d2d] text-sm px-4 py-2 rounded focus:outline-none focus:ring-2 focus:ring-red-500"
                    />
                </div>

                <button className="mt-6 w-full bg-red-600 hover:bg-red-700 transition text-white font-semibold py-2 rounded">
                    Sign In
                </button>
                <p className="text-center text-sm text-gray-400 mt-4">
                    Don't have an account?{' '}
                    <span
                        onClick={() => setSwitchModal(!switchModal)}
                        className="text-white font-medium cursor-pointer hover:underline">Create one</span>
                </p>
            </div>
        </div>
    )
}

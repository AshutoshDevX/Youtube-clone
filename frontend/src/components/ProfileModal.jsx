import React from 'react'
import { CgProfile } from "react-icons/cg";
import { FiLogOut } from "react-icons/fi";
import { IoSettingsOutline } from "react-icons/io5";
import { IoIosHelpCircleOutline } from "react-icons/io";
export const ProfileModal = () => {
    return (
        <div className="bg-stone-100 p-3 z-1000 absolute top-13 right-8  flex flex-col gap-3 rounded-md">
            <div className="flex gap-2 items-center">
                <CgProfile className="text-xl" />
                <span>Profile</span>
            </div>
            <div className="flex gap-2 items-center">
                <FiLogOut className="text-xl" />
                <span>Logout</span>
            </div>
            <div className="flex gap-2 items-center">
                <IoSettingsOutline className="text-xl" />
                <span>Setting</span>
            </div>
            <div className="flex gap-2 items-center">
                <IoIosHelpCircleOutline className="text-xl" />
                <span>Help</span>
            </div>
        </div>
    )
}

import React from 'react'
import { IoMdHome } from "react-icons/io";
import { SiYoutubeshorts } from "react-icons/si";
import { MdOutlineSubscriptions } from "react-icons/md";
import { CgProfile } from "react-icons/cg";

export const MiniSideBar = () => {
    return (
        <div>
            <div className="flex flex-col sticky w-20 p-1 h-full box-border">
                <div className="flex flex-col gap-1 bg-white justify-center items-center p-5 rounded-xl hover:bg-stone-100">
                    <IoMdHome className="text-2xl" />
                    <p className="text-[10px]">Home</p>
                </div>
                <div className="flex flex-col gap-1 bg-white justify-center items-center p-5 rounded-xl hover:bg-stone-100">
                    <SiYoutubeshorts className="text-2xl" />
                    <p className="text-[10px]">Shorts</p>
                </div>
                <div className="flex flex-col gap-1 bg-white justify-center items-center py-4 rounded-xl hover:bg-stone-100">
                    <MdOutlineSubscriptions className="text-2xl" />
                    <p className="text-[10px]">Subscriptions</p>
                </div>
                <div className="flex flex-col gap-1 bg-white justify-center items-center p-5 rounded-xl hover:bg-stone-100">
                    <CgProfile className="text-2xl" />
                    <p className="text-[10px]">You</p>
                </div>
            </div>
        </div>

    )
}

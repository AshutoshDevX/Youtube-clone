import React from 'react'
import { RxHamburgerMenu } from "react-icons/rx";
import { FaYoutube } from "react-icons/fa";
import { IoMdMic } from "react-icons/io";
import { CiSearch } from "react-icons/ci";
import { LiaPlusSolid } from "react-icons/lia";

export const Navbar = ({ toggle, setToggle }) => {
    return (
        <div className="bg-white flex justify-between items-center h-14 px-4 sticky top-0">
            <div className="flex h-full items-center">
                <div className="items-center h-10 w-10 p-2">
                    <RxHamburgerMenu
                        onClick={() => setToggle(!toggle)}
                        className="h-full w-full block" />
                </div>
                <div className="flex items-center p-4">
                    <FaYoutube className="text-3xl text-red-500" />
                    <span className="text-xl font-display font-semibold">YouTube</span>
                </div>
            </div>
            <div className="flex flex-[732px] grow-0 shrink-1 justify-center items-center gap-4 h-10">
                <div className="flex flex-1 ml-10 items-center rounded-full h-10 border">
                    <div className='py-1 pl-4 pr-1 border-r flex flex-1  items-center cursor-text rounded-l-full h-full'>
                        <input type="text" placeholder="Search" className="w-full outline-none" />
                    </div>
                    <div className="w-16 justify-center h-full flex items-center rounded-r-full cursor-pointer bg-stone-100">
                        <CiSearch className="text-2xl" />
                    </div>
                </div>
                <div className="flex h-10 justify-center items-center w-[40px] rounded-full bg-stone-100">
                    <IoMdMic className="text-xl" />
                </div>
            </div>
            <div className="flex min-w-[180px] h-10 items-center gap-4 pl-3">
                <div className="flex gap-1 justify-center items-center bg-stone-100 h-full rounded-full px-3">
                    <LiaPlusSolid className="text-2xl" />
                    <p>Create</p>
                </div>
                <div className="flex justify-center items-center rounded-full h-9 w-9 bg-orange-500">
                    <p className="text-white text-xl">P</p>
                </div>
            </div>
        </div>
    )
}

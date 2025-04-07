import React, { useState } from 'react'
import { RxHamburgerMenu } from "react-icons/rx";
import { FaYoutube } from "react-icons/fa";
import { IoMdMic } from "react-icons/io";
import { CiSearch } from "react-icons/ci";
import { LiaPlusSolid } from "react-icons/lia";
import { BsThreeDotsVertical } from "react-icons/bs";
import { MdOutlineAccountCircle } from "react-icons/md";
import { useContext } from 'react';
import { ToggleContext } from '../App';
import { SignUpModal } from './SignUpModal';
import { SignInModal } from './SignInModal';
import { ProfileModal } from './ProfileModal';
import { UploadVideoForm } from './UploadVideoForm';

export const Navbar = () => {
    const [isActive, setIsActive] = useState(false);
    const [toggle, setToggle] = useContext(ToggleContext);
    const [isLogin, setIsLogin] = useState(true);
    const [profileModal, setProfileModal] = useState(false);
    const [isToken, setIsToken] = useState(true)
    const [uploadForm, setUploadForm] = useState(false);

    return (
        <>
            <div className="bg-white flex justify-between items-center h-14 px-4">
                <div className="flex h-full items-center">
                    <div className="items-center h-10 w-10 p-2 hidden md:block lg:block">
                        <RxHamburgerMenu
                            onClick={() => setToggle(!toggle)}
                            className="h-[90%] w-full block" />
                    </div>
                    <a href="/">
                        <div className="flex items-center p-3">
                            <FaYoutube className="text-3xl text-red-500" />
                            <span className="text-[21px] font-display font-[450]">YouTube</span>
                        </div>
                    </a>
                </div>
                <div className="flex flex-[732px] grow-0 shrink-1 justify-center items-center gap-4 h-10 hidden md:flex lg:flex">
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

                {isToken ? <div className="flex items-center min-w-[160px] gap-4 pl-3">
                    <div className="lg:hidden md:hidden block p-2 bg-stone-100 rounded-full">
                        <CiSearch className="text-2xl" />
                    </div>
                    <div className="text-black text-lg cursor-pointer">
                        <BsThreeDotsVertical />
                    </div>
                    <div
                        onClick={() => { setIsActive(!isActive) }}
                        className="flex items-center gap-2 px-2 py-1 border border-gray-300 rounded-full cursor-pointer">
                        <MdOutlineAccountCircle className="text-blue-700 text-2xl" />
                        <span className="text-blue-700 text-sm font-semibold">Sign in</span>
                    </div>
                </div> : <div
                    className="flex min-w-[180px] h-10 items-center gap-4 pl-3">
                    <div className="lg:hidden md:hidden block p-2 bg-stone-100 rounded-full">
                        <CiSearch className="text-2xl" />
                    </div>
                    <div
                        onClick={() => setUploadForm(!uploadForm)}
                        className="flex gap-1 justify-center items-center bg-stone-100 h-full rounded-full px-3">
                        <LiaPlusSolid className="text-2xl" />
                        <p>Create</p>

                    </div>
                    <div onClick={() => setProfileModal(!profileModal)} className="flex justify-center items-center rounded-full h-9 w-9 bg-orange-500">
                        <p className="text-white text-xl">P</p>
                    </div>
                    {uploadForm && <div className="bg-black/80 w-full z-100 fixed top-0 h-full inset-0 flex justify-center items-center">
                        <UploadVideoForm setUploadForm={setUploadForm} />
                    </div>}
                    {profileModal && <ProfileModal />}
                </div>}
                {isActive && <div className="bg-black/80 w-full z-100 fixed top-0 h-full inset-0 flex justify-center items-center">
                    {isLogin ? <SignInModal setIsActive={setIsActive} setIsLogin={setIsLogin} setIsToken={setIsToken} /> : <SignUpModal setIsActive={setIsActive} setIsLogin={setIsLogin} setIsToken={setIsToken} />}
                </div>}
            </div>

        </>

    )
}


import React from 'react'
import banner from '../assets/banner.png'
import { FaPlay } from "react-icons/fa";
import { ToggleContext } from '../App';
import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { VideoSectionCard } from './VideoSectionCard';
export const ChannelInfo = () => {
    const [toggle] = useContext(ToggleContext);
    return (
        <div className="p-5 space-y-4 flex-1 h-[calc(100vh-56px)] overflow-y-scroll overflow-x-hidden">
            <div className="flex gap-4 items-center">
                <div className="h-45 w-45"><img className="h-full w-full rounded-full" src={banner} /></div>
                <div className="flex flex-col gap-3">
                    <span className="text-4xl font-bold">user1</span>
                    <span>@user1 . 3 videos</span>
                    <span>user1</span>
                </div>
            </div>
            <div className="flex gap-5 items-center">
                <span className="text-2xl font-semibold pl-5">Videos</span>
                <FaPlay />
            </div>
            <hr />
            <div className={toggle ? "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 p-5 gap-5 md:scrollbar lg:scrollbar scrollbar-none" : "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 p-5 gap-5 md:scrollbar lg:scrollbar scrollbar-none"}>
                <Link to="/watch"><VideoSectionCard /></Link>
                <VideoSectionCard />
                <VideoSectionCard />
                <VideoSectionCard />
            </div>
        </div>
    )
}

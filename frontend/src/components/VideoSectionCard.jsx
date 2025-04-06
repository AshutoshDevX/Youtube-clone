import React from 'react'
import Banner from '../assets/banner.png'
import { HiOutlineDotsVertical } from "react-icons/hi";
export const VideoSectionCard = () => {
    return (
        <div className="flex flex-col h-fit gap-2">
            <div>
                <img className="rounded-xl" src={Banner} />
            </div>
            <div className="flex gap-3">
                <div className="lg:h-10 lg:w-10 md:h-9 md:w-9 h-8 w-8">
                    <img className="h-full w-full rounded-full" src={Banner} />
                </div>
                <div className="flex flex-col flex-1">
                    <div className="font-semibold h-12 overflow-hidden"><p>Build YouTube Clone Using Mern Stack | Build Complete website like youtube</p></div>
                    <div className="text-sm mt-1 text-gray-800"><p>Coding Guru</p></div>
                    <div className="flex text-sm gap-2 text-gray-800">
                        <div>16k views</div>
                        <div>6 months ago</div>
                    </div>
                </div>
                <div>
                    <HiOutlineDotsVertical className="text-xl" />
                </div>
            </div>
        </div>
    )
}

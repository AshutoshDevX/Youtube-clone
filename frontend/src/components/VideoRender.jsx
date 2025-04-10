import React, { useState } from 'react'
import { AiOutlineLike, AiOutlineDislike } from 'react-icons/ai';
import { PiShareFatBold } from 'react-icons/pi';
import { BiDownload } from 'react-icons/bi';
import { BsThreeDots } from 'react-icons/bs';
import { relativeTime } from '../utils/util';
import { Link } from 'react-router-dom';
export const VideoRender = ({ createdAt, videoUrl, userId, description, title, like, dislike, views }) => {
    const relativePeriod = relativeTime(createdAt);
    const [isActive, setIsActive] = useState(false);

    return (
        <div className=" w-full h-auto flex flex-col gap-2">
            {videoUrl && <video width="400" className="w-full rounded-xl" controls loop autoPlay>
                <source src={videoUrl} type="video/mp4" />
                Your Browser does not support the video tag
            </video>}
            <div className="text-lg font-bold">
                <p>{title}</p>
            </div>
            <div className="flex lg:flex-row md:flex-col flex-col lg:justify-between gap-3">
                <div className="flex gap-2 items-center">
                    <Link to={`/channel/${userId._id}`}>
                        <div className="lg:h-10 lg:w-10 md:h-9 md:w-9 h-8 w-8">
                            <img className="h-full w-full rounded-full" src={userId.profileUrl} />
                        </div>
                    </Link>
                    <div className="mr-4">
                        <p className="font-bold">{userId.channelName}</p>
                        <p>361k Subscribers</p>
                    </div>
                    <div className="bg-black px-3 py-2 h-fit text-white text-md font-semibold rounded-full flex justify-center items-center">
                        Subscribe
                    </div>
                </div>
                <div className="flex items-center gap-3 overflow-auto scrollbar-none">

                    <div className="px-3 py-2 h-fit text-white text-md font-semibold rounded-full flex justify-center items-center gap-2 bg-stone-100">
                        <AiOutlineLike className="text-black" />
                        <span className="text-black">{like}</span>
                        <span className="text-stone-400">|</span>
                        <AiOutlineDislike className="text-black" />
                    </div>


                    <div className="px-3 py-2 h-fit text-white text-md font-semibold rounded-full flex justify-center items-center gap-2 bg-stone-100">
                        <PiShareFatBold className="text-black" />
                        <span className="text-black">Share</span>
                    </div>


                    <div className="px-3 py-2 h-fit text-white text-md font-semibold rounded-full flex justify-center items-center gap-2 bg-stone-100">
                        <BiDownload className="text-black" />
                        <span className="text-black">Download</span>
                    </div>

                    <div className="p-3 h-fit text-white text-md font-semibold rounded-full flex justify-center items-center bg-stone-100">
                        <BsThreeDots className="text-black" />
                    </div>
                </div>
            </div>
            <div onClick={() => setIsActive(!isActive)}
                className={isActive ? "bg-stone-100 p-3 h-auto rounded-lg " : "bg-stone-100 p-3 h-24 rounded-lg  overflow-hidden"} >
                <div className="flex gap-2 font-semibold">
                    <p>{views} views</p>
                    <p></p>
                </div>
                <div className={isActive ? "h-auto" : "h-12 overflow-hidden"}>
                    {description}
                </div>
            </div>
        </div>
    )
}

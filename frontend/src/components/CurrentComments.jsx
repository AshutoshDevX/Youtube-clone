import React, { useState } from 'react'
import { AiOutlineLike, AiOutlineDislike } from 'react-icons/ai';
import { BsThreeDotsVertical } from 'react-icons/bs';
import banner from '../assets/banner.png'
export const CurrentComments = () => {
    const [liked, setLiked] = useState(false);
    const [count, setCount] = useState(23);
    return (
        <div className="flex flex-col gap-2 p-4">
            <div className="flex justify-between items-start">
                <div className="flex gap-3">
                    <img
                        src={banner}
                        alt="profile"
                        className="w-9 h-9 rounded-full object-cover"
                    />
                    <div>
                        <p className="text-sm font-semibold">@ajay_patel_93 <span className="text-xs text-gray-500 ml-1">2 weeks ago</span></p>
                        <p className="text-sm mt-1">
                            Ritesh is a legend we should learn from him. How to be humble and ground to earth.
                        </p>
                    </div>
                </div>
                <BsThreeDotsVertical className="text-gray-500 cursor-pointer" />
            </div>

            <div className="flex items-center gap-6 pl-12 mt-1">
                <div className="flex items-center gap-1 cursor-pointer" onClick={() => {
                    setLiked(!liked)
                    setCount(count + 1)
                }}>
                    <AiOutlineLike className="text-black" />
                    <span className="text-sm">{count}</span>
                </div>
                <div className="flex items-center gap-1 cursor-pointer" onClick={() => {
                    setLiked(!liked)
                    setCount(count - 1)
                }}>
                    <AiOutlineDislike className="text-black" />
                </div>
                <button className="text-sm font-semibold hover:underline">Reply</button>
            </div>
        </div>
    )
}

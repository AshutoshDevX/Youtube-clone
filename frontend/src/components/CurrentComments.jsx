import React, { useState } from 'react'
import { AiOutlineLike, AiOutlineDislike } from 'react-icons/ai';
import { BsThreeDotsVertical } from 'react-icons/bs';
import banner from '../assets/banner.png'
import { relativeTime } from '../utils/util';
export const CurrentComments = ({ comment, userId, createdAt }) => {
    const [liked, setLiked] = useState(false);
    const [count, setCount] = useState(23);

    const relativePeriod = relativeTime(createdAt);
    return (
        <div className="flex flex-col gap-2 p-4">
            <div className="flex justify-between items-start">
                <div className="flex gap-3">
                    <img
                        src={userId.profileUrl}
                        alt="profile"
                        className="w-9 h-9 rounded-full object-cover"
                    />
                    <div>
                        <p className="text-sm font-semibold">@{userId.name} <span className="text-xs text-gray-500 ml-1">{relativePeriod}</span></p>
                        <p className="text-sm mt-1">
                            {comment}
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

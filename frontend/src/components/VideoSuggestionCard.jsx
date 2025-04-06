import React from 'react'
import { BsThreeDotsVertical } from 'react-icons/bs';
import banner from '../assets/banner.png'
export const VideoSuggestionCard = () => {
    return (
        <div className="flex w-full max-w-md gap-3">
            <div>
                <div className="w-48 h-28 min-w-[192px]">
                    <img
                        src={banner}
                        alt="thumbnail"
                        className="w-full h-full object-cover rounded-lg"
                    />
                    {/* <span className="absolute bottom-1 right-1 bg-black text-white text-xs px-1 rounded">9:37</span> */}
                </div>
            </div>

            <div className="flex flex-col gap-1 flex-1">
                <div className="flex justify-between">
                    <p className="text-sm font-semibold leading-tight">
                        How to Get Rich in the New Era of A.I. (2025)
                    </p>
                    <BsThreeDotsVertical className="text-gray-800 cursor-pointer text-3xl" />
                </div>
                <div className="flex items-center gap-1 mt-1">
                    <span className="text-sm text-gray-700">Neil Patel</span>
                </div>
                <div className="text-xs text-gray-600 mt-0.5">566K views · 1 month ago</div>
            </div>
        </div>
    )
}

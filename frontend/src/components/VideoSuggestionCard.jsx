import React from 'react'
import { BsThreeDotsVertical } from 'react-icons/bs';
import { relativeTime } from '../utils/util';
export const VideoSuggestionCard = ({ userId, thumbnailUrl, title, createdAt, views }) => {
    const relativePeriod = relativeTime(createdAt);
    return (
        <div className="flex w-full gap-3">
            <div>
                <div className="w-48 h-28 min-w-[192px]">
                    <img
                        src={thumbnailUrl}
                        alt="thumbnail"
                        className="w-full h-full object-cover rounded-lg"
                    />
                </div>
            </div>

            <div className="flex flex-col gap-1 flex-1">
                <div className="flex justify-between">
                    <p className="text-sm font-semibold leading-tight">
                        {title}
                    </p>
                    <BsThreeDotsVertical className="text-gray-800 cursor-pointer text-3xl" />
                </div>
                <div className="flex items-center gap-1 mt-1">
                    <span className="text-sm text-gray-700">{userId.name}</span>
                </div>
                <div className="text-xs text-gray-600 mt-0.5">{views} views · {relativePeriod}</div>
            </div>
        </div>
    )
}

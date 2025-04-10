import React, { useState } from 'react'
import { HiOutlineDotsVertical } from "react-icons/hi";
import { relativeTime } from '../utils/util';


export const VideoSectionCard = ({ thumbnailUrl, userId, title, createdAt, views }) => {
    const [videoViews, setViews] = useState(views);
    const relativePeriod = relativeTime(createdAt);
    return (
        <div
            onClick={() => {
                setViews(views + 1);
            }}
            className="flex flex-col h-fit gap-2">
            <div>
                <img className="rounded-xl w-full h-full" src={thumbnailUrl} />
            </div>
            <div className="flex gap-3">
                <div className="lg:h-10 lg:w-10 md:h-9 md:w-9 h-8 w-8">
                    <img className="h-full w-full rounded-full" src={userId.profileUrl} />
                </div>
                <div className="flex flex-col flex-1">
                    <div className="font-semibold h-12 overflow-hidden"><p>{title}</p></div>
                    <div className="flex text-sm gap-2 text-gray-800">
                        <div>{videoViews} views</div>
                        <div>{relativePeriod}</div>
                    </div>
                </div>
                <div>
                    <HiOutlineDotsVertical className="text-xl" />
                </div>
            </div>
        </div>
    )
}

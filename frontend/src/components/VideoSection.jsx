import React, { useContext, useEffect, useState } from 'react'
import { VideoSectionCard } from './VideoSectionCard'
import { ToggleContext } from '../App'
import { Link } from 'react-router'
import axios from 'axios'


export const VideoSection = () => {
    const [videoData, setVideoData] = useState([])

    useEffect(() => {
        axios.get("http://localhost:3000/api/video").then((response) => {
            setVideoData(response.data.allVideos);
        }).catch((err) => {
            console.log(err)
        })
    }, [])
    console.log(videoData)
    const [toggle] = useContext(ToggleContext);
    const filters = ["All", "APIs", "Computer Science", "Podcasts", "Music", "Gaming", "Mixes", "Live", "Recruitment", "News", "Stocks", "Ideas", "Property", "Cricket", "Comedy", "Recently Uploaded", "Watched", "Near to you"]
    return (
        <div className="h-[calc(100vh-56px)] overflow-y-scroll overflow-x-hidden flex-1">
            <div className="bg-white sticky top-0 px-5">
                <div className="flex gap-3 py-3 w-[100vw-16px]  overflow-x-scroll scrollbar-none">
                    {filters.map((item) => {
                        return <p className="whitespace-nowrap px-3 py-1 w-fit h-fit rounded-md text-sm font-semibold bg-stone-100">{item}</p>
                    })}
                </div>
            </div>
            <div className={toggle ? "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 p-5 gap-5 md:scrollbar lg:scrollbar scrollbar-none" : "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 p-5 gap-5 md:scrollbar lg:scrollbar scrollbar-none"}>
                {
                    videoData.map(({ thumbnailUrl, title, userId, createdAt, views, videoUrl }) => {
                        return <Link to="/watch"><VideoSectionCard thumbnailUrl={thumbnailUrl} title={title} userId={userId} createdAt={createdAt} views={views} videoUrl={videoUrl} /></Link>
                    })
                }

            </div>
        </div>
    )
}

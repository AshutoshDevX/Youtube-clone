import React, { useEffect, useState } from 'react'
import { FaPlay } from "react-icons/fa";
import { SetContext } from '../App';
import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { VideoSectionCard } from './VideoSectionCard';
import axios from 'axios';

export const ChannelInfo = ({ id }) => {
    const [userVideos, setUserVideos] = useState(null);
    useEffect(() => {
        axios.get(`http://localhost:3000/api/video/${id}/channel`)
            .then((response) => {
                setUserVideos(response.data.video);
            }).catch((err) => {
                console.log(err)
            })
    }, [])
    const { toggle } = useContext(SetContext);
    return (
        <>
            {userVideos && <div className="p-5 space-y-4 flex-1 h-[calc(100vh-56px)] overflow-y-scroll overflow-x-hidden">
                <div className="flex gap-4 items-center">
                    <div className="h-45 w-45"><img className="h-full w-full rounded-full" src={userVideos[0].userId.profileUrl} /></div>
                    <div className="flex flex-col gap-3">
                        <span className="text-4xl font-bold">{userVideos[0].userId.channelName}</span>
                        <span>@{userVideos[0].userId.name} . {userVideos.length} videos</span>
                        <span>{userVideos[0].userId.name}</span>
                    </div>
                </div>
                <div className="flex gap-5 items-center">
                    <span className="text-2xl font-semibold pl-5">Videos</span>
                    <FaPlay />
                </div>
                <hr />
                {userVideos ? <div className={toggle ? "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 p-5 gap-5 md:scrollbar lg:scrollbar scrollbar-none" : "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 p-5 gap-5 md:scrollbar lg:scrollbar scrollbar-none"}>
                    {
                        userVideos.map(({ thumbnailUrl, title, userId, createdAt, views, videoUrl, _id }) => {
                            return <Link key={_id} to={`/watch/${_id}`}><VideoSectionCard thumbnailUrl={thumbnailUrl} title={title} userId={userId} createdAt={createdAt} views={views} videoUrl={videoUrl} /></Link>
                        })
                    }
                </div> : <div className="bg-white text-5xl flex justify-center items-center w-full h-[calc(100vh-120px)]"><img src={spinner}></img></div>}
            </div>
            }
        </>
    )
}

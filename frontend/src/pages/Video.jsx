import React, { useEffect, useState } from 'react';
import { VideoRender } from '../components/VideoRender';
import { Comments } from '../components/Comments';
import { VideoSuggestion } from '../components/VideoSuggestion';
import axios from 'axios';
import { useParams } from 'react-router-dom';

export const Video = () => {
    const filters = ["All", "Related", "For you", "Recently uploaded", "Watched", "Programming", "Javascript"]
    const { id } = useParams();

    const [videoData, setVideoData] = useState(null);
    useEffect(() => {
        axios.get(`http://localhost:3000/api/video/${id}`)
            .then((response) => {
                setVideoData(response.data.video);
            }).catch((err) => {
                console.log(err);
            })
    }, [id])

    return (
        <>
            {videoData && <div className="py-6 lg:px-20 lg:flex gap-6 md:px-7 px-4">
                <div className="lg:w-[70%] md:w-full w-full space-y-3">
                    {videoData && <VideoRender videoUrl={videoData.videoUrl} userId={videoData.userId} description={videoData.description} title={videoData.title} like={videoData.like} createdAt={videoData.createdAt} dislike={videoData.dislike} views={videoData.views} />}
                    <Comments videoId={videoData._id} />
                </div>
                <div className="lg:w-[30%] space-y-5 md:w-full w-full">
                    <div className="bg-white">
                        <div className="flex gap-3 py-2 w-[100vw-16px]  overflow-x-scroll scrollbar-none">
                            {filters.map((item, index) => {
                                return <p key={index} className="whitespace-nowrap px-3 py-1 w-fit h-fit rounded-md text-sm font-semibold bg-stone-100">{item}</p>
                            })}
                        </div>
                    </div>
                    <VideoSuggestion videoId={videoData._id} />
                </div>
            </div>}
        </>
    )
}

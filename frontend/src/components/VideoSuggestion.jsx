import React, { useEffect, useState } from 'react'
import { VideoSuggestionCard } from './VideoSuggestionCard'
import axios from 'axios'
import { Link } from 'react-router'

export const VideoSuggestion = ({ videoId }) => {
    console.log(videoId)
    const [data, setData] = useState([])
    useEffect(() => {
        axios.get("http://localhost:3000/api/video")
            .then((response) => {
                setData(response.data.allVideos);
            }).catch((err) => {
                console.log(err);
            })
    }, [])
    return (
        <>
            {data && <div className="flex flex-col gap-2">
                {data.filter((item) => {
                    return item._id != videoId
                }).map(({ _id, userId, thumbnailUrl, title, views, createdAt }) => {
                    return <Link to={`/watch/${_id}`}><VideoSuggestionCard key={_id} userId={userId} thumbnailUrl={thumbnailUrl} title={title} views={views} createdAt={createdAt} /></Link>
                })}
            </div>}
        </>
    )
}

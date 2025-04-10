import React, { useEffect, useState } from 'react'
import { VideoSuggestionCard } from './VideoSuggestionCard'
import axios from 'axios'
import { Link } from 'react-router-dom'

export const VideoSuggestion = ({ videoId }) => {
    const [data, setData] = useState(null)
    useEffect(() => {
        axios.get("http://localhost:3000/api/video")
            .then((response) => {
                setData(response.data.allVideos);
            }).catch((err) => {
                console.log(err);
            })
    }, [videoId])
    return (
        <>
            {data && <div className="flex flex-col gap-2">
                {data.filter((item) => {
                    return item._id != videoId
                }).map(({ _id, userId, thumbnailUrl, title, views, createdAt }) => {
                    return <Link key={_id} to={`/watch/${_id}`}><VideoSuggestionCard userId={userId} thumbnailUrl={thumbnailUrl} title={title} views={views} createdAt={createdAt} /></Link>
                })}
            </div>}
        </>
    )
}

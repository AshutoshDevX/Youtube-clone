import React from 'react'
import { VideoRender } from '../components/VideoRender'
import { Comments } from '../components/Comments'
import { VideoSuggestion } from '../components/VideoSuggestion'

export const Video = () => {
    const filters = ["All", "Related", "For you", "Recently uploaded", "Watched", "Programming", "Javascript"]
    return (

        <div className="py-6 lg:px-20 lg:flex gap-6 md:px-7 px-4">
            <div className="lg:w-[70%] md:w-full w-full space-y-3">
                <VideoRender />
                <Comments />
            </div>
            <div className="lg:w-[30%] space-y-5 md:w-full w-full">
                <div className="bg-white">
                    <div className="flex gap-3 py-2 w-[100vw-16px]  overflow-x-scroll scrollbar-none">
                        {filters.map((item) => {
                            return <p className="whitespace-nowrap px-3 py-1 w-fit h-fit rounded-md text-sm font-semibold bg-stone-100">{item}</p>
                        })}
                    </div>
                </div>
                <VideoSuggestion />
            </div>
        </div>
    )
}

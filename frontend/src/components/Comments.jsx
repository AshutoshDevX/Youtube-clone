import React from 'react'
import { CurrentComments } from './CurrentComments'

export const Comments = () => {
    return (
        <div className="space-y-6  w-full h-auto">
            <div className="text-2xl font-bold">174 Comments</div>
            <div className="flex gap-3">
                <div className="h-10 w-10 rounded-full bg-orange-500 text-white text-2xl flex justify-center items-center">A</div>
                <input type="text" placeholder="Add a comment..." className="border-b h-fit w-full outline-none"></input>
            </div>
            <CurrentComments />
        </div>
    )
}

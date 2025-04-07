import React from 'react'
import { CurrentComments } from './CurrentComments'
import { useState } from 'react';
export const Comments = () => {
    const [comment, setComment] = useState();
    const [isComment, setIsComment] = useState(false);
    return (
        <div className="space-y-6  w-full h-auto mt-2">
            <div className="text-2xl font-bold">174 Comments</div>
            <div className="flex gap-3">
                <div className="h-10 w-10 rounded-full bg-orange-500 text-white text-2xl flex justify-center items-center">A</div>
                <div className="w-full space-y-2">
                    <input onChange={(e) => setComment(e.target.value)} value={comment} type="text" placeholder="Add a comment..." className="border-b h-fit w-full outline-none"></input>
                    <div className="flex justify-end gap-5">
                        <div onClick={() => setComment("")} className="px-3 py-2 bg-stone-100 font-semibold hover:bg-stone-200 rounded-full">Cancel</div>
                        <div onClick={() => {
                            setIsComment(true)
                            setComment("")
                        }} value={comment} className="px-3 py-2 bg-stone-100 font-semibold hover:bg-stone-200 rounded-full">Submit</div>
                    </div>
                </div>
            </div>
            {isComment && <CurrentComments comment={comment} />}

        </div>
    )
}

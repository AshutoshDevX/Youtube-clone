import React, { useState } from 'react'
import banner from '../assets/banner.png'
import { AiOutlineLike, AiOutlineDislike } from 'react-icons/ai';
import { PiShareFatBold } from 'react-icons/pi';
import { BiDownload } from 'react-icons/bi';
import { BsThreeDots } from 'react-icons/bs';

export const VideoRender = () => {
    const [isActive, setIsActive] = useState(false);
    return (
        <div className=" w-full h-auto flex flex-col gap-2">
            <video width="400" className="w-full rounded-xl" controls autoPlay>
                <source src="http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4" type="video/mp4" />
                Your Browser does not support the video tag
            </video>
            <div className="text-lg font-bold">
                <p>Build Youtube Clone Using MERN Full Stack | Build Complete Website Like YouTube In MERN 2024</p>
            </div>
            <div className="flex lg:flex-row md:flex-col flex-col lg:justify-between gap-3">
                <div className="flex gap-2 items-center">
                    <div className="lg:h-10 lg:w-10 md:h-9 md:w-9 h-8 w-8">
                        <img className="h-full w-full rounded-full" src={banner} />
                    </div>
                    <div className="mr-4">
                        <p className="font-bold">Coding Guru</p>
                        <p>361k Subscribers</p>
                    </div>
                    <div className="bg-black px-3 py-2 h-fit text-white text-md font-semibold rounded-full flex justify-center items-center">
                        Subscribe
                    </div>
                </div>
                <div className="flex items-center gap-3 overflow-auto scrollbar-none">

                    <div className="px-3 py-2 h-fit text-white text-md font-semibold rounded-full flex justify-center items-center gap-2 bg-stone-100">
                        <AiOutlineLike className="text-black" />
                        <span className="text-black">4.1K</span>
                        <span className="text-stone-400">|</span>
                        <AiOutlineDislike className="text-black" />
                    </div>


                    <div className="px-3 py-2 h-fit text-white text-md font-semibold rounded-full flex justify-center items-center gap-2 bg-stone-100">
                        <PiShareFatBold className="text-black" />
                        <span className="text-black">Share</span>
                    </div>


                    <div className="px-3 py-2 h-fit text-white text-md font-semibold rounded-full flex justify-center items-center gap-2 bg-stone-100">
                        <BiDownload className="text-black" />
                        <span className="text-black">Download</span>
                    </div>

                    <div className="p-3 h-fit text-white text-md font-semibold rounded-full flex justify-center items-center bg-stone-100">
                        <BsThreeDots className="text-black" />
                    </div>
                </div>
            </div>
            <div onClick={() => setIsActive(!isActive)}
                className={isActive ? "bg-stone-100 p-3 h-auto rounded-lg " : "bg-stone-100 p-3 h-24 rounded-lg  overflow-hidden"} >
                <div className="flex gap-2 font-semibold">
                    <p>76k views</p>
                    <p>2 weeks ago</p>
                </div>
                <div className={isActive ? "h-auto" : "h-12 overflow-hidden"}>
                    Lorem ipsum, Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nulla nesciunt sit ullam nostrum porro vitae, ad reiciendis est ut doloribus. Sapiente, nostrum? Expedita nobis incidunt repellat officia, possimus blanditiis recusandae.dolor sit amet consectetur adipisicing elit. Facilis accusamus soluta nobis illum. Accusantium voluptates, vitae inventore, ex voluptatum provident ducimus perspiciatis ipsa qui vel debitis. Dolor unde quas molestiae.
                </div>
            </div>
        </div>
    )
}

import React from 'react';

export const UploadVideoForm = ({ setIsUploadActive }) => {
    return (
        <div className="bg-[#1f1f1f] text-white lg:w-[420px] w-[240px] md:w-[420px] lg:p-10 md:p-10 p-6 rounded-lg shadow-lg relative">

            <button
                onClick={() => setIsUploadActive(false)}
                className="absolute top-3 right-4 text-gray-400 hover:text-white text-xl"
            >
                &times;
            </button>


            <h2 className="text-2xl font-bold text-center mb-2">Upload Your Video</h2>
            <p className="text-sm text-gray-400 text-center mb-6">
                Share your thoughts with the world. Upload your video and connect with the community.
            </p>


            <div className="flex flex-col gap-4">

                <input
                    type="text"
                    placeholder="Title"
                    className="bg-[#2d2d2d] text-sm px-4 py-2 rounded focus:outline-none focus:ring-2 focus:ring-red-500"
                />


                <textarea
                    placeholder="Description"
                    rows="4"
                    className="bg-[#2d2d2d] text-sm px-4 py-2 rounded resize-none focus:outline-none focus:ring-2 focus:ring-red-500"
                ></textarea>


                <input
                    type="text"
                    placeholder="Tags (comma separated)"
                    className="bg-[#2d2d2d] text-sm px-4 py-2 rounded focus:outline-none focus:ring-2 focus:ring-red-500"
                />


                <label className="text-sm text-gray-300 mt-2">Thumbnail</label>
                <input
                    type="file"
                    accept="image/png, image/jpeg"
                    className="text-sm w-full file:mr-4 file:rounded-full file:border-0 file:bg-violet-50 file:px-4 file:py-2 file:text-sm file:font-semibold file:text-violet-700 hover:file:bg-red-100 dark:file:bg-red-600 dark:file:text-red-100 dark:hover:file:bg-red-500"
                />


                <label className="text-sm text-gray-300 mt-2">Video File</label>
                <input
                    type="file"
                    accept="video/mp4,video/x-m4v,video/*"
                    className="text-sm w-full file:mr-4 file:rounded-full file:border-0 file:bg-violet-50 file:px-4 file:py-2 file:text-sm file:font-semibold file:text-violet-700 hover:file:bg-red-100 dark:file:bg-red-600 dark:file:text-red-100 dark:hover:file:bg-red-500"
                />
            </div>


            <button
                onClick={() => setIsUploadActive(false)}
                className="mt-6 w-full bg-red-600 hover:bg-red-700 transition text-white font-semibold py-2 rounded"
            >
                Upload Video
            </button>
        </div>
    );
};

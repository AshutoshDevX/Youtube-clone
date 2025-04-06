import React, { useContext } from 'react'
import { Sidebar } from '../components/Sidebar'
import { MiniSideBar } from '../components/MiniSideBar'
import { VideoSection } from '../components/VideoSection'
import { ToggleContext } from '../App'
export const Home = () => {
    const toggle = useContext(ToggleContext)
    return (
        <div className="flex">
            {toggle ? <Sidebar /> : <MiniSideBar />}
            <VideoSection />
        </div>
    )
}

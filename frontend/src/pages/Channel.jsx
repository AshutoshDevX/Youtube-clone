import React from 'react'
import { Sidebar } from '../components/Sidebar'
import { ChannelInfo } from '../components/ChannelInfo'
import { MiniSideBar } from '../components/MiniSideBar'
import { ToggleContext } from '../App'
import { useContext } from 'react'
export const Channel = () => {
    const [toggle] = useContext(ToggleContext)
    return (
        <div className="bg-white flex">
            {toggle ? <Sidebar /> : <MiniSideBar />}
            <ChannelInfo />
        </div>

    )
}

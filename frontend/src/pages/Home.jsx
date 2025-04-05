import React from 'react'
import { Sidebar } from '../components/Sidebar'
import { MiniSideBar } from '../components/MiniSideBar'

export const Home = ({ toggle }) => {
    return (
        <div className="flex">
            {toggle ? <Sidebar /> : <MiniSideBar />}
            <div>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur ut distinctio odio sapiente, perferendis ipsa ab ratione numquam hic, quibusdam optio esse aliquid officia. Necessitatibus nisi recusandae nam soluta! Consequatur?Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga placeat, corporis earum voluptates nihil laudantium illum minus quidem illo est harum aliquid delectus velit exercitationem, inventore molestiae vitae. Sit, amet.Lorem ipsum dolor sit amet consectetur, adipisicing elit. Velit quam aliquid a consequatur corporis, eius odit ut animi nulla doloribus nobis architecto error quod minima adipisci inventore tempora illum labore.'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ex a amet deserunt? Tenetur aliquid aliquam aperiam voluptas rem, maiores incidunt non suscipit unde in architecto autem temporibus totam, repellendus reprehenderit!</p>
            </div>
        </div>
    )
}

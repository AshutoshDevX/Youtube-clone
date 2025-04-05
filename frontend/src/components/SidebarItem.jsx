import React from 'react'

export const SidebarItem = ({ icon, title }) => {
    return (
        <div className="flex items-center px-3 py-2 gap-5 rounded-xl hover:bg-stone-100">
            {icon}
            <span className="text-sm  inline-flex flex-1">{title}</span>
        </div>
    )
}

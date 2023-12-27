import React from 'react'
import ChatName from '../../Utils/ChatName'
import { BsSearch } from "react-icons/bs";
import TopProfileSection from "../../Utils/TopProfileSection";

const ChatSideBar = () => {
    return (
        <div className=' h-screen border-x border-gray-400 overflow-hidden'>
            <TopProfileSection />
            <div className="text-white flex justify-start items-center gap-2 border-y border-gray-400 p-5">
                <div className='text-gray-400 text-xl'><BsSearch /></div>
                <input type="text" className='bg-transparent h-5 border-none focus:border-none' placeholder="search your chats" />
            </div>
            <ChatName />
            <ChatName />
            <ChatName />
            <ChatName />
            <ChatName />
        </div>
    )
}

export default ChatSideBar
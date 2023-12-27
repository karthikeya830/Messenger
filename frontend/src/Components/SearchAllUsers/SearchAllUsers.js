import React from 'react'
import { BsSearch } from "react-icons/bs";

const SearchAllUsers = () => {
    return (
        <div className="text-white flex justify-start items-center gap-2 border-y border-gray-400 p-5">
            <div className='text-gray-400 text-xl'><BsSearch /></div>
            <input type="text" className='bg-transparent h-5 border-none focus:border-none' placeholder="search your chats" />
        </div>
    )
}

export default SearchAllUsers
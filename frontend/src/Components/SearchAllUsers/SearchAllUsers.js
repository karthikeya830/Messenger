import React, { useEffect, useState } from 'react'
import { BsSearch } from "react-icons/bs";
import axios from 'axios';
import UserListItem from './UserListItem';
import Loader from '../../Utils/Loader/Loader'

const SearchAllUsers = () => {
    const [searchResults, setSearchResults] = useState([])
    const [user, setUser] = useState(JSON.parse(localStorage.getItem('user')))
    const [isLoading , setIsLoading] = useState(false)


    const searchUser = async (e) => {
        e.preventDefault();
        const searchTerm = e.target.value.trim();

        try {

            if (searchTerm.length === 0) {
                setSearchResults([]);  // Clear search results if the search term is empty
                return;
            }
            setIsLoading(true)
            const config = {
                headers: {
                    'Authorization': `Bearer ${user.data.token}`
                }
            };
            const res = await axios.get(`api/user?search=${searchTerm}`, config);
            console.log(res.data)
            setSearchResults(res.data)
            setIsLoading(false)
        } catch (error) {
            console.error("Error:", error.message);
        }
    };



    return (
        <div className='flex flex-col border border-gray-400'>
            <div className="text-white flex justify-start gap-2 border-y border-gray-400 p-5">
                <div className='text-gray-400 text-xl'><BsSearch /></div>
                <input type="text" onChange={(e) => searchUser(e)} className='bg-transparent h-5 border-none focus:border-none' placeholder="search your chats" />
            </div>
            {searchResults.length > 0 &&
                searchResults.map((value, key) => {
                    return <UserListItem key={key} name={value.name} pic={value.pic} userId={value._id} />
                })
            }
            { isLoading && <Loader /> }
        </div>
    )
}

export default SearchAllUsers
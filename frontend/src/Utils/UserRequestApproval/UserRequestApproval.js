import React, { useEffect, useState } from 'react'
import { FaUserPlus } from "react-icons/fa";
import axios from 'axios';
import { MdOutlineDoneOutline } from "react-icons/md";
import { IoMdClose } from "react-icons/io";

const UserRequestApproval = ({ name, pic, userId, requestId, reload }) => {
    const [isLoading, setIsLoading] = useState(false)
    const [isSent, setIsSent] = useState(false)
    const [user, setUser] = useState(JSON.parse(localStorage.getItem('user')).data)

    const acceptRequest = () => {

    }

    const deleteRequest = async () => {
        try {
            // console.log(user._id);
            // console.log(userId);
            setIsLoading(true)
            const config = {
                headers: {
                    'Authorization': `Bearer ${user.token}`
                }
            };
            const res = await axios.delete(`api/request/reject-request?requestId=${requestId}`, config);
            console.log(res.data)
            reload(true)
            setIsSent(true)
            setIsLoading(false)
        } catch (error) {
            console.error("Error:", error.message);
        }
    }


    const handleOnClick = async () => {
        try {
            // console.log(user._id);
            // console.log(userId);
            setIsLoading(true)
            const config = {
                headers: {
                    'Authorization': `Bearer ${user.token}`
                }
            };
            const res = await axios.post(`api/request/send-request`,
                {
                    requesterId: user._id,
                    receiverId: userId
                },
                config);
            console.log(res.data)
            setIsSent(true)
            setIsLoading(false)
        } catch (error) {
            console.error("Error:", error.message);
        }
    }
    return (
        <div className='flex gap-5 items-center p-5 text-white border-b border-gray-400 w-full cursor-pointer hover:bg-gray-800'>
            <img className=' h-14 w-14 rounded-full ' src={pic} alt='dp' />
            <div>{name}</div>
            <button onClick={() => deleteRequest()} className='text-2xl hover:text-3xl'><IoMdClose /></button>
            <button onClick={() => acceptRequest()} className='text-2xl hover:text-3xl'><MdOutlineDoneOutline /></button>
        </div>
    )
}

export default UserRequestApproval
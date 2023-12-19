import React from 'react'

const ChatName = () => {
    const pic = "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png"
    const name = "Kiran Sai"
    const LastMessage = "hey fuck yaa"
    const time = "9:15"
    const newMessages = 5
    return (
        <div className='flex justify-between items-center p-5 text-white border-b border-gray-400 w-full cursor-pointer hover:bg-gray-800'>
            <div>
                <img className=' h-14 w-14 rounded-full ' src={pic} alt='dp' />
            </div>
            <div className='flex flex-col self-start'>
                <div>{name}</div>
                <div className='text-gray-500'>{LastMessage}</div>
            </div>
            <div className='flex flex-col items-end'>
                <div>{time}</div>
                <div className='bg-green-500 pl-2 pr-2 rounded-full' >{newMessages}</div>
            </div>
        </div>
    )
}

export default ChatName
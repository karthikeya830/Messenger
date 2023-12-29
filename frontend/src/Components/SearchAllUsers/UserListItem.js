import React from 'react'

const UserListItem = ({ name, pic }) => {
    return (
        <div className='flex gap-5 items-center p-5 text-white border-b border-gray-400 w-full cursor-pointer hover:bg-gray-800'>
            <img className=' h-14 w-14 rounded-full ' src={pic} alt='dp' />
            <div>{name}</div>
        </div>
    )
}

export default UserListItem
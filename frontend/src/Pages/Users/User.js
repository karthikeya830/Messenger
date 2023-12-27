import React from 'react'
import SearchAllUsers from '../../Components/SearchAllUsers/SearchAllUsers'
import UsersProfile from '../../Components/UsersProfile/UsersProfile'

const User = () => {
  return (
    <div className='flex'>
        <SearchAllUsers />
        <UsersProfile />
    </div>
  )
}

export default User
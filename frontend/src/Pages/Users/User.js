import React from 'react'
import SearchAllUsers from '../../Components/SearchAllUsers/SearchAllUsers'
import UsersProfile from '../../Components/UsersProfile/UsersProfile'
import RequestPanel from '../../Components/RequestPanel/RequestPanel'

const User = () => {
  return (
    <div className='flex'>
        <SearchAllUsers />
        {/* <UsersProfile /> */}
        <RequestPanel />
    </div>
  )
}

export default User
import React from 'react'
import { useNavigate } from 'react-router-dom'

const Settings = () => {
  const navigate = useNavigate()
  const handleClick = () => {
    localStorage.removeItem('user')
    navigate( '/' )
  }
  return (
    <>
      <button onClick={handleClick} className='text-white bg-blue-800 rounded-full h-fit p-5'>
        Log out
      </button>
    </>
  )
}

export default Settings
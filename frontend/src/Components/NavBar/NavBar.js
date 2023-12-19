import React from 'react'
import { FiUsers } from "react-icons/fi";
import { BsChatDots } from "react-icons/bs";
import { IoCallOutline } from "react-icons/io5";
import { IoSettingsOutline } from "react-icons/io5";
import { CiLight } from "react-icons/ci";
import { Link } from 'react-router-dom';

const NavBar = () => {
  return (
    <div className='flex flex-col justify-between text-gray-400 w-fit h-screen p-5'>
      <div className=' text-4xl font-bold cursor-pointer '>LO</div>
      <div className='flex flex-col gap-7'>
        <div className=' text-4xl cursor-pointer '><FiUsers /></div>
        <Link to='/chat' ><div className= 'text-4xl cursor-pointer' ><BsChatDots /></div></Link>
        <div className=' text-4xl cursor-pointer '><IoCallOutline /></div>
        <Link to='/settings' ><div className=' text-4xl cursor-pointer '><IoSettingsOutline /></div></Link>
      </div>
      <div>
        <div className=' text-4xl cursor-pointer '><CiLight /></div>
      </div>
    </div>
  )
}

export default NavBar
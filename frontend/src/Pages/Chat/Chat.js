import React from 'react'
import ChatSideBar from '../../Components/ChatSideBar/ChatSideBar'
import ChatPanel from '../../Components/ChatPanel/ChatPanel'

const Chat = () => {
  return (
    <div className='flex w-full '>
        <div className='w-96'><ChatSideBar /></div>
        <div className='w-full'><ChatPanel /></div>
    </div>
  )
}

export default Chat
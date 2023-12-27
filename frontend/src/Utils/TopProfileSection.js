import React from 'react'

const TopProfileSection = () => {
  const pic = "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png"
  const name = "Karthikeya"
  const LastMessage = "Full Stack developer"
  return (
    <div className='flex  justify-between items-center p-5 text-white w-full '>
      <div>
        <img className=' h-14 w-14 rounded-full ' src={pic} alt='dp' />
      </div>
      <div className='flex flex-col'>
        <div>{name}</div>
        {/* <div className='text-gray-500'>{LastMessage}</div> */}
      </div>
      <div className='flex items-center cursor-pointer'>
        <div>. . .</div>
      </div>
    </div>
  )
}

export default TopProfileSection
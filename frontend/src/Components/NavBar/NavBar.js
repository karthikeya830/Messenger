import React, { useState } from 'react';
import { FiUsers } from 'react-icons/fi';
import { BsChatDots } from 'react-icons/bs';
import { IoCallOutline } from 'react-icons/io5';
import { IoSettingsOutline } from 'react-icons/io5';
import { CiLight } from 'react-icons/ci';
import { Link } from 'react-router-dom';

const NavBar = () => {
  const [selectedButton, setSelectedButton] = useState('chats');

  const handleButtonClick = (button) => {
    setSelectedButton(button);
  };

  return (
    <div className="flex flex-col justify-between text-gray-400 w-fit h-screen p-5 border-r border-gray-400">
      <div className="text-4xl font-bold cursor-pointer">LO</div>
      <div className="flex flex-col gap-7">
        <Link to="/users">

          <div
            className={`text-4xl cursor-pointer ${selectedButton === 'users' ? 'text-blue-500' : ''
              }`}
            onClick={() => handleButtonClick('users')}
          >
            <FiUsers />
          </div>
        </Link>

        <Link to="/chats">
          <div
            className={`text-4xl cursor-pointer ${selectedButton === 'chats' ? 'text-blue-500' : ''
              }`}
            onClick={() => handleButtonClick('chats')}
          >
            <BsChatDots />
          </div>
        </Link>
        <Link to="/calls">
          <div
            className={`text-4xl cursor-pointer ${selectedButton === 'calls' ? 'text-blue-500' : ''
              }`}
            onClick={() => handleButtonClick('calls')}
          >
            <IoCallOutline />
          </div>
        </Link>

        <Link to="/settings">
          <div
            className={`text-4xl cursor-pointer ${selectedButton === 'settings' ? 'text-blue-500' : ''
              }`}
            onClick={() => handleButtonClick('settings')}
          >
            <IoSettingsOutline />
          </div>
        </Link>
      </div>
      <div>
        <div
          className={`text-4xl cursor-pointer ${selectedButton === 'light' ? 'text-blue-500' : ''
            }`}
          onClick={() => handleButtonClick('light')}
        >
          <CiLight />
        </div>
      </div>
    </div>
  );
};

export default NavBar;
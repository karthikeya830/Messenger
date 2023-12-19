import React from 'react';

const SearchBar = () => {
  return (
    <body className="pt-16">
      <form className="w-72 mx-auto search-container">
        <input
          type="text"
          id="search-bar"
          placeholder="What can I help you with today?"
          className="w-full h-12 px-4 text-base border border-gray-300 outline-none focus:border-blue-500 transition duration-350"
        />
        <a href="#">
          <img
            src="http://www.endlessicons.com/wp-content/uploads/2012/12/search-icon.png"
            alt="Search Icon"
            className="text-white relative float-right w-12 h-12 -top-14 -right-9"
          />
        </a>
      </form>
    </body>
  );
};

export default SearchBar;

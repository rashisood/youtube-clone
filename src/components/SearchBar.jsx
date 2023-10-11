import { Input } from 'postcss';
import React from 'react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const SearchBar = () => {

  const [searchTerm, setSearchTerm] = useState('');

  const navigate=useNavigate();

  const handleSubmit = (e) =>{
    e.preventDefault();

    if(searchTerm){
      navigate(`/search/${searchTerm}`);
      setSearchTerm('');
    }
  }

  return (
    <div className=''>
      <form onSubmit={handleSubmit} >
    <div className='relative '>
        <div className='absolute flex pl-4 items-center inset-y-0 pointer-events-none '>
            <svg
              aria-hidden="true"
              className="w-5 h-5 text-gray-400"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              ></path>
            </svg>
        </div>
            <input type='search'
            placeholder ='Search Here..'
            value={searchTerm}
            onChange={(e) => {setSearchTerm(e.target.value)}}
            className='rounded-full p-4 pl-10 w-[30vw] h-[5vh] text-sm mr-4 text-black shadow-sm outline-none max-[480px]:w-[50vw]'
            />
        
    </div>
      </form>
    </div>
  )
}

export default SearchBar

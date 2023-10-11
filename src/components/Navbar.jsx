import React from 'react'
import { NavLink } from 'react-router-dom';
import {logo} from '../utils/constants';
import SearchBar from './SearchBar';


const Navbar = () => (
    <div className='flex items-center p-2 justify-between w-full xs:h-[70px] xs:w-[100vw] xs:pt-3 '>
      <NavLink to="/">
        <img src={logo} alt="logo" className='h-[8vh] w-[20vh] scale-150 pl-3 xs:h-[5vh] xs:w-[30vw] '/>
      </NavLink>
      <SearchBar/>
    </div>
  )


export default Navbar

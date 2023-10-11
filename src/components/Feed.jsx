import React from 'react'
import {SideBar,Videos} from './'
import { useState, useEffect } from 'react';
import {fetchFromApi} from '../utils/fetchFromApi';


const Feed = () => {

  const [selectedCategory,setSelectedCategory]= useState('New');
  const [videos,setVideos]= useState([]);

  useEffect(()=> {
    fetchFromApi(`search?part=snippet&q=${selectedCategory}`)
    .then((data)=>setVideos(data.items))
  },[selectedCategory])

  return (
    <div className='flex md:gap-20 xs:flex-col'>
      <div className='h-[92vh] mt-5 px-4 border-r-1 mb-5 xs:h-[80px] '>
        <SideBar selectedCategory={selectedCategory} setSelectedCategory={setSelectedCategory}/>
      </div>
      <div className='p-4 overflow-y-auto h-[90vh] xs:pt-0'>
        <h1 className='font-bold text-4xl '>
        {selectedCategory}  
        <span className='text-red-600 '> Videos</span></h1>
        <div>
        <Videos videos={videos}/> 
        </div>
      </div>
    </div>
  )
}

export default Feed

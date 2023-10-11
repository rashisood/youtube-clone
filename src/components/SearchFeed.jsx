import React from 'react'
import {Videos} from './'
import { useState, useEffect } from 'react';
import {fetchFromApi} from '../utils/fetchFromApi';
import { useParams } from "react-router-dom";



const SearchFeed = () => {

  const [videos,setVideos]= useState([]);
  const {searchTerm} = useParams();

  useEffect(()=> {
    fetchFromApi(`search?part=snippet&q=${searchTerm}`)
    .then((data)=>setVideos(data.items))
  },[searchTerm])

  return (
    <div className='p-4 overflow-x-hidden overflow-y-auto h-[90vh] w-[85%] mx-auto'>
        <h1 className='font-bold text-4xl'>
        Search results for :
        <span className='text-red-600 '> {searchTerm} </span>
         videos
        </h1>
        <div>
        <Videos videos={videos}/>

        </div>
      </div>
  )
}

export default SearchFeed

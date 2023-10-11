import React from 'react'
import { useState, useEffect } from 'react'
import { NavLink, useParams } from 'react-router-dom'
import ReactPlayer from 'react-player'
import { Videos, Spinner } from './';
import { fetchFromApi } from '../utils/fetchFromApi';

const VideoDetails = () => {

  const [videoDetail, setVideoDetail] = useState(null);
  const [videos, setVideos] = useState(null);
  const {id} = useParams();

  useEffect(() => {
    fetchFromApi(`videos?part=contentDetails,snippet,statistics&id=${id}`)
    .then((data)=> setVideoDetail(data.items[0]));

    fetchFromApi(`search?part=snippet&relatedToVideoId=${id}&type=video`)
    .then((data)=>setVideos(data.items));

},[id])

if(!videoDetail?.snippet) return <Spinner/>;

const {snippet :{title, channelId, channelTitle},
statistics:{viewCount,likeCount}}= videoDetail;

  return (
    <div className=' flex w-[100vw] xs:flex-col xs:overflow-x-hidden md:overflow-x-hidden'>
      <div className='w-[70%] px-4 p-4 xs:w-[100vw]'>
        <span>
          <ReactPlayer
          url={`https://wwww.youtube.com/watch?v=${id}`}
            width="100%"
            height="60vh"
            className="react-player"
            controls={true}
          />
          <h5 className='text-[#fff] font-bold py-3'>{title}</h5>
          <div className='flex justify-between xs:flex-col xs:gap-4'>
          <NavLink to={`/channel/${channelId}`}>
          <h6 className='font-semibold text-[#fff]'>{channelTitle}</h6>
          </NavLink>
          <div className='flex gap-[20px] justify-between '>
            <h8 className='opacity-[0.7]'>{parseInt(viewCount).toLocaleString()} views</h8>
            <h8 className='opacity-[0.7]'>{parseInt(likeCount).toLocaleString()} likes</h8>
          </div>
          </div>
        </span>
      </div>
        <div className='max-w-[10vw] mx-[20px] -mt-[17px] md:max-w-[50vw] '>
          <Videos videos={videos}/>
        </div>
    </div>
  )
}

export default VideoDetails

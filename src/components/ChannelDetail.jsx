import React from 'react'
import { useParams } from 'react-router-dom'
import { Videos, ChannelCard } from './'
import { fetchFromApi } from '../utils/fetchFromApi'
import { useState, useEffect } from 'react'

const ChannelDetail = () => {
  const [channelDetail, setChannelDetail] = useState(null)
  const [videos, setVideos] = useState([])

  const {id}= useParams();

  //console.log(channelDetail,videos)

  useEffect(() => {
    fetchFromApi(`channels?part=snippet,statistics&id=${id}`)
    .then((data)=> setChannelDetail(data.items[0]));

    fetchFromApi(`search?channelId=${id}&part=snippet&order=date&maxResults=50`)
    .then((data)=>setVideos(data.items));
  }, [id])
  

  return (
    <div className='min-h-[95vh]'>
      <div style={{background: `linear-gradient(90deg, 
      rgba(2,0,36,1) 0%, rgba(0,0,4,1) 12%,
      rgba(0,212,255,1) 100%)`,
      height:'250px',
      zIndex:10
      }
      }/>
        <div className='justify-center items-center -mt-[110px]'>
          <ChannelCard channelDetail={channelDetail} />
        </div>

        <div className='w-[80%] mt-[20px] m-auto h-100vh'>
          <Videos videos={videos}/>
        </div>

    </div>

  )
}

export default ChannelDetail

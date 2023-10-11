import React from 'react'
import { NavLink } from 'react-router-dom'
import { demoVideoUrl,demoChannelUrl
    // ,demoChannelTitle, demoThumbnailUrl,demoVideoTitle 
} from "../utils/constants"

const VideoCard = ({video : { id : {videoId}, snippet}}) => {

  //console.log(videoId,snippet);
  return (
    <div className='w-[360px] m-auto xs:w-[90vw]  '>
      <NavLink to={videoId ? `/video/${videoId}`
      :
      demoVideoUrl}>
            <div>
            <img 
            src={snippet?.thumbnails?.high?.url}
            alt={snippet?.title}
            className='h-[270px] w-[100%] max-w-[360px] object-contain rounded-lg'
            />
            </div>
      </NavLink>

      <div className='bg-black h-[65px] w-full flex flex-col gap-750px justify-center'>
      <NavLink to={videoId ? `/video/${videoId}` : 
      demoVideoUrl}>
        <p className='max-w-xs text-lg'>{snippet?.title.slice(0,60)}</p>
      </NavLink>
      </div>

      <NavLink to={snippet.channelId ? `/channel/${snippet?.channelId}` : 
      demoChannelUrl}>
        <p className='text-gray-500 text-sm'>{snippet?.channelTitle}</p>
      </NavLink>
    </div>
  )
}

export default VideoCard

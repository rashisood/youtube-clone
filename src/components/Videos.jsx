import React  from 'react'
import { VideoCard, ChannelCard,Spinner} from './'




const Videos = ({videos}) => {

  if(!videos?.length) return <Spinner/>

// console.log(videos)
  
  return (
    <div className='flex flex-row gap-8 flex-wrap md:flex-col md:w-[35vw]'>
      {
        videos.map((item,idx) => (
          <div key={idx}>
          {item.id.videoId && <VideoCard video={item}/>}
          {item.id.channelId && <ChannelCard channelDetail={item}/>}
          </div>
        ))
      }
    </div>
  )
}

export default Videos

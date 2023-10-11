import React from 'react'
import { NavLink } from "react-router-dom";
import { demoProfilePicture } from "../utils/constants";

const ChannelCard = ({channelDetail, marginTop}) => {
  return (
     <div>
      <NavLink to={`/channel/${channelDetail?.id?.channelId}`}>
      <div className='w-[360px] flex flex-col items-center m-auto'>
          <img
            src={
              channelDetail?.snippet?.thumbnails?.high?.url ||
              demoProfilePicture
            }
            alt=""
            className="my-[30px] mb-[30px] h-[180px] w-[180px] rounded-full"
          />
          <p className="text-white mb-[20px] text-2xl font-bold">{channelDetail?.snippet?.title}</p>
          <p className="channel-title max-w-xs text-md">{channelDetail?.snippet?.description.slice(0,100)}...</p>
          {channelDetail?.statistics?.subscriberCount && (
            <p className='mt-[20px] font-bold'>
              {parseInt(
                channelDetail?.statistics?.subscriberCount
              ).toLocaleString()}{" "}
              Subscribers
            </p>
          )}
          </div>
        </NavLink>
    </div>
  )
}

export default ChannelCard

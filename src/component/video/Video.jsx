/** @format */

import moment from "moment/moment";
import numeral from "numeral";
import React, { useEffect, useState } from "react";
import { AiFillEye } from "react-icons/ai";
import request from "../../api";
import "./_videos.scss";
const Video = ({ video }) => {
  const {
    id,
    snippet: {
      channelId,
      channelTitle,
      title,
      publishedAt,
      thumbnails: { medium },
    },
  } = video;


  // if(typeof(id)==String){
  //   return id = id;
  // }else{
  //   id=id.videoId;
  // }

const [views, setViews] = useState(null);
const [duration,setDuration] = useState(null);
const [channelIcon , setChannelIcon]=useState(null);

const sec = moment.duration(duration).asSeconds();
const _duration = moment.utc(sec *1000).format("mm:ss")
// fetch some extra information 

const videoId = id?.videoId||id
  useEffect(() => {
    const get_video_details =  async () => {
      const {
        data: { items },
      } = await request("/videos", {
        params: {
          part: "contentDetails,statistics",
          // id: typeof(id)==String?id:id.videoId,
          id:videoId
        },
      });
    
      setDuration( items[0].contentDetails.duration);
      setViews(items[0].statistics.viewCount)
      console.log(items);
    };

    get_video_details();
     
  },[videoId]);
  
  useEffect(() => {
    const get_Channel_Icon = async () => {
      const {
        data: { items },
      } = await request("/channels", {
        params: {
          part: "snippet",
          id: channelId,
        },
      });
   
setChannelIcon(items[0].snippet.thumbnails.default)

      console.log(items);
    };
    
    get_Channel_Icon();
  },[channelId]);

  return (
    <div className="video">
      <div className="video__top">
        <img
          src={medium.url}
          alt="video"
        />
        <span>{_duration}</span>
      </div>
      <div className="video__title"> {title}</div>
      <div className="video__details">
        <span>
          <AiFillEye />
        {numeral(views).format("0.a")} views• 
        </span>
        <span>{" "+ moment(publishedAt).fromNow()}</span>
      </div>
      <div className="video__channel">
        <img
          src={channelIcon?.url}
          alt=""
        />
        <p>{channelTitle}</p>
      </div>
    </div>
  );
};

export default Video;

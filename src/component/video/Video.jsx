/** @format */

import moment from "moment/moment";
import numeral from "numeral";
import React, { useEffect, useState } from "react";
import { AiFillEye } from "react-icons/ai";
import request from "../../api";
import "./_videos.scss";
import { LazyLoadImage } from 'react-lazy-load-image-component';
import { useNavigate } from "react-router-dom";



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
          id:videoId
        },
      });
    
      setDuration( items[0].contentDetails.duration);
      setViews(items[0].statistics.viewCount)
      // console.log(items);
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

      // console.log(items);
    };
    
    get_Channel_Icon();
  },[channelId]);

  const navigate = useNavigate()
  const videoHanddelClick = () =>{
    navigate(`/watch/${videoId}`)
  }

  return (
    <div className="video"  onClick={videoHanddelClick}>
      <div className="video__top">
        {/* <img
          src={medium.url}
          alt="video"
        /> */}
        <LazyLoadImage  src={medium.url}
          alt="video" effect="blur" />
        <span className="video__top__duration">{_duration}</span>
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
        {/* <img
          src={channelIcon?.url}
          alt=""
        /> */}
        <LazyLoadImage src={channelIcon?.url}
          alt="" effect="blur" />
        <p>{channelTitle}</p>
      </div>
    </div>
  );
};

export default Video;

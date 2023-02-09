/** @format */

import React, { useEffect, useState } from "react";
import "./_videoHorizontal.scss";
import { LazyLoadImage } from "react-lazy-load-image-component";
import moment from "moment/moment";
import numeral from "numeral";
// import React, { useEffect, useState } from "react";
import { AiFillEye } from "react-icons/ai";
import request from "../../api";
import { Row, Col } from "react-bootstrap";
import { useNavigate } from "react-router-dom";



const VideoHorizontal = ({videoList}) => {
 const {id:{videoId}, snippet:{channelId, channelTitle, publishedAt,title,thumbnails} } = videoList;



 
  
  const [views, setViews] = useState(null);
const [duration,setDuration] = useState(null);


const seconds = moment.duration(duration).asSeconds();
const _duration = moment.utc(seconds * 1000).format("mm:ss");

  useEffect(() => {
    const get_video_details=  async () => {
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

  const navigate = useNavigate();
 

  function handelScreen(){
    navigate(`/watch/${videoId}`)
    console.log(videoId);
  }

  return (
    <Row onClick={handelScreen} className="videoHorizontal m-1 py-2 align-items-center d-flex  ">
      <Col xs={6} md={6} className="videoHorizontal__left">
        <LazyLoadImage
          src={thumbnails.medium.url}
          alt="aaaaaaavtar"
          effect="blur"
          className="videoHorizontal__thumbnail"
          wrapperClassName="videoHorizontal__thumbnail-wrapper"
        />
        <span className="video__top__duration">{_duration}</span>
      </Col>
      <Col xs={6} md={6} className="videoHorizontal__right mt-0  p-0">
        <p className="videoHorizontal__title mb-1">
         {title}
        </p>
        <div className="videoHorizontal__details">
          <AiFillEye size={20} />
          {numeral(views).format("0.a")} views•
          {" " + moment(publishedAt).fromNow()}
        </div>
        <div className="videoHorizontal__channel d-flex align-items-center my-1">
          {/* <LazyLoadImage  src="https://png.pngtree.com/png-vector/20220817/ourmid/pngtree-cartoon-man-avatar-vector-ilustration-png-image_6111064.png"
          alt="aaaaaaavtar" effect="blur"
         
          /> */}
          <p className="mb-0">{channelTitle}</p>
        </div>
      </Col>
    </Row>
  );
};

export default VideoHorizontal;

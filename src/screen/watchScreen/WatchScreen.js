import React from 'react'
import { useEffect } from 'react'
import { Col, Row } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import Comments from '../../component/comments/Comments'
import VideoHorizontal from '../../component/videoHorizontal/VideoHorizontal'
import VideoMetaData from '../../component/videoMetaData/VideoMetaData'
import { getRelatedVideoById, getVideoById } from '../../redux/actions/video_action'
import "./watchscreen.scss";



const WatchScreen = () => {

  const {loading , video} = useSelector(state=>state.watchScreenVideo)
  const{loading:load,video:relatedVideo}=useSelector(state=>state.relatedVideo);

  const {id} = useParams()

  const dispatch = useDispatch()

  useEffect(()=>{
   dispatch(getVideoById(id));
   dispatch(getRelatedVideoById(id));
  },[dispatch,id])

  return (
   <Row >
    <Col lg={9} >
    <div className="watchscreen__player">
        <iframe width="100%" height="100%"
        src={`https://www.youtube.com/embed/${id}`}
        title={video?.snippet?.title}
        allowFullScreen
        frameBorder="0"></iframe>
    </div>
   {!loading? <VideoMetaData video={video}  videoId={id}/>:<h5>Loading...</h5>}
    <Comments  videoId={id}   commentCount={video?.statistics?.commentCount}/>
    </Col>
    <Col lg={3}>
   {!load && relatedVideo?.filter(video=>video.snippet).map((relVideo,index)=>{
    return (
      <VideoHorizontal videoList={relVideo} key={index} />
    )
     })}
    </Col>
   </Row>
  )
}

export default WatchScreen

import React from 'react'
import { useEffect } from 'react'
import { Col, Row } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import Comments from '../../component/comments/Comments'
import VideoHorizontal from '../../component/videoHorizontal/VideoHorizontal'
import VideoMetaData from '../../component/videoMetaData/VideoMetaData'
import { getVideoById } from '../../redux/actions/video_action'
import "./watchscreen.scss";



const WatchScreen = () => {

  const {loading , video} = useSelector(state=>state.watchScreenVideo)
  const {id} = useParams()

  const dispatch = useDispatch()

  useEffect(()=>{
   dispatch(getVideoById(id))
  },[dispatch,id])

  return (
   <Row >
    <Col lg={8} >
    <div className="watchscreen__player">
        <iframe width="100%" height="100%"
        src={`https://www.youtube.com/embed/${id}`}
        title={video?.snippet?.title}
        allowFullScreen
        frameborder="0"></iframe>
    </div>
    <VideoMetaData/>
    <Comments/>
    </Col>
    <Col lg={4}>
   {  [...Array(30)].map(()=>{
    return (
      <VideoHorizontal />
    )
     })}
    </Col>
   </Row>
  )
}

export default WatchScreen

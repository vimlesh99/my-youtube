import React, { useEffect } from 'react'
import { Container, Row ,Col
 } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux';
import request from '../../api';
import CateogariesBar from '../../component/cateogriesbar/CategoriesBar';
import Video from "../../component/video/Video.jsx"
import getPopulerVideo from '../../redux/actions/video_action';

const HomeScreen = () => {
   
    const {videos}= useSelector(state=>state.homeVideos)
      console.log(videos);

 

    const dispatch = useDispatch();
    useEffect(()=>{
        dispatch(getPopulerVideo())
    },[])
  return (
   <Container>
    <CateogariesBar/>
    <Row>
        {
          videos.map((video)=>{
               return <Col lg={3} md={4} key={video.id}>
                    <Video video={video}/>
                </Col>
            })
        }
    </Row>
   </Container>
  )
}

export default HomeScreen

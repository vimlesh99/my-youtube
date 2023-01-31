/** @format */

import React, { useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import InfiniteScroll from "react-infinite-scroll-component";
import { useDispatch, useSelector } from "react-redux";
// import request from '../../api';
import CateogariesBar from "../../component/cateogriesbar/CategoriesBar";
import Video from "../../component/video/Video.jsx";
import getPopulerVideo, {
  getVideoByCategory,
} from "../../redux/actions/video_action";

import "react-loading-skeleton/dist/skeleton.css";
import SkeletonVideo from "../../component/Skeliton/SkeletonVideo";

const HomeScreen = () => {
  const { videos, activeCategory, loading } = useSelector(
    (state) => state.homeVideos
  );
  console.log(videos, activeCategory);

  const dispatch = useDispatch();

  const fetchData = () => {
    if (activeCategory === "All") {
      dispatch(getPopulerVideo());
    } else {
      dispatch(getVideoByCategory(activeCategory));
    }
  };

  useEffect(() => {
    dispatch(getPopulerVideo())
    // fetchData();
  }, [dispatch]);
  return (
    <Container>
      <CateogariesBar />
      <InfiniteScroll
        dataLength={videos.length}
        next={fetchData}
        hasMore={true}
        loader={
          <div className="spinner-border text-danger d-block mx-auto"></div>
        }
      >
        <Row>
          { !loading
            ? videos.map((video) => {
                return (
                  <Col lg={3} md={4} key={video.id}>
                    <Video video={video} />
                  </Col>
                );
              })
            : [...Array(20)].map(() => {
                return (
                  <Col lg={3} md={4}>
                    <SkeletonVideo />
                  </Col>
                );
              })}
        </Row>
      </InfiniteScroll>
    </Container>
  );
};

export default HomeScreen;

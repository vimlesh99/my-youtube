/** @format */

import React from "react";
import "./_videoHorizontal.scss";
import { LazyLoadImage } from "react-lazy-load-image-component";
import moment from "moment/moment";
import numeral from "numeral";
// import React, { useEffect, useState } from "react";
import { AiFillEye } from "react-icons/ai";
import request from "../../api";
import { Row, Col } from "react-bootstrap";

const VideoHorizontal = () => {
  const seconds = moment.duration("100").asSeconds();
  const _duration = moment.utc(seconds * 1000).format("mm:ss");
  return (
    <Row className="videoHorizontal m-1 py-2 align-items-center">
      <Col xs={6} md={4} className="videoHorizontal__left">
        <LazyLoadImage
          src="https://png.pngtree.com/png-vector/20220817/ourmid/pngtree-cartoon-man-avatar-vector-ilustration-png-image_6111064.png"
          alt="aaaaaaavtar"
          effect="blur"
          className="videoHorizontal__thumbnail"
          wrapperClassName="videoHorizontal__thumbnail-wrapper"
        />
        <span className="video__top__duration">{_duration}</span>
      </Col>
      <Col xs={6} md={4} className="videoHorizontal__right p-0">
        <p className="videoHorizontal__title mb-1">
          Be a Full stack developer in One Month
        </p>
        <div className="videoHorizontal__details">
          <AiFillEye size={20} />
          {numeral(10000).format("0.a")} views•
          {" " + moment("2021-01-02").fromNow()}
        </div>
        <div className="videoHorizontal__channel d-flex align-items-center my-1">
          {/* <LazyLoadImage  src="https://png.pngtree.com/png-vector/20220817/ourmid/pngtree-cartoon-man-avatar-vector-ilustration-png-image_6111064.png"
          alt="aaaaaaavtar" effect="blur"
         
          /> */}
          <p>MiddelClass lifestyle</p>
        </div>
      </Col>
    </Row>
  );
};

export default VideoHorizontal;

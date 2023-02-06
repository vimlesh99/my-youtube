/** @format */

import moment from "moment";
import numeral from "numeral";
import React from "react";
import "./videometa.scss";
import { MdThumbUp, MdThumbDown } from "react-icons/md";
import ShowMoreText from "react-show-more-text";
import { useEffect } from "react";
import {
  checkSubscriptionStatus,
  getChannelDetails,
} from "../../redux/actions/channel_action";
import { useDispatch, useSelector } from "react-redux";

const VideoMetaData = (props) => {
  const {
    video: { snippet, statistics },
    videoId,
  } = props;

  const { channelId, channelTitle, descreiption, title, publishAt } = snippet;
  const { viewCount, likeCount, dislikeCount } = statistics;

  const dispatch = useDispatch();

  const { snippet: channelSnippet, statistics: channelStatistics } =
    useSelector((state) => state.channelDetails.channel);

  const subscriptionStatus = useSelector(
    (state) => state.channelDetails.subscriptionStatus
  );
  useEffect(() => {
    dispatch(getChannelDetails(channelId));
    //    dispatch(checkSubscriptionStatus(channelId));
  }, [dispatch, channelId]);

  useEffect(() => {
    dispatch(checkSubscriptionStatus(channelId));
  }, [dispatch]);
  return (
    <div className="videoMetaData py-2">
      <div className="videoMetaData__top">
        <h5>{title}</h5>
        <div className="d-flex justify-content-between align-items-center py-1">
          <span>
            {numeral(viewCount).format("0.a")} Views •
            {moment(publishAt).fromNow()}
          </span>

          <div>
            <span>
              <MdThumbUp size={26} /> {numeral(likeCount).format("0.a")}
            </span>

            <span>
              <MdThumbDown size={26} /> {numeral(dislikeCount).format("0.a")}
            </span>
          </div>
        </div>
      </div>

      <div className="videoMetaData__channel d-flex justify-content-between align-items-center my-2 py-3">
        <div className="d-flex">
          <img
            src={channelSnippet?.thumbnails?.default?.url}
            alt="imglogo"
            className="rounded-circle mr-3"
          />
          <div className="d-flex flex-column">
            <span>{channelTitle}</span>
            <span> {numeral(10000).format("0.a") + " "} subscriber</span>
          </div>
        </div>
        <button
          className={`btn border-0  p-2 m-2 ${
            subscriptionStatus && "btn-gray"
          }`}
        >
          {subscriptionStatus ? "Subscribed" : "Subscribes"}
        </button>
      </div>


      <div className="videoMetaData__description">
        <ShowMoreText
          lines={3}
          more="SHOW MORE"
          less="SHOW LESS"
          anchorClass="showMoreText"
          expanded={false}
        >
          {descreiption}
        </ShowMoreText>
      </div>
    </div>
  );
};

export default VideoMetaData;

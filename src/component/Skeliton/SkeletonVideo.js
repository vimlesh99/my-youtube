/** @format */

import React from "react";
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";

const SkeletonVideo = () => {
  return (
    <div style={{ width: "100%", margin: "1rem 0" }}>
      <SkeletonTheme baseColor="#898c8a" highlightColor="#3c4147">
      <Skeleton height={180}/>
        <div style={{display:"flex"}} >
          <Skeleton
            height={40}
            width={40}
            circle
            style={{ margin: "0.5rem" }}
          />
        <Skeleton height={40} width="75%" />
          
        </div>
      </SkeletonTheme>
    </div>
  );
};

export default SkeletonVideo;

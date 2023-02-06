/** @format */

import React from "react";
import {
  HOME_VIDEOS_FAIL,
  HOME_VIDEOS_REQUEST,
  HOME_VIDEOS_SUCCESS,
  RELATED_VIDEOBY_ID_FAIL,
  RELATED_VIDEOBY_ID_REQUEST,
  RELATED_VIDEOBY_ID_SUCCESS,
  WATCHSCREEN_VIDEOID_FAIL,
  WATCHSCREEN_VIDEOID_REQUEST,
  WATCHSCREEN_VIDEOID_SUCCESS,
} from "../actionType";

const homeScreenVideos = (
  prevState = {
    videos: [],
    loading: false,
    nextPageToken: null,
    error: null,
    activeCategory: "all",
  },
  action
) => {
  const { type, payload } = action;

  switch (type) {
    case HOME_VIDEOS_REQUEST:
      return {
        ...prevState,
        loading: true,
      };

    case HOME_VIDEOS_SUCCESS:
      return {
        ...prevState,
        loading: false,
        activeCategory: payload.category,
        videos:
          prevState.activeCategory === payload.category
            ? [...prevState.videos, ...payload.videos]
            :[... payload.videos],

        nextPageToken: payload.nextPageToken,
      };

    case HOME_VIDEOS_FAIL:
      return {
        ...prevState,
        loading: false,
        error: payload,
        nextPageToken: null,
      };

    default:
      return prevState;
  }
};


export const watchScreenVideoReducer =(
  state={
    loading:true,
    video:null,
  },action)=>{

const {payload , type} =action;

switch(type){

  case WATCHSCREEN_VIDEOID_REQUEST:
    return {
      ...state,
      loading:true
    };


    case WATCHSCREEN_VIDEOID_SUCCESS:
      return{
        ...state,
        video:payload,
        loading:false 
      };

      case WATCHSCREEN_VIDEOID_FAIL:
        return{
          ...state,
          message:payload
        }

   default: return state
}

};

export const relatedVideoReducer =(
  state={
    loading:true,
    video:null,
  },action)=>{

const {payload , type} =action;

switch(type){

  case RELATED_VIDEOBY_ID_REQUEST:
    return {
      ...state,
      loading:true
    };


    case RELATED_VIDEOBY_ID_SUCCESS:
      return{
        ...state,
        video:payload,
        loading:false 
      };

      case RELATED_VIDEOBY_ID_FAIL:
        return{
          ...state,
          message:payload
        }

   default: return state
}

}

export default homeScreenVideos;

/** @format */

import React from "react";
import { HOME_VIDEOS_FAIL, HOME_VIDEOS_REQUEST, HOME_VIDEOS_SUCCESS } from "../actionType";

const homeScreenVideos = (
  prevState = {
    videos: [],
    loading: false,
    nextPageToken: null,
    error:null,
    activeCategory:"all"
  },
  action
) => {
    const {type ,payload} = action;
  
    switch(type){

        case HOME_VIDEOS_REQUEST:
            return{
                ...prevState,
                loading:true
            }

            case HOME_VIDEOS_SUCCESS:
                return{
                    ...prevState,
                    loading:false,
                    videos:payload.videos,
                    nextPageToken:payload.nextPageToken,
                    activeCategory:payload.category
                }

            case HOME_VIDEOS_FAIL:
               return {
                ...prevState,
                loading:false,
                error:payload,
                nextPageToken:null

                }

                default :
                return prevState;
    }
};

export default homeScreenVideos;

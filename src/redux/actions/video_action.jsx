import request from "../../api"
import { HOME_VIDEOS_FAIL, HOME_VIDEOS_REQUEST, HOME_VIDEOS_SUCCESS } from "../actionType"

const getPopulerVideo = ()=> async (dispatch,getState)=>{
try {
    dispatch({
        type:HOME_VIDEOS_REQUEST
    });
    
   const res = await request("/videos",{
    params:{
        part:"snippet,contentDetails,statistics",
        chart:"mostPopular",
        regionCode:"IN",
        maxResults:20,
        pageToken: getState().homeVideos.nextPageToken,
    },
   })

   const videoData =res.data.items;
   console.log(videoData);
console.log(res);
dispatch({
    type:HOME_VIDEOS_SUCCESS,
    payload:{
        videos:videoData,
        nextPageToken:res.data.nextPageToken,
        category:"All"
    }
})
} catch (error) {
    console.log(error.message)
    dispatch({
        type:HOME_VIDEOS_FAIL,
        payload:error
    })
    
}

}

export default getPopulerVideo;


export const getVideoByCategory = (keyword)=> async (dispatch,getState)=>{
    try {
        dispatch({
            type:HOME_VIDEOS_REQUEST
        });

        // console.log(getState().homeVideos.nextPageToken)
        console.log(keyword)
       const res = await request("/search",{
        params:{
            part:"snippet",
            maxResults:20,
            pageToken: getState().homeVideos.nextPageToken,
            q:keyword,
            type:"videos"
        },
       })
    console.log(res)
       const videoData =res.data.items;
       console.log(videoData);
    console.log(res);
    dispatch({
        type:HOME_VIDEOS_SUCCESS,
        payload:{
            videos:videoData,
            nextPageToken:res.data.nextPageToken,
            category:keyword,
        }
    })
    } catch (error) {
        console.log(error.message)
        dispatch({
            type:HOME_VIDEOS_FAIL,
            payload:error
        })
        
    }
    
    }
    
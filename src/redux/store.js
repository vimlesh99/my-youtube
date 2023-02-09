import { legacy_createStore as createStore,applyMiddleware , combineReducers  } from "redux";
import {authReducer} from "./reducers/auth.reducer";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import homeScreenVideos ,{relatedVideoReducer, searchScreenVideo, watchScreenVideoReducer} from "./reducers/video.reducer";
import channeDetailsReducer from "./reducers/channel.reducer";
import { getCommentbyVideoId } from "./reducers/comment.reducer";


const initialState ={

};
const rootReducer = combineReducers({
  auth :authReducer,
  homeVideos: homeScreenVideos,
  watchScreenVideo :watchScreenVideoReducer,
  channelDetails:channeDetailsReducer,
  commentList:getCommentbyVideoId,
  relatedVideo:relatedVideoReducer,
  searchVideo:searchScreenVideo,
})
const store = createStore(rootReducer, initialState, composeWithDevTools(applyMiddleware(thunk)));

export default store;
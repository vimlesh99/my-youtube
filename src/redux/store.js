import { createStore,applyMiddleware , combineReducers } from "redux";
import {authReducer} from "./reducers/auth.reducer";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import homeScreenVideos from "./reducers/video.reducer";


const initialState ={};
const rootReducer = combineReducers({
  auth :authReducer,
  homeVideos: homeScreenVideos,
})
const store = createStore(rootReducer, initialState, composeWithDevTools(applyMiddleware(thunk)));

export default store;
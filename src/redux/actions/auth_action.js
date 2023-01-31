// import firebase from "../../firebase.js";
import {auth } from "../../firebase.js";
import { GoogleAuthProvider ,signInWithPopup, signOut   } from "firebase/auth";
import { LOAD_PROFILE, LOGIN_FAIL, LOGIN_REQUEST, LOGIN_SUCCESS, LOG_OUT } from "../actionType.js";
import { getAdditionalUserInfo } from "firebase/auth";


export const login = () => async (dispatch )=> {
    try{
    dispatch({
        type:LOGIN_REQUEST
    })

     const provider = new GoogleAuthProvider();
     provider.addScope("https://www.googleapis.com/auth/youtube.force-ssl")
      const result =await signInWithPopup(auth,provider);
     console.log(result)
     const credential = GoogleAuthProvider.credentialFromResult(result);
    //  console.log(credential)
     const accessToken = credential.accessToken;
     const user = getAdditionalUserInfo(result)
    //  console.log(user)

     const profile = {
         name:user.profile.name,
         photoURL:user.profile.picture
        }
        sessionStorage.setItem("my-ytc-user",profile)
        sessionStorage.setItem("my-ytc-access-token",accessToken);
        
    //  console.log(profile.photoURL)
 dispatch({
    type:LOGIN_SUCCESS,
    payload:accessToken
 })

   dispatch({
    type:LOAD_PROFILE,
    payload:profile
   })
    } catch(error){
     console.log(error.messages)
     dispatch({
        type:LOGIN_FAIL,
        payload:error.messages
     })
    }
}



export const logout = ()=> async dispatch =>{
  
              await signOut(auth);

    dispatch({
        type:LOG_OUT
    })
      sessionStorage.removeItem("my-ytc-access-token");
      sessionStorage.removeItem("my-ytc-user")
}
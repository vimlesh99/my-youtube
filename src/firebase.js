
import { initializeApp } from 'firebase/app';
import {  getAuth } from "firebase/auth";
const firebaseConfig = {
  apiKey: "AIzaSyAIg4k-6a8_SxxZLcfEMnH7u0vXlG27MQI",
  authDomain: "my-e54c5.firebaseapp.com",
  projectId: "my-e54c5",
  storageBucket: "my-e54c5.appspot.com",
  messagingSenderId: "156987010151",
  appId: "1:156987010151:web:be5c50d98f81de144db8c2"
};  

  const app = initializeApp(firebaseConfig);
  export const auth = getAuth(app);
  // export const db = getAdditionalUserInfo(app);
  
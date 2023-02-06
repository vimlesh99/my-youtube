
import { initializeApp } from 'firebase/app';
import {  getAuth } from "firebase/auth";
const firebaseConfig = {
  apiKey: "AIzaSyD1pEiOMSAeqhiMeZKUlDa6uTnkhwgMJEU",
  authDomain: "my-e54c5.firebaseapp.com",
  projectId: "my-e54c5",
  storageBucket: "my-e54c5.appspot.com",
  messagingSenderId: "156987010151",
  appId: "1:156987010151:web:be5c50d98f81de144db8c2"
};

// const firebaseConfig = {
//   apiKey: "AIzaSyAT3sJaw1PeNBznx1VPYxmHF67DK2zS1K0",
//   authDomain: "my--clone-d519c.firebaseapp.com",
//   projectId: "my--clone-d519c",
//   storageBucket: "my--clone-d519c.appspot.com",
//   messagingSenderId: "47240128410",
//   appId: "1:47240128410:web:66e78107607125650dfc23"
// };

  const app = initializeApp(firebaseConfig);
  export const auth = getAuth(app);
  // export const db = getAdditionalUserInfo(app);
  
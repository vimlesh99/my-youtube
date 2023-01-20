import React, { useEffect} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import "./loginScreen.scss";
import { login } from "../../../redux/actions/auth_action.js" 
import { useNavigate } from 'react-router-dom';

const LoginScreen = () => {
  const dispatch = useDispatch();

  const accessToken = useSelector(state=>state.auth.accessToken);

  // const []= useState("")


     const handleLogin =()=>{
       dispatch(login())
      console.log(login()) 
     };
 const navigate = useNavigate();

     useEffect(()=>{
       if(accessToken){
        navigate("/")
       }
     },[accessToken,navigate])

  return (
    <div className='login'>
      <div className="login__container">
        <h4>MY YOUTUBE</h4>
        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/09/YouTube_full-color_icon_%282017%29.svg/2560px-YouTube_full-color_icon_%282017%29.svg.png" alt="" />
        <button onClick={handleLogin}>Login with google</button>
        <p> This project is made using Youtube data API</p>
      </div>
    </div>
  )
}

export default LoginScreen

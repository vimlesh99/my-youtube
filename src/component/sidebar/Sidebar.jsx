import React from 'react';
import { MdExitToApp, MdHistory, MdHome, MdLibraryBooks, MdSentimentDissatisfied, MdSubscriptions, MdThumbUp } from 'react-icons/md';
import { useDispatch } from 'react-redux';
import { logout } from '../../redux/actions/auth_action';
import "./_sidebar.scss";


const Sidebar = ({sidebar ,toggelSidebar}) => {

const dispatch = useDispatch()

  const logOutHandler =()=>{
    dispatch(logout());
  }
  return (
    <nav className={sidebar?"sidebar open":"sidebar"} onClick={()=>toggelSidebar(false)}>
    <li>
      <MdHome size={23}/>
      <span>Home</span>
    </li>
    <li>
    <MdSubscriptions size={23}/>
    <span>Subscription</span>
    </li>
    <li>
    <MdThumbUp size={23}/>
    <span>Liked Video</span>
    </li>
    <li>
    <MdHistory size={23}/>
    <span>History</span>
    </li>
    <li>
    <MdHistory size={23}/>
    <span>History</span>
    </li>
    <li><MdLibraryBooks size={23}/><span>Library</span></li>
    <li><MdSentimentDissatisfied size={23}/><span>I don't Know</span></li>
    <hr />
    <li onClick={logOutHandler}><MdExitToApp size={23}/><span>Log Out</span></li>
    <hr />
    </nav>
  )
}

export default Sidebar

import React, { useState } from 'react';
import "./../header/_header.scss";
import {FaBars} from "react-icons/fa";
import {AiOutlineSearch} from "react-icons/ai";
import {MdNotifications, MdApps} from "react-icons/md"
import { useNavigate } from 'react-router-dom';



const Header = (props) => {

  const [searchValue, setSearchValue]= useState("All")
 
  const navigate =useNavigate();
  const handleSubmit =(e)=>{
    e.preventDefault();
    navigate(`/search/${searchValue}`)
  setSearchValue(" ")

  }
  return (
    <div className=' header '>
      <FaBars className='header__menu' onClick={()=>props.toggelSidebar()} size={26}/>

      <img src="https://www.interstellarrift.com/wiki/images/d/d8/Youtube-logo-png-photo-0.png" alt=""  className='header__logo'/>

      <form >
        <input type="text" onChange={(e)=>setSearchValue(e.target.value)} placeholder='search'/>
        <button type='submit' onClick={handleSubmit}>
          <AiOutlineSearch size={22}/>
        </button>
      </form>

     <div className="header__icons">
      <MdNotifications className="icons" size={28} />
      <MdApps size={28} className="icons"/>
      <img src="https://png.pngtree.com/png-vector/20220817/ourmid/pngtree-cartoon-man-avatar-vector-ilustration-png-image_6111064.png" alt="Avtar" />
     </div>


    </div>
  )
}

export default Header

/** @format */

// import { useSSRSafeId } from "@react-aria/ssr";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { getVideoByCategory } from "../../redux/actions/video_action";
import "./_categoriesBar.scss"

const CateogariesBar = () => {

  const categoriesList = [
    "All",
    "React.js",
    "Songs",
    "Fav Songs",
    "Lectures",
    "Movies",
    "Series",
    "Liked",
    "Node.js",
    "Pujabi songs",
    "Firebase",
    "Mysql",
    "Sql",
    "Series",
    "Liked",
    "Lectures",
    "Movies",
    "Series",
    "Liked",
    "React.js",
    "Songs",
    "Fav Songs",
    "Lectures",
    "Movies",
    "Series",
    "Liked",
    
  ];

   const dispatch =  useDispatch();

   const [activeElement, setActiveElement]= useState("All");

const handelClick = (val)=>{
  setActiveElement(val);
  if(val==="All"){
    console.log(val)
  dispatch(getVideoByCategory(val))}
  else{
    console.log(val)
    dispatch(getVideoByCategory(val))
  }
  console.log(val)
}

  return (<div className="categoriesBar">
{
  categoriesList.map((value ,i)=>{
    return (<span key={i}
    onClick={()=>handelClick(value)}
    className={activeElement=== value?'active':""}
    >
      {" "+value+" "}
    </span>)
  })
}
  </div>);
};

export default CateogariesBar;

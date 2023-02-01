import moment from 'moment'
import numeral from 'numeral'
import React from 'react'
import "./videometa.scss"
import { MdThumbUp, MdThumbDown } from 'react-icons/md'
import ShowMoreText from "react-show-more-text";



const VideoMetaData = () => {
  return (
   <div className="videoMetaData py-2">
    <div className="videoMetaData__top">
        <h5>video title</h5>
        <div className="d-flex justify-content-between align-items-center py-1">
            <span>
                {numeral(10000).format('0.a')} Views• 
                {moment("2021-01-31").fromNow}
            </span>
        
        <div>
            <span >
                <MdThumbUp size={26}/> {numeral(10000).format('0.a')}
            </span>
            
            <span>
                <MdThumbDown size={26}/> {numeral(10000).format('0.a')}
            </span>
        </div>
        </div>
    </div>
 
    <div className="videoMetaData__channel d-flex justify-content-between align-items-center my-2 py-3">

        <div className="d-flex">
            <img src="https://png.pngtree.com/png-vector/20220817/ourmid/pngtree-cartoon-man-avatar-vector-ilustration-png-image_6111064.png" alt="imglogo" className='rounded-circle mr-3'/>
            <div className="d-flex flex-column"><span>vimlesh kumar</span><span> {numeral(10000).format('0.a') +" "} subscriber</span></div>
        </div>
        <button className='btn border-0  p-2 m-2'>Subscribes</button> 
    </div>
    <div className="videoMetaData__description">
    <ShowMoreText
    lines={3}
    more="SHOW MORE"
    less="SHOW LESS"
    anchorClass='showMoreText'
    expanded={false}
    >
    i am vimlesh kumar basicaly i am from gorakhpur but currently i'm in noida sector 70 which is located in uttar pradesh 
i have completed my b.tech from buddha institute of technology gida gorakhpur and
i completed my schooling high school and intermideate from Mahatma Gandhi Inter college ,Gorakhpur
i am vimlesh kumar basicaly i am from gorakhpur but currently i'm in noida sector 70 which is located in uttar pradesh 
i have completed my b.tech from buddha institute of technology gida gorakhpur and
i completed my schooling high school and intermideate from Mahatma Gandhi Inter college ,Gorakhpur
    i am vimlesh kumar basicaly i am from gorakhpur but currently i'm in noida sector 70 which is located in uttar pradesh 
i have completed my b.tech from buddha institute of technology gida gorakhpur and
i completed my schooling high school and intermideate from Mahatma Gandhi Inter college ,Gorakhpur
i am vimlesh kumar basicaly i am from gorakhpur but currently i'm in noida sector 70 which is located in uttar pradesh 
i have completed my b.tech from buddha institute of technology gida gorakhpur and
i completed my schooling high school and intermideate from Mahatma Gandhi Inter college ,Gorakhpur
    </ShowMoreText>

    </div>
   </div>
  )
}

export default VideoMetaData

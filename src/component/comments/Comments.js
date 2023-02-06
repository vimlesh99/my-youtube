import React, { useEffect, useState } from 'react'
import "./comments.scss"
import Comment from '../comment/Comment'
import { useDispatch, useSelector } from 'react-redux'
import { getComment, getCommentPass} from '../../redux/actions/comment.action'
import numeral from 'numeral';




const Comments = ({videoId,commentCount}) => {

 const cmt = useSelector(state=>state.commentList.commentList)
 console.log(cmt)

//  const _comments =[];
 const _comments =  cmt?.map(comment=>comment.snippet.topLevelComment.snippet)
console.log(_comments)
  const dispatch = useDispatch()

  const [commentText, setCommentText]=useState("")

  const handdelCommentText = (e) =>{
    let text = e.target.value;
    setCommentText(text);

  }

 const handelComment=(e)=>{

  e.preventDefault();

  if(commentText.length === 0) return;
  dispatch(getCommentPass(videoId,commentText))
   console.log()
   setCommentText("")
  }
  

  useEffect(()=>{
    dispatch(getComment(videoId));
  },[dispatch,videoId])
  return (
    <div className='comments'>
      <p>{numeral(commentCount).format("0.a") + " "} Comments</p>
      <div className="comment__form d-flex w-100 my-2">
        <img src="https://png.pngtree.com/png-vector/20220817/ourmid/pngtree-cartoon-man-avatar-vector-ilustration-png-image_6111064.png" alt="" 
          className='rounded-circle mr-3'
        />
        <form onSubmit={handelComment} className="d-flex flex-grow-1">
          <input type="text" className="flex-grow-1" value={commentText}  onChange={handdelCommentText} placeholder='Write a comment...' />
          <button className='border-0 p-2'>Comment</button>
        </form>
      </div>
      <div className="comment__list">
        {
          _comments?.map((comment,i)=>{
            return (
              <Comment commentProp={comment} key={i}/>
            )
          })
        }
      </div>
    </div>
  )
}

export default Comments
 
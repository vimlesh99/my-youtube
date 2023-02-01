import React from 'react'
import "./comments.scss"
import Comment from '../comment/Comment'
const Comments = () => {

 const handelComment=()=>{

  }
  return (
    <div className='comments'>
      <p>12345asdas</p>
      <div className="comment__form d-flex w-100 my-2">
        <img src="https://png.pngtree.com/png-vector/20220817/ourmid/pngtree-cartoon-man-avatar-vector-ilustration-png-image_6111064.png" alt="" 
          className='rounded-circle mr-3'
        />
        <form onSubmit={handelComment} className="d-flex flex-grow-1">
          <input type="text" className="flex-grow-1" placeholder='Write a comment...' />
          <button className='border-0 p-2'>Comment</button>
        </form>
      </div>
      <div className="comment__list">
        {
          [...Array(20)].map(()=>{
            return (
              <Comment/>
            )
          })
        }
      </div>
    </div>
  )
}

export default Comments
 
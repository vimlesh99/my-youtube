import React from 'react';
import moment from 'moment/moment';
import "./comment.scss"
const Comment = ({commentProp}) => {
  return (
    <div className='comment p-2 d-flex  '>
      <img src={commentProp.authorProfileImageUrl} alt="" 
          className='rounded-circle mx-1'
        />
        <div className="comment__body">
            <p className="comment__header mb-1">
                {commentProp.authorDisplayName} • {moment(commentProp.publishedAt).fromNow()}
            </p>
           <p className='mb-0'>{commentProp.textOriginal}</p>
        </div>
    </div>
  )
}

export default Comment

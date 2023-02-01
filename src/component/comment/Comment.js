import React from 'react';
import moment from 'moment/moment';
import "./comment.scss"
const Comment = () => {
  return (
    <div className='comment p-2 d-flex  '>
      <img src="https://png.pngtree.com/png-vector/20220817/ourmid/pngtree-cartoon-man-avatar-vector-ilustration-png-image_6111064.png" alt="" 
          className='rounded-circle mr-3'
        />
        <div className="comment__body">
            <p className="comment__header mb-1">
                vimlesh kumar•{moment("2021-05-05").fromNow()}
            </p>
           <p className='mb-0'>nice video</p>
        </div>
    </div>
  )
}

export default Comment

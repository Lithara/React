import React from 'react'
import './AddPost.css'
import InsertPhotoIcon from '@mui/icons-material/InsertPhoto';

export default function AddPost() {
  return (
    <div className="addPost">
      <div className="addPostContainer">
        <div className="addPostTop">
            <img src="/images/1.jpeg" alt="" className="addPostPic" />
            <input placeholder="What's in your mind..." className="addPostInput" />
        </div>
        <div className="addPostBottom">
          <div className="addPostOptions">
            <InsertPhotoIcon className="addPhoto" />
          </div>
        </div>
      </div>
    </div>
  )
}

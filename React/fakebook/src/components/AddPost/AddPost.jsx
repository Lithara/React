import React from 'react'
import './AddPost.css'
import InsertPhotoIcon from '@mui/icons-material/InsertPhoto';
import AddLocationAltIcon from '@mui/icons-material/AddLocationAlt';
import LocalOfferIcon from '@mui/icons-material/LocalOffer';
import LiveTvIcon from '@mui/icons-material/LiveTv';

export default function AddPost() {
  return (
    <div className="addPost">
      <div className="addPostContainer">
        <div className="addPostTop">
            <img src="/images/1.jpeg" alt="" className="addPostPic" />
            <input placeholder="What's in your mind..." className="addPostInput" />
        </div>
        <hr/>
        <div className="addPostBottom">
          <div className="addPostOptions">
            <div className="addPostOption">
              <InsertPhotoIcon className="addPhoto" />
              <span className="addPostOptionText">Add Photo/Video</span>
            </div>
            <div className="addPostOption">
              <AddLocationAltIcon className="addPhoto" />
              <span className="addPostOptionText">Add Location</span>
            </div>
            <div className="addPostOption">
              <LocalOfferIcon className="addPhoto" />
              <span className="addPostOptionText">Add Tag</span>
            </div>
            <div className="addPostOption">
              <LiveTvIcon className="addPhoto" />
              <span className="addPostOptionText">Go Live</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

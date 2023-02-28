import React from 'react'
import './Post.css'
import ThumbUpAltIcon from '@mui/icons-material/ThumbUpAlt';
import FavoriteIcon from '@mui/icons-material/Favorite';


export default function Post() {
  return (
    <div className="post">
        <div className="postContainer">
            <div className="postTop">
            <div className="postTop1">
                <img src="/images/1.jpeg" alt="" className="postImage" />
            </div>
            <div className="postTop2">
            <span className="postUsername">Lithara Perera</span><br/>                
                <span className="postTime">5 mins ago</span>
            </div>
            </div>
            <div className="postCenter">
                <div className="postCaption">
                    Hello! I'm a princess. You understand..?
                </div>
                <img src="/images/1.jpeg" alt="" className="postedImage" />
            </div>
            <div className="postBottom">
                <div className="postBottom1">
                <div className="postBottomLeft">
                    <ThumbUpAltIcon htmlColor="blue" className="postReact"/>
                </div>
                <div className="postBottomLeft">
                    <FavoriteIcon htmlColor="red" className="postReact"/>
                </div>
                <span className="likeCount">Princess and 225 others</span>
                </div>
                <div className="postBottomRight">
                    <span className="commentCount">15 comments</span>
                </div>
            </div>
        </div>
    </div>
  )
}

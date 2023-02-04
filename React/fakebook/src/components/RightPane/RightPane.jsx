import React from 'react'
import "./RightPane.css"
import CakeIcon from '@mui/icons-material/Cake';

export default function RightPane() {
  return (
    <div className="rightPaneBox">
      <div className="rightPaneContainer">
        <div className="adContainer">
          <span className="sponsored">Sponsored</span>
          <img src="/images/1.jpeg" alt="" className="adImage" />
          <span className="adText">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
          </span>
        </div>
        <div className="birthdayContainer">
          <CakeIcon htmlColor="tomato" className="birthdayImage" />
          <span className="birthdayText">
            <b>Kasun Gayantha</b> and <b>2 others</b> having birthday today
          </span>
        </div>
        <div className="friendList">
          <li className="onlineFriend">
            <div className="onlineFriendImageContainer">
              <img src="/images/1.jpeg" alt="" className="onlineFriendImg" />
              <span classNmae="onlineStatus"></span>
            </div>
            <span className="onlineFriendName">Jennie Sherif</span>
          </li>
          <li className="onlineFriend">
            <div className="onlineFriendImageContainer">
              <img src="/images/1.jpeg" alt="" className="onlineFriendImg" />
              <span classNmae="onlineStatus"></span>
            </div>
            <span className="onlineFriendName">Jennie Sherif</span>
          </li>
          <li className="onlineFriend">
            <div className="onlineFriendImageContainer">
              <img src="/images/1.jpeg" alt="" className="onlineFriendImg" />
              <span classNmae="onlineStatus"></span>
            </div>
            <span className="onlineFriendName">Jennie Sherif</span>
          </li>
          <li className="onlineFriend">
            <div className="onlineFriendImageContainer">
              <img src="/images/1.jpeg" alt="" className="onlineFriendImg" />
              <span classNmae="onlineStatus"></span>
            </div>
            <span className="onlineFriendName">Jennie Sherif</span>
          </li>
          <li className="onlineFriend">
            <div className="onlineFriendImageContainer">
              <img src="/images/1.jpeg" alt="" className="onlineFriendImg" />
              <span classNmae="onlineStatus"></span>
            </div>
            <span className="onlineFriendName">Jennie Sherif</span>
          </li>
          <li className="onlineFriend">
            <div className="onlineFriendImageContainer">
              <img src="/images/1.jpeg" alt="" className="onlineFriendImg" />
              <span classNmae="onlineStatus"></span>
            </div>
            <span className="onlineFriendName">Jennie Sherif</span>
          </li>
          <li className="onlineFriend">
            <div className="onlineFriendImageContainer">
              <img src="/images/1.jpeg" alt="" className="onlineFriendImg" />
              <span classNmae="onlineStatus"></span>
            </div>
            <span className="onlineFriendName">Jennie Sherif</span>
          </li>
          <li className="onlineFriend">
            <div className="onlineFriendImageContainer">
              <img src="/images/1.jpeg" alt="" className="onlineFriendImg" />
              <span className="onlineStatus"></span>
            </div>
            <span className="onlineFriendName">Jennie Sherif</span>
          </li>
        </div>
      </div>
    </div>
  )
}

import React from 'react'
import SearchIcon from '@mui/icons-material/Search';
import PersonIcon from '@mui/icons-material/Person';
import MessageIcon from '@mui/icons-material/Message';
import SettingsIcon from '@mui/icons-material/Settings';
import "./NavBar.css"

export default function NavBar() {
  return (
    <div class="navBarBox">
        <div className="navBarLeft">
          <span className="logo">fakebook</span>
        </div>
        <div className="navBarCenter">
          <div className="searchBarBox">
            <SearchIcon className="searchIcon"/>
            <input placeholder="Search for your friend" className="searchInput" />
          </div>
        </div>
        <div className="navBarRight">
          <div className="navBarLinks">
            <span className="navBarLink">HomePage</span>
            <span className="navBarLink">Profile</span>
          </div>
          <div className="navBarIcons">
            <div className="navBarIcon">
              <PersonIcon/>
              <span className="IconTag">3</span>
            </div>
            <div className="navBarIcon">
              <MessageIcon/>
              <span className="IconTag">5</span>
            </div>
            <div className="navBarIcon">
              <SettingsIcon/>
              <span className="IconTag">2</span>
            </div>
          </div>
          <div className="pic">
            <img src="/images/1.jpeg" alt="" className="profilePicImg" />
          </div>
        </div>
    </div>
  )
}

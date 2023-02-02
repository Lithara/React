import React from 'react'
import LeftPane from '../../components/LeftPane/LeftPane'
import NavBar from '../../components/NavBar'
import "./Home.css"

export default function Home() {
  return (
    <>
    <NavBar/>
    <div className="bottomContainer">
      <LeftPane/>
      <PostPane/>
      <RightPane/>
    </div>
    </>
  )
}

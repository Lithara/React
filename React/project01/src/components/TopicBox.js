import React from 'react'
import './topicbox.css'

export default function TopicBox(props) {
    //onst topic="My favourite foods are kottu "
    //const item="and rice"
  return (
    <div>
      <div class="topicBox">
        <span class="text">My favourite food is {props.food}</span>
      </div>
    </div>
  )
}

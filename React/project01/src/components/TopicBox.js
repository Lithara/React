import React from 'react'
import './topicbox.css'

export default function TopicBox() {
    //onst topic="My favourite foods are kottu "
    //const item="and rice"
    const a=10;
    const b=20;
    const c=a+b;

  return (
    <div>
      <div class="topicBox">
        <span class="text">{c}</span>
      </div>
    </div>
  )
}

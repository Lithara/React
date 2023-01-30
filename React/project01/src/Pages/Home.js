import React from 'react'
import Content from '../components/Content'
import TopicBox from '../components/TopicBox'


export default function Home() {
  return (
    <div>
        <h1>Homepage</h1>
      <TopicBox food="kottu" price="Rs.250">
        <span>This is the description</span>
      </TopicBox>
      <TopicBox food="rice" price="Rs.350">
        <button>This is a button</button>
      </TopicBox>
      <TopicBox food="noodles" price="Rs.300">
        <p>lorem ipsum</p>
      </TopicBox>
      
    </div>
  )
}

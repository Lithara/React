import React from 'react'
import Content from '../components/Content'
import TopicBox from '../components/TopicBox'


export default function Home() {
  return (
    <div>
        <h1>Homepage</h1>
      <TopicBox food="kottu" price="Rs.250"/>
      <TopicBox food="rice" price="Rs.350"/>
      <TopicBox food="noodles" price="Rs.300"/>
      
    </div>
  )
}

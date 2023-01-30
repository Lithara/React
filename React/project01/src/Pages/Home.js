import React from 'react'
import Content from '../components/Content'
import TopicBox from '../components/TopicBox'


export default function Home() {
  return (
    <div>
        <h1>Homepage</h1>
      <TopicBox food="kottu"/>
      <TopicBox food="rice"/>
      <TopicBox food="noodles"/>
      
    </div>
  )
}

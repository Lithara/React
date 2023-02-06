import React from 'react'
import NameListItem from './NameListItem'

export default function NameList() {

  const nameList = [
   { 
    name : { title: 'mr', first: 'rafael', last: 'leroux' },
    location : { city: 'madrid' },
    email: 'rafael.leroux@example.com',
    dob: { date : '1988-11-12T06:26:38.812Z', age : 32 },
    picture: { medium: 'https://randomuser.me/api/portraits/med/men/75.jpg' },
  },
  {
    name : {
    title : 'miss',
    first : 'jennie',
    last : 'nichols'
    },
    location : {
      city: 'billings'
    },
    email : 'jennie.nichols@example.com',
    dob : {
      date : '1992-03-08T15:13:16.688Z',
      age : 30
    },
    picture : {
      medium : 'https://randomuser.me/api/portraits/med/men/78.jpg',
    },
  },
  {
    name : {
    title : 'mr',
    first : 'bred',
    last : 'gibson'
    },
    location : {
      city : 'kilcoole'
    },
    email : 'bred.gibson@example.com',
    dob : {
      date : '1993-07-20T09:44:18.674Z',
      age : 26
    },
    picture : {
      medium : 'https://randomuser.me/api/portraits/med/men/8.jpg',
    },
  },
];

  return (
    <React.Fragment>
      <h1>Name List</h1>
      <hr/>
        <ul>
          <NameListItem 
          name={nameList[0].name.first + ' ' + nameList.name.last} 
          city={nameList[0].location.city}
          email={nameList[0].email}
          birthday={nameList[0].dob.date}
          avatar={nameList[0].picture.medium}
          />
          <NameListItem 
          name={nameList[1].name.first + ' ' + nameList.name.last} 
          city={nameList[1].location.city}
          email={nameList[1].email}
          birthday={nameList[1].dob.date}
          avatar={nameList[1].picture.medium}
          />
          <NameListItem 
          name={nameList[2].name.first + ' ' + nameList.name.last} 
          city={nameList[2].location.city}
          email={nameList[2].email}
          birthday={nameList[2].dob.date}
          avatar={nameList[2].picture.medium}
          />
        </ul>
    </React.Fragment>
  )
}

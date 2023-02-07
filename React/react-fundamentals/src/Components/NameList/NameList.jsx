import React from 'react';
import NameListItem from './NameListItem';

export default function NameList() {

  const nameList = [
   { 
    id: 1,
    name : { title: 'mr', first: 'rafael', last: 'leroux' },
    location : { city: 'madrid' },
    email: 'rafael.leroux@example.com',
    dob: { date : '1988-11-12T06:26:38.812Z', age : 32 },
    picture: { medium: 'https://randomuser.me/api/portraits/med/men/75.jpg' },
  },
  {
    id: 2,
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
    id: 3,
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

const nameListComponent = () => {
  return (
    nameList.map(aName => {
      return (
        <NameListItem 
          key={aName.id}
          name={aName.name.first + ' ' + aName.name.last} 
          city={aName.location.city}
          email={nameList.email}
          birthday={nameList.dob.date}
          avatar={nameList.picture.medium}
        />
      )
    })
  );
};

  return (
    <React.Fragment>
      <div className="container mt-4">
        <ul className="list-group">
          {nameListComponent()}
        </ul>
      </div>
    </React.Fragment>
  )
}

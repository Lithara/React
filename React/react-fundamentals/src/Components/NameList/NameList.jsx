import React from 'react'
import NameListItem from './NameListItem'

export default function NameList() {

  const nameList = {
    "name": {
    "title": "Miss",
    "first": "Jennie",
    "last": "Nichols"
    },
    "location": {
      "city": "Billings"
    },
    "email": "jennie.nichols@example.com",
    "dob": {
      "date": "1992-03-08T15:13:16.688Z",
      "age": 30
    },
    "picture": {
      "medium": "https://randomuser.me/api/portraits/med/men/75.jpg",
    },
  };

  return (
    <React.Fragment>
      <h1>Name List</h1>
      <hr/>
        <ul>
          <NameListItem 
          name={nameList.name.first + ' ' + nameList.name.last} 
          city={nameList.location.city}
          email={nameList.email}
          birthday={nameList.dob.date}
          avatar={nameList.picture.medium}
          />
        </ul>
    </React.Fragment>
  )
}

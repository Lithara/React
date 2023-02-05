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
  };

  return (
    <React.Fragment>
      <h1>Name List</h1>
      <hr/>
        <ul>
          <NameListItem 
          name="Lithara Perera" 
          course="Csharp" 
          email="litharaperera@gmail.com"
          />
          <NameListItem 
          name="Wasath Theekshana" 
          course="React JS" 
          email="wasaththeekshana@gmail.com"
          />
          <NameListItem 
          name="Lorem Ipsum" 
          course="Azure" 
          email="loremipsum@gmail.com"
          />
          <NameListItem 
          name="Fiqri Ismail" 
          course="Software Arcchitecture" 
          email="fiqriismail@gmail.com"
          />
          <NameListItem 
          name="Chamindu Sooriyapperuma" 
          course="Devops" 
          email="chamindusooriyapperuma@gmail.com"
          />
        </ul>
    </React.Fragment>
  )
}

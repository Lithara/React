import React, { useState } from "react";
import NameListItem from "./NameListItem";

export default function NameList() {

  

  const [nameList, setNameList] = useState([

    {
      id: 1,
      name: { title: "mr", first: "rafael", last: "leroux" },
      location: { city: "madrid" },
      email: "rafael.leroux@example.com",
      dob: { date: "1988-11-12T06:26:38.812Z", age: 32 },
      picture: { medium: "https://randomuser.me/api/portraits/med/men/75.jpg" },
    },

    {
      id: 2,
      name: {
        title: "miss",
        first: "jennie",
        last: "nichols",
      },
      location: {
        city: "billings",
      },
      email: "jennie.nichols@example.com",
      dob: {
        date: "1992-03-08T15:13:16.688Z",
        age: 30,
      },
      picture: {
        medium: "https://randomuser.me/api/portraits/med/men/78.jpg",
      },
    },

    {
      id: 7,
      name: {
        title: "mr",
        first: "bred",
        last: "gibson",
      },
      location: {
        city: "kilcoole",
      },
      email: "bred.gibson@example.com",
      dob: {
        date: "1993-07-20T09:44:18.674Z",
        age: 26,
      },
      picture: {
        medium: "https://randomuser.me/api/portraits/med/men/8.jpg",
      },
    },

    {
      id: 4,
      name: {
        title: "mr",
        first: "bred",
        last: "abc123",
      },
      location: {
        city: "kilcoole",
      },
      email: "bred.gibson@example.com",
      dob: {
        date: "1993-07-20T09:44:18.674Z",
        age: 26,
      },
      picture: {
        medium: "https://randomuser.me/api/portraits/med/men/8.jpg",
      },
    },
    
  ]);


  const addUserHandler = () => {
    const newUser = {
      id: 9,
      name: {
        title: "mr",
        first: "bred",
        last: "gibson",
      },
      location: {
        city: "kilcoole",
      },
      email: "bred.gibson@example.com",
      dob: {
        date: "1993-07-20T09:44:18.674Z",
        age: 26,
      },
      picture: {
        medium: "https://randomuser.me/api/portraits/med/men/8.jpg",
      },
    }
    //setNameList(nameList.concat(newUser));
    //setNameList([...nameList, newUser]);
    setNameList((nameList) => [...nameList, newUser])
  };

  const nameListComponent = () => {
    return nameList.map((aName) => {
      return (
        <NameListItem
          key={aName.id}
          name={aName.name.first + " " + aName.name.last}
          city={aName.location.city}
          email={aName.email}
          birthday={aName.dob.date}
          avatar={aName.picture.medium}
        />
      );
    });
  };

   getNum = () => {
    const n1 = "2"
    const n2 = "2"
    const m3 = n1 + n2

    return(
      <div>

      </div>
    )

  }




  return (
    <React.Fragment>
      <div className="container mt-4">
        <button className="btn btn-primary mb-2" onClick={addUserHandler}>
          Add Name
        </button>
        <ul className="list-group">{nameListComponent()}</ul>
        getNum()
      </div>
    </React.Fragment>
  );

}






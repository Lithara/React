import React from 'react'

export default function NameListItem(props) {
  return (
    <div>
       <li>
        <p>
            <img src={props.avatar} />{props.name}
        </p>
        <p>City : {props.city}</p>
        <p>Email : {props.email}</p>
        <p>Birthday : {props.birtday}</p>
       </li>
    </div>
  )
}

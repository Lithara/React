import React from 'react'
import moment from 'moment'

export default function NameListItem(props) {
  return (
    <div>
       <li>
        <p>
            <img src={props.avatar} alt={props.name} /> {props.name}
        </p>
        <p>City : {props.city}</p>
        <p>Email : {props.email}</p>
        <p>Birthday : {moment(props.birthday).format('DD-MM-YYYY')}</p>
       </li>
    </div>
  )
}

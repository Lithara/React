import React from 'react'

export default function NameListItem(props) {
  return (
    <div>
       <li>
        {props.name} - Course - {props.course} - Email - {props.email}
       </li>
    </div>
  )
}

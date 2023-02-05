import React from 'react'
import NameListItem from './NameListItem'

export default function NameList() {
  return (
    <React.Fragment>
      <h1>Name List</h1>
      <hr/>
        <ul>
          <NameListItem/>
          <NameListItem/>
          <NameListItem/>
          <NameListItem/>
          <NameListItem/>
        </ul>
    </React.Fragment>
  )
}

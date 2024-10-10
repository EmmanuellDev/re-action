import React from 'react'
import Person from './Person'

function NameList() {
  const names = ['Emman', 'Eswar', 'Mohan', 'Emman']

  const nameList = names.map((name, index) => <h2 key={index}>{index} {name}</h2>
  )

  return <div>{nameList}</div>
}

export default NameList

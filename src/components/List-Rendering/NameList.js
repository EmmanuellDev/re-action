import React from 'react'
import Person from './Person'

function NameList() {
  const persons = [
    {
      id: 1,
      name: "Emman",
      age: 20,
      skills: "react",
    },
    {
      id: 2,
      name: 'Eswar',
      age: 20,
      skills: "angular",
    },
    {
      id: 3,
      name: "Mohan",
      age: 19,
      skills: "vue",
    },
  ]

  const personList = persons.map(person => (
    <Person key={person.id} person={person} />
  ))

  return <div>{personList}</div>
}

export default NameList

import React from 'react'

function Person({ person }) {
  return (
    <div>
      <h2>
        I am {person.name} and I am {person.age} years old and also I know {person.skills}.
      </h2>
    </div>
  )
}

export default Person

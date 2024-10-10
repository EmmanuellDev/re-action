import React from 'react'

function ChildComp(props) {
  return (
    <div>
      <button onClick={() => props.greetHandler('Emman')}>Greet Parent</button>
    </div>
  )
}

export default ChildComp
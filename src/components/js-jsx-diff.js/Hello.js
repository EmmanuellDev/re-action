import React from "react";

const Hello = props => {
    console.log(props)
    const {name, age} = props
    return <h1>Hello {name} {age}</h1> //jsx
    //return React.createElement('div', {id: 'hello'}, React.createElement('h1', null, "Hello Emman")) //js
}

export default Hello
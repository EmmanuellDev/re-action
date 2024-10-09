import React from "react";

const Hello = () => {
    return <h1>Hello Emman</h1> //jsx
    return React.createElement('div', {id: 'hello'}, React.createElement('h1', null, "Hello Emman")) //js
}

export default Hello
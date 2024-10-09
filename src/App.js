import './App.css';
import React, { Component } from 'react';
import  Name  from './components/functional-comp/name';
import Welcome from './components/class-comp/welcome';
import Hello from './components/js-jsx-diff.js/Hello';

class App extends Component {
render() {
  return (
    <div className="App">
      {/* <Name />
      <Welcome /> */}
      <Hello />
    </div>
  );
}
}
export default App;

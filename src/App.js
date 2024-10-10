import './App.css';
import React, { Component } from 'react';
import  Name  from './components/functional-comp/name';
import Welcome from './components/class-comp/welcome';
import Hello from './components/js-jsx-diff.js/Hello';
import Message from './components/state/Message';
import Counter from './components/state/Counter';
import FuncClick from './components/Event-Handling/Func-click';
import ClassClick from './components/Event-Handling/Class-click';
import EventBind from './components/Event-Handling/EventBind';
import ParentComp from './components/Event-Handling/ParentComp';
import ChildComp from './components/Event-Handling/ChildComp';


class App extends Component {
render() {
  return (
    <div className="App">
      <ParentComp />
      {/* <EventBind />
      <FuncClick />
      <ClassClick />
      <Counter />
      <Message />
      <Name />
      <Welcome />
      <Hello name='Emman' age='20'/>
      <Hello name='Eswar' age='20'/>
      <Hello name='Mohan' age='19'/>
      <Welcome name='Emman' age='20'/>
      <Welcome name='Eswar' age='20'/>
      <Welcome name='Mohan' age='19'/> */}
    </div>
  );
}
}
export default App;

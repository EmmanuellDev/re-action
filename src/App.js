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
import UserGreeting from './components/conditonal rendering/UserGreeting';
import NameList from './components/List-Rendering/NameList';
import Person from './components/List-Rendering/Person';
import Stylesheet from './components/css styling/Stylesheet';
import Inline from './components/css styling/Inline';
import './appStyles.css'
import styles from '../src/'
import Form from './components/Form';
import LifecycleA from './lifeCycleMethods/Mounting/LifecycleA';
import FragmentDemo from './components/fragments/FragmentDemo';
import Tables from './components/fragments/Tables';
import ParentComponent from './components/Pure-Comp/ParentComponent';

class App extends Component {
render() {
  return (
    <div className="App">
      <ParentComponent />
      {/* <Tables /> */}
      {/* <FragmentDemo /> */}
      {/* <LifecycleA /> */}
      {/* <Form /> */}
      {/* <h2 className='error'>Error</h2>
      <h2 className={styles.success}>Success</h2>
      <Inline />
      <Stylesheet primary='true'/>
      <NameList />
      <Person />
      <UserGreeting />
      <ParentComp />
      <EventBind />
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

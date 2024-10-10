What is React?
* It is a Open Source Javascript Library Developed and maintained by Facebook (meta).
* It was built to mainly focus on UI and it is not a framework
* Meta named it as "React" because of it is mainly focuses on User's reaction over the Webapp

Why do we need React?
* It has a component based architecture
* The codes written in react can be reused in other js libraries and integration is efficient
* It is declarative i.e, you can say what to do and react itself make it for you using it's DOM package

Component Types
* Class Component
* Functional Component

Class Component Types
* Stateful class component
* Stateless class component

JSX
* JSX - Javascript XML
* JSX functionalities can be used in .js files
* JavaScript XML is a syntax extension that allows you to write HTML-like code within JavaScript & it can be used in both .js and .jsx files

Props
* Props is an object that contains the attributes and values which have been passed from the component
* It can be used in both class and functional component
* In func component, you can directly use {props.object_name}, whereas in class component, you need to use this keyword, {this.props.object_name}
* Props are immutable (unchangable)

State
* States are mutable
* In func component, you can directly use useState, whereas in class component, you need to use this keyword, {this.state}
* The state must be inside the constructor and super() keyword must be used
* State value can be changed by using setState method

Deconstructor
* It is used to split the object or variable into small divisions using const
* It can be used in both class and functional component

Event Handling
* It can be used in both class and functional component
* Bind is a keyword used to define the this keyword. By using the bind keyword, the this keyword will no more be Undefined

Keys
* A key is a special string attribute you need to include when creating lists of elements
* Keys give the elements a stable identity
* Keys help React identify which items have changed, are added, or are removed
* Help in efficient update of the user interface

preventDefault
* It is used to prevent the web pages from loading after any submission occurs.

LifeCycle Methods
=> Mounting
=> Updatinng
=> Unmounting
=> Error Handling

1. Mounting
=> Countructor (props)
* It is a special function that will get called whenever a new component is created
* It is used to initilize a state and binding the event handlers
* It must contain super(props) and here only you can overwrite this.state

=> static getDerivedStateFromProps(props, state)
* It is useful when the state of the component depends on changes in props over time
* It is used to set the State

=> render ()
* It is the only required method
* It is used to read props and state and return JSX
* It cannot be useful in changing state or interaction with DOM or make ajax calls
* Child component lifecycle methods are also executed

componentDidMount()
* It is invoked immediately after a component and all its children components have been rendered to the DOm
* It can cause side effects like interact with the DOM or perform any ajax calls to load data

2. Updating
=> static getDerivedStateFromProps(props, state)
* It is useful when the state of the component depends on changes in props over time
* It is used to set the State

=> shouldComponentUpdate (nextProps, nextState)
* It dictates if the component should rerender or not
* It is useful in performance of optimization

=> render ()
* It is the only required method
* It is used to read props and state and return JSX
* It cannot be useful in changing state or interaction with DOM or make ajax calls
* Child component lifecycle methods are also executed

=> getSnapshotBeforeUpdate (prevProps, prevState)
* It is called right before the changes from the virtual DOM are to be reflected in the DOM
* It is used to capture some info from the DOM
* Method will either return null or a value. Returned value will be passed as the third parameter to the next method

=> componentDidUpdate(prevProps, prevState, snapshot)
* It called after the render is finished in the re-render cycles
* It causes side effects

3. Unmounting
 => componentWillUnmount()
 * This method is invoked immediately before a component is unmounted and destroyed
 * It is useful in cancelling any network requests, removing event handlers, cancelling any subscriptions and also invalidating timers
 * Do not call the setState method

4. Error Handling
=> static getDerivedStateFromError(error)
* When there is an error either during rendering, in a lifecycle method, or in the constructor of any child component.

=> componentDidCatch(error, info)
* When there is an error either during rendering, in a lifecycle method, or in the constructor of any child component.
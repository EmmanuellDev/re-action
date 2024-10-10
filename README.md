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
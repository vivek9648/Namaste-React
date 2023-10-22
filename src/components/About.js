import React from 'react';
import User from './User';
import UserClass from './UserClass';
import UserContext from '../utils/UserContext';
class About extends React.Component{
  constructor(){
    super();
    console.log("parent constructor");
  }
  componentDidMount(){
    console.log("Parent  compoennetdidmount");
  }

render(){
  console.log("parent render");
  return (
    <div>
      <h1>About</h1>
      <div>
        Loggedin user
        <UserContext.Consumer>
          {({LoggedInUser})=><h1 className='text-bold'>{LoggedInUser}</h1>}
        </UserContext.Consumer>

      </div>
      <h1>This is about page</h1>  
     
      <UserClass name="First" location ="lucknow"/>
      {/* <UserClass name="Second" location ="allahabad"/> */}
    </div>
);
}
}

export default About;

/*
render Phase
parent constructor
Parent render
First Child constructor
First Child render
second Child constructor
second  Child render

Commit Phase
Dom updated in single Batch
First componentdidmount
second  componentdidmount



*/

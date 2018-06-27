import React, { Component } from 'react'
// import { Link } from 'react-router-dom'
import CSSModules from 'react-css-modules'

import css from './index.css'
import PageTemplate from '../'
import { loginProcess } from 'Process/users/auth'

class Login extends Component {
  constructor(props) {
    super(props)
    this.state = {
      email: '',
      password: ''
    }
  }

handleInputEmail = (event) => {
  this.setState({ email: event.target.value })
}

handleInputPassword = (event) => {
  this.setState({ password: event.target.value })
}

  render() {
    // Create a PageTemplate element
    //  //create a div with a class of title
    //    //Add the title you want
    //  //create a div with a class of description
    //    //Add your description
    //  //Create a form with a class of form
    //    //Create an input with:
    //      //a placeholer attribute of "Your email"
    //      //a type attribute of text
    //      //a value attribute of this.state.email (note this is javascript)
    //      //a onChange attribute of this.handleInputEmail (note this is javascript)
    //    //Create an input with:
    //      //a placeholer attribute of "Enter Password"
    //      //a type attribute of password
    //      //a value attribute of this.state.password (note this is javascript)
    //      //a onChange attribute of this.handleInputPassword (note this is javascript)
    //    //Create a react button:
    //      //that handles a click calling this.handleClick
    //      //make sure to set its type to a button
    return (
      <PageTemplate>
        The Login Page
      </PageTemplate>
    )
  }
}

render() {
  return (
    <PageTemplate>
      <div styleName="title">Welcome to Percv</div>
      <div styleName="description">Sign in with your information below</div>
      <form id="around-form">
        <input placeholder="Your Email" type="email" value={this.state.email} onChange={this.handleInputEmail} />
        <input placeholder="Enter Password" type="password" value={this.state.password} onChange={this.handleInputPassword} />
        <button type="button" value={this.state.handleClick} onClick={this.handleClick}>Login</button>
        <button id="Forgot Password?" value={this.state.handleClick} onClick={this.handleClick}>Forgot Password?</button>
      </form>
    </PageTemplate>
  )
}
}
export default loginProcess(CSSModules(Login, css))

// Create a PageTemplate element
// //create a div with a class of title
// //Add the title you want
// //create a div with a class of description
// //Add your description
// //Create a form with a class of form
// //Create an input with:
// //a placeholer attribute of "Your email"
// //a type attribute of text
// //a value attribute of this.state.email (note this is javascript)
// //a onChange attribute of this.handleInputEmail (note this is javascript)
// Create an input with:
// //a placeholer attribute of "Enter Password"
// //a type attribute of password
// //a value attribute of this.state.password (note this is javascript)
// //a onChange attribute of this.handleInputPassword (note this is javascript)
// //Create a react button:
// //that handles a click calling this.handleClick
// //make sure to set its type to a button

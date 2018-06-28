import React, { Component } from 'react'
// import { Link } from 'react-router-dom'
import CSSModules from 'react-css-modules'

import css from './index.css'
import PageTemplate from '../'
import { loginProcess } from 'Process/users/auth'
import Lock from './lock.svg'
import User from './user.svg'

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

  handleClick = () => {
    const { email, password } = this.state
    this.props.loginProcess(email, password)
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
        <div styleName="title">
          <h1>Welcome to Ipsum</h1>
        </div>
        <div styleName="description">Sign in with your information below</div>
        <form styleName="form">
          <div styleName="icons"><User /></div>
          <input type="text" placeholder="Your Email" value={this.state.email} onChange={this.handleInputEmail} />
          <br />
          <div styleName="icons"><Lock /></div>
          <input type="password" placeholder="Enter Password" value={this.state.password} onChange={this.handleInputPassword} />
          <br />
          <button type="button" onClick={this.handleClick}>
            Login
          </button>
        </form>
      </PageTemplate>
    )
  }
}

export default loginProcess(CSSModules(Login, css))

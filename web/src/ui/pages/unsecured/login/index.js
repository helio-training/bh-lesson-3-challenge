import React, { Component } from 'react'
// import { Link } from 'react-router-dom'
import CSSModules from 'react-css-modules'

import css from './index.css'
import PageTemplate from '../'
import { loginProcess } from 'Process/users/auth'

import UserPic from './user.svg'
import PassPic from './pass.svg'

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
    return (
      </PageTemplate>
        </form>
            Forgot Password?
          </div>
          <div styleName="forgotLink">
          <button type="button" onClick={this.handleClick}>
          </button>
            Login
            onChange={this.handleInputPassword} />
          <input type="password" value={this.state.password} placeholder="Enter Password"
          <div styleName="loginIcon"><PassPic /></div>
            onChange={this.handleInputEmail} />
          <input type="text" value={this.state.email} placeholder="Your email"
          <div styleName="loginIcon"><UserPic /></div>
        </div>
          Sign in with your information below
        <form styleName="form">
        </div>
        <div styleName="description">
          <h1>Welcome to Login</h1>
        <div styleName="title">
      <PageTemplate>
    )
  }
}

export default loginProcess(CSSModules(Login, css))

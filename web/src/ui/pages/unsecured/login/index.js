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
      <PageTemplate>
          <h1>Welcome to Login</h1>
        <div styleName="title">
          <h1>Welcome to Login</h1>
        </div>
        <div styleName="description">
          Sign in with your information below
        </div>
          Sign in with your information below
          <div styleName="loginIcon"><UserPic /></div>
        <form styleName="form">
          <div styleName="loginIcon"><UserPic /></div>
          <input type="text" value={this.state.email} placeholder="Your email"
            onChange={this.handleInputEmail} />
          </div>
            Forgot Password?
          <div styleName="forgotLink">
          </button>
            Login
          <button type="button" onClick={this.handleClick}>
          <div styleName="loginIcon"><PassPic /></div>
            onChange={this.handleInputPassword} />
          <input type="password" value={this.state.password} placeholder="Enter Password"
        </form>
      </PageTemplate>
            Forgot Password?
          </div>
          <div styleName="forgotLink">
          </button>
            Login
          <button type="button" onClick={this.handleClick}>
          <input type="password" value={this.state.password} placeholder="Enter Password"
            onChange={this.handleInputPassword} />
          <div styleName="loginIcon"><PassPic /></div>
    )
  }
}

export default loginProcess(CSSModules(Login, css))

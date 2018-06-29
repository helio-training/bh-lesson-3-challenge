import React, { Component } from 'react'
import CSSModules from 'react-css-modules'
// import { Link } from 'react-router-dom'

import css from './index.css'
// import Logo from './logo.svg'
// Find an svg file on the web you want to use for a logo and copy it
// To this folder destination

class Header extends Component {
  render() {
    // Create a div with a class of container
    //  // create a react-router link element with "to" attribute set to "/"
    //  // create a div with a class of nav-links
    //    //Create a NavLink Element
    return (
      <div styleName="header-container">
        <span styleName="left-side"><img styleName="bird" src="download.png" alt="" /></span><span styleName="need-login">Need an account? <button styleName="signUpButton">Sign Up!</button> </span>
      </div>
    )
  }
}

export default CSSModules(Header, css)

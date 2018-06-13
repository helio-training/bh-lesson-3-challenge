import React, { Component } from 'react'
import CSSModules from 'react-css-modules'
// import { Link } from 'react-router-dom'

import css from './index.css'
// import Logo from './logo.svg'
// Find an svg file on the web you want to use for a logo and copy it
// To this folder destination

class Header extends Component {
  render() {
    return (
      <nav>
        <div id="topnav">
          <div1 id="Goft">
            <img id="logopic" src="./golfLogo.png" alt="" />
          </div1>
          <a active="Sign up">Sign Up</a>
          <a href="#need an account">Need an account?</a>
        </div>
      </nav>
    )
  }
}
export default CSSModules(Header, css)
// Create a div with a class of container
//  // create a react-router link element with "to" attribute set to "/"
//  // create a div with a class of nav-links
//    //Create a NavLink Element

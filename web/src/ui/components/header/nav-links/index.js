import React, { Component } from 'react'
import CSSModules from 'react-css-modules'
// import { Link } from 'react-router-dom'
import {Link} from 'react-router-dom'
import css from './index.css'
// import logo from './logo.svg'
// import Logo from './logo.svg'
// Find an svg file on the web you want to use for a logo and copy it
// To this folder destination

class NavLink extends Component {
  render() {
    // Create a div with a class of container
    //  // create a react-router link element with "to" attribute set to "/"
    //  // create a div with a class of nav-links
    //    //Create a NavLink Element
    return (

        <div className="container">
          <react-router>"/.callenges/pyramid"</react-router>
          <div className="nav-link">Nav-LinkElement</div>

        </div>

    )
  }
}

export default CSSModules(NavLink, css)
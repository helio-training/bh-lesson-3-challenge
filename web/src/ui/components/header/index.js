import React, { Component } from 'react'
import CSSModules from 'react-css-modules'
// import { Link } from 'react-router-dom'
// import { NavLink } from 'react-router-dom'

import css from './index.css'
// import Logo from './logo.svg'
// import Logo from './Users/spencerowens/Documents/helio/lectures/07-06-2018/bh-lesson-3-challenge/web/src/ui/pages/animal-2023216.svg'
// Find an svg file on the web you want to use for a logo and copy it
// To this folder destination

class Header extends Component {
  render() {
    // Create a div with a class of container
    //  // create a react-router link element with "to" attribute set to "/"
    //  // create a div with a class of nav-links
    //    //Create a NavLink Element
    return (
      <span>
        To Do
      </span>
    //  <Logo>
    //  <div styleName="container">
      //    <Link to="/">Nude Tains</Link>
      //    <div styleName="nav-links">
      //      <NavLink to="/">Ruddyard Kipling</NavLink>
      //    </div>
      //  </div>
      // </Logo>
    )
  }
}

export default CSSModules(Header, css)

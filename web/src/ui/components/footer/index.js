/* eslint-disable no-console */
import React, { Component } from 'react'
import CSSModules from 'react-css-modules'
// import { Link } from 'react-router-dom'

import css from './index.css'

class Footer extends Component {
  render() {
    // Create a div with class container
    //  //create a div with a class of right-section
    //    //create a div with a class of first-row
    //    //create a div with a class of second-row
    //    //create a div with a class of third-row
    //  //create a div with a class of left-section
    //    //Put some random text in for now
    return (
      <div className="footer-container">
        <div className="right-section">
          <div className="first-row"><a href="first-row">First Row</a></div>
          <div className="second-row"><a href="second-row">Second Row</a></div>
          <div className="third-row"><a href="third-row">Third Row</a></div>
        </div>
        <div className="left-section">Welcome to the site!</div>
      </div>
    )
  }
}

export default CSSModules(Footer, css)

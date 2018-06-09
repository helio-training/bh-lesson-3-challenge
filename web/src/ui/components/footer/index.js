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
          <div className="first-row">First Row</div>
          <div className="second-row">Second Row</div>
          <div className="third-row">Third Row</div>
        </div>
        <div className="left-section">Random Text</div>
      </div>
    )
  }
}

export default CSSModules(Footer, css)

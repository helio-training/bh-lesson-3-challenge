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
      <div stylename="container">
        <div stylename="right-section">
          <div stylename="first-row">a</div>
          <div stylename="second-row">b</div>
          <div stylename="third-row">c</div>
        </div>
        <div stylename="left-section"> Random text </div>
      </div>

    )
  }
}

export default CSSModules(Footer, css)

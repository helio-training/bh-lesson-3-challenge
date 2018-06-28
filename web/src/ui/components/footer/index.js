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
      <div styleName="container">
        <div styleName="right-section">
          right
          <div styleName="first-row">
          first
          </div>
          <div styleName="second-row">
          second
          </div>
          <div styleName="third-row">
          third
          </div>
        </div>
        <div styleName="left-section">
        left
        </div>
      </div>
    )
  }
}

export default CSSModules(Footer, css)

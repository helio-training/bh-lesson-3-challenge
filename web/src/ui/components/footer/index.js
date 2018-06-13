/* eslint-disable no-console */
import React, { Component } from 'react'
import CSSModules from 'react-css-modules'
// import { Link } from 'react-router-dom'

import css from './index.css'
// import Logo from './logo.social'

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
      <nav>
        <div id="bottomnav">
          <a active="Sign up">SIGN UP FOR OUR FREE NEWSLETTER </a>
        </div>
        <div1 id="bottomcenter">
          <a href="Social">Social</a>
          <a href="#fa-facebook" id="fa fa-facebook" />
          <a href="#fa-twitter" id="fa fa-twitter" />
          <a href="#fa-linkedin" id="fa fa-linkedin" />
        </div1>
        <div2 id="bottomleft">
          <a href="#General">General</a>
          <a href="#FAQs">FAQs</a>
          <a href="#Contact Us">Contact Us</a>
        </div2>
      </nav>
    )
  }
}
export default CSSModules(Footer, css)

import React, { Component } from 'react'
import { withRouter, Link } from 'react-router-dom'
import CSSModules from 'react-css-modules'

import css from './index.css'
import connected from 'State/connect'

class LandingPage extends Component {
  render() {
    // Create a div with a class of container
<<<<<<< HEAD
    //  //Create a heading with the title of Challenges
    //  //Create an ordered list
    //    //Create a list item that is a:
    //      //Link with a "to" attribute that points to "/pyramid-challenge"
    return (
      <div styleName="container">
        <h1>Challenges</h1>
        <ol>
          <li><Link to="/challenges/pyramid">Pyramid Challenge</Link></li>
        </ol>
      </div>
=======
    //  //Create a header with the title of Challenges
    //  //Create an ordered list
    //    //Create a list item that is a:
    //      //Link with a "to" attribute that points to "/challenges/pyramid"

    return (
      <span>TODO complete this!!</span>
>>>>>>> fa8b7bc6759f07a68dc5f0088797b44d2bf2ce1d
    )
  }
}

export default withRouter(connected([], [])(CSSModules(LandingPage, css)))

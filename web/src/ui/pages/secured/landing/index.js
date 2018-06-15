import React, { Component } from 'react'
import { withRouter, Link } from 'react-router-dom'
import CSSModules from 'react-css-modules'

import css from './index.css'
import connected from 'State/connect'

class LandingPage extends Component {
  render() {
    // Create a div with a class of container
    //  //Create a header with the title of Challenges
    //  //Create an ordered list
    //    //Create a list item that is a:
    //      //Link with a "to" attribute that points to "/challenges/pyramid"

    return (
      <div styleName="container">
        <header>Challenges</header>
        <ul>
          <li>
            <Link to="/challenges/pyramid">Pyramid Challenge</Link>
          </li>
        </ul>
      </div>

    )
  }
}

export default withRouter(connected([], [])(CSSModules(LandingPage, css)))

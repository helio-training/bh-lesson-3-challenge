import React, { Component } from 'react'
import { withRouter, Link } from 'react-router-dom'
import CSSModules from 'react-css-modules'

import Mood from './mood'
import MoodFilter from './mood-filter'
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
      <div className="container">
        <h1>Challenges</h1>
        <ol>
          <li>This Link</li>
          <li>That Link</li>
          <Link to="/challenge/pyramid">To Do complete this!!</Link>
        </ol>
        <Mood />
        <MoodFilter />
      </div>
    )
  }
}

export default withRouter(connected([], [])(CSSModules(LandingPage, css)))

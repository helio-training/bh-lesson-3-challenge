import React, { Component } from 'react'
import { withRouter, Link } from 'react-router-dom'
import CSSModules from 'react-css-modules'
import Mood from './mood'
import MoodFilter from './mood-filter'

import css from './index.css'
import connected from 'State/connect'

class LandingPage extends Component {
  constructor(props) {
    super(props)
    this.state = {
      parentValue: '' || props.zipCode
    }
  }

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
        <Mood zipCode={this.state.parentValue} />
        <MoodFilter zipCode={this.state.parentValue} />
      </div>

    )
  }
}

export default withRouter(connected([], [])(CSSModules(LandingPage, css)))

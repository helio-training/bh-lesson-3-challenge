import React, { Component } from 'react'
import { withRouter, Link } from 'react-router-dom'
import CSSModules from 'react-css-modules'

import css from './index.css'
import connected from 'State/connect'
import Mood from './mood'
import MoodFilter from './mood-filter'

class LandingPage extends Component {
  constructor(props) {
    super(props)
    this.state = {
      parentValue: '84112'
    }
  }

  handleZipChange = (event) => {
    event.preventDefault()
    this.setState
  }
  render() {
    // Create a div with a class of container
    //  //Create a header with the title of Challenges
    //  //Create an ordered list
    //    //Create a list item that is a:
    //      //Link with a "to" attribute that points to "/challenges/pyramid"

    return (
      <div styleName="container">
        <hi>Challenges</hi>
        <ol>
          <li>
            <Link to="/.challenges/pyramid" > pyramid challenges </Link>
          </li>
        </ol>
        <Mood placeholder="zip" zipCode={this.state.parentValue} />
        <MoodFilter placeholder="zip" zipCode={this.state.parentValue} />
      </div>

    )
  }
}

export default withRouter(connected([], [])(CSSModules(LandingPage, css)))

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
      parentValue: '84112'
    }
  }

  handleZipChange = (event) => {
    event.preventDefault()
    this.setState({ parentValue: event.target.value })
  }
  render() {
    return (
      <div styleName="container">
        <h1>Challenges</h1>
        <ol>
          <li>
            <Link to="./challenges/pyramid/">Pyramid Challenge</Link>
          </li>
        </ol>
        <Mood />
        <MoodFilter />
      </div>
    )
  }
}

export default withRouter(connected([], [])(CSSModules(LandingPage, css)))

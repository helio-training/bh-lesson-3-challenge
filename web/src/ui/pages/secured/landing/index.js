import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'
import CSSModules from 'react-css-modules'

import css from './index.css'
import connected from 'State/connect'

class LandingPage extends Component {
  render() {
    // Create a div with a class of container
    return (
      <span>You are logged in</span>
    )
  }
}

export default withRouter(connected([], [])(CSSModules(LandingPage, css)))

import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'
import CSSModules from 'react-css-modules'
// import { Link } from 'react-router-dom'

import css from './index.css'
import connected from 'State/connect'

class LandingPage extends Component {
  render() {
    return (
      <span>TODO delete me</span>
    )
  }
}

export default withRouter(connected([], [])(CSSModules(LandingPage, css)))

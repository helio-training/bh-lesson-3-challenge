import React, { Component } from 'react'
import { withRouter, Link } from 'react-router-dom'
import CSSModules from 'react-css-modules'

import css from './index.css'
import connected from 'State/connect'

class LandingPage extends Component {
  render() {
    return (
      <div styleName="container">
        <div styleName="sub-container">
          <h1>Challenges</h1>
          <ol>
            <li>
              <Link to="/challenges/pyramid">Pyramid Challenges</Link>
            </li>
          </ol>
        </div>
      </div>
    )
  }
}

export default withRouter(connected([], [])(CSSModules(LandingPage, css)))

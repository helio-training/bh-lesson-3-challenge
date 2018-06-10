import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'
import CSSModules from 'react-css-modules'

// import * as process from './process'
import css from './index.css'
import connected from 'State/connect'

class BadRequest extends Component {
  // TODO make a div with a class of not-found
  render() {
    return (
      <div className="not-found">
        Not Found
      </div>
    )
  }
}

export default withRouter(connected([], [])(CSSModules(BadRequest, css)))

import React, { Component } from 'react'
import { withRouter, Link } from 'react-router-dom'
import CSSModules from 'react-css-modules'

import css from './index.css'
import connected from 'State/connect'

class PyramidChallengePage extends Component {
  constructor(props) {
    super(props)
    this.state = {
      numberOfLevels: '',
      pyramid: []
    }
  }

  handleInputChange = (event) => {
    event.preventDefault()
    this.setState({ numberOfLevels: event.target.value })
  }

  handleButtonClick = () => {
    this.setState({ pyramid: this.createPyramidArray() })
  }

  createPyramidArray = () => {
    if (this.state.numberOfLevels === '') return
    const expression = '-*'

    const p = []
    for (let i = 0; i < this.state.numberOfLevels; i++) {
      p.push(expression.repeat(i + 1).concat('-'))
    }
    return p
  }

  render() {
    console.log('Here I am in the render', this.state.numberOfLevels)
    return (
      <div styleName="container">
        <h1>Pyramid Challenge</h1>
        <div styleName="pyramidBox">
          <input type="number" value={this.state.numberOfLevels} onChange={this.handleInputChange} placeholder="Enter a number" />
          <button type="button" onClick={this.handleButtonClick}>Submit</button>
          <div>
            {this.state.pyramid.map((level, index) => {
              return <div key={index}>{level}</div>
            })}
          </div>
        </div>
        <Link to="/landing">Back</Link>
      </div>
    )
  }
}

export default withRouter(connected([], [])(CSSModules(PyramidChallengePage, css)))

import React, { Component } from 'react'
import CSSModules from 'react-css-modules'
// import PropTypes from 'prop-types'
import css from './index.css'

class MoodFilterComp extends Component {
  constructor(props) {
    super(props)
    this.state = {
      zipCode: ''
    }
  }

  handleZipCodeChange = (userEvent) => {
    userEvent.preventDefault()
    this.setState({ zipCode: userEvent.target.value })
  }

  render() {
    return (
      <div>
        im the mood Mood Filter
        <input
          type="text"
          value={this.state.zipCode}
          placeholder="enter a zip code"
          on change={this.handleZipCodeChange} />
      </div>
    )
  }
}
export default CSSModules(MoodFilterComp, css)

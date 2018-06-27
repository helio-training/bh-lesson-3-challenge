import React, { Component } from 'react'
// import CSSModules from 'react-css-modules'
// import PropTypes from 'prop-types'
// import css from './index.css'

class MoodComp extends Component {
  constructor(props) {
    super(props)
    this.state = ({ wackyValue: 'wackyValue' })
  }

  handleInputChange = (event) => {
    event.preventDefaults()
    this.setState({ wackyValue: event.target.value })
  }

  render() {
    return (
      <div>
        <input type="text"
          value={this.state.wackyValue}
          placeholder="entersomething"
          onChange={this.handleInputChange} />
      </div>
    )
  }
}

export default MoodComp

// import PropTypes from 'prop-type'
import React, { Component } from 'react'

class MoodFilterComp extends Component {
  constructor(props) {
    super(props)
    this.state = {
      wackyValue: ''
    }
  }

  handleInputChange = (event) => {
    console.log('HERE', this.state, event.target.value)
    event.preventDefault()
    this.setState({ wackyValue: event.target.value })
    // event.preventDefault()
    // this.setState({ wackyValue: event.target.value })
  }

  render() {
    return (
      <div>
        I'm the mood filter
        <input type="text" value={this.state.wackyValue} onChange={this.handleInputChange} />
      </div>
    )
  }
}

export default MoodFilterComp

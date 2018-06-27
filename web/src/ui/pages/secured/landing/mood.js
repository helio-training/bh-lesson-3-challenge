// import PropTypes from 'prop-type'
import React, { Component } from 'react'

const { stri}
class MoodComp extends Component {
  render() {
    return (
      <div>
        I'm the mood
        <input
          type="text"
          value={this.state.wackyValue}
          onChange={this.props.zipChange} />
      </div>
    )
  }
}

export default MoodComp

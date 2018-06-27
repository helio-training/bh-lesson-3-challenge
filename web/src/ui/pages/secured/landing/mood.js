import PropTypes from 'prop-types'
import React, { Component } from 'react'

const { string, func } = PropTypes

class MoodComp extends Component {
  static propTypes = {
    zipCode: string.isRequired,
    zipChange: func.isRequired
  }
  render() {
    return (
      <div>
        <input type="text"
          value={this.props.zipCode}
          placeholder="Enter a zip code"
          onChange={this.props.zipChange} />
      </div>
    )
  }
}

export default MoodComp

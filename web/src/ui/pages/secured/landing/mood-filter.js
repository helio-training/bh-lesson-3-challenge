import PropTypes from 'prop-types'
import React, { Component } from 'react'

const { string, func } = PropTypes

class MoodFilterComp extends Component {
  static propTypes = {
    zipCode: string.isRequired,
    zipChange2: func.isRequired
  }

  render() {
    return (
      <div>
        I'm the mood filter
        <input
          type="text"
          value={this.props.zipCode}
          placeholder="Enter a zip code"
          onChange={this.props.zipChange2} />
      </div>
    )
  }
}

export default MoodFilterComp

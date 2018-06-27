<<<<<<< HEAD
// import Proptypes from 'prop-types'
import React, { Component } from 'react'

class MoodComp extends Component {
  render() {
    return (
      <div>
        I'm the mood
=======
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
>>>>>>> origin/master
      </div>
    )
  }
}

<<<<<<< HEAD
export default MoodComp
=======
export default MoodFilterComp
>>>>>>> origin/master

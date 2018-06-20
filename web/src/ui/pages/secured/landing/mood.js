import React, { Component } from 'react'
import CSSModules from 'react-css-modules'
import PropTypes from 'prop-types'
import css from './index.css'

const { string } = PropTypes
class MoodComponent extends Component {
  static PropTypes = {
    selectedMood: string.isRequired
  }
  render() {
    return (
      <div>
          my mood is following {this.props.selectedMood}
      </div>

    )
  }
}

export default CSSModules(MoodComponent, css)

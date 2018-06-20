import PropTypes from 'prop-types'
import React, { Component } from 'react'
import CSSModules from 'react-css-modules'

import css from './index.css'

const { string } = PropTypes

let namesArray = ['dogs', 'dogs', 'cats', 'alienDogs', 'alienFishes']

class MoodComp extends Component {
  static propTypes = {
    selectedMood: string.isRequired
  }
  constructor(props) {
    super(props)

    // Set your default state
    this.state = {
      name: 'Bryce'
    }
  }

  render() {
    return (
      <div>
        this is the mood comp {this.props.selectedMood}
        <ol>
          {namesArray.filter((animalName) => {
            return animalName.length > 6
          }).map((animalNameLongerThan6, index) => {
            return <li key={index}>{animalNameLongerThan6}</li>
          })}
        </ol>
        {
          namesArray.reduce((acc, value, index) => {
            const punctuation = index === 0 ? '' : ','
            const results = `${acc}${punctuation} ${value}`
            return results
          }, 'Types of animals: ')
        }
      </div>
    )
  }
}

export default CSSModules(MoodComp, css)

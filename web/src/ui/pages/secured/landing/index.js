import React, { Component } from 'react'
import { Link, withRouter } from 'react-router-dom'
import CSSModules from 'react-css-modules'

import Mood from './mood'
import MoodFilter from './mood-filter'
import css from './index.css'
import connected from 'State/connect'
import Mood from './mood'
import Moodfilter from './mood-filter'

class LandingPage extends Component {
  constructor(props) {
    super(props)
    this.state = {
      parentValue: ''
    }
  }

  handleZipChange = (event) => {
    event.preventDefault()
    this.setState({ parentValue: event.target.value })
  }
  render() {
    // Create a div with a class of container
    //  //Create a header with the title of Challenges
    //  //Create an ordered list
    //    //Create a list item that is a:
    //      //Link with a "to" attribute that points to "/challenges/pyramid"

    return (
      <div styleName="container">
<<<<<<< HEAD
        <hi>Challenges</hi>
        <ol>
          <li>
            <Link to="/.challenges/pyramid" > pyramid challenges </Link>
          </li>
        </ol>
        <Mood />
        <Moodfilter />
=======
        <h1>Challenges</h1>
        <ol>
          <li>
            <Link to="/challenges/pyramid">Pyramid Challenge</Link>
          </li>
        </ol>
        <Mood zipCode={this.state.parentValue} zipChange={this.handleZipChange} />
        <MoodFilter zipCode={this.state.parentValue} zipChange2={this.handleZipChange} />
>>>>>>> 9a811d7cac4be0a17311cabac22f2f061bd669da
      </div>
    )
  }
}

export default withRouter(connected([], [])(CSSModules(LandingPage, css)))

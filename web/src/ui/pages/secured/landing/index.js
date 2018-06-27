import React, { Component } from 'react'
import { withRouter, Link } from 'react-router-dom'
import CSSModules from 'react-css-modules'
import Mood from './mood'
import MoodFilter from './mood-filter'
import css from './index.css'
import connected from 'State/connect'

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
        <h1>Challenges</h1>
        <ol>
          <li>
            <Link to="/challenges/pyramid">Pyramid Challenge</Link>
          </li>
        </ol>
        <Mood zipCode={'84094'}/>
        <MoodFilter zipCode={'84090'} />
      </div>
    )
  }
}

export default withRouter(connected([], [])(CSSModules(LandingPage, css)))

import React, { Component } from 'react'
import { withRouter, Link } from 'react-router-dom'
import CSSModules from 'react-css-modules'
<<<<<<< HEAD

=======
>>>>>>> Create login page and challenges page.
import css from './index.css'
import connected from 'State/connect'

class LandingPage extends Component {
  render() {
    // Create a div with a class of container
    //  //Create a header with the title of Challenges
    //  //Create an ordered list
    //    //Create a list item that is a:
    //      //Link with a "to" attribute that points to "/challenges/pyramid"

    return (
<<<<<<< HEAD
      <span>TODO complete this!!</span>
=======
      <div className="container">
        <h1>Challenges</h1>
        <ol>
          <li><Link to="/pyramid-challenge">Pyramid-Challenge</Link></li>
        </ol>
      </div>
>>>>>>> Create login page and challenges page.
    )
  }
}

export default withRouter(connected([], [])(CSSModules(LandingPage, css)))

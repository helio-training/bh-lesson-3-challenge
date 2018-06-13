import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'
import CSSModules from 'react-css-modules'
// import { Link } from 'react-router-dom'

import css from './index.css'
import connected from 'State/connect'

class PyramidChallenge extends Component {
  constructor(props) {
    super(props)
     this.stat = {
      numbOfLevels: ''
    }
}


handleInputChange = (event) => {
  console.log('this is me')
  this.setState({ numberOfLevels: event.target.value })
}
  render() {
    // Create a div with a class of container
    //  //Create a header with the title of Challenges
    //  //Create an ordered list
    //    //Create a list item that is a:
    //      //Link with a "to" attribute that points to "/pyramid-challenge"
   
    console.log ('here i am', this.state.numberOfLevel)
    return (
      <div styleName="container">
        <input type="number" value={this.state.numberOfLevels} onChange={this.handleInputChange} placeholder="numberOfLevels"/>
      </div>
    )
  }
}

export default withRouter(connected([], [])(CSSModules(PyramidChallenge, css)))

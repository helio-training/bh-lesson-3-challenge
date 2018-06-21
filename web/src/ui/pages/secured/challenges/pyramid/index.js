// #Create a react class
//  Go to the landing page and copy over all of the javascript/react
//  Change the name of the class to be PyramidChallengePage

// #Add JSX(React's version of HTML) to the render's return
//  Create a div wrapper for the page like we did for the login & landing
//    Create an input with a type of number
//    Add an onChange attribute and link it up to a function on the class (you will need to create this function)
//  Create a div to hold our answer (the pyramid)
//    inside this div we will output javascript (to do this we use {} braces to tell JSX we want to execute javascript)

// #Create the class functions to handle input change
// This will be similar to what I did for you on the login page
//  with the exception that we will need to use some new javascript functions
//  the functions that we will be using are array(we will cover this in class), array.map (this is basically a for loop over the array)
//  react key attribute
//  this function should return a div for each item in the array

// #Add styles as needed

// !!!!!The point of the page
//  I should be able to enter in a number in the input and click the submit button
//  This should then render a pyramid below the input and button that has the same number of levels as
//  given in the input.
import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'
import CSSModules from 'react-css-modules'

import css from './index.css'
import connected from '../../../../../state/connect'

class PyramidChallengePage extends Component {
  constructor(props) {
    super(props)
    this.state = {
      numberOfLevels: '',
      name: 'Ken'
    }
  }

  handleImputeChange = (event) => {
    event.preventDefault()
    const newStateObject = {
      numberOflevels: event.target.value
    }
    this.setState(newStateObject)
  }
  handleButtonClick =() => {
    console.log('Hey I was clicked')
  }
  createPyramidArray = () => {
    if (this.state.numberOfLevels === '') return

    const tempPyramid = []
    for (let i = 0; i < this.state.numberOflevels; i++) {
      tempPyramid.push('-*-')
    }

    return tempPyramid
  }

  render() {
    console.log('Here I am in the render', this.state.numberOfLevels)
    console.log('My pyramid looks like this;', this.createPyramidArray())
    return (
      <div styleName="container">
        <form>
          <input type="number" value={this.state.numberOfLevels} onChange={this.handleImputeChange} placeholder="Please enter number of levels" />
          <button type="button" onClick={this.handleButtonClick}>Submit</button>
        </form>
      </div>

    )
  }
}

export default withRouter(connected([], [])(CSSModules(PyramidChallengePage, css)))

// #Create a react class                                                    ***DONE***
//  Go to the landing page and copy over all of the javascript/react        ***DONE***
//  Change the name of the class to be PyramidChallengePage                 ***DONE***

// #Add JSX(React's version of HTML) to the render's return                 ***DONE***
//  Create a div wrapper for the page like we did for the login & landing   ***DONE***
//    Create an input with a type of number                                 ***DONE***
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
import connected from 'State/connect'

class PyramidChallengePage extends Component {
  constructor(props) {
    super(props)
    this.state = {
      numberOfLevels: '',
      pyramid: []
    }
  }
    handleInputChange = (event) => {
      this.setState({ numberOfLevels: event.target.value })
    }

    handleButtonClick = () => {
      this.setState({ pyramid: this.createPyramidArray() })
    }

    createPyramidArray = () => {
      if (this.state.numberOfLevels === '') return
      const expression = '-*'

      const tempPyramid = []
      for (let i = 0; i < this.state.numberOfLevels; i++) {
        tempPyramid.push(expression.repeat(i + 1).concat('-'))
      }

      return tempPyramid
    }

    render() {
      return (
        <div styleName="container">
          <form>
            <h2>Enter the number of steps in the field below.</h2>
            <input type="number" value={this.state.numberOfLevels} onChange={this.handleInputChange} placeholder="-*-" />
            <button type="button" onClick={this.handleButtonClick}>Submit</button>
            <div styleName="pyramid-out">
              {this.state.pyramid.map((level, index) => {
                return <div key={index}>{level}</div>
              })}
            </div>
          </form>
        </div>
      )
    }
}

export default withRouter(connected([], [])(CSSModules(PyramidChallengePage, css)))

import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'
import CSSModules from 'react-css-modules'
// import { Link } from 'react-router-dom'

import css from './index.css'
import connected from 'State/connect'

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

class PyramidChallengePage extends Component {
  render() {
    return (
      <span>Pyramid challenge</span>
    )
  }
}

export default withRouter(connected([], [])(CSSModules(PyramidChallengePage, css)))

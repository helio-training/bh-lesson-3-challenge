import React, { Component } from 'react'
// import { withRouter } from 'react-router-dom'
// import CSSModules from 'react-css-modules'
// import { Link } from 'react-router-dom'

// import css from './index.css'
// import connected from 'State/connect'

class MoodComp extends Component {
  constructor(props) {
    super(props)
    this.state = {
      zipCode: ''
    }
  }

  handleZipCodeChange = (userEvent) => {
    userEvent.preventDefault()
    this.setState({ zipCode: userEvent.target.value })
  }

  render() {
    return (
      <div>
        <input type="text" value={this.state.zipCode} placeholder="Enter a zip code" onChange={this.handleZipCodeChange} />
      </div>
    )
  }
}

export default MoodComp

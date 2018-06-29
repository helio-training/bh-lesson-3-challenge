import React, { Component } from 'react'

class MoodFilter extends Component {
  constructor(props) {
    super(props)
    this.state = {
      zipCode: '' || props.zipCode
    }
    console.log('Mood Comp Props', this.state, props)
  }

  handleZipCodeChange = (userEvent) => {
    userEvent.preventDefault()
    this.setState({ zipCode: userEvent.target.value })
  }

  render() {
    return (
      <div>
        I'm the mood filter
        <input type="text" value={this.state.zipCode} placeholder="enter something" onChange={this.handleZipCodeChange} />
      </div>
    )
  }
}

export default MoodFilter

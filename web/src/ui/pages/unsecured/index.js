import React, { Component } from 'react'
import CSSModules from 'react-css-modules'

import css from './index.css'

class PageTemplate extends Component {
  render() {
    return (
      <div styleName="page">
        <div styleName="page-content">
          {this.props.children}
        </div>
      </div>
    )
  }
}

export default CSSModules(PageTemplate, css)

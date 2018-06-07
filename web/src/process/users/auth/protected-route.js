import React from 'react'
import { Redirect } from 'react-router-dom'

import connected from 'State/connect'
import { selector as UsersState } from 'Process/users/reducer'

const protectedRoute = WrappedComponent => {
  class PrivateRoute extends React.Component {
    render() {
      const { active } = this.props.UserState
      if (!active)
        return <Redirect to={{ pathname: '/', state: { from: this.props.location } }} />

      return <WrappedComponent {...this.props} />
    }
  }

  return connected([UsersState], [])(PrivateRoute)
}

export default protectedRoute

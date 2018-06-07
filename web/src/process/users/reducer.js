import TYPES from './types'
// import merge from 'lodash/merge'

export const initialState = {
  active: null,
  entities: {}
}

const loginUser = (state, { users, id }) => ({
  ...state,
  active: id,
  entities: Object.assign({}, users)
})

const handlers = {
  [TYPES.FETCH_USER_TOKEN_SUCCESS]: loginUser
}

export default function(state = {}, action = {}) {
  return handlers[action.type]
    ? handlers[action.type](state, action)
    : state
}

export const selector = {
  name: 'UserState',
  select(state) {
    return state.users
  }
}

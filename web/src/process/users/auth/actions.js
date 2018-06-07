import { put, takeLatest } from 'redux-saga/effects'

import TYPES from '../types'
export const name = 'userAuthActions'

export function fetch(email, password) {
  return {
    type: TYPES.FETCH_USER_TOKEN_REQUEST,
    email,
    password
  }
}

export function* executeFetchToken({ email, password }) {
  try {
    if (password !== 123 && email !== 'bryce@helio.com') {
      throw Error
    }
    yield put(fetchSuccess({ id: '123', users: { '123': { name: 'Bryce' } } }))
  } catch (res) {
    // eslint-disable-next-line noconsole
    console.error('Request failed with', res.error)
  }
}

export function fetchSuccess({ users, id }) {
  return {
    type: TYPES.FETCH_USER_TOKEN_SUCCESS,
    users,
    id
  }
}

const sagas = [
  takeLatest(TYPES.FETCH_USER_TOKEN_REQUEST, executeFetchToken)
]

export default sagas

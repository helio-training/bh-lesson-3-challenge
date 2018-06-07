import AuthSagas from 'Process/users/auth/actions'
import { all } from 'redux-saga/effects'

export default function* root() {
  let sagas = []
    .concat(AuthSagas)
  yield all(sagas)
}

import { takeLatest, call, put } from 'redux-saga/effects';
import { getMinesApi } from './api';

export function* watcherSaga() {
  yield takeLatest('GET_MINES', getMines);
  yield takeLatest('CLEAR_MINES', clearMines);
}


function* getMines({ lv }) {
  const response = yield call(getMinesApi, lv);
  if  (response.data.data && response.data.msg === 'success'){
    yield put({ type: 'GET_MINES_SUCCESS', data : response.data.data });
  }  else{
    yield put({ type: 'GET_MINES_FAIL', error : response.data.msg });
  }
}

function* clearMines() {
  const mineList = [];
    yield put({ type: 'CLEAR_MINES_SUCCESS', data : mineList });
}
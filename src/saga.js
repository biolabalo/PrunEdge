import {delay} from 'redux-saga/effects'
import { takeLatest, put } from "redux-saga/effects";

function*  fetchDataAsync() {
  yield delay(3000);
  yield put({ type: "FETCH_DATA_ASYNC" });
}

export function* fetchData() {
  yield takeLatest("FETCH_DATA", fetchDataAsync);
}
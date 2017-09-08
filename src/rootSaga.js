import { all, takeEvery } from 'redux-saga/effects';
import { FETCH_WEATHER_REQUEST } from './Components/Weather/actions';
import fetchWeather from './Components/Weather/saga';

function* rootSaga() {
  yield all([
    takeEvery(FETCH_WEATHER_REQUEST, fetchWeather),
  ]);
}

export default rootSaga;

import { put, call } from 'redux-saga/effects';
import fetchWeatherApi from './api';
import transformWeatherData from './tansformers';
import {
  fetchWeatherSuccess,
  fetchWeatherFailure,
} from './actions';

function* fetchWeather(action) {
  try {
    const { location } = action.payload;
    const response = yield call(fetchWeatherApi, location);
    if (response.ok) {
      const json = yield response.json();
      const data = yield call(transformWeatherData, json);
      yield put(fetchWeatherSuccess(data));
    } else {
      yield put(fetchWeatherFailure(response.statusText));
    }
  } catch (err) {
    yield put(fetchWeatherFailure(err));
  }
}

export default fetchWeather;

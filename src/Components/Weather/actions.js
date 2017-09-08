import fetchWeatherFromApi from './api';
import transformWeatherData from './tansformers';

export const FETCH_WEATHER_REQUEST = 'FETCH_WEATHER_REQUEST';
export const FETCH_WEATHER_SUCCESS = 'FETCH_WEATHER_SUCCESS';
export const FETCH_WEATHER_FAILURE = 'FETCH_WEATHER_FAILURE';

export const fetchWeatherRequest = location => ({
  type: FETCH_WEATHER_REQUEST,
  payload: { location },
});

export const fetchWeatherSuccess = data => ({
  type: FETCH_WEATHER_SUCCESS,
  payload: { data },
});

export const fetchWeatherFailure = error => ({
  type: FETCH_WEATHER_FAILURE,
  payload: { error },
});

export const fetchWeather = location => (dispatch) => {
  // Dispatch the request action
  dispatch(fetchWeatherRequest(location));

  // Fetch Weather
  fetchWeatherFromApi(location)
    .then((response) => {
      if (response.ok) {
        return response.json();
      }
      throw response;
    })
    .then((json) => {
      const data = transformWeatherData(json);
      dispatch(fetchWeatherSuccess(data));
    })
    .catch((err) => {
      dispatch(fetchWeatherFailure(err));
    });
};

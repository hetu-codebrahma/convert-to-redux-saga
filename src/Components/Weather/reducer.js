import {
  FETCH_WEATHER_REQUEST,
  FETCH_WEATHER_SUCCESS,
  FETCH_WEATHER_FAILURE,
} from './actions';

const initialState = {
  loading: false,
  location: 'Bengaluru',
  data: null,
  error: null,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case FETCH_WEATHER_REQUEST:
      return Object.assign({}, state, {
        loading: true,
        location: action.payload.location,
        error: null,
      });

    case FETCH_WEATHER_SUCCESS:
      return Object.assign({}, state, {
        loading: false,
        data: action.payload.data,
      });

    case FETCH_WEATHER_FAILURE:
      return Object.assign({}, state, {
        loading: false,
        erorr: action.payload.error,
      });
    default:
      return state;
  }
};

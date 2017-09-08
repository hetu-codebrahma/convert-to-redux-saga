import { combineReducers } from 'redux';
import weatherReducer from './Components/Weather/reducer';

export default combineReducers({
  weather: weatherReducer,
});

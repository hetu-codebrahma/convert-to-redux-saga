import { connect } from 'react-redux';
import Weather from './view';
import { fetchWeatherRequest } from './actions';

const mapStateToProps = state => ({
  weather: state.weather,
});

const mapDispatchToProps = dispatch => ({
  fetchWeather: location => dispatch(fetchWeatherRequest(location)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Weather);

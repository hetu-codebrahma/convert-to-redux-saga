import { connect } from 'react-redux';
import Weather from './view';
import { fetchWeather } from './actions';

const mapStateToProps = state => ({
  weather: state.weather,
});

const mapDispatchToProps = dispatch => ({
  fetchWeather: location => dispatch(fetchWeather(location)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Weather);

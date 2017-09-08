import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './styles.css';

class WeatherView extends Component {
  handleSearchPress() {
    const location = this.props.weather.location;
  }

  render() {
    return (
      <div className="weatherContainer">
        <div className="inputField">
          <span className="inputLabel">
            Check weather for:
          </span>
          <input
            placeholder="Input city name"
            className="weatherInput"
          />
          <button
            onClick={() => this.handleSearchPress()}
            className="searchButton"
          >
            Search
          </button>
        </div>
        <p className="weatherHeading">
          Weather in { this.props.weather.location }
        </p>
      </div>
    );
  }
}

WeatherView.propTypes = {
  weather: PropTypes.shape({
    location: PropTypes.string,
    loading: PropTypes.bool,
    data: PropTypes.object,
  }).isRequired,
};

export default WeatherView;

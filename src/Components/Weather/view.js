import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './styles.css';

class WeatherView extends Component {
  constructor(props) {
    super(props);

    this.state = {
      location: '',
      error: null,
    };
  }

  handleSearchPress() {
    const { location } = this.state;
    if (location.length > 3) {
      this.props.fetchWeather(this.state.location);
      this.setState({ location: '' });
    } else {
      this.setState({ error: 'City name should be more than 3 chars' });
    }
  }

  handleInputChange(newInput) {
    this.setState({ location: newInput, error: null });
  }

  render() {
    const { weather } = this.props;
    return (
      <div className="weatherContainer">
        <div className="inputField">
          <span className="inputLabel">Check weather for: </span>
          <input
            placeholder="Input city name"
            className="weatherInput"
            onChange={e => this.handleInputChange(e.target.value)}
            value={this.state.location}
          />
          <button
            onClick={() => this.handleSearchPress()}
            className="searchButton"
          >
            Search
          </button>
          { this.state.error && <p className="error">{this.state.error}</p> }
          { this.props.weather.error && <p className="error">Some error occured</p>}
        </div>
        {
          this.props.weather.loading ? (
            <p>Loading.....</p>
          ) : (
            <div className="weatherDataContainer">
              {this.props.weather.data && (
                <div>
                  <p className="weatherHeading">
                    Weather in { weather.data.name }
                  </p>
                  <div className="weatherData">
                    <div className="weatherSumary">
                      <img
                        src={this.props.weather.data.icon}
                        alt="weather icon"
                      />
                      {this.props.weather.data.description}
                    </div>
                    <div>
                      Temp: {this.props.weather.data.temp}&deg;C
                      <br />
                      High: {this.props.weather.data.tempHigh}&deg;C
                      <br />
                      Low: {this.props.weather.data.tempLow}&deg;C
                      <br />
                      Humidity: {this.props.weather.data.humidity}%
                    </div>
                  </div>
                </div>
              )}
            </div>
          )
        }
      </div>
    );
  }
}

WeatherView.propTypes = {
  weather: PropTypes.shape({
    location: PropTypes.string,
    loading: PropTypes.bool,
    data: PropTypes.shape({
      name: PropTypes.string,
      temp: PropTypes.number,
      tempHigh: PropTypes.number,
      tempLow: PropTypes.number,
      humidity: PropTypes.number,
      wind: PropTypes.object,
      icon: PropTypes.string,
      description: PropTypes.string,
      coordinates: PropTypes.object,
    }),
    error: PropTypes.object,
  }).isRequired,
  fetchWeather: PropTypes.func.isRequired,
};

export default WeatherView;

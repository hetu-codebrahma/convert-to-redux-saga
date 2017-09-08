const kelvinToCelsius = temp => Math.round(temp - 273.15);

const transformWeatherData = data => ({
  name: data.name,
  temp: kelvinToCelsius(data.main.temp),
  tempHigh: kelvinToCelsius(data.main.temp_max),
  tempLow: kelvinToCelsius(data.main.temp_min),
  humidity: data.main.humidity,
  wind: data.wind,
  icon: `http://openweathermap.org/img/w/${data.weather[0].icon}.png`,
  description: data.weather[0].description,
  coordinates: data.coord,
});

export default transformWeatherData;

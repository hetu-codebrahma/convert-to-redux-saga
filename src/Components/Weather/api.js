/* global fetch */
import { OpenWeatherApiKey } from '../../secrets';

const BASE_URL = 'https://api.openweathermap.org/data/2.5/weather?q=';

const fetchWeather = location => fetch(`${BASE_URL}${location}&appid=${OpenWeatherApiKey}`);

export default fetchWeather;

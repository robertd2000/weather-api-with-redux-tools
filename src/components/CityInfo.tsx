import { useSelector } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { RootApp } from '../types';
import { CityHeader } from './CityInfo/CityHeader';
import { CityWeather } from './CityInfo/CityWeather';
import { CityWeatherData } from './CityInfo/CityWeatherData';
import { Forecast } from './Forecast';

const CityInfoComponent = (props: any) => {
  let cityId = props.match.params.cityId;

  const city = useSelector((state: RootApp) => {
    return state.reducer.searchedCities[cityId];
  });

  const {
    name,
    country,
    date,
    temp,
    highestTemp,
    lowestTemp,
    description,
    wind,
    humidity,
    iconCode,
    sunrise,
    sunset,
    forecast,
  } = city;

  const iconUrl = `https://openweathermap.org/img/w/${iconCode}.png`;

  return (
    <div className="city">
      <div className="city-wrap">
        <CityHeader name={name} country={country} date={date} />
        <CityWeather iconUrl={iconUrl} temp={temp} description={description} />
        <CityWeatherData
          highestTemp={highestTemp}
          lowestTemp={lowestTemp}
          wind={wind}
          sunrise={sunrise}
          sunset={sunset}
          humidity={humidity}
        />
      </div>
      <Forecast forecast={forecast} />
    </div>
  );
};

export const CityInfo = withRouter(CityInfoComponent);

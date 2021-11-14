import { currentWeatherType } from '../types'
import { CityHeader } from './CityInfo/CityHeader'
import { CityWeather } from './CityInfo/CityWeather'
import { CityWeatherData } from './CityInfo/CityWeatherData'
import { Forecast } from './Forecast'
type CityItemType = {
  cityData: currentWeatherType
}
export const CityInfo: React.FC<CityItemType> = ({ cityData }) => {
  if (cityData === undefined) {
    return <div>No data</div>
  }

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
  } = cityData

  const iconUrl = `https://openweathermap.org/img/w/${iconCode}.png`

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
  )
}

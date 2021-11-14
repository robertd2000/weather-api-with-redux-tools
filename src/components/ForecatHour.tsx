import { ForecastItemType } from '../types'

type ForecastHourType = {
  forecastData: ForecastItemType
}

export const ForecastHour: React.FC<ForecastHourType> = ({ forecastData }) => {
  const temp = Math.floor(forecastData.main.temp * 1) / 1,
    description = forecastData.weather[0].description,
    icon = forecastData.weather[0].icon,
    month = forecastData.dt_txt.slice(5, 7),
    day = forecastData.dt_txt.slice(8, 10),
    hour = forecastData.dt_txt.slice(11, 13)

  const iconUrl = `https://openweathermap.org/img/w/${icon}.png`

  return (
    <div className="forecast-wrapper">
      <span>
        {day}.{month}
      </span>
      <span>{hour}.00</span>
      <img src={iconUrl} alt="icon" />
      <span>{description}</span>
      <h4>{temp}°</h4>
    </div>
  )
}

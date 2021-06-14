import { ForecastItemType } from '../types';
import s from './Forecast.module.css';

type ForecastHourType = {
  forecastData: ForecastItemType;
};

export const ForecastHour: React.FC<ForecastHourType> = ({ forecastData }) => {
  const temp = Math.floor(forecastData.main.temp * 1) / 1,
    pressure = forecastData.main.pressure,
    description = forecastData.weather[0].description,
    icon = forecastData.weather[0].icon,
    month = forecastData.dt_txt.slice(5, 7),
    day = forecastData.dt_txt.slice(8, 10),
    hour = forecastData.dt_txt.slice(11, 13);
  const iconUrl = `https://openweathermap.org/img/w/${icon}.png`;

  return (
    <div>
      <div
        className={'card text-white mb-3 ' + s.cardItem}
        style={{ width: 18 + 'rem' }}
      >
        <div className="card-body mb-3">
          <h5 className="card-title">
            Дата - {day}.{month}
          </h5>
          <img className={s.cardImg} src={iconUrl} alt={temp + ''} />

          {/* <p class="card-text">
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </p> */}
        </div>
        <ul className={'list-group list-group-flush ' + s.listItem}>
          <li className="list-group-item">{hour}:00</li>
          <li className="list-group-item">
            {description[0].toUpperCase() + description.slice(1)}
          </li>
          <li className="list-group-item">Температура: {temp} °C</li>
          <li className="list-group-item">Давление: {pressure} мм. рт. ст.</li>
        </ul>
      </div>
    </div>
  );
};

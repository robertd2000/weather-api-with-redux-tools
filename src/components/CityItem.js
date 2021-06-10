import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { deleteCity } from '../redux/reducer';
import { Forecast } from './Forecast';

export const CityItem = ({
  name,
  country,
  date,
  temp,
  highestTemp,
  lowestTemp,
  description,
  wind,
  humidity,
  pressure,
  icon,
  sunrise,
  sunset,
  clouds,
  forecast,
  id,
}) => {
  const [isModalOpen, showModal] = useState(false);

  const dispatch = useDispatch();
  const onDelete = (id) => {
    dispatch(deleteCity(id));
  };
  const onCloseModal = () => {
    return showModal(false);
  };
  const iconUrl = `https://openweathermap.org/img/w/${icon}.png`;
  return (
    <>
      <Forecast
        isModalOpen={isModalOpen}
        forecast={forecast}
        name={name}
        onCloseModal={onCloseModal}
      />
      <div className="col-sm-6 shadow-lg p-3 mb-5 bg-white rounded">
        <div
          className="card"
          style={{ marginBottom: '15px', marginTop: '15px' }}
        >
          <h5 className="card-header">
            {name} {country}
            <button
              onClick={() => onDelete(id)}
              style={{ width: '40px' }}
              type="button"
              className="close float-right"
              aria-label="Close"
            >
              <span aria-hidden="true">&times;</span>
            </button>
          </h5>

          <div className="card-body">
            <img src={iconUrl} alt={description} />
            <blockquote className="blockquote mb-0">
              <p> Температура: {temp} °C</p>
              <footer className="blockquote-footer">
                {description[0].toUpperCase() + description.slice(1)}
              </footer>

              <footer className="blockquote-footer">Дата: {date}</footer>

              <footer className="blockquote-footer">
                Максимальная температура: {highestTemp} °C
              </footer>
              <footer className="blockquote-footer">
                Минимальная температура: {lowestTemp} °C
              </footer>

              <footer className="blockquote-footer">
                Cкорость ветра - {wind} м/с,
              </footer>
              <footer className="blockquote-footer">
                Влажность - {humidity} %
              </footer>
              <footer className="blockquote-footer">
                Давление - {pressure} мм рт.
              </footer>
              <footer className="blockquote-footer">
                Облачность - {clouds}.
              </footer>

              <footer className="blockquote-footer">
                Восход солнца - {sunrise}.
              </footer>
              <footer className="blockquote-footer">
                Закат солнца - {sunset}.
              </footer>
            </blockquote>
            <hr />
            <button
              className="btn btn-secondary"
              onClick={() => showModal(true)}
            >
              Открыть прогноз
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

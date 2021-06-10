import { ForecastHour } from './ForecatHour';
import s from './Forecast.module.css';

export const Forecast = ({ forecast, isModalOpen, name, onCloseModal }) => {
  let isOpen = isModalOpen ? s.show : '';
  const forecasts = forecast.map((item) => {
    return (
      <ForecastHour
        key={item.dt}
        temp={Math.floor(item.main.temp * 1) / 1}
        pressure={item.main.pressure}
        description={item.weather[0].description}
        icon={item.weather[0].icon}
        month={item.dt_txt.slice(5, 7)}
        day={item.dt_txt.slice(8, 10)}
        hour={item.dt_txt.slice(11, 13) * 1}
      />
    );
  });

  return (
    <div className={'modal ' + isOpen} onClick={() => onCloseModal()}>
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header">
            Прогноз погоды в городе {name}
            <button
              className="btn btn-secondary"
              onClick={() => onCloseModal()}
            >
              X
            </button>
          </div>
          <div className="modal-body">
            <div className="row shadow-lg p-3 mb-5 rounded">{forecasts}</div>{' '}
          </div>
        </div>
      </div>
    </div>
  );
};

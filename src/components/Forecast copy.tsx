import { ForecastHour } from './ForecatHour';
import s from './Forecast.module.css';
import { currentWeatherType, ForecastItemType } from '../types';

type ForecastType = {
  forecast: any;
  isModalOpen: boolean;
  name: string;
  onCloseModal: () => void;
};

export const Forecast: React.FC<ForecastType> = ({
  forecast,
  isModalOpen,
  name,
  onCloseModal,
}) => {
  let isOpen = isModalOpen ? s.show : '';
  const forecasts = forecast.map((item: ForecastItemType) => {
    return <ForecastHour key={item.dt} forecastData={item} />;
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

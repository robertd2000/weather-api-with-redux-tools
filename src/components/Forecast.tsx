import { ForecastHour } from './ForecatHour';
import { ForecastItemType } from '../types';

type ForecastType = {
  forecast: any;
};

export const Forecast: React.FC<ForecastType> = ({ forecast }) => {
  const forecasts = forecast.map((item: ForecastItemType) => {
    return <ForecastHour key={item.dt} forecastData={item} />;
  });

  return <div className="forecasts">{forecasts}</div>;
};

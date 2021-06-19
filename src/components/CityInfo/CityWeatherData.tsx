import { CityWeatherCard } from './CityWeatherCard';

type CityObj = {
  highestTemp: number;
  lowestTemp: number;
  wind: number;
  sunrise: string;
  sunset: string;
  humidity: number;
};

export const CityWeatherData: React.FC<CityObj> = ({
  highestTemp,
  lowestTemp,
  wind,
  sunrise,
  sunset,
  humidity,
}) => {
  return (
    <div className="city-weather-data">
      <CityWeatherCard data={highestTemp + '°'} text={'Максимальная'} />
      <CityWeatherCard data={lowestTemp + '°'} text={'Минимальная'} />
      <CityWeatherCard data={wind + ' миль/ч'} text={'Bетeр'} />
      <CityWeatherCard data={humidity + '%'} text={'Влажность'} />
      <CityWeatherCard data={sunrise} text={'Восход'} />
      <CityWeatherCard data={sunset} text={'Закат'} />
    </div>
  );
};

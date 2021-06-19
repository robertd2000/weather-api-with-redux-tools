type CityObj = {
  data: any;
  text: string;
};

export const CityWeatherCard: React.FC<CityObj> = ({ data, text }) => {
  return (
    <div className="city-weather-data-info">
      <h4>{data}</h4>
      <span>{text}</span>
    </div>
  );
};

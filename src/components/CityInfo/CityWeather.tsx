type CityObj = {
  iconUrl: string;
  temp: number;
  description: string;
};

export const CityWeather: React.FC<CityObj> = ({
  iconUrl,
  temp,
  description,
}) => {
  return (
    <div className="city-weather-wrapper">
      <div className="city-icon">
        <img src={iconUrl} alt="img" />
      </div>
      <div className="city-weather-temp">
        <h3>{temp}°</h3>
        <h4>{description}</h4>
      </div>
    </div>
  );
};

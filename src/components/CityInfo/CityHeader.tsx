type CityObj = {
  name: string;
  date: string;
  country: string;
};

export const CityHeader: React.FC<CityObj> = ({ name, country, date }) => {
  return (
    <div className="city-info">
      <h2>
        {name} {country}
      </h2>
      <h4>{date}</h4>
    </div>
  );
};

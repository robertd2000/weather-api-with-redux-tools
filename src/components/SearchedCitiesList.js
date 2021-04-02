import { useSelector } from 'react-redux';
import { CityItem } from './CityItem';
import Loader from '../utils/Loader';

export const SearchedList = () => {
  const list = useSelector((state) => state.reducer.searchedCities);
  const loader = useSelector((state) => state.reducer.loading);

  if (loader) {
    return <Loader />;
  }

  if (!list || list.lenght === 0) {
    return <h2>No data</h2>;
  }
  return (
    <div className="container">
      {list.map((i) => {
        return (
          <CityItem
            name={i.name}
            description={i.description}
            temp={i.temp}
            wind={i.wind}
            humidity={i.humidity}
            pressure={i.pressure}
            key={Math.random() * 100}
          />
        );
      })}
    </div>
  );
};

import { useSelector } from 'react-redux';
import { CityItem } from './CityItem';
import Loader from '../utils/Loader';
import { currentWeatherType, RootApp } from '../types';

export const SearchedList = () => {
  const list: currentWeatherType[] = useSelector((state: RootApp) =>
    Object.values(state.reducer.searchedCities)
  );
  const loader = useSelector((state: RootApp) => state.reducer.loading);

  if (loader) {
    return <Loader />;
  }

  if (!list || list.length === 0) {
    return <h2>No data</h2>;
  }
  return (
    <div className="container">
      <div className="row p-3 mb-5 rounded">
        {list.reverse().map((i) => {
          return <CityItem cityData={i} key={Math.random() * 100} />;
        })}
      </div>
    </div>
  );
};

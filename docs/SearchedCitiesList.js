import { useSelector } from 'react-redux';
import { CityItem } from './CityItem';
import Loader from '../utils/Loader';

export const SearchedList = () => {
  const list = useSelector((state) =>
    Object.values(state.reducer.searchedCities)
  );
  const loader = useSelector((state) => state.reducer.loading);

  if (loader) {
    return <Loader />;
  }

  if (!list || list.lenght === 0) {
    return <h2>No data</h2>;
  }
  return (
    <div className="container">
      <div className="row p-3 mb-5 rounded">
        {list.reverse().map((i) => {
          return (
            <CityItem
              name={i.name}
              country={i.country}
              date={i.date}
              description={i.description}
              temp={i.temp}
              highestTemp={i.highestTemp}
              lowestTemp={i.lowestTemp}
              wind={i.wind}
              humidity={i.humidity}
              pressure={i.pressure}
              icon={i.iconCode}
              clouds={i.clouds}
              sunrise={i.sunrise}
              sunset={i.sunset}
              id={i.id}
              forecast={i.forecast}
              key={Math.random() * 100}
            />
          );
        })}
      </div>
    </div>
  );
};

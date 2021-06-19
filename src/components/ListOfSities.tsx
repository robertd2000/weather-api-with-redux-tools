import { Header } from './Header';
import { SearchedList } from './SearchedCitiesList';

export const ListOfCities = () => {
  return (
    <div className="main-content">
      <Header />
      <SearchedList />
    </div>
  );
};

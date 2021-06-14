import './App.css';
import { useSelector } from 'react-redux';
import { Header } from './components/Header';
import { SearchedList } from './components/SearchedCitiesList';
import { InitialStateType } from './redux/reducer';

// type storeType = {
//   reducer: any;
// };

function App() {
  const data = useSelector((state) => state.reducer.currentWeather);

  const { name } = data;

  return (
    <>
      <div className="container">
        <h3 className="App">Hello, {name}</h3>
        <Header />
        <SearchedList />
      </div>
    </>
  );
}

export default App;

import logo from './logo.svg';
import './App.css';
import { useDispatch, useSelector } from 'react-redux';
import { getWeatherThunk } from './redux/reducer';
import { Header } from './components/Header';
import { SearchedList } from './components/SearchedCitiesList';

function App() {
  const data = useSelector((state) => state.reducer.currentWeather);

  const { name, temp } = data;
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

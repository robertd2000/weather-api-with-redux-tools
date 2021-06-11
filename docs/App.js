import './App.css';
import { useSelector } from 'react-redux';
import { Header } from './components/Header';
import { SearchedList } from './components/SearchedCitiesList';

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

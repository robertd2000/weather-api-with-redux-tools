import './App.css';
import { Link, Route } from 'react-router-dom';
import { CityInfo } from './components/CityInfo';
import { ListOfCities } from './components/ListOfSities';

const App = (props: any) => {
  return (
    <>
      <div className="container">
        <Link to="/" className="mainPageLink">
          <h4>WEATHER APP</h4>
        </Link>
        <Route exact path="/" render={() => <ListOfCities />} />
        <Route
          exact
          path="/weather-api-with-redux-tools"
          render={() => <ListOfCities />}
        />
        <Route path="/city/:cityId?" render={() => <CityInfo {...props} />} />
      </div>
    </>
  );
};

export default App;

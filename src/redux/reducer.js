import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import Service from '../service/service';

const initialState = {
  currentWeather: {
    name: 'Chegem',
    description: null,
    temp: 10,
    wind: 0,
    humidity: 0,
    pressure: 0,
    icon: null,
    iconCode: '',
    id: null,
  },
  searchedCities: window.localStorage.getItem('listOfCities')
    ? JSON.parse(window.localStorage.getItem('listOfCities'))
    : {},
  loading: false,
  alert: false,
  error: '',
};

export const getWeatherThunk = createAsyncThunk(
  'weather/getWeatherThunk',
  async (id) => {
    const response = Service.getWeatherData(id);
    return response;
  }
);

const weatherSlice = createSlice({
  name: 'weather',
  initialState,
  reducers: {
    getWeather(state, action) {
      state.currentWeather.name = action.payload.name;
      state.currentWeather.temp = action.payload.temp;
    },
    deleteCity(state, action) {
      delete state.searchedCities[action.payload];
      window.localStorage.setItem(
        'listOfCities',
        JSON.stringify(state.searchedCities)
      );
      console.log(state.searchedCities);
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getWeatherThunk.pending, (state, action) => {
        state.loading = true;
      })
      .addCase(getWeatherThunk.fulfilled, (state, action) => {
        if (action.payload.cod === '400') {
          state.loading = false;
          state.alert = true;
          state.error =
            'Пустой ввод. Пожалуйста введите название города для поиска.';

          return state;
        }

        if (action.payload.cod === '404') {
          state.loading = false;
          state.alert = true;
          state.error = 'Город не найден';

          return state;
        }

        if (action.payload.cod !== '400') {
          state.currentWeather = {
            ...state.currentWeather,
            name: action.payload.name,
            temp: action.payload.main.temp,
            wind: action.payload.wind.speed,
            description: action.payload.weather[0].description,
            humidity: action.payload.main.humidity,
            pressure: action.payload.main.pressure,
            iconCode: action.payload.weather[0].icon,
            id: action.payload.id,
          };
          // const temp = Math.floor(action.payload.main.temp - 273);
          // const name = action.payload.name;
          // const weather = action.payload.weather[0].description;
          // const wind = action.payload.wind.speed;
          // const humidity = action.payload.main.humidity;
          // const pressure = action.payload.main.pressure;
          // state.currentWeather['name'] = name;
          // state.currentWeather['temp'] = temp;
          // state.currentWeather['description'] = weather;
          // state.currentWeather['wind'] = wind;
          // state.currentWeather['humidity'] = humidity;
          // state.currentWeather['pressure'] = pressure;

          // state.searchedCities.unshift(state.currentWeather);
          state.searchedCities[action.payload.id] = state.currentWeather;

          state.alert = false;

          localStorage.setItem(
            'listOfCities',
            JSON.stringify(state.searchedCities)
          );
        }
        state.loading = false;
      });
  },
});

export const { getWeather, deleteCity } = weatherSlice.actions;
export default weatherSlice.reducer;

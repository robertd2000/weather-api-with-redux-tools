export type InitialStateType = {
  currentWeather: currentWeatherType;
  searchedCities: any;
  loading: boolean;
  alert: boolean;
  error: string;
};

export type ForecastItemType = {
  dt: number;
  main: {
    temp: number;
    pressure: number;
  };
  weather: Array<{
    description: string;
    icon: string;
  }>;
  dt_txt: string;
};

export type currentWeatherType = {
  name: string;
  description: string;
  temp: number;
  wind: number;
  humidity: number;
  pressure: number;
  icon?: any;
  iconCode?: string;
  id: null | number;
  country: string;
  highestTemp: number;
  lowestTemp: number;

  clouds: number;
  sunrise: string;
  sunset: string;
  date: string;
  forecast: Array<object>;
};

export type RootApp = {
  reducer: InitialStateType;
};

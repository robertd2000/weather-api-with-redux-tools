import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import Service from '../service/service'
import { InitialStateType } from '../types'

const initialState = {
  currentWeather: {
    name: 'Chegem',
    description: '',
    temp: 10,
    wind: 0,
    humidity: 0,
    pressure: 0,
    icon: '',
    iconCode: '',
    id: null,
    country: '',
    highestTemp: 0,
    lowestTemp: 0,
    clouds: 0,
    sunrise: '',
    sunset: '',
    date: '',
    forecast: [],
  },
  loading: false,
  alert: false,
  error: '',
}

export const getWeatherThunk = createAsyncThunk(
  'weather/getWeatherThunk',
  async (id: string) => {
    const response = Service.getWeatherData(id)
    return response
  }
)

const weatherSlice = createSlice({
  name: 'weather',
  initialState: initialState as InitialStateType,
  reducers: {
    getWeather(state, action) {
      state.currentWeather.name = action.payload.name
      state.currentWeather.temp = action.payload.temp
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getWeatherThunk.pending, (state, action) => {
        state.loading = true
      })
      .addCase(getWeatherThunk.fulfilled, (state, action) => {
        if (!action.payload) {
          state.loading = false
          state.alert = true
          state.error =
            'Пожалуйста введите корректное название города для поиска.'
          return state
        }
        const [data1, data2] = action.payload
        if (data1.cod === '400' || !data1) {
          state.loading = false
          state.alert = true
          state.error =
            'Пустой ввод. Пожалуйста введите название города для поиска.'
          return state
        }

        if (data1.cod === '404') {
          state.loading = false
          state.alert = true
          state.error = 'Город не найден'
          return state
        }

        if (data1.cod !== '400') {
          const months = [
            'Январь',
            'Февраль',
            'Март',
            'Апрель',
            'Май',
            'Июнь',
            'Июль',
            'Август',
            'Сентябрь',
            'Октябрь',
            'Ноябрь',
            'Декабрь',
          ]
          const days = [
            'Воскресенье',
            'Понедельник',
            'Вторник',
            'Среда',
            'Четверг',
            'Пятница',
            'Суббота',
          ]
          const currentDate = new Date()
          const date = `${
            days[currentDate.getDay()]
          } ${currentDate.getDate()} ${months[currentDate.getMonth()]}`
          const sunset = new Date(data1.sys.sunset * 1000)
            .toLocaleTimeString()
            .slice(0, 5)
          const sunrise = new Date(data1.sys.sunrise * 1000)
            .toLocaleTimeString()
            .slice(0, 5)
          state.currentWeather = {
            ...state.currentWeather,
            name: data1.name,
            country: data1.sys.country,
            temp: data1.main.temp,
            highestTemp: data1.main.temp_max,
            lowestTemp: data1.main.temp_min,
            wind: data1.wind.speed,
            description: data1.weather[0].description,
            humidity: data1.main.humidity,
            pressure: data1.main.pressure,
            iconCode: data1.weather[0].icon,
            id: data1.id,
            clouds: data1.clouds.all,
            sunrise,
            sunset,
            date,
            forecast: data2.list,
          }

          state.alert = false
        }
        state.loading = false
        return
      })
  },
})

export const { getWeather } = weatherSlice.actions
export default weatherSlice.reducer

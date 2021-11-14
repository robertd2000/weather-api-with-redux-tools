import { useDispatch, useSelector } from 'react-redux'
import Loader from '../utils/Loader'
import { CityInfo } from './CityInfo'
import { currentWeatherType, RootApp } from '../types'
import { useEffect } from 'react'
import { getWeatherThunk } from '../redux/reducer'

export const CityItem = () => {
  const dispatch = useDispatch()

  const currentWeather: currentWeatherType = useSelector(
    (state: RootApp) => state.reducer.currentWeather
  )
  const loader = useSelector((state: RootApp) => state.reducer.loading)

  useEffect(() => {
    const asFn = async () => {
      await dispatch(getWeatherThunk('Chegem'))
    }
    asFn()
  }, [])

  if (loader) {
    return <Loader />
  }

  if (!currentWeather.id) {
    return <h2>No data</h2>
  }
  return (
    <div className="container">
      {currentWeather.id !== null ? <CityInfo cityData={currentWeather} /> : ''}
    </div>
  )
}

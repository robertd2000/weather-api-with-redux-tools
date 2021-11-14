import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getWeatherThunk } from '../redux/reducer'
import { RootApp } from '../types'
import { Alert } from '../utils/Alert'

export const Header = () => {
  const [text, setText] = useState('Chegem')
  const dispatch = useDispatch()
  const alert = useSelector((state: RootApp) => state.reducer.alert)
  const error = useSelector((state: RootApp) => state.reducer.error)

  const inputHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setText(e.target.value)
  }
  const buttonHandler = async (e: React.SyntheticEvent) => {
    e.preventDefault()
    await dispatch(getWeatherThunk(text))
    setText('')
  }
  return (
    <>
      <form onSubmit={buttonHandler}>
        {alert ? <Alert text={error} /> : null}

        <div className="input-group mb-3">
          <input
            type="text"
            className="form-control"
            id="title"
            value={text}
            name="title"
            placeholder="Город"
            onChange={inputHandler}
          />

          <div className="input-group-append">
            <button
              className="btn btn-info"
              type="submit"
              style={{ backgroundColor: '#b690da', border: '#b690da' }}
            >
              Поиск
            </button>
          </div>
        </div>
      </form>
    </>
  )
}

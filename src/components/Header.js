import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getWeatherThunk } from '../redux/reducer';
import { Alert } from '../utils/Alert';

export const Header = () => {
  const [text, setText] = useState('');
  const dispatch = useDispatch();
  const alert = useSelector((state) => state.reducer.alert);
  const error = useSelector((state) => state.reducer.error);

  const inputHandler = (e) => {
    setText(e.target.value);
  };
  const buttonHandler = async (e) => {
    e.preventDefault();
    await dispatch(getWeatherThunk(text));
    setText('');
  };
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
            <button className="btn btn-secondary" type="submit">
              Поиск
            </button>
          </div>
        </div>
      </form>
    </>
  );
};

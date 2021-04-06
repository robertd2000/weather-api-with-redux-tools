import { useDispatch } from 'react-redux';
import { deleteCity } from '../redux/reducer';

export const CityItem = ({
  name,
  temp,
  description,
  wind,
  humidity,
  pressure,
  icon,
  id,
}) => {
  const dispatch = useDispatch();
  const onDelete = (id) => {
    dispatch(deleteCity(id));
  };
  return (
    <>
      <div className="card" style={{ marginBottom: '15px', marginTop: '15px' }}>
        <h5 className="card-header">
          {name}
          <button
            onClick={() => onDelete(id)}
            style={{ width: '40px' }}
            type="button"
            className="close float-right"
            aria-label="Close"
          >
            <span aria-hidden="true">&times;</span>
          </button>
        </h5>

        <div className="card-body">
          {/* <img src={icon} /> */}
          <blockquote className="blockquote mb-0">
            <p> Температура: {temp} °C</p>
            <footer className="blockquote-footer">{description}</footer>
            <footer className="blockquote-footer">
              cкорость ветра - {wind} м/с,
            </footer>
            <footer className="blockquote-footer">
              Влажность - {humidity} %
            </footer>
            <footer className="blockquote-footer">
              Давление - {pressure} мм рт.
            </footer>
          </blockquote>
        </div>
      </div>
    </>
  );
};

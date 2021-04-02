export const CityItem = ({
  name,
  temp,
  description,
  wind,
  humidity,
  pressure,
}) => {
  return (
    <>
      <div className="card" style={{ marginBottom: '15px', marginTop: '15px' }}>
        <h5 className="card-header">{name}</h5>
        <div className="card-body">
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

class Service {
  static async getWeatherData(id) {
    const weather = `https://api.openweathermap.org/data/2.5/weather?q=${id}&lang=ru&appid=a9ebdb68b0dbf40182f5638efcca3afd&units=metric`;
    const forecast = `https://api.openweathermap.org/data/2.5/forecast?q=${id}&lang=ru&appid=a9ebdb68b0dbf40182f5638efcca3afd&units=metric`;

    const response = await Promise.all([fetch(weather), fetch(forecast)]);

    try {
      const [res1, res2] = response;
      if (res1.ok && res2.ok) {
        return Promise.all([res1.json(), res2.json()]);
      }
    } catch {
      return 'Not found';
    }
  }
}

export default Service;

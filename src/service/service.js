class Service {
  static async getWeatherData(id) {
    const response = await fetch(
      `http://api.openweathermap.org/data/2.5/weather?q=${id}&lang=ru&appid=a9ebdb68b0dbf40182f5638efcca3afd`
    );
    try {
      return response.json();
    } catch {
      return 'Not found';
    }
  }
}

export default Service;

class WeatherAppAPI {
  constructor() {
    this.API_SERVER = "https://api.openweathermap.org";
  }
  async getWeather(city) {


    return fetch(this.API_SERVER + "/data/2.5/weather?q=" + city + "&lang=ru&appid=5df764e0a76568cd5c6ab5a26f5ef004&units=metric", {
      method: "GET",
      headers: {
        "user-agent": "Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/87.0.4280.141 Safari/537.36",
        Referer: this.API_SERVER,
      },
    })
      .then((response) => {
        return response.json();
      })
      .catch((error) => Error(error));
  }

}
export default WeatherAppAPI;

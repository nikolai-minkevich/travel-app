class TravelAppAPI {
  constructor() {
    this.API_SERVER = "https://travelapp-team43.herokuapp.com";
  }
  async getCountries() {
    return fetch(this.API_SERVER + "/countries/", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "user-agent": "Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/87.0.4280.141 Safari/537.36",
        Referer: this.API_SERVER,
      },
    })
      .then((response) => {
        return response.json();
      })
      .then((jsonData) => {
        return jsonData;
      })
      .catch((error) => Error(error));
  }
}
export default TravelAppAPI;

class TravelAppAPI {
  constructor() {
    this.API_SERVER = "https://travelapp-team43.herokuapp.com";
  }
  async getCountries(lang = "en") {
    return fetch(this.API_SERVER + "/countries?lang=" + lang, {
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
      .catch((error) => Error(error));
  }

  async getCountry(codeISO2, lang = "en") {
    return fetch(this.API_SERVER + "/countries/" + codeISO2 + "?lang=" + lang, {
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
      .catch((error) => Error(error));
  }


/*

  async setRating(codeISO2, lang = "en") {
    return fetch(this.API_SERVER + "/countries/" + codeISO2 + "?lang=" + lang, {
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
      .catch((error) => Error(error));
  }
  async setRating(file) {
    return fetch(this.API_SERVER + '/tracks/upload', {
      method: 'POST',
      headers: {
        // 'Content-Type': 'multipart/form-data',
        'user-agent': 'Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/87.0.4280.141 Safari/537.36',
        Referer: 'https://api.gpxies.ru',
        Authorization: 'Bearer ' + localStorage.getItem('gpxiesToken'),
        'Access-Control-Max-Age': '7200',
      },
      body: new FormData(file),
    })
      .then((response) => {
        return response.json();
      })
      .then((jsonData) => {
        return jsonData;
      })
      .catch((error) => Error(error));
  }*/








}
export default TravelAppAPI;

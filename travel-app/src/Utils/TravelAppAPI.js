class TravelAppAPI {
  constructor() {
    this.API_SERVER = "https://travelapp-team43.herokuapp.com";
    // this.API_SERVER = "http://localhost:3333";
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

  async setRating(changedAttrId, changedAttrRating, userEmail) {
    return fetch(this.API_SERVER + "/attractions/like", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "user-agent": "Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/87.0.4280.141 Safari/537.36",
        Referer: this.API_SERVER,
      },
      body: JSON.stringify({
        changedAttrId: changedAttrId,
        changedAttrRating: changedAttrRating,
        userEmail: userEmail
      }),
    })
      .then((response) => {
        return response.json();
      })
      .catch((error) => Error(error));
  }
}
export default TravelAppAPI;

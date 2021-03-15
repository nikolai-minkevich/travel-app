class CurrencyAPI {
    constructor() {
      this.API_SERVER = "https://v6.exchangerate-api.com";
    }
    async getCurrency(currency) {
   //     https://v6.exchangerate-api.com/v6/49a5bf66bd8662e965a6a21b/latest/USD
      return fetch(this.API_SERVER + "/v6/49a5bf66bd8662e965a6a21b/latest/" + currency, {
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
  export default CurrencyAPI;
  
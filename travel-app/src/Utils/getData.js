const  getData = async ( lang = 0, codeISO2 ) => {
    const LANGUAGE = ["en", "ru", "fr"];
    const head = "https://travelapp-team43.herokuapp.com/countries";
    let url = '';
    const language = LANGUAGE[lang];

    codeISO2 ? url = `${head}/${codeISO2}?lang=${language}` : url = `${head}?lang=${language}`;
    
    return fetch(url, {
        method: "GET",
        headers: { "Content-Type": "application/json" },
    })
    .then( res => res.json() )
    .catch((error) => Error(error));
}

export default getData

// DEFAULT_LANGUAGE_CODE = 0;

// структура бэка (стэйта)
// 
// name: "Турция",
// capital: "Анкара",
// codeISO2: "TR",
// coverURL: "https://gpxies.ru/team43/turkey/main.jpg"
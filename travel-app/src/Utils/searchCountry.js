const searchCountry = (arr, val) => {
  // return arr.filter((i) => {
  //   return i.name.toLowerCase().includes(val.toLowerCase()) || i.capital.toLowerCase().includes(val.toLowerCase());
  // });
  return arr.map((country) => {
    country.hidden = true;
    if (country.name.toLowerCase().includes(val.toLowerCase()) || country.capital.toLowerCase().includes(val.toLowerCase())) {
      country.hidden = false;
    }
    return country;
  });
};
export default searchCountry;

// структура item arr с бэка (стэйта)
//
// name: "Турция",
// capital: "Анкара",
// codeISO2: "TR",
// coverURL: "https://gpxies.ru/team43/turkey/main.jpg"

// при использовании аргумент arr передаем не сам стэйт а его копию .concat() !!!

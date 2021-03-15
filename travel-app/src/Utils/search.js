export default search = (arr, val) => arr.filter(i => i.name.includes(val) || i.capital.includes(val));

// структура item arr с бэка (стэйта)
// 
// id: "604cf96e419863398c18b4e4",
// name: "United States of America",
// capital: "Washington",
// coverURL: "https://gpxies.ru/team43/usa/main.jpg",

// при использовании аргумент arr передаем не сам стэйт а его копию .concat() !!!
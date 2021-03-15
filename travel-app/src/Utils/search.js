export default search = (arr, val) => arr.filter(i => i.name.includes(val) || i.capital.includes(val));

// структура item arr с бэка (стэйта)
// 
// name: "Турция",
// capital: "Анкара",
// codeISO2: "TR",
// coverURL: "https://gpxies.ru/team43/turkey/main.jpg"

// при использовании аргумент arr передаем не сам стэйт а его копию .concat() !!!
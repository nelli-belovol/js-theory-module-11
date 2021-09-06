console.dir(Date);
console.log(new Date());
// дата в UNIX мс от 1 января 1970
console.log(Date.now());
// текущая дата в нормальном виде
const myDate = new Date();
console.log('текущая дата в нормальном виде:', myDate);
//количество миллисекунд с Юникс времени
const myBD = new Date('02.05.1990');
console.log(myBD);

let year = 2021;
let month = 11;
let date = 20;

const startOfJob = new Date(year, month, date, 9, 30);
console.log(startOfJob);

const unixToDate = new Date(1630948981099);
console.log('unixToDate', unixToDate);

// Парсит указанную дату в млсек
console.log(Date.parse('06.09.2021'));

const newDate = new Date();
console.log(newDate.getTime()); // количество млсек 1630949650103
console.log(newDate.getDay()); // 1 - Понедельник,  а 0 - Воскресенье
console.log(newDate.getMonth()); // 8  - сентябрь
console.log(newDate.getDate()); // 6 - число текущего месяца
console.log(newDate.getFullYear()); // 2021
console.log(newDate.getHours()); //20
console.log(newDate.getMinutes()); // 39
console.log(newDate.getMilliseconds()); // 996

const options = {
  weekday: 'long',
  year: 'numeric',
  month: 'short',
  day: 'numeric',
  hour: '2-digit',
  mitute: '2-digit',
  second: '2-digit',
};

console.log(newDate.toLocaleString('Ru-ru', options)); //понедельник, 6 сент. 2021 г., 20 (секунда: 58)
console.log(newDate.toString()); //Mon Sep 06 2021 20:46:34 GMT+0300 (Восточная Европа, летнее время)
console.log(newDate.toDateString()); //Mon Sep 06 2021
console.log(newDate.toTimeString()); //20:47:04 GMT+0300 (Восточная Европа, летнее время)

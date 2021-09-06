function myCBTimeout() {
  console.log('Первая - setTimeout');
}
function myCBInterval() {
  console.log('Вторая - setInterval');
}

//setTimeout(callback, time)
setTimeout(myCBTimeout, 5000);

// setInterval(callback, time)

const intervalLink = setInterval(myCBInterval, 3000);

//clear setInterval

const btnClear = document.getElementById('clear');
// console.log(btnClear);
btnClear.addEventListener('click', () => clearInterval(intervalLink));

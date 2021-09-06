const promise = new Promise(callback);

console.log(promise);

function callback(resolve, reject) {
  let condition = 0;
  setTimeout(() => {
    if (condition > 1) {
      resolve('Success');
    } else {
      reject('Error');
    }
  }, 2000);
}

// pending - в ожидании
// settled: Fullfilled & Rejected - выполнен успешно или с ошибкой

promise
  .then(
    handleResault => {
      console.log('1 then', handleResault);
      return 'ok-1';
    },
    // handleError => {
    //   console.log('1', handleError);
    //   return 'err-1';
    // },
  )
  .then(
    secondResault => {
      console.log('2 then', secondResault);
    },
    // secondError => {
    //   console.log('2', secondError);
    // },
  )
  .catch(error => {
    return console.log(error);
  })
  .finally(() => {
    console.log('Финалим обработку промиса независимо от результата.');
  });

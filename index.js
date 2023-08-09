const timerPromise = () => // '() =>' - возвращает 'new Promise'
    new Promise((resolve, reject) => // '(...) =>' - запускает  'setTimeout'
        setTimeout(() => resolve(), 5000)) // вызовем resolve(исполним промис) через 2 сек.


const asyncFn = async () => {
    const startTime = performance.now();
    console.log(`Start`);
    await timerPromise(); // await - мы ждем результата (возврата значения-промиса) timerPromise() и только после этого и перейдем к следующей строке
    const endTime = performance.now();
    console.log(`End (${Math.round((endTime - startTime) / 1000)} сек.)`);
}
asyncFn();
const fnWithError = () => {
    throw new Error('Some Error') // ИНСТРУКЦИЯ для генерации какой-нибудь ошибки
}

try { // выполнение блока кода
    fnWithError()
} catch (error) { // выполняется в случае ошибки
    console.error(error)
    console.log(error.message)
}

console.log('Continue...') // если ошибку поймали выполнение кода продолжается
/*
Error: Some Error
    at fnWithError (e:\_sites\bogdan_lessons\index.js:2:11)
    at Object.<anonymous> (e:\_sites\bogdan_lessons\index.js:6:5)
    at Module._compile (node:internal/modules/cjs/loader:1101:14)
    at Object.Module._extensions..js (node:internal/modules/cjs/loader:1153:10)
    at Module.load (node:internal/modules/cjs/loader:981:32)
    at Function.Module._load (node:internal/modules/cjs/loader:822:12)
    at Function.executeUserEntryPoint [as runMain] (node:internal/modules/run_main:81:12)
    at node:internal/main/run_main_module:17:47
Some Error
Continue...
*/
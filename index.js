// ПОЛНОСТЮ НОВЫЙ ОБЪЕКТ (ССЫЛКИ НЕ СОХРАНЯЮТСЯ) ВЛОЖЕННЫЕ ОБЪЕКТЫ ТОЖЕ НОВЫЕ
const post = {
    userId: 1,
    id: 1,
    title: 'Test title',
    status: {
        completed: false,
        note: 'Spab'
    }
}
post2 = JSON.parse(JSON.stringify(post)) // двойная конвертация
post2.status.note = 'Beatles'

console.log(post2.status.note) // Beatles
console.log(post.status.note)  // Spab

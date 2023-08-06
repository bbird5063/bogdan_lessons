const userProfile = {
    name: 'Bogdan',
    commentsQty: 23,
    hasSignAgr: false,
}

const userInfo = ({ name, commentsQty }) => { // параметр userInfo: "{ name, commentsQty } = userInfo" (деструктуризация объекта)
    if (!commentsQty) {
        return `User ${name} has no comments`;
    }
    return `User ${name} has ${commentsQty} comments`;
}

console.log(userInfo(userProfile));// вызываем функцию userInfo с аргументом объект userInfo
// User Bogdan has 23 comments
const myCity = {
    city: 'New York',
    info: {
        isPopular: true,
        country: 'USA', // можно зяпятую
    }, // можно зяпятую
}; // можно точку с запятой
console.log(myCity) // { city: 'New York', info: { isPopular: true, country: 'USA' } }
delete myCity.info['isPopular'];  // можно точку с запятой. лучше точечную запись!
console.log(myCity) // { city: 'New York', info: { country: 'USA' } }
const buttonInfo = {
    text: 'Buy'
}

const buttonStyle = {
    color: 'yellow',
    witdh: 200,
    height: 300
}

const button = {
    ...buttonInfo,
    ...buttonStyle,
    id: 'btnButton'
}
console.table(button)
/*
┌─────────┬─────────────┐
│ (index) │   Values    │
├─────────┼─────────────┤
│  text   │    'Buy'    │
│  color  │  'yellow'   │
│  witdh  │     200     │
│ height  │     300     │
│   id    │ 'btnButton' │
└─────────┴─────────────┘
*/
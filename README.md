# Soundcloud Searcher
Search soundcloud and find good tracks. Filter them by genre to extract what you need.

## Installation
```shell
npm i --save soundcloud-searcher
```

## Usage
```js
var scSearcher = require('soundcloud-searcher')

// Initi with your clientId. https://soundcloud.com/you/apps
scSearcher.init('YOUR_CLIENT_ID')

scSearcher.search({ name: 'witcher3', limit: 5, genres: [sc.genre.Soundtrack], tags: ['videogame', 'witcher'] })
  .then((result) => {
    console.log(result)
  })
  .catch((error) => {
    console.log(error)
  })
})

// ...
```

## License
The files included in this repository are licensed under the MIT license.

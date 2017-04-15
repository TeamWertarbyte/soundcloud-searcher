# Soundcloud Searcher

[![Greenkeeper badge](https://badges.greenkeeper.io/TeamWertarbyte/soundcloud-searcher.svg)](https://greenkeeper.io/)

Search soundcloud and find good tracks. Filter them by genre to extract what you need.

## Installation
```shell
npm i --save soundcloud-searcher
```

## Usage
```js
var scSearcher = require('soundcloud-searcher')

// Initi with your clientId. https://soundcloud.com/you/apps
// scSearcher.init('YOUR_CLIENT_ID')
// Take my clientID for testing
scSearcher.init('2uFpHTPfMiHei6CGgPlTMXoeTUtBp9Iy')

var options = {
  name: 'witcher3',
  limit: 5, genres: [scSearcher.genre.Soundtrack],
  tags: ['videogame', 'witcher']
}

scSearcher.search(options)
  .then((result) => {
    console.log(result)
  })
  .catch((error) => {
    console.log(error)
  })

// ...
```

## License
The files included in this repository are licensed under the MIT license.

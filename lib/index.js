var request = require('request')

var client_id = ""

/**
 * Init the soundcloud client_id. Needed for search
 * @param clientId
 */
exports.init = (clientId) => {
  client_id = clientId
}

/**
 * Search a track
 * @param name The name of the song you are searching for
 * @param limit Limits the number of tracks
 * @param genre Specify a genre for further filtering
 * @param callback Returns tracks in JSON format
 */
exports.search = ({name, genre, limit}, callback) => {
  var searchURL = `http://api.soundcloud.com/tracks.json?client_id=${client_id}&q=${name}&limit=${limit}&genres=${genre}`

  var options = {
    url: searchURL
  }

  request.get(options, (error, response, body) => {
    if (!error && response.statusCode == 200) {
      callback(body)
    }
  })
}

exports.genres = {
  AlternativeRock: 'alternativerock',
  Ambient: 'ambient',
  Classical: 'classical',
  Country: 'country',
  DanceAndEDM: 'danceedm',
  Dancehall: 'dancehall',
  DeepHouse: 'deephouse',
  Disco: 'disco',
  DrumAndBass: 'dummbass',
  Dubstep: 'dubstep',
  Electronic: 'electronic',
  FolkAndSingerSongwriter: 'folksingersongwriter',
  HiphopAndRap: 'hiphoprap',
  House: 'house',
  Indie: 'indie',
  JazzAndBlues: 'jazzblues',
  Latin: 'latin',
  Metal: 'metal',
  Piano: 'piano',
  Pop: 'pop',
  RBAndSoul: 'rbsoul',
  Reggae: 'reggae',
  Reggaeton: 'reggaeton',
  Rock: 'rock',
  Soundtrack: 'Soundtrack',
  Techno: 'techno',
  Trance: 'trance',
  Trap: 'trap',
  Triphop: 'triphop',
  World: 'world'
}

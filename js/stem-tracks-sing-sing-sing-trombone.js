var playlist = WaveformPlaylist.init({
  samplesPerPixel: 1000,
  waveHeight: 100,
  container: document.getElementById("playlist"),
  isAutomaticScroll: true,
  timescale: true,
  state: 'cursor',
  colors: {
    waveOutlineColor: '#E0EFF1'
  },
  controls: {
    show: true, //whether or not to include the track controls
    width: 200 //width of controls in pixels
  },
  zoomLevels: [500, 1000, 3000, 5000]
});

playlist.load([
  {
    "src": "Sing%2C%20Sing%2C%20Sing/Trombone/BONE%201.01_09.mp3",
    "name": "Trombone 1",
    "gain": 0.75,
    "muted": false,
    "soloed": false
  },
  {
    "src": "Sing%2C%20Sing%2C%20Sing/Trombone/BONE%202.01_09.mp3",
    "name": "Trombone 2",
    "gain": 0.75
  },
  {
    "src": "Sing%2C%20Sing%2C%20Sing/Trombone/BONE%203.01_09.mp3",
    "name": "Trombone 3",
    "gain": 0.75
  },
  {
    "src": "Sing%2C%20Sing%2C%20Sing/Trombone/BONE%204.01_09.mp3",
    "name": "Trombone 4",
    "gain": 0.75
  },
  {
    "src": "Sing%2C%20Sing%2C%20Sing/Trombone/SOLO.01_09.mp3",
    "name": "Solo",
    "gain": 0.75
  },  
  {
    "src": "Sing%2C%20Sing%2C%20Sing/Trombone/RS_S_T.01_09.mp3",
    "name": "Band",
    "gain": 0.75
  }
]).then(function() {
  //can do stuff with the playlist.
});

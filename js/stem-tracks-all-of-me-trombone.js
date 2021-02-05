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
    "src": "All%20of%20Me/Trombone/Trombone%201_04-06.mp3",
    "name": "Trombone 1",
    "gain": 0.75,
    "muted": false,
    "soloed": false
  },
  {
    "src": "All%20of%20Me/Trombone/Trombone%202_02-06.mp3",
    "name": "Trombone 2",
    "gain": 0.75
  },
  {
    "src": "All%20of%20Me/Trombone/Trombone%203_02-06.mp3",
    "name": "Trombone 3",
    "gain": 0.75
  },
  {
    "src": "All%20of%20Me/Trombone/Trombone%204_02-06.mp3",
    "name": "Trombone 4",
    "gain": 0.75
  },
  {
    "src": "All%20of%20Me/Trombone/Solo_02-06.mp3",
    "name": "Solo",
    "gain": 0.75
  },  
  {
    "src": "All%20of%20Me/Trombone/Band%20No%20Bones_01-06.mp3",
    "name": "Band",
    "gain": 0.75
  }
]).then(function() {
  //can do stuff with the playlist.
});

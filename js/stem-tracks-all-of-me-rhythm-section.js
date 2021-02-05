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
    "src": "All%20of%20Me/Rhythm%20Section/Guitar_04-06.mp3",
    "name": "Guitar",
    "gain": 0.75,
    "muted": false,
    "soloed": false
  },
  {
    "src": "All%20of%20Me/Rhythm%20Section/Piano%20_01-06.mp3",
    "name": "Piano",
    "gain": 0.75
  },
  {
    "src": "All%20of%20Me/Rhythm%20Section/Bass%20_04-06.mp3",
    "name": "Bass",
    "gain": 0.75
  },
  {
    "src": "All%20of%20Me/Rhythm%20Section/Drums_03-06.mp3",
    "name": "Drums",
    "gain": 0.75
  },
  {
    "src": "All%20of%20Me/Rhythm%20Section/Solo_02-06.mp3",
    "name": "Solo",
    "gain": 0.75
  },  
  {
    "src": "All%20of%20Me/Rhythm%20Section/Band%20No_01-06.mp3",
    "name": "Band",
    "gain": 0.75
  }
]).then(function() {
  //can do stuff with the playlist.
});

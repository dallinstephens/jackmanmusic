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
    "src": "Sing%2C%20Sing%2C%20Sing/Rhythm%20Section/GUIT.01_09.mp3",
    "name": "Guitar",
    "gain": 0.75,
    "muted": false,
    "soloed": false
  },
  {
    "src": "Sing%2C%20Sing%2C%20Sing/Rhythm%20Section/KEYS.01_09.mp3",
    "name": "Piano",
    "gain": 0.75
  },
  {
    "src": "Sing%2C%20Sing%2C%20Sing/Rhythm%20Section/BASS.01_09.mp3",
    "name": "Bass",
    "gain": 0.75
  },
  {
    "src": "Sing%2C%20Sing%2C%20Sing/Rhythm%20Section/KIT.01_09.mp3",
    "name": "Drums",
    "gain": 0.75
  },
  {
    "src": "Sing%2C%20Sing%2C%20Sing/Rhythm%20Section/SOLO.01_09.mp3",
    "name": "Solo",
    "gain": 0.75
  },
  {
    "src": "Sing%2C%20Sing%2C%20Sing/Rhythm%20Section/S_B_T.01_09.mp3",
    "name": "Band",
    "gain": 0.75
  }
]).then(function() {
  //can do stuff with the playlist.
  document.getElementById("load-box").style.display="none"; // closes loading box with progress bar
});

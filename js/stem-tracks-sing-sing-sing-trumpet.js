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
    "src": "Sing%2C%20Sing%2C%20Sing/Trumpet/TPT%201.01_09.mp3",
    "name": "Trumpet 1",
    "gain": 0.75,
    "muted": false,
    "soloed": false
  },
  {
    "src": "Sing%2C%20Sing%2C%20Sing/Trumpet/TPT%202.01_09.mp3",
    "name": "Trumpet 2",
    "gain": 0.75
  },
  {
    "src": "Sing%2C%20Sing%2C%20Sing/Trumpet/TPT%203.01_09.mp3",
    "name": "Trumpet 3",
    "gain": 0.75
  },
  {
    "src": "Sing%2C%20Sing%2C%20Sing/Trumpet/TPT%204.01_09.mp3",
    "name": "Trumpet 4",
    "gain": 0.75
  },
  {
    "src": "Sing%2C%20Sing%2C%20Sing/Trumpet/SOLO.01_09.mp3",
    "name": "Solo",
    "gain": 0.75
  },  
  {
    "src": "Sing%2C%20Sing%2C%20Sing/Trumpet/RS_S_B.01_09.mp3",
    "name": "Band",
    "gain": 0.75
  }
]).then(function() {
  //can do stuff with the playlist.
  document.getElementById("load-box").style.display="none"; // closes loading box with progress bar
});

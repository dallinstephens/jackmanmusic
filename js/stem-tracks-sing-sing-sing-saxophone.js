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
    "src": "Sing%2C%20Sing%2C%20Sing/Saxophone/Alto%201.01_09.mp3",
    "name": "Alto 1",
    "gain": 0.75,
    "muted": false,
    "soloed": false
  },
  {
    "src": "Sing%2C%20Sing%2C%20Sing/Saxophone/Alto%202.01_09.mp3",
    "name": "Alto 2",
    "gain": 0.75
  },
  {
    "src": "Sing%2C%20Sing%2C%20Sing/Saxophone/Tenor%201.01_09.mp3",
    "name": "Tenor 1",
    "gain": 0.75
  },
  {
    "src": "Sing%2C%20Sing%2C%20Sing/Saxophone/Tenor%202.01_09.mp3",
    "name": "Tenor 2",
    "gain": 0.75
  },
  {
    "src": "Sing%2C%20Sing%2C%20Sing/Saxophone/Baritone.01_09.mp3",
    "name": "Bari",
    "gain": 0.75
  },
  {
    "src": "Sing%2C%20Sing%2C%20Sing/Saxophone/SOLO.01_09.mp3",
    "name": "Solo",
    "gain": 0.75
  },  
  {
    "src": "Sing%2C%20Sing%2C%20Sing/Saxophone/RS_B_T.01_09.mp3",
    "name": "Band",
    "gain": 0.75
  }
]).then(function() {
  //can do stuff with the playlist.
  document.getElementById("load-box").style.display="none"; // closes loading box with progress bar
});

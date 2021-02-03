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
  zoomLevels: [500, 1000, 3000, 5000, 500]
});

playlist.load([
  {
    "src": "01923_CRT_SAW_BG/Soprano_02-01.mp3",
    "name": "Soprano",
    "gain": 0.75,
    "muted": false,
    "soloed": false
  },
  {
    "src": "01923_CRT_SAW_BG/Alto _02-01.mp3",
    "name": "Alto",
    "gain": 0.75
  },
  {
    "src": "01923_CRT_SAW_BG/Tenor _02-01.mp3",
    "name": "Tenor",
    "gain": 0.75
  },
  {
    "src": "01923_CRT_SAW_BG/Bass _02-01.mp3",
    "name": "Bass",
    "gain": 0.75
  },
  {
    "src": "01923_CRT_SAW_BG/Piano _02-01.mp3",
    "name": "Piano",
    "gain": 0.75
  }
]).then(function() {
  //can do stuff with the playlist.
});

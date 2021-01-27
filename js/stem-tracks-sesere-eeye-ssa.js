var playlist = WaveformPlaylist.init({
  samplesPerPixel: 1000,
  waveHeight: 100,
  container: document.getElementById("playlist"),
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

var options = {
  {
    container: document.getElementById("playlist"),
    isAutomaticScroll: true
  }
);

playlist.load([
  {
    "src": "SesereEeye_MO_CRT_SSA/Sesere%20Eeye%20Melody.mp3",
    "name": "Melody",
    "gain": 0.75,
    "muted": false,
    "soloed": false
  },
  {
    "src": "SesereEeye_MO_CRT_SSA/Sesere%20Eeye%20Harmony%201.mp3",
    "name": "Harmony 1",
    "gain": 0.75
  },
  {
    "src": "SesereEeye_MO_CRT_SSA/Sesere%20Eeye%20Harmony%202.mp3",
    "name": "Harmony 2",
    "gain": 0.75
  }
]).then(function() {
  //can do stuff with the playlist.
});

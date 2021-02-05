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
    "src": "LunarLullaby_JN_CRT_SA/Lunar%20Lullaby%20SSAA%20Soprano%201.mp3",
    "name": "SSAA Soprano 1",
    "gain": 0.75,
    "muted": false,
    "soloed": false
  },
  {
    "src": "LunarLullaby_JN_CRT_SA/Lunar%20Lullaby%20SSAA%20Soprano%202.mp3",
    "name": "SSAA Soprano 2",
    "gain": 0.75
  },
  {
    "src": "LunarLullaby_JN_CRT_SA/Lunar%20Lullaby%20SSAA%20Alto%201.mp3",
    "name": "Alto 1",
    "gain": 0.75
  },
  {
    "src": "LunarLullaby_JN_CRT_SA/Lunar%20Lullaby%20SSAA%20Alto%202.mp3",
    "name": "Alto 2",
    "gain": 0.75
  },
  {
    "src": "LunarLullaby_JN_CRT_SA/Lunar%20Lullaby%20SSAA%20Piano.mp3",
    "name": "Piano",
    "gain": 0.75
  }
]).then(function() {
  //can do stuff with the playlist.
  document.getElementById("load-box").style.display="none"; // closes loading box with progress bar
});

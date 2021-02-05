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
    "src": "HomewardBound_JA_CRT_TBB/Homeward%20Bound%20TBB%20Tenor.mp3",
    "name": "Tenor",
    "gain": 0.75,
    "muted": false,
    "soloed": false
  },
  {
    "src": "HomewardBound_JA_CRT_TBB/Homeward%20Bound%20TBB%20Baritone.mp3",
    "name": "Baritone",
    "gain": 0.75
  },
  {
    "src": "HomewardBound_JA_CRT_TBB/Homeward%20Bound%20TBB%20Bass%202.mp3",
    "name": "Bass",
    "gain": 0.75
  },
  {
    "src": "HomewardBound_JA_CRT_TBB/Homeward%20Bound%20TBB%20Piano.mp3",
    "name": "Piano",
    "gain": 0.75
  }
]).then(function() {
  //can do stuff with the playlist.
  document.getElementById("load-box").style.display="none"; // closes loading box with progress bar
});

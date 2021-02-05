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
    "src": "Stompin'%20at%20the%20Savoy/Rhythm%20Section/Guitar_05-41.mp3",
    "name": "Guitar",
    "gain": 0.75,
    "muted": false,
    "soloed": false
  },
  {
    "src": "Stompin'%20at%20the%20Savoy/Rhythm%20Section/Piano%20_09-47.mp3",
    "name": "Piano",
    "gain": 0.75
  },
  {
    "src": "Stompin'%20at%20the%20Savoy/Rhythm%20Section/Bass%20_04-78.mp3",
    "name": "Bass",
    "gain": 0.75
  },
  {
    "src": "Stompin'%20at%20the%20Savoy/Rhythm%20Section/Drums_03-78.mp3",
    "name": "Drums",
    "gain": 0.75
  },
  {
    "src": "Stompin'%20at%20the%20Savoy/Rhythm%20Section/Solo_02-78.mp3",
    "name": "Solo",
    "gain": 0.75
  },  
  {
    "src": "Stompin'%20at%20the%20Savoy/Rhythm%20Section/Band%20No_01-78.mp3",
    "name": "Band",
    "gain": 0.75
  }
]).then(function() {
  //can do stuff with the playlist.
  document.getElementById("load-box").style.display="none"; // closes loading box with progress bar
});

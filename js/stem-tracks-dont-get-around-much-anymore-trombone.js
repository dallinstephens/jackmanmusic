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
    "src": "Don't%20Get%20Around%20Much%20Anymore/Trombone/BONE%201.01_20.mp3",
    "name": "Trombone 1",
    "gain": 0.75,
    "muted": false,
    "soloed": false
  },
  {
    "src": "Don't%20Get%20Around%20Much%20Anymore/Trombone/BONE%202.01_20.mp3",
    "name": "Trombone 2",
    "gain": 0.75
  },
  {
    "src": "Don't%20Get%20Around%20Much%20Anymore/Trombone/BONE%203.01_20.mp3",
    "name": "Trombone 3",
    "gain": 0.75
  },
  {
    "src": "Don't%20Get%20Around%20Much%20Anymore/Trombone/BONE%204.01_20.mp3",
    "name": "Trombone 4",
    "gain": 0.75
  },
  {
    "src": "Don't%20Get%20Around%20Much%20Anymore/Trombone/SOLO.1.01_02.mp3",
    "name": "Solo",
    "gain": 0.75
  },  
  {
    "src": "Don't%20Get%20Around%20Much%20Anymore/Trombone/RS_S_T.01_20.mp3",
    "name": "Band",
    "gain": 0.75
  }
]).then(function() {
  //can do stuff with the playlist.
  document.getElementById("load-box").style.display="none"; // closes loading box with progress bar
});

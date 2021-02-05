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
    "src": "Don't%20Get%20Around%20Much%20Anymore/Saxophone/Alto%201.01_20.mp3",
    "name": "Alto 1",
    "gain": 0.75,
    "muted": false,
    "soloed": false
  },
  {
    "src": "Don't%20Get%20Around%20Much%20Anymore/Saxophone/Alto%202.01_20.mp3",
    "name": "Alto 2",
    "gain": 0.75
  },
  {
    "src": "Don't%20Get%20Around%20Much%20Anymore/Saxophone/Tenor%201.01_20.mp3",
    "name": "Tenor 1",
    "gain": 0.75
  },
  {
    "src": "Don't%20Get%20Around%20Much%20Anymore/Saxophone/Tenor%202.01_20.mp3",
    "name": "Tenor 2",
    "gain": 0.75
  },
  {
    "src": "Don't%20Get%20Around%20Much%20Anymore/Saxophone/Baritone.01_20.mp3",
    "name": "Bari",
    "gain": 0.75
  },
  {
    "src": "Don't%20Get%20Around%20Much%20Anymore/Saxophone/SOLO.1.01_02.mp3",
    "name": "Solo",
    "gain": 0.75
  },  
  {
    "src": "Don't%20Get%20Around%20Much%20Anymore/Saxophone/RS_B_T.01_20.mp3",
    "name": "Band",
    "gain": 0.75
  }
]).then(function() {
  //can do stuff with the playlist.
});

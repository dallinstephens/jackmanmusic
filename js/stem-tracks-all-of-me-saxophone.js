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
    "src": "All%20of%20Me/Saxophone/Alto%201_05-06.mp3",
    "name": "Alto 1",
    "gain": 0.75,
    "muted": false,
    "soloed": false
  },
  {
    "src": "All%20of%20Me/Saxophone/Alto%202_02-06.mp3",
    "name": "Alto 2",
    "gain": 0.75
  },
  {
    "src": "All%20of%20Me/Saxophone/Tenor%201_03-06.mp3",
    "name": "Tenor 1",
    "gain": 0.75
  },
  {
    "src": "All%20of%20Me/Saxophone/Tenor%202_02-06.mp3",
    "name": "Tenor 2",
    "gain": 0.75
  },
  {
    "src": "All%20of%20Me/Saxophone/Bari_02-06.mp3",
    "name": "Bari",
    "gain": 0.75
  },
  {
    "src": "All%20of%20Me/Saxophone/Solo_02-06.mp3",
    "name": "Solo",
    "gain": 0.75
  },  
  {
    "src": "All%20of%20Me/Saxophone/Band%20No%20Sax_01-06.mp3",
    "name": "Band",
    "gain": 0.75
  }
]).then(function() {
  //can do stuff with the playlist.
  document.getElementById("load-box").style.display="none"; // closes loading box with progress bar
});

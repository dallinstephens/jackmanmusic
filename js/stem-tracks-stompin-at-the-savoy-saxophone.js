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
    "src": "Stompin'%20at%20the%20Savoy/Saxophone/Alto%201_05-78.mp3",
    "name": "Alto 1",
    "gain": 0.75,
    "muted": false,
    "soloed": false
  },
  {
    "src": "Stompin'%20at%20the%20Savoy/Saxophone/Alto%202_02-78.mp3",
    "name": "Alto 2",
    "gain": 0.75
  },
  {
    "src": "Stompin'%20at%20the%20Savoy/Saxophone/Tenor%201_04-07.mp3",
    "name": "Tenor 1",
    "gain": 0.75
  },
  {
    "src": "Stompin'%20at%20the%20Savoy/Saxophone/Tenor%202_02-78.mp3",
    "name": "Tenor 2",
    "gain": 0.75
  },
  {
    "src": "Stompin'%20at%20the%20Savoy/Saxophone/Bari_02-78.mp3",
    "name": "Bari",
    "gain": 0.75
  },
  {
    "src": "Stompin'%20at%20the%20Savoy/Saxophone/Solo_02-78.mp3",
    "name": "Solo",
    "gain": 0.75
  },  
  {
    "src": "Stompin'%20at%20the%20Savoy/Saxophone/Band%20No%20Sax_01-78.mp3",
    "name": "Band",
    "gain": 0.75
  }
]).then(function() {
  //can do stuff with the playlist.
  document.getElementById("load-box").style.display="none"; // closes loading box with progress bar
});

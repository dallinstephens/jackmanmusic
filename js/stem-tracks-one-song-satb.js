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
    "src": "OneSong_MH_CRT_SATB/One%20Song%20SATB%20Solo.mp3",
    "name": "Solo",
    "gain": 0.75,
    "muted": false,
    "soloed": false
  },
  {
    "src": "OneSong_MH_CRT_SATB/One%20Song%20SATB%20Soprano.mp3",
    "name": "Soprano",
    "gain": 0.75
  },
  {
    "src": "OneSong_MH_CRT_SATB/One%20Song%20SATB%20Alto.mp3",
    "name": "Alto",
    "gain": 0.75
  },  
  {
    "src": "OneSong_MH_CRT_SATB/One%20Song%20SATB%20Tenor.mp3",
    "name": "Tenor",
    "gain": 0.75
  },
  {
    "src": "OneSong_MH_CRT_SATB/One%20Song%20SATB%20Bass.mp3",
    "name": "Bass",
    "gain": 0.75
  },
  {
    "src": "OneSong_MH_CRT_SATB/One%20Song%20SATB%20Piano.mp3",
    "name": "Piano",
    "gain": 0.75
  }
]).then(function() {
  //can do stuff with the playlist.
  document.getElementById("load-box").style.display="none"; // closes loading box with progress bar
});

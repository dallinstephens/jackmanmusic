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

playlist.load([
  {
    "src": "FlightSong_KAA_CRT_SATB/Flight%20Song%20SATB%20Soprano.mp3",
    "name": "Soprano",
    "gain": 0.75,
    "muted": false,
    "soloed": false
  },
  {
    "src": "FlightSong_KAA_CRT_SATB/Flight%20Song%20SATB%20Alto%201.mp3",
    "name": "Alto 1",
    "gain": 0.75
  },
  {
    "src": "FlightSong_KAA_CRT_SATB/Flight%20Song%20SATB%20Alto%202.mp3",
    "name": "Alto 2",
    "gain": 0.75
  },
  {
    "src": "FlightSong_KAA_CRT_SATB/Flight%20Song%20SATB%20Tenor.mp3",
    "name": "Tenor",
    "gain": 0.75
  },
  {
    "src": "FlightSong_KAA_CRT_SATB/Flight%20Song%20SATB%20Baritone.mp3",
    "name": "Baritone",
    "gain": 0.75
  },
  {
    "src": "FlightSong_KAA_CRT_SATB/Flight%20Song%20SATB%20Bass%202.mp3",
    "name": "Base",
    "gain": 0.75
  },  
  {
    "src": "FlightSong_KAA_CRT_SATB/Flight%20Song%20SATB%20Piano.mp3",
    "name": "Piano",
    "gain": 0.75
  }
]).then(function() {
  //can do stuff with the playlist.
});

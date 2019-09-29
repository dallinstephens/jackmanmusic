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
  zoomLevels: [500, 1000, 3000, 5000]
});

playlist.load([
  {
    "src": "media/audio/Vocals30.mp3",
    "name": "Jackman Music Vocals",
    "gain": 0.75,
    "muted": false,
    "soloed": false
  },
  {
    "src": "media/audio/Guitar30.mp3",
    "name": "Jackman Music Guitar"
  },
  {
    "src": "media/audio/PianoSynth30.mp3",
    "name": "Jackman Music Pianos & Synth",
    "gain": 1
  },
  {
    "src": "media/audio/BassDrums30.mp3",
    "name": "Jackman Music Drums"
  }
]).then(function() {
  //can do stuff with the playlist.
});

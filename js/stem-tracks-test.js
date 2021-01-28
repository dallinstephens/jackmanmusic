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
    "src": "firebasestorage.googleapis.com/v0/b/a-ccompany.appspot.com/o/accompany_online_access%2FSesereEeye_MO_CRT_SSA%2FSesere%20Eeye%20Melody.mp3?alt=media&token=61e4dbf3-0ed2-43a2-96a7-6d3d3c90ee96",
    "name": "Melody",
    "gain": 0.75,
    "muted": false,
    "soloed": false
  },
  {
    "src": "firebasestorage.googleapis.com/v0/b/a-ccompany.appspot.com/o/accompany_online_access%2FSesereEeye_MO_CRT_SSA%2FSesere%20Eeye%20Harmony%201.mp3?alt=media&token=b27da123-e58b-4ad4-a330-457491e1245b",
    "name": "Harmony 1",
    "gain": 0.75
  },
  {
    "src": "firebasestorage.googleapis.com/v0/b/a-ccompany.appspot.com/o/accompany_online_access%2FSesereEeye_MO_CRT_SSA%2FSesere%20Eeye%20Harmony%202.mp3?alt=media&token=221f777f-8707-453c-a089-be39689a1306",
    "name": "Harmony 2",
    "gain": 0.75
  }
]).then(function() {
  //can do stuff with the playlist.
});

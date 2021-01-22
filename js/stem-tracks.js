/* SSAA Soprano 1 
SSAA Soprano 2
Alto 1
Alto 2
Piano */
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
    "src": "https://firebasestorage.googleapis.com/v0/b/a-ccompany.appspot.com/o/accompany_online_access%2FLunar%20Lullaby%20-%20SA%2FLunar%20Lullaby%20SSAA%20Soprano%201.mp3?alt=media&token=44a27ee1-d633-4dc7-b989-bee8c4a2319c",
    "name": "Soprano",
    "gain": 0.75,
    "muted": false,
    "soloed": false
  },
  {
    "src": "https://firebasestorage.googleapis.com/v0/b/a-ccompany.appspot.com/o/accompany_online_access%2FLunar%20Lullaby%20-%20SA%2FLunar%20Lullaby%20SSAA%20Soprano%202.mp3?alt=media&token=fd2f14e3-aee5-4444-91ff-af83f8caa905",
    "name": "Alto",
    "gain": 0.75
  },
  {
    "src": "https://firebasestorage.googleapis.com/v0/b/a-ccompany.appspot.com/o/accompany_online_access%2FLunar%20Lullaby%20-%20SA%2FLunar%20Lullaby%20SSAA%20Alto%201.mp3?alt=media&token=c889abd1-b309-4414-ae3d-59a1a1576bdd",
    "name": "Tenor",
    "gain": 0.75
  },
  {
    "src": "https://firebasestorage.googleapis.com/v0/b/a-ccompany.appspot.com/o/accompany_online_access%2FLunar%20Lullaby%20-%20SA%2FLunar%20Lullaby%20SSAA%20Alto%202.mp3?alt=media&token=1730d974-1a65-48ca-9ec5-e5ef61d09299",
    "name": "Bass",
    "gain": 0.75
  },
  {
    "src": "https://firebasestorage.googleapis.com/v0/b/a-ccompany.appspot.com/o/accompany_online_access%2FLunar%20Lullaby%20-%20SA%2FLunar%20Lullaby%20SSAA%20Piano.mp3?alt=media&token=bf52eaea-f836-4b6a-9972-6eb4cbd223c3",
    "name": "Piano",
    "gain": 0.75
  }
]).then(function() {
  //can do stuff with the playlist.
});

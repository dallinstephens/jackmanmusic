var options = {
  // webaudio api AudioContext
  ac: new (window.AudioContext || window.webkitAudioContext)(),

  // DOM container element REQUIRED
  container: document.getElementById("playlist"),

  // sample rate of the project. (used for correct peaks rendering)
  sampleRate: new (
    window.AudioContext || window.webkitAudioContext
  ).sampleRate(),

  // number of audio samples per waveform peak.
  // must be an entry in option: zoomLevels.
  samplesPerPixel: 4096,

  // whether to draw multiple channels or combine them.
  mono: true,

  // enables "exclusive solo" where solo switches between tracks
  exclSolo: false,

  // default fade curve type.
  fadeType: "logarithmic", // (logarithmic | linear | sCurve | exponential)

  // whether or not to include the time measure.
  timescale: false,

  // control panel on left side of waveform
  controls: {
    // whether or not to include the track controls
    show: false,

    // width of controls in pixels
    width: 150
  },

  colors: {
    // color of the wave background
    waveOutlineColor: "white",

    // color of the time ticks on the canvas
    timeColor: "grey",

    // color of the fade drawn on canvas
    fadeColor: "black"
  },

  // height in pixels of each canvas element a waveform is on.
  waveHeight: 128,

  // interaction state of the playlist
  // (cursor | select | fadein | fadeout | shift)
  state: "cursor",

  // (line | fill)
  seekStyle: "line",

  // Array of zoom levels in samples per pixel.
  // Smaller numbers have a greater zoom in.
  zoomLevels: [512, 1024, 2048, 4096],

  // Whether to automatically scroll the waveform while playing
  isAutomaticScroll: true,

  // configuration object for the annotations add on.
  annotationList: {
    // Array of annotations in [Aeneas](https://github.com/readbeyond/aeneas) JSON format
    annotations: [],

    // Whether the annotation texts will be in updateable contenteditable html elements
    editable: false,

    // User defined functions which can manipulate the loaded annotations
    controls: [
      {
        // class names for generated <i> tag separated by '.'
        class: "fa.fa-minus",

        // title attribute for the generated <i> tag
        title: "Reduce annotation end by 0.010s",

        // function which acts on the given annotation row
        // when the corresponding <i> is clicked.
        action: (annotation, i, annotations, opts) => {
          // @param Object annotation - current annotation
          // @param Number i - index of annotation
          // @param Array annotations - array of annotations in the playlist
          // @param Object opts - configuration options available
          //      - opts.linkEndpoints
        }
      }
    ],

    // If false when clicking an annotation id segment
    // playback will stop after segment completion.
    isContinuousPlay: false,

    // If true annotation endpoints will remain linked when dragged
    // if they were the same value before dragging started.
    linkEndpoints: false
  }
};

var playlist = WaveformPlaylist.init({
  samplesPerPixel: 1000,
  waveHeight: 100,
  container: document.getElementById("playlist"),
  isAutomaticScroll: true, // Whether to automatically scroll the waveform while playing
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
    "src": "SesereEeye_MO_CRT_SSA/Sesere%20Eeye%20Melody.mp3",
    "name": "Melody",
    "gain": 0.75,
    "muted": false,
    "soloed": false
  },
  {
    "src": "SesereEeye_MO_CRT_SSA/Sesere%20Eeye%20Harmony%201.mp3",
    "name": "Harmony 1",
    "gain": 0.75
  },
  {
    "src": "SesereEeye_MO_CRT_SSA/Sesere%20Eeye%20Harmony%202.mp3",
    "name": "Harmony 2",
    "gain": 0.75
  }
]).then(function() {
  //can do stuff with the playlist.
});

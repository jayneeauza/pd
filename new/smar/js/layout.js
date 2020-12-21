// $(document).ready(function() {
// 	alert("adf");
// 	screenfull.request();
// });

// Copyright (c) 2020 8th Wall, Inc.
//
// app.js is the main entry point for your 8th Wall app. Code here will execute after head.html
// is loaded, and before body.html is loaded.
import './index.css'
// add 'Tap + Hold to Add to Photos' prompt when user takes a photo
window.addEventListener('mediarecorder-photocomplete', () => {
  document.getElementById('overlay') ? document.getElementById('overlay').style.display = 'block'
    : document.body.insertAdjacentHTML('beforeend',
      '<div id="overlay"><div id="savePrompt">Tap + Hold to Add to Photos</div></div>')
})
// hide 'Tap + Hold to Add to Photos' prompt when user dismisses preview modal
window.addEventListener('mediarecorder-previewclosed', () => {
  if (document.getElementById('overlay')) {
    document.getElementById('overlay').style.display = 'none'
  }
})
const onxrloaded = () => {
  XR8.CanvasScreenshot.configure({maxDimension: 1920, jpgCompression: 100})
}
window.XR8 ? onxrloaded() : window.addEventListener('xrloaded', onxrloaded)

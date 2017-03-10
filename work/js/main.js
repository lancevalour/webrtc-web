'use strict';
navigator.getUserMedia = navigator.getUserMedia ||
navigator.webkitGetUserMedia || navigator.mozGetUserMedia;
var constraints = {
  audio: false,
  video: true
};
var localVideo = document.getElementById("localVideo")
// var localVideo = document.querySelector('video');
navigator.getUserMedia(constraints,
  function(stream){
    window.stream = stream;
    localVideo.srcObject = stream;
  }, function(error){
    console.log("getUserMedia error: " + error.name)
  });
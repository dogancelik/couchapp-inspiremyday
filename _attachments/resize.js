function resize() {
  var scaleSource = document.body.offsetWidth,
      scaleFactor = 0.07,                     
      maxScale = 200,
      minScale = 80;

  var fontSize = scaleSource * scaleFactor;
  if (fontSize > maxScale) fontSize = maxScale;
  if (fontSize < minScale) fontSize = minScale;
  document.body.style.fontSize = fontSize + '%';
}

window.onresize = resize;
window.onload = function() {
  resize();
};

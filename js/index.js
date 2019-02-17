var smallbox = document.querySelector('.smallbox');
var bigImg = document.querySelector('.bigbox img');
var hiddenbox = document.querySelector('.hiddenbox');

var smallWidth = parseFloat(getComputedStyle(smallbox)["width"]);
var smallHeight = parseFloat(getComputedStyle(smallbox)["height"]);
var maxLeft = parseFloat(getComputedStyle(hiddenbox)["width"]) - smallWidth;
var maxTop = parseFloat(getComputedStyle(hiddenbox)["height"]) - smallHeight;
hiddenbox.addEventListener("mousemove", function (event) {
  var left = event.offsetX - smallWidth / 2;
  var top = event.offsetY - smallHeight / 2;
  left = left > 0 ? left : 0;
  top = top > 0 ? top : 0;
  left = left > maxLeft ? maxLeft : left;
  top = top > maxTop ? maxTop : top;


  smallbox.style.left = left + "px";
  smallbox.style.top = top + "px";
  bigImg.style.left = -left * 2 + "px";
  bigImg.style.top = -top * 2 + "px";
})
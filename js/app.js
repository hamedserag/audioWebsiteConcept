function playmusic(sound) {
  var audio1 = new Audio("media/sound/01.ogg");
  var audio2 = new Audio("media/sound/02.ogg");
  var audio3 = new Audio("media/sound/03.ogg");
  var audio4 = new Audio("media/sound/04.ogg");

  switch (sound) {
    case 1:
      audio1.play();
      break;
    case 2:
      audio2.play();
      break;
    case 3:
      audio3.play();
      break;
    case 4:
      audio4.play();
      break;
    default:

  }
}

var canHover1 = canHover2 = canHover3 = canHover4 = true;
document.querySelector(".section1").onmouseover = function() {
  //Hovering
  playmusic(1);
}
document.querySelector(".section2").onmouseover = function() {
  //Hovering
  playmusic(2);
}
document.querySelector(".section3").onmouseover = function() {
  //Hovering
  playmusic(3);
}
document.querySelector(".section4").onmouseover = function() {
  //Hovering
  playmusic(4);
}

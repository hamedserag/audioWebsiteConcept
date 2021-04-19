// http://ahrengot.com/tutorials/greensock-javascript-animation

var $circle = $('.circle');

function moveCircle(e) {
	TweenLite.to($circle, 0, {
    css: {
      left: e.pageX,
      top: e.pageY
    }
  });
}

$(window).on('mousemove', moveCircle);

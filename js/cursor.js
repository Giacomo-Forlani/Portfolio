const $bigBall = document.querySelector('.cursor__ball--big');
const $smallBall = document.querySelector('.cursor__ball--small');
const $hoverables = document.querySelectorAll('.hoverable');
const $noCursor = document.querySelectorAll('.no-cursor');

// Listeners
document.body.addEventListener('mousemove', onMouseMove);
for (let i = 0; i < $hoverables.length; i++) {
  $hoverables[i].addEventListener('mouseenter', onMouseHover);
  $hoverables[i].addEventListener('mouseleave', onMouseHoverOut);
}

for (let i = 0; i < $noCursor.length; i++) {
  $noCursor[i].addEventListener('mouseenter', hideCursor);
  $noCursor[i].addEventListener('mouseleave', showCursor);
}

// Move the cursor
function onMouseMove(e) {
  TweenMax.to($bigBall, .4, {
    x: e.pageX - 15 - window.scrollX,
    y: e.pageY - 15 - window.scrollY });

  TweenMax.to($smallBall, .1, {
    x: e.pageX - 5 - window.scrollX,
    y: e.pageY - 7 - window.scrollY });

}

// Hover an element
function onMouseHover() {
  TweenMax.to($bigBall, .3, {
    scale: 4 });

}
function onMouseHoverOut() {
  TweenMax.to($bigBall, .3, {
    scale: 1 });
}

// Hide the cursor
function hideCursor() {
  $bigBall.style.display = 'none';
  $smallBall.style.display = 'none';
}

// Show the cursor
function showCursor() {
  $bigBall.style.display = 'block';
  $smallBall.style.display = 'block';
}

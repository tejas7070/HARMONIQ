document.addEventListener('mousemove', function(e) {
  let cursorTrail = document.createElement('div');
  cursorTrail.className = 'cursor-trail';
  cursorTrail.style.left = `${e.pageX}px`;
  cursorTrail.style.top = `${e.pageY}px`;
  document.body.appendChild(cursorTrail);

  setTimeout(function() {
      cursorTrail.remove();
  }, 1000);
});
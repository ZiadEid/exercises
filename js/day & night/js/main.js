let stars = document.getElementById('stars');
let moon = document.getElementById('moon');
let mountains1 = document.getElementById('mountains1');
let mountains2 = document.getElementById('mountains2');
let river = document.getElementById('river');
let boat = document.getElementById('boat');
let seadra = document.querySelector('.seadra');

window.addEventListener('scroll', function() {
  let value = scrollY;
  stars.style.left = value + 'px';
  moon.style.top = value * 3 + 'px';
  mountains1.style.top = value * 2 + 'px';
  mountains2.style.top = value * 1.5 + 'px';
  boat.style.top = value + 'px';
  boat.style.left = value * 3 + 'px';
  river.style.top = value + 'px';
  seadra.style.fontSize = value + 'px';
  if (value >= 67) {
    seadra.style.fontSize = 67 + 'px';
  }
  if(value > 522) {
    seadra.style.display = "none";
  }
  else {
    seadra.style.display = "block";
  }
  if (value >= 160) {
    this.document.querySelector('.main').style.background = 'linear-gradient(#376281, #10001f)';
  }
  else {
    this.document.querySelector('.main').style.background = 'linear-gradient(#200016, #10001f)';
  }
})
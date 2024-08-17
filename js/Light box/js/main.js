
var lightBox = document.getElementById('boxLight');
var boxImg = document.getElementById('box-image');
var imgList = document.querySelectorAll(".item img");
var arrayImgList = Array.from(imgList);
var sliderIndex;
var nextArrow = document.getElementById('next');
var prevArrow = document.getElementById('prev');
var closeBoxLight = document.getElementById('close');

for (var i = 0; i < imgList.length; i++) {
  imgList[i].addEventListener('click', function (e) {
    lightBox.style.display = "flex";
    var imgSrc = e.target.getAttribute('src');
    boxImg.style.backgroundImage = `url(${imgSrc})`;
    sliderIndex = arrayImgList.indexOf(e.target);
  })
}

function slide(v) {
  sliderIndex = sliderIndex + v;
  if (sliderIndex == arrayImgList.length) {
    sliderIndex = 0;
  }
  else if (sliderIndex == -1) {
    sliderIndex = arrayImgList.length - 1;
  }
  var imgSrc = imgList[sliderIndex].getAttribute('src');
  boxImg.style.backgroundImage = `url(${imgSrc})`;
}
nextArrow.addEventListener('click', function () {
  slide(1);
})
prevArrow.addEventListener('click', function () {
  slide(-1);
})
function hideBoxLight() {
  lightBox.style.display = `none`;
}
closeBoxLight.addEventListener('click', function () {
  hideBoxLight();
})

document.addEventListener('keydown', function (e) {
  if (e.code === "ArrowRight") {
    slide(1);
  }
  else if (e.code === "ArrowLeft") {
    slide(-1);
  }
  else if (e.code === "Escape") {
    hideBoxLight();
  }
})
document.addEventListener('click', function(e) {
  if(e.target === lightBox) {
    hideBoxLight();
  }
})
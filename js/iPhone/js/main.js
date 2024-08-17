let landing = document.getElementById('landing');
let activeNav = document.getElementById('active');
let mainBtn = document.getElementById('mainBtn');
let mainimg = document.getElementById('mainimg');
let iPhones = document.querySelectorAll('.landing main .galary img')

for (let i = 0; i < iPhones.length; i++) {
  iPhones[i].addEventListener('click', function (e) {
    mainimg.setAttribute("src", `${e.target.src}`);
    if (this.getAttribute('alt') === "blue iPhone") {
      landing.style.backgroundColor = "#09c";
    } else if (this.getAttribute('alt') === "black iPhone") {
      landing.style.backgroundColor = "#212529";
    } else if (this.getAttribute('alt') === "gold iPhone") {
      landing.style.backgroundColor = "gold";
    } else if (this.getAttribute('alt') === "purple iPhone") {
      landing.style.backgroundColor = "purple";
    }
  });
}
function getPosts() {
  return new Promise(function (callback) {
    var myFirstRow = document.getElementById('firstRowDiv');
    var myHttp = new XMLHttpRequest();
    var myPosts = []
    myHttp.open("GET", "http://jsonplaceholder.typicode.com/posts");
    myHttp.send();
    myHttp.addEventListener("readystatechange", function () {
      if (myHttp.readyState == 4 && myHttp.status == 200) {
        myPosts = JSON.parse(myHttp.response);
        var box = ``;
        for (var i = 0; i < 10; i++) {
          box +=
            `
          <div class="col-md-6">
            <div class="post">
              <h3>${myPosts[i].title}</h3>
              <p>${myPosts[i].body}</p>
            </div>
          </div>
          `
        }
        myFirstRow.innerHTML = box;
        callback();
      }
    })
  })
}
function getEgSports() {
  return new Promise(function (callback) {
    var mySecondRow = document.getElementById('secondRowDiv');
    var myHttp = new XMLHttpRequest();
    var mySports = []
    myHttp.open("GET", "https://newsapi.org/v2/top-headlines?country=eg&category=sports&apiKey=27d6120092e543cba1b75d9d3c7a2a43");
    myHttp.send();
    myHttp.addEventListener("readystatechange", function () {
      if (myHttp.readyState == 4 && myHttp.status == 200) {
        mySports = JSON.parse(myHttp.response);
        var box = ``;
        for (var i = 0; i < mySports.length; i++) {
          box +=
            `
          <div class="col-md-6">
            <div class="post">
              <img src="${mySports[i].urlToImage == null ? 'imgs/u.jfif' : mySports[i].urlToImage}" class="w-100"/>
              <h3>${mySports[i].title}</h3>
              <p>${mySports[i].description}</p>
            </div>
          </div>
          `
        }
        mySecondRow.innerHTML = box;
        callback();
      }
    })
  });
}
function getEgBusiness() {
  return new Promise(function (callback) {
    var myThiredRow = document.getElementById('thiredRowDiv');
    var myHttp = new XMLHttpRequest();
    var myBusiness = []
    myHttp.open("GET", "https://newsapi.org/v2/top-headlines?country=eg&category=business&apiKey=27d6120092e543cba1b75d9d3c7a2a43");
    myHttp.send();
    myHttp.addEventListener("readystatechange", function () {
      if (myHttp.readyState == 4 && myHttp.status == 200) {
        myBusiness = JSON.parse(myHttp.response);
        var box = ``;
        for (var i = 0; i < myBusiness.length; i++) {
          box +=
            `
          <div class="col-md-6">
            <div class="post">
              <img src="${myBusiness[i].urlToImage == null ? 'imgs/u.jfif' : myBusiness[i].urlToImage}" class="w-100"/>
              <h3>${myBusiness[i].title}</h3>
              <p>${myBusiness[i].description}</p>
            </div>
          </div>
          `
        }
        myThiredRow.innerHTML = box;
        callback();
      }
    })
  })
}
function endMenu() {
  console.log('Belhana')
}


getPosts()
  .then(function () { return getEgSports() })
  .then(function () { return getEgBusiness() })
  .then(function () { endMenu() })
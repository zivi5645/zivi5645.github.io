
async function fetchimg() {
  var img = await fetch("https://aws.random.cat/meow");
  var json = await img.json();
  console.log(json);
  console.log("cat elt is", catimage);
  catimage.src = json.file; // -כאן התיקון
  //-היה חסר רק את ה-
  //.file
  console.log("inserted cat at", catimage.src);
  catimage.style.display='blok'
}
var miutes = document.querySelector(".miutes");
var seconds = document.querySelector(".seconds");
var start = document.querySelector(".start");
var stoop = document.querySelector(".stop");
var idInterval;
var catimage = document.querySelector("img");

start.addEventListener("click", function () {
  // console.log(seconds.value);
  var time = seconds.value;
  var timeM = miutes.value;
  var clock = document.querySelector("#clockmin");
  // console.log(clock);
  idInterval = setInterval(function () {
    if (time > 0) {
      time--;
      clock.innerText = "0" + timeM + ":" + time;
    } else {
      timeM--;
      time = 5;
      clock.innerText = "0" + timeM + ":" + time;
    }
    if (time < 10) {
      clock.innerText =  timeM + ":" +"0"+ time;
    }
    if (timeM < 0) {
      clearInterval(idInterval);
      fetchimg();
      // catimage.style.display='blok'
    }
    // console.log(clock);
  }, 1000);
  
});
stoop.addEventListener("click", function () {
  clearInterval(idInterval);
});



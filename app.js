const body = document.querySelector("body");
const canv = document.querySelector("canvas");
const ctx = canv.getContext("2d");
const leftButton = document.querySelector("#left-button");
const rightButton = document.querySelector("#right-button");

let img1 = new Image();
img1.src = "dog.jpg";
let img2 = new Image();
img2.src = "rome.png";
let img3 = new Image();
img3.src = "space.jpg";


img1.addEventListener("load", (e) => {
  ctx.drawImage(img1, 0, 0, canv.width, canv.height);
  leftButton.addEventListener("click", clickLeft);
  rightButton.addEventListener("click", clickRight);
});
let x = 0;
let timerInterval = null;
let canClick = true;

let dx = 50;
let ax = 5;
let images = [];

let urls = ["dog.jpg", "rome.png", "space.jpg", "planet.jpg", "battle.jpg"];

for (const u of urls) {
  let i = new Image();
  i.src = u;
  images.push(i);
}

let imgIndex = 0;

function clickLeft(e) {
  if (canClick) {
    timerInterval = setInterval(() => { 
      canClick = false;
      ctx.clearRect(0, 0, canv.width, canv.height);
      ctx.drawImage(images[imgIndex], x, 0, canv.width, canv.height);
      if (imgIndex == images.length - 1) {
        ctx.drawImage(images[0], x + canv.width, 0, canv.width, canv.height);
      } else {
        ctx.drawImage(images[imgIndex + 1], x + canv.width, 0, canv.width, canv.height);
      }
      x -= 50;
      if(x < -canv.width) {
        stopInterval();
        imgIndex += 1;
        if (imgIndex >= images.length) {
          imgIndex = 0;
        }
      }
    }, 30);
  }
}
// 434 982 6000 financial aid
// 434 982 4555
function stopInterval() {
  clearInterval(timerInterval);
  canClick = true;
  x = 0;
}

function clickRight(e) {
  if (canClick) {
    timerInterval = setInterval(() => { 
      canClick = false;
      ctx.clearRect(0, 0, canv.width, canv.height);
      ctx.drawImage(images[imgIndex], x, 0, canv.width, canv.height);
      if (imgIndex == 0) {
        ctx.drawImage(images[images.length - 1], x - canv.width, 0, canv.width, canv.height);
      } else {
        ctx.drawImage(images[imgIndex - 1], x - canv.width, 0, canv.width, canv.height);
      }
      x += 50;
      if(x > canv.width) {
        stopInterval();
        imgIndex -= 1;
        if (imgIndex < 0) {
          imgIndex = images.length - 1;
        }
      }
    }, 30);
  }
}

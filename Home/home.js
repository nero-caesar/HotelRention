const bgImage = document.getElementById('bgImage');
const bgVideo = document.querySelector('.bg-video');
function goLeft() {
    bgImage.style.opacity = '0';
    bgVideo.style.opacity = '1';
}
function goRight() {
    bgImage.style.opacity = '1';
    bgVideo.style.opacity = '0';
}

const slider = document.querySelector('.section5-div3');
slider.innerHTML += slider.innerHTML
setInterval(autoScroll,10);
function autoScroll(){
    slider.scrollLeft += 2;

    if(slider.scrollLeft >= slider.scrollWidth/2){
        slider.scrollLeft += 0;
    }
}

const box = document.getElementById('box');
const box1 = document.getElementById('box1')
const nextBtn = document.getElementById('nextBtn');
const prevBtn = document.getElementById('prevBtn');
const nextBtn1 = document.getElementById('nextBtn1');
const prevBtn1 = document.getElementById('prevBtn1');

const images = [
  '/Assets/home/room4.png',
  '/Assets/home/room3.png',
  '/Assets/home/room2.png'
];

let index = 0;

box.style.backgroundImage = `url('${images[index]}')`;

nextBtn.addEventListener('click', () => {
  index = (index + 1) % images.length;
  box.style.backgroundImage = `url('${images[index]}')`;
});

prevBtn.addEventListener('click', () => {
  index = (index - 1 + images.length) % images.length;
  box.style.backgroundImage = `url('${images[index]}')`;
});

const images1 = [
  '/Assets/home/room1.png',
  '/Assets/home/room3.png',
  '/Assets/home/room2.png'
];

let index1 = 0;

box1.style.backgroundImage = `url('${images1[index1]}')`;

nextBtn1.addEventListener('click', () => {
  index1 = (index1 + 1) % images1.length;
  box1.style.backgroundImage = `url('${images1[index1]}')`;
});

prevBtn1.addEventListener('click', () => {
  index1 = (index1 - 1 + images1.length) % images1.length;
  box1.style.backgroundImage = `url('${images1[index1]}')`;
});

let line = document.querySelector('.nav-line');
let menu = document.querySelector('.menu');
let menuOpen = false;

line.addEventListener('click', function () {
  line.classList.toggle('active');
  if (menuOpen) {
    menu.style.top = '-50vh';
  } else {
    menu.style.top = '10vh';
  }
  menuOpen = !menuOpen;
});
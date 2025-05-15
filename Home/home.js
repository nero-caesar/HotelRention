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
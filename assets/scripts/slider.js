const back = document.querySelector('#back');
const next = document.querySelector('#next');
const videos = ["./assets/video/1.mp4", "assets/video/2.mp4", "assets/video/3.mp4", "assets/video/4.mp4", "assets/video/videoSergey.mp4"]
const vd1 = document.querySelector('#myVideo');

let i = 0;

next.addEventListener('click', () => {
    i++;
    if (i > videos.length - 1) {
        i = 0;
    }
    document.querySelector('#myVideo').src = videos[i];
})

back.addEventListener('click', () => {
    i--;
    if (i < 0) {
        i = videos.length - 1;
    }
    document.querySelector('#myVideo').src = videos[i];
})

vd1.onended = function() {
    i++;
    if (i > videos.length - 1) {
        i = 0;
    }
    document.querySelector('#myVideo').src = videos[i];
}
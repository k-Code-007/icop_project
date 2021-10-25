const back = document.querySelector('#back');
const next = document.querySelector('#next');
const videos = ["./assets/video/videoSergey.mp4", "assets/video/videoSergey.mp4", "assets/video/videoSergey.mp4", "assets/video/videoSergey.mp4", "assets/video/videoSergey.mp4"]


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
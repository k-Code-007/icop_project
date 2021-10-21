gsap.from(".slogan1", { x: -500, opacity: 0, duration: 2 })



window.onscroll = () => {
    const myBtn = document.querySelector('.clickBtnGoTop');
    if (document.body.scrollTop > 500 || document.documentElement.scrollTop > 500) {
        myBtn.style.display = 'block';
    } else {
        myBtn.style.display = 'none';
    }
}

function topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}
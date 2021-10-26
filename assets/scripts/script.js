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
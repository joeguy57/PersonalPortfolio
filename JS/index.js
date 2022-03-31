const navToggle = document.querySelector('.ham');
const menu = document.querySelector('.menu')
const navLinks = document.querySelectorAll('.nav__link');
const portfolioLinks = document.querySelectorAll('.portfolio__item img');

function noscroll() {
    window.scrollTo(0,0);
}

navToggle.addEventListener('click',openNav);

function openNav(){
    if (document.getElementById("myNav").style.width === ""){
        document.getElementById("myNav").style.width = "100%";
        window.addEventListener('scroll',noscroll);
    }
    else {
        document.getElementById("myNav").style.width = "";
        window.removeEventListener('scroll', noscroll);
    }
}



navLinks.forEach(link => {
    link.addEventListener('click', () => {
        document.body.classList.remove('nav-open');
        enableScroll()
    });
});

portfolioLinks.forEach(portLink => {
    portLink.addEventListener('click', () => {
        let srcLink = portLink.src;
        localStorage.setItem('imageNeeded', srcLink)
    })
})

const navToggle = document.querySelector('.nav-toggle');
const navLinks = document.querySelectorAll('.nav__link');
const portfolioLinks = document.querySelectorAll('.portfolio__item img');

function noScroll() {
    window.scrollTo(0,0);
}

navToggle.addEventListener('click',()=>{
    document.body.classList.toggle('nav-open');
    window.addEventListener('scroll',noScroll);
});

navLinks.forEach(link => {
    link.addEventListener('click', ()=>{
        document.body.classList.remove('nav-open');
        window.removeEventListener('scroll', noScroll)
    });
});

portfolioLinks.forEach(portLink => {
    portLink.addEventListener('click', ()=>{
        let srcLink = portLink.src;
        localStorage.setItem('imageNeeded',srcLink)
    })
})

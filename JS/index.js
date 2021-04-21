const navToggle = document.querySelector('.nav-toggle');
const navLinks = document.querySelectorAll('.nav__link');
const portfolioLinks = document.querySelectorAll('.portfolio__item');
navToggle.addEventListener('click',()=>{
    document.body.classList.toggle('nav-open');
});

navLinks.forEach(link => {
    link.addEventListener('click', ()=>{
        document.body.classList.remove('nav-open');
    });
});

portfolioLinks.forEach(portLink => {
    portLink.addEventListener('click', ()=>{
        let srcLink = portLink.querySelector('img').src;
        localStorage.setItem('imageNeeded',srcLink)
    })
})

const navToggle = document.querySelector(".ham");
const menu = document.querySelector(".menu");
const navLinks = document.querySelectorAll(".nav__link");
const hamMenu = document.querySelector('.hamMenu')
const portfolioLinks = document.querySelectorAll(".portfolio__item img");

function noscroll() {
  window.scrollTo(0, 0);
}

navToggle.addEventListener("click", openNav);

function openNav() {
  if (document.getElementById("myNav").style.width === "") {
    document.getElementById("myNav").style.width = "100%";
    hamMenu.classList.add("fixed-menu");
  } else {
    document.getElementById("myNav").style.width = "";
    hamMenu.classList.remove("fixed-menu");
  }
}

navLinks.forEach((link) => {
  link.addEventListener("click", (e) => {
    e.preventDefault();
    const sectionId = e.target.getAttribute("href");
    try {
      const section = document.querySelector(sectionId);
      section.scrollIntoView({ behavior: "smooth" });
      document.getElementById("myNav").style.width = "";
      hamMenu.classList.remove("fixed-menu");
      hamMenu.classList.toggle("active");
    } catch (error) {
      let link = '/' + sectionId;
      link = link.replace('.html/', '.html');
      window.open(link,"_self");
    }
    
    
  });
});

portfolioLinks.forEach((portLink) => {
  portLink.addEventListener("click", () => {
    let srcLink = portLink.src;
    localStorage.setItem("imageNeeded", srcLink);
  });
});

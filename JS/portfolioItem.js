const getImage = localStorage.getItem('imageNeeded');
const introImage = document.querySelector('.intro__img');
const portImage = document.querySelector('.portfolio-item-individual__img')

//Set up texts
const portfolioStrong = document.querySelector('.section__title--intro strong');


//Here We will use srcTag[2] in order to make our comparison.
let srcTag = getImage.split("Portfolio/");
let projectText ;
let title;
let intitalPara;
let firstPara;
let secondPara;
switch (srcTag[2]){
    case "port__1.jpg":
        title = "";
        projectText = "Accessibilities Tool";
        break;
    case "port__2.jpg":
        title = "";
        projectText = "Accessibilities Tool";
        break;
    case "port__3.jpg":
        title = "";
        projectText = "Accessibilities Tool";
        break;
    case "port__4.jpg":
        title = "";
        projectText = "Accessibilities Tool";
        break;
    default:
        title = "Project Does not Exist";
        projectText = "No Image was Found";
        break;
}

introImage.src = getImage;
introImage.alt = "This is the main Photo"
portImage.src = getImage;
portImage.alt = 'This is the Portfolio Image'

portfolioStrong.innerHTML = projectText;
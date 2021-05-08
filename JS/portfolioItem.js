const getImage = localStorage.getItem('imageNeeded');
const introImage = document.querySelector('.intro__img');
const portImage = document.querySelector('.portfolio-item-individual__img')

//Set up texts
const portfolioTitle = document.querySelector('.section__title--intro');
const portfolioSubtitle = document.querySelector('.section__subtitle--intro');
const portfolioInitPara = document.querySelector('.portfolio-item-individual__initialText');
const portfolioFirstPara = document.querySelector('.portfolio-item-individual__firstParagraph');
const portfolioSecondPara = document.querySelector('.portfolio-item-individual__secondParagraph');
const portfolioTech = document.querySelector('.portfolio-item-individual__technologies');
const portLink = document.querySelector('.portfolio-item-individual .btn');
const portfolioTeam = document.querySelector('.portfolio-item-individual__team-members');

//Here We will use srcTag[2] in order to make our comparison.
let srcTag = getImage.split("Portfolio/");
let projectText;
let title;
let subtitle;
let initialPara;
let firstPara;
let secondPara;
let technologies;
let link;
let teamMember;
let needsTeam = false;

//Set to 1 before merging with main
switch (srcTag[2]) {
    case "port__1.jpg":
        title = "The";
        projectText = "Accessibilities Tool";
        subtitle = "Made to Change the Viewing Experience For All";
        initialPara = "This application was created from the collaborative work of my " +
            "team and was entered into a Hackathon. This project placed <strong>4<sup>th</sup></strong> in all of Canada.";
        firstPara = "The goal of this application is to improve the web surfing experience, " +
            "of those who are visually impaired. This consists of two features that help those with poor " +
            "eyesight and those who are color blind. " +
            "These were two options picked out of a wide variety of disabilities.";
        secondPara = "The target audience of the application are University student." +
            " The application was built around the structure of the Chrome Extension, to accessible to all and aid students." +
            "On average students use their laptop for reading purposes , which can be a strain for the eyes." +
            " With this in mind, I believe this Chrome extension to be of extreme necessity for those in need.";
        technologies = "HTML, JavaScript, CSS, Bootstrap";
        link = "https://github.com/Harshil-V/Hackvill2021_Accessibility_Chrome_Ext";
        teamMember = "<a target='_blank' href='https://github.com/ArnoldGihozo'>Arnold Gihozo</a>, " +
            "<a target='_blank' href='https://github.com/petreman'>Keegan Petremann</a>, " +
            "<a target='_blank' href='https://github.com/joeguy57'>Joseph Menezes</a> " +
            "and <a target='_blank' href='https://github.com/Harshil-V'>Harshil Vyas</a>."
        needsTeam = true;
        break;
    case "port__2.jpg":
        title = "Your Recycling Teacher";
        projectText = "URecycle";
        subtitle = "A Better Way To Recycle";
        initialPara = "This application was created from the collaborative work of my " +
            "team and was entered into a FURCA. Winning an award in Outstanding Communication - Demonstration.";
        firstPara = "Created to tackle the problem of waste contamination within Augustana. " +
            "Augustana campus has had a waste contamination problem for quite some time now and it is our goal " +
            "to try and educate students and faculty to potentially reduce these contamination levels.";
        secondPara = "To achieve this, we decided to implement a game aspect for students, and a \"waste guide\" " +
            "for faculty. This waste guide allows for users to enter what item they currently want to dispose of, " +
            "and the application will search through a database in hopes of letting the user know" +
            " where the item should be placed.";
        technologies = "Android Studio, Java, XML, FireBase";
        link = "https://github.com/joeguy57/personalWasteSort";
        teamMember = "<a target='_blank' href='https://github.com/jwmatson'>Jared Matson</a>, " +
            "<a target='_blank' href='https://github.com/joeguy57'>Joseph Menezes</a> and " +
            "<a target='_blank' href='https://github.com/Harshil-V'>Harshil Vyas</a>."
        needsTeam = true;
        break;
    case "port__3.jpg":
        title = "A game of";
        projectText = "Tetris";
        subtitle = "A visual arcade game made";
        initialPara = "This is a personal project, created to test the limits of JavaScript." +
            " Creating an old game using modern architecture from the comfort of your home.";
        firstPara = "Tetris is a game, in which a random selection of shapes is chosen and traverses through " +
            "a restricted container. This project, showcases the integration of math and programming. " +
            "This repo actively demonstrates my ability to create a website, whilst creating functionality in the " +
            "back-end using Javascript";
        secondPara = "Some interesting implementation that can be observed from this project, is that of " +
            "a next step, which will show the next shape to be sent. This website works with the use of the arrow keys" +
            " allowing for the shapes to change position or to change directions.";
        technologies = "HTML, JavaScript, CSS";
        link = "https://github.com/joeguy57/TetrisJS";
        break;
    case "port__4.jpg":
        title = "A game of ";
        projectText = "Rock, Paper, Scissors";
        subtitle = "A traditional game, made for the 21<sup>st</sup> century";
        initialPara = "This is a personal project, inspired by various assignments done at the University of Alberta." +
            "Done so to test the limits of my own UI capabilities as with this application. Along with learning a " +
            "new language (JavaScript) in 3 weeks.";
        firstPara = "Rock, Paper, Scissors is an age old game, played by using the hand signs of each item, " +
            "i.e. a closed fist represents a rock. This game is played on a website, displaying a score and also " +
            "changing effects for different win conditions. Such as turning green if round is won.";
        secondPara = "In creating this application, I learned many quintessential skills that would make a better" +
            "programmer. In learning Javascript, I am able to connect the user interface and the programming, in order" +
            "to enhance the user experience.";
        technologies = "HTML, JavaScript, CSS";
        link = "https://github.com/joeguy57/RockPaperScissorsJS";
        break;
    default:
        title = "Project Does not Exist";
        projectText = "No Image was Found";
        break;
}

//Creating the webpage
introImage.src = getImage;
introImage.alt = "This is the main Photo"
portImage.src = getImage;
portImage.alt = 'This is the Portfolio Image'
portLink.href = link;

portfolioTitle.innerHTML = title + "<strong>" + projectText + "</strong>";
portfolioSubtitle.innerHTML = subtitle;
portfolioInitPara.innerHTML = initialPara;
portfolioFirstPara.innerHTML = firstPara;
portfolioSecondPara.innerHTML= secondPara;
portfolioTech.innerHTML = "Technologies Used: " + "<strong>" + technologies + "</strong>";

if (needsTeam){
    portfolioTeam.innerHTML = "Developers: " + "<strong>" + teamMember + "</strong>";
}
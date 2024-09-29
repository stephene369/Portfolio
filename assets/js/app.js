// // Fonction pour surveiller et ajuster le zoom
// function surveillerEtAjusterZoom() {
//     // Vérifier si le zoom est différent de 100%
//     if (Math.abs(window.devicePixelRatio - 1) > 0.001) {
//         // Réinitialiser le zoom à 100%
//         document.body.style.zoom = "100%"
//     }
// }

// // Surveiller en temps réel
// setInterval(surveillerEtAjusterZoom, 100); // Vérifier toutes les 100 millisecondes

function myMenuFunction() {
    var menuBtn = document.getElementById('myNavMenu');


    if (menuBtn.className === "nav-menu") {
        menuBtn.className += " responsive"
    } else {
        menuBtn.className = "nav-menu"
    }

}


// Fonction pour changer la couleur du bouton
function changeButtonColor() {
    const colors = [
        '#FF0000', '#00FF00', '#0000FF', '#FFFF00', '#FF00FF',
        '#00FFFF', '#FFA500', '#800080', '#008000', '#FFC0CB',
        '#A52A2A', '#808080', '#FFD700', '#4B0082', '#40E0D0'
    ]
    const button = document.getElementById('downloadApk')
    if (!button) {
        console.error("Le bouton 'downloadApk' n'a pas été trouvé.")
        return
    }
    let currentIndex = 0

    function changeColor() {
        button.style.background = colors[currentIndex]
        currentIndex = (currentIndex + 1) % colors.length
    }

    // Changer la couleur immédiatement
    changeColor()

    // Puis changer la couleur toutes les 300 ms
    setInterval(changeColor, 300)
}

// Appeler la fonction lorsque le DOM est chargé
document.addEventListener('DOMContentLoaded', changeButtonColor)

// Function to change button color
function changeButtonColor() {
    const buttons = document.querySelectorAll('#downloadCv');
    const colors = [
        'rgba(110, 87, 224, 0.3)',
        'rgba(0, 201, 250, 0.3)',
        'rgba(192, 166, 49, 0.3)',
        'rgba(255, 69, 0, 0.3)',
        'rgba(50, 205, 50, 0.3)',
        'rgba(138, 43, 226, 0.3)',
        'rgba(255, 105, 180, 0.3)',
        'rgba(30, 144, 255, 0.3)',
        'rgba(255, 215, 0, 0.3)',
        'rgba(255, 99, 71, 0.3)',
        'rgba(0, 250, 154, 0.3)',
        'rgba(147, 112, 219, 0.3)',
        'rgba(32, 178, 170, 0.3)',
        'rgba(255, 20, 147, 0.3)',
        'rgba(0, 206, 209, 0.3)',
        'rgba(255, 160, 122, 0.3)',
        'rgba(123, 104, 238, 0.3)',
        'rgba(0, 255, 127, 0.3)',
        'rgba(255, 0, 255, 0.3)',
        'rgba(65, 105, 225, 0.3)',
        'rgba(255, 140, 0, 0.3)',
        'rgba(0, 128, 128, 0.3)',
        'rgba(218, 112, 214, 0.3)',
        'rgba(255, 192, 203, 0.3)',
        'rgba(100, 149, 237, 0.3)',
        'rgba(154, 205, 50, 0.3)',
        'rgba(255, 127, 80, 0.3)',
        'rgba(186, 85, 211, 0.3)',
        'rgba(240, 230, 140, 0.3)',
        'rgba(70, 130, 180, 0.3)']; // 20 different colors with 0.3 alpha

    const reversedColors = colors.map(color => color.replace('0.3', '0.1')).reverse();
    let currentIndex = 0;   

    setInterval(() => {
        buttons.forEach((button, index) => {
            if (index === 0) {
                button.style.backgroundColor = colors[currentIndex];
            } else if (index === 1) {
                button.style.backgroundColor = reversedColors[currentIndex];
            }
        });
        currentIndex = (currentIndex + 1) % colors.length;
    }, 150); // Change color every 150 milliseconds
}



// Call the function when the page loads
window.onload = changeButtonColor; window.onscroll = function () { headerShadow() };

function headerShadow() {
    const navHeader = document.getElementById('header');
    const downloadCv = document.getElementById('downloadCv');

    if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
        navHeader.style.boxShadow = '30px 3px 50px rgba(0, 0, 250, 0.3)';
        navHeader.style.height = "70px"
        navHeader.style.lineHeight = '70px';

        downloadCv.style.boxShadow = '0 0 20px rgba(0, 0, 250, 0.2)';
    } else {
        navHeader.style.boxShadow = 'none';
        navHeader.style.height = "90px"
        navHeader.style.lineHeight = '90px';

        downloadCv.style.boxShadow = 'none';
    }
}



var typingEffect = new Typed(".typedText", {
    strings: [
        "DevOps Engineer",
        "Cloud Engineer",
        "Web Developer",
        "Software Engineer",
        "Full Stack Developer",
        "Python Developer",
        "Freelancer",
    ],
    typeSpeed: 100,
    backSpeed: 80,
    loop: true,
    backDelay: 1100,
})

var typingEffect2 = new Typed(".featured-text-info-text", {
    strings: [
        `
Experienced in Python Web-development|Software Engineer|
Full stack Developer (React, Next, Tailwindcss, Appwrite, ...)|
Cloud Engineer| DevOps, AWS Solution Architect|
Data Engineer| Data Scientist| Machine Learning Engineer ...
`
    ],
    typeSpeed: 10,
    backSpeed: 1000,
    loop: false,
    backDelay: 100,
})

// const sr = ScrollReveal({
//     origin: 'top',
//     distance: '60px',
//     duration: 2500,
//     delay: 400,
//     reset: true
// });

// sr.reveal(".featured-box", { delay: 100, origin: "bottom" });
// sr.reveal(".featured-text-card", { delay: 100, origin: "bottom" });
// sr.reveal(".featured-name", { delay: 100, origin: "left" });
// sr.reveal(".featured-text-info", { delay: 100, origin: "left" });
// sr.reveal(".featured-image", { delay: 100, origin: "right" });
// sr.reveal(".social_icons", { delay: 100, origin: "left" });
// sr.reveal("#downloadCv", { delay: 100, origin: "left" });





var modal = document.getElementById("projectModal");
var span = document.getElementsByClassName("close")[0];
var projectBoxes = document.querySelectorAll('.project-box');

projectBoxes.forEach(function(box) {
  box.onclick = function() {
    modal.style.display = "flex";
    document.getElementById('modalBody').innerHTML = this.innerHTML;
  }
});

span.onclick = function() {
  modal.style.display = "none";
}

window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}



function myMenuFunction(){
    var menuBtn = document.getElementById('myNavMenu');


    if (menuBtn.className === "nav-menu"){
        menuBtn.className += " responsive"
    }else{
        menuBtn.className = "nav-menu"
    }

}







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
window.onload = changeButtonColor;window.onscroll = function(){ headerShadow() }; 

function headerShadow(){
    const navHeader =  document.getElementById('header');
    const downloadCv = document.getElementById('downloadCv');

    if(document.body.scrollTop > 50 || document.documentElement.scrollTop > 50){
        navHeader.style.boxShadow = '30px 3px 50px rgba(0, 0, 250, 0.3)';
        navHeader.style.height = "70px"
        navHeader.style.lineHeight = '70px';

        downloadCv.style.boxShadow = '0 0 20px rgba(0, 0, 250, 0.2)';
    }else{
        navHeader.style.boxShadow = 'none';
        navHeader.style.height = "90px"
        navHeader.style.lineHeight = '90px';

        downloadCv.style.boxShadow = 'none';
    }
}



var typingEffect = new Typed(".typedText", {
    strings: ["Web Developer", "Web Designer", "Freelancer"],
    typeSpeed: 100,
    backSpeed: 80,
    loop: true,
    backDelay: 1500,
})


const sr = ScrollReveal({
    origin: 'top',
    distance: '60px',
    duration: 2500,
    delay: 400,
    reset: true
});

sr.reveal(".featured-box", { delay: 100, origin: "bottom" });
sr.reveal(".featured-text-card", { delay: 200, origin: "bottom" });
sr.reveal(".featured-name", { delay: 100, origin: "left" });
sr.reveal(".featured-text-info", { delay: 500, origin: "left" });
sr.reveal(".featured-image", { delay: 500, origin: "right" });
sr.reveal(".social_icons", { delay: 500, origin: "left" });
sr.reveal("#downloadCv", { delay: 500, origin: "left" });

sr.reveal(".section", { delay: 500, origin: "left" });

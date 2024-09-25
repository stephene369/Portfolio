










// Function to change button color
function changeButtonColor() {
    const button = document.getElementById('downloadCv');
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
    let currentIndex = 0;
    setInterval(() => {
        button.style.backgroundColor = colors[currentIndex];
        currentIndex = (currentIndex + 1) % colors.length;
    }, 150); // Change color every 2 seconds
}

// Call the function when the page loads
window.onload = changeButtonColor;

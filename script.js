// Set the target date (Feb 1)
const targetDate = new Date("Feb 1, 2025 00:00:00").getTime();

function updateCountdown() {
    const now = new Date().getTime();
    const timeLeft = targetDate - now;

    if (timeLeft <= 0) {
        document.getElementById("countdown").innerHTML = "Happy Birthday, Peter!";
        
        // Swap the funny face with the party GIF
        document.getElementById("funnyFace").src = "party.gif";
        
        // Remove the looking around animation
        document.getElementById("funnyFace").style.animation = "none";
        
        return;
    }

    const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
    const hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);

    document.getElementById("countdown").innerHTML = `${days}d ${hours}h ${minutes}m ${seconds}s`;
}

// Update countdown every second
setInterval(updateCountdown, 1000);
updateCountdown();

function createFloatingPeter() {
    const peter = document.createElement("img");
    peter.src = "peter_and_heidi_today.jpg"; // Now using .jpg
    peter.className = "floating-peter";

    // Random position anywhere on the page
    const x = Math.random() * (window.innerWidth - 60); // Keep inside viewport
    const y = Math.random() * (window.innerHeight - 60);

    peter.style.left = `${x}px`;
    peter.style.top = `${y}px`;
    peter.style.position = "absolute";

    document.body.appendChild(peter);

    // Fade in, then fade out, then remove
    setTimeout(() => {
        peter.style.opacity = 1;
        setTimeout(() => {
            peter.style.opacity = 0;
            setTimeout(() => {
                document.body.removeChild(peter);
            }, 3000);
        }, 3000);
    }, 100);
}

// Spawn a new floating Peter face every 3 seconds
setInterval(createFloatingPeter, 3000);

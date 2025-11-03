document.addEventListener("DOMContentLoaded", function () {
    // Welcome screen
    setTimeout(() => {
        document.getElementById("welcome-screen").classList.add("fade-out");
        setTimeout(() => {
            document.getElementById("welcome-screen").style.display = "none";
            document.getElementById("main-content").classList.remove("hidden");
        }, 500);
    }, 3000);

    // Filter functionality
    const filterDropdown = document.getElementById("station-filter");
    filterDropdown.addEventListener("change", function () {
        const selectedValue = this.value;
        
        const opdCards = document.querySelectorAll(".opd-card");
        const wardCards = document.querySelectorAll(".ward-card");

        if (selectedValue === "opd") {
            // Show only OPD cards
            opdCards.forEach((card) => (card.style.display = "block"));
            wardCards.forEach((card) => (card.style.display = "none"));
        } else if (selectedValue === "ward") {
            // Show only Ward cards
            opdCards.forEach((card) => (card.style.display = "none"));
            wardCards.forEach((card) => (card.style.display = "block"));
        } else {
            // Show all cards
            opdCards.forEach((card) => (card.style.display = "block"));
            wardCards.forEach((card) => (card.style.display = "block"));
        }
    });

    // WiFi Modal functionality
    const modal = document.getElementById('wifi-modal');
    const wifiChip = document.querySelector('.wifi-qr-chip');
    const closeBtn = document.querySelector('.close-modal');

    if (wifiChip) {
        wifiChip.addEventListener('click', () => {
            modal.style.display = 'block';
            document.body.style.overflow = 'hidden'; // Prevent scrolling
        });
    }

    if (closeBtn) {
        closeBtn.addEventListener('click', () => {
            modal.style.display = 'none';
            document.body.style.overflow = 'auto'; // Re-enable scrolling
        });
    }

    window.addEventListener('click', (e) => {
        if (e.target === modal) {
            modal.style.display = 'none';
            document.body.style.overflow = 'auto';
        }
    });
});

  
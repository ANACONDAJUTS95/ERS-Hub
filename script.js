setTimeout(() => {
    document.getElementById("welcome-screen").classList.add("fade-out");
    setTimeout(() => {
      document.getElementById("welcome-screen").style.display = "none";
      document.getElementById("main-content").classList.remove("hidden");
    }, 500);
  }, 3000);

  // Filter
  document.addEventListener("DOMContentLoaded", function () {
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
});

  
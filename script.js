setTimeout(() => {
    document.getElementById("welcome-screen").classList.add("fade-out");
    setTimeout(() => {
      document.getElementById("welcome-screen").style.display = "none";
      document.getElementById("main-content").classList.remove("hidden");
    }, 500);
  }, 3000);
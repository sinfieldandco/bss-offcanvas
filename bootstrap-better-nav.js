document.addEventListener("DOMContentLoaded", function() {
    // Cache frequently used elements
    const body = document.body;
    const navbar = document.querySelector(".navbar");
    const navbarCollapse = document.querySelector(".navbar-collapse");
  
    // Create side menu elements
    const sideMenuOverlay = document.createElement("div");
    sideMenuOverlay.classList.add("side-menu-overlay");
    body.appendChild(sideMenuOverlay);
  
    const sideMenu = document.createElement("div");
    sideMenu.id = "side-menu";
    body.appendChild(sideMenu);
  
    const closeButton = document.createElement("button");
    closeButton.classList.add("btn-close");
     sideMenu.appendChild(closeButton);
  
    const contents = document.createElement("div");
    contents.classList.add("contents");
    sideMenu.appendChild(contents);
  
    // Apply initial classes
    if (navbar.classList.contains("better-bootstrap-nav-left")) {
      sideMenu.classList.add("side-menu-left");
    }
  
    // Define functions for menu visibility
    function showMenu() {
      body.classList.add("overflow-hidden");
      sideMenu.style.display = "block";  
      setTimeout(() => {
        body.classList.add("side-menu-visible");
        sideMenuOverlay.style.opacity = 1;  
      }, 50);
    }
  
    function hideMenu() {
      body.classList.remove("side-menu-visible");
      sideMenuOverlay.style.opacity = 0;
      setTimeout(() => {
        sideMenu.style.display = "none";
        body.classList.remove("overflow-hidden");
      }, 400);
    }
  
    // Event listeners
    navbarCollapse.addEventListener("show.bs.collapse", function(event) {
      event.preventDefault();
      contents.innerHTML = this.innerHTML;
      showMenu();
    });
  
    closeButton.addEventListener("click", function(event) {
      event.preventDefault();
      hideMenu();
    });
  
    sideMenuOverlay.addEventListener("click", function(event) {
      hideMenu();
    });
  
    window.addEventListener("resize", function() {
      if (!navbarCollapse.matches(":visible") && body.classList.contains("side-menu-visible")) {
        sideMenu.style.display = "block";
        sideMenuOverlay.style.opacity = 1;
      } else {
        sideMenu.style.display = "none";
        sideMenuOverlay.style.opacity = 0;
      }
    });
  });
  

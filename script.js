// Hamburger menu toggle
function toggleMenu() {
  const sideMenu = document.getElementById("side-menu");
  sideMenu.classList.toggle("active");
}

// Close menu when a link is clicked
function closeMenu() {
  const sideMenu = document.getElementById("side-menu");
  sideMenu.classList.remove("active");
}

document.addEventListener("DOMContentLoaded", function() {
  const hamburger = document.querySelector(".hamburger-container");
  const menuLinks = document.querySelectorAll(".side-menu a");
  const closeBtn = document.getElementById("close-menu-btn");
  
  if (hamburger) {
    hamburger.addEventListener("click", toggleMenu);
  }
  
  menuLinks.forEach(link => {
    link.addEventListener("click", closeMenu);
  });
  
  if (closeBtn) {
    closeBtn.addEventListener("click", closeMenu);
  }
});

function openBook(project) {
  const modal = document.getElementById("modal");
  const content = document.getElementById("modal-body");

  let data = {
    p1: "<h2>Project 1</h2><p>Description of project 1.</p>",
    p2: "<h2>Project 2</h2><p>Description of project 2.</p>",
    p3: "<h2>Project 3</h2><p>Description of project 3.</p>",
    p4: "<h2>Project 4</h2><p>Description of project 4.</p>",
    p5: "<h2>Project 5</h2><p>Description of project 5.</p>",
    p6: "<h2>Project 6</h2><p>Description of project 6.</p>"
  };

  content.innerHTML = data[project];
  modal.style.display = "block";
}

function closeBook() {
  document.getElementById("modal").style.display = "none";
}
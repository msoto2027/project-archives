// Dust & age overlay
function injectDustOverlay() {
  const el = document.createElement('div');
  el.id = 'dust-overlay';
  document.body.appendChild(el);
}

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
  injectDustOverlay();

  const hamburger = document.querySelector(".hamburger-container");
  const menuLinks = document.querySelectorAll(".side-menu a");
  const closeBtn = document.getElementById("close-menu-btn");
  const contactForm = document.getElementById("contact-form");
  const formStatus = document.getElementById("form-status");
  
  if (hamburger) {
    hamburger.addEventListener("click", toggleMenu);
  }
  
  menuLinks.forEach(link => {
    link.addEventListener("click", closeMenu);
  });
  
  if (closeBtn) {
    closeBtn.addEventListener("click", closeMenu);
  }

  if (contactForm) {
    contactForm.addEventListener("submit", function (event) {
      event.preventDefault();

      const name = document.getElementById("contact-name").value.trim();
      const message = document.getElementById("contact-message").value.trim();
      const inquiryType = Array.from(document.querySelectorAll('input[name="inquiryType"]:checked'))
        .map((item) => item.value)
        .join(", ");
      const inquiryLine = inquiryType || "Not specified";

      const subject = `Portfolio Contact Form - ${name}`;
      const body = `Name: ${name}\nInquiry Type: ${inquiryLine}\n\nMessage:\n${message}`;
      const mailtoUrl = `mailto:marisol.soto@ttu.edu?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

      window.location.href = mailtoUrl;

      if (formStatus) {
        formStatus.textContent = "Your email app should open with this message ready to send.";
      }
    });
  }
});

function openBook(project) {
  const modal = document.getElementById("modal");
  const content = document.getElementById("modal-body");

  let data = {
    p1: `<h2>SceneIt (Prototype)</h2>
      <p>SceneIt is a movie tracking and discovery app designed to help users organize their viewing habits and discover new films. This prototype focuses on creating a seamless and intuitive user experience through thoughtful interface design and clear navigation.</p>
      <p>The application features a dynamic home dashboard that surfaces recommended titles, trending content, and personalized suggestions. Users can search for movies, access detailed pages with ratings and summaries, and organize films into custom lists such as Favorites and Watch Later.</p>
      <p>The app is structured around four primary navigation tabs - Home, Search, Lists, and Profile - allowing users to efficiently switch between discovering content and managing their collections. Emphasis was placed on usability, information hierarchy, and minimizing friction in the browsing experience.</p>
      <p>This project was designed using Figma, where wireframes and high-fidelity mockups were developed to prototype the full user flow. You can view the design and interactive prototype here: <a href='https://www.figma.com/design/5Ufsw5oWSDm5hlgJABAvjv/Marisol-Soto--SceneIt--Project-03?node-id=1-2&t=ivYGXXoVn4Ine4Hj-1' target='_blank' rel='noopener noreferrer'>SceneIt Figma Prototype</a>.</p>
      <div class='photo-gallery'><img src='images/SceneIt SC.png' alt='SceneIt prototype screenshot'></div>`,
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
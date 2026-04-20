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
    p3: `<h2>The Hidden Chapter</h2>
      <p>The Hidden Chapter is an independent bookstore website developed as part of Project 03 for a web development and project management course. The project demonstrates the integration of HTML/CSS skills and project management principles (PMUPM Chapters 3, 4, and 7) to create a professional, two-page website.</p>
      <p>The website serves as a marketing and informational platform, highlighting the bookstore's offerings, store information, and community engagement, while following best practices in repository organization, version control, and documentation.</p>`,
    p4: `<h2>Walt Disney World First-Time Visitor Guide (Prototype)</h2>
      <p>This project is a comprehensive planning guide designed specifically for first-time visitors to Walt Disney World. The prototype focuses on helping users navigate the complexity of planning a multi-day trip across the resort's four main parks: Magic Kingdom, EPCOT, Disney's Hollywood Studios, and Disney's Animal Kingdom.</p>
      <p>The target audience includes families with children, young adult couples, and first-time adult visitors who often feel overwhelmed by the scale of the resort and the volume of available attractions and dining options. While many users are familiar with iconic landmarks like Cinderella Castle or Spaceship Earth, they typically lack clarity on how to prioritize experiences within a limited timeframe.</p>
      <p>This guide addresses the problem of decision overload by organizing each park into clear, digestible sections that highlight key attractions, must-do experiences, and recommended dining options. The content is structured to function both as an overview-helping users understand the identity and layout of each park-and as a prioritization tool to support itinerary planning.</p>
      <p>Designed as a prototype, this project emphasizes information architecture, clarity, and user-centered decision-making. The guide was created using Canva for layout and visual design, with Kinopio used to map user flows and structure content relationships. Together, these tools supported the development of an intuitive and accessible planning resource for first-time Disney guests. View it here: <a href='https://synthesisproductdwguide.my.canva.site/' target='_blank' rel='noopener noreferrer'>Disney World Guide Prototype</a>.</p>`,
    p5: "<h2>Project 5</h2><p>Description of project 5.</p>",
    p6: `<h2>Itinera</h2>
      <p>I'm currently building Itinera, a web-based travel planning tool that combines your itinerary, packing list, and expenses all in one place. The goal is to make planning trips easier without bouncing between apps.</p>
      <p>Project link: <a href='https://github.com/msoto2027/itinera' target='_blank' rel='noopener noreferrer'>Itinera on GitHub</a></p>`
  };

  content.innerHTML = data[project];
  modal.style.display = "block";
}

function closeBook() {
  document.getElementById("modal").style.display = "none";
}
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

const projectDetails = {
  p1: {
    coverTitle: "SceneIt",
    coverMeta: "Prototype archive for a movie discovery and tracking app.",
    leftPage: `
      <h2>SceneIt (Prototype)</h2>
      <p>SceneIt is a movie tracking and discovery app designed to help users organize their viewing habits and discover new films. This prototype focuses on creating a seamless and intuitive user experience through thoughtful interface design and clear navigation.</p>
      <p>The application features a dynamic home dashboard that surfaces recommended titles, trending content, and personalized suggestions. Users can search for movies, access detailed pages with ratings and summaries, and organize films into custom lists such as Favorites and Watch Later.</p>
    `,
    rightPage: `
      <h3>Archive Notes</h3>
      <p>The app is structured around four primary navigation tabs - Home, Search, Lists, and Profile - allowing users to efficiently switch between discovering content and managing their collections. Emphasis was placed on usability, information hierarchy, and minimizing friction in the browsing experience.</p>
      <p>This project was designed using Figma, where wireframes and high-fidelity mockups were developed to prototype the full user flow. You can view the design and interactive prototype here: <a href='https://www.figma.com/design/5Ufsw5oWSDm5hlgJABAvjv/Marisol-Soto--SceneIt--Project-03?node-id=1-2&t=ivYGXXoVn4Ine4Hj-1' target='_blank' rel='noopener noreferrer'>SceneIt Figma Prototype</a>.</p>
      <div class='photo-gallery'><img src='images/SceneIt SC.png' alt='SceneIt prototype screenshot'></div>
    `
  },
  p2: {
    coverTitle: "Coming Soon",
    coverMeta: "Reserved shelf space for a future project archive.",
    leftPage: `
      <h2>Project In Progress</h2>
      <p>This volume is still being cataloged. A future archive entry will live here once the next project reaches a shareable stage.</p>
    `,
    rightPage: `
      <h3>What Will Go Here</h3>
      <p>Expect a full project summary, design goals, tools used, and a direct link once the work is ready to be published.</p>
    `
  },
  p3: {
    coverTitle: "The Hidden Chapter",
    coverMeta: "Independent bookstore website developed for coursework.",
    leftPage: `
      <h2>The Hidden Chapter</h2>
      <p>The Hidden Chapter is an independent bookstore website developed as part of Project 03 for a web development and project management course. The project demonstrates the integration of HTML/CSS skills and project management principles (PMUPM Chapters 3, 4, and 7) to create a professional, two-page website.</p>
    `,
    rightPage: `
      <h3>Archive Notes</h3>
      <p>The website serves as a marketing and informational platform, highlighting the bookstore's offerings, store information, and community engagement, while following best practices in repository organization, version control, and documentation.</p>
      <p>View it here: <a href='https://msoto2027.github.io/the-hidden-chapter/' target='_blank' rel='noopener noreferrer'>The Hidden Chapter Website</a>.</p>
    `
  },
  p4: {
    coverTitle: "Disney Guide",
    coverMeta: "Prototype planning guide for first-time Walt Disney World visitors.",
    leftPage: `
      <h2>Walt Disney World First-Time Visitor Guide</h2>
      <p>This project is a comprehensive planning guide designed specifically for first-time visitors to Walt Disney World. The prototype focuses on helping users navigate the complexity of planning a multi-day trip across the resort's four main parks: Magic Kingdom, EPCOT, Disney's Hollywood Studios, and Disney's Animal Kingdom.</p>
      <p>The target audience includes families with children, young adult couples, and first-time adult visitors who often feel overwhelmed by the scale of the resort and the volume of available attractions and dining options.</p>
    `,
    rightPage: `
      <h3>Archive Notes</h3>
      <p>This guide addresses the problem of decision overload by organizing each park into clear, digestible sections that highlight key attractions, must-do experiences, and recommended dining options. The content is structured to support itinerary planning.</p>
      <p>Designed as a prototype, this project emphasizes information architecture, clarity, and user-centered decision-making. View it here: <a href='https://synthesisproductdwguide.my.canva.site/' target='_blank' rel='noopener noreferrer'>Disney World Guide Prototype</a>.</p>
    `
  },
  p5: {
    coverTitle: "Coming Soon",
    coverMeta: "Reserved shelf space for a future project archive.",
    leftPage: `
      <h2>Project In Progress</h2>
      <p>This section is being held for another upcoming archive entry.</p>
    `,
    rightPage: `
      <h3>What Will Go Here</h3>
      <p>Once the next project is ready, this book will open to a summary, screenshots, and links to the finished work.</p>
    `
  },
  p6: {
    coverTitle: "Itinera",
    coverMeta: "Travel-planning tool combining itineraries, packing lists, and expenses.",
    leftPage: `
      <h2>Itinera</h2>
      <p>I'm currently building Itinera, a web-based travel planning tool that combines your itinerary, packing list, and expenses all in one place. The goal is to make planning trips easier without bouncing between apps.</p>
    `,
    rightPage: `
      <h3>Archive Notes</h3>
      <p>This project is focused on bringing the most common trip-planning tasks into one streamlined workspace.</p>
      <p>Project link: <a href='https://github.com/msoto2027/itinera' target='_blank' rel='noopener noreferrer'>Itinera on GitHub</a></p>
    `
  }
};

let closeBookTimer;

function createBookMarkup(book) {
  return `
    <div class="archive-book">
      <section class="archive-cover" aria-hidden="true">
        <p class="archive-kicker">Project Archive</p>
        <h2 class="archive-cover-title">${book.coverTitle}</h2>
        <p class="archive-cover-meta">${book.coverMeta}</p>
      </section>
      <div class="archive-pages">
        <article class="archive-page archive-page-left" data-page="Page 1">
          ${book.leftPage}
        </article>
        <article class="archive-page archive-page-right" data-page="Page 2">
          ${book.rightPage}
        </article>
      </div>
    </div>
  `;
}

document.addEventListener("DOMContentLoaded", function() {
  injectDustOverlay();

  const hamburger = document.querySelector(".hamburger-container");
  const menuLinks = document.querySelectorAll(".side-menu a");
  const closeBtn = document.getElementById("close-menu-btn");
  const contactForm = document.getElementById("contact-form");
  const formStatus = document.getElementById("form-status");
  const modal = document.getElementById("modal");
  
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

  if (modal) {
    modal.addEventListener("click", function(event) {
      if (event.target === modal) {
        closeBook();
      }
    });

    document.addEventListener("keydown", function(event) {
      if (event.key === "Escape" && modal.style.display === "block") {
        closeBook();
      }
    });
  }
});

function openBook(project) {
  const modal = document.getElementById("modal");
  const content = document.getElementById("modal-body");
  const book = projectDetails[project];

  if (!modal || !content || !book) {
    return;
  }

  window.clearTimeout(closeBookTimer);
  content.innerHTML = createBookMarkup(book);
  modal.style.display = "block";
  document.body.classList.add("modal-open");

  requestAnimationFrame(function() {
    requestAnimationFrame(function() {
      modal.classList.add("active");
    });
  });
}

function closeBook() {
  const modal = document.getElementById("modal");
  const content = document.getElementById("modal-body");

  if (!modal) {
    return;
  }

  modal.classList.remove("active");
  document.body.classList.remove("modal-open");
  window.clearTimeout(closeBookTimer);

  closeBookTimer = window.setTimeout(function() {
    modal.style.display = "none";

    if (content) {
      content.innerHTML = "";
    }
  }, 420);
}
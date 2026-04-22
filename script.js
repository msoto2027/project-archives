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

const THEME_KEY = "projectArchivesTheme";

function setThemeMode(mode) {
  const isIndustrial = mode === "industrial";
  document.body.classList.toggle("industrial-mode", isIndustrial);

  const modeSelect = document.getElementById("viewing-protocol-select");
  if (modeSelect) {
    modeSelect.value = isIndustrial ? "industrial" : "classic";
  }
}

function initThemeToggle() {
  const savedMode = window.localStorage.getItem(THEME_KEY);
  setThemeMode(savedMode === "industrial" ? "industrial" : "classic");

  if (document.getElementById("viewing-protocol-select")) {
    return;
  }

  const modeControl = document.createElement("div");
  modeControl.className = "theme-control";

  const modeLabel = document.createElement("label");
  modeLabel.className = "theme-control-label";
  modeLabel.setAttribute("for", "viewing-protocol-select");
  modeLabel.textContent = "Viewing Protocol";

  const modeSelect = document.createElement("select");
  modeSelect.id = "viewing-protocol-select";
  modeSelect.className = "theme-control-select";
  modeSelect.setAttribute("aria-label", "Choose viewing protocol");

  modeSelect.innerHTML = `
    <option value="classic">Nocturne Archive</option>
    <option value="industrial">Standard Archive</option>
  `;

  modeSelect.addEventListener("change", function () {
    const nextMode = modeSelect.value === "industrial" ? "industrial" : "classic";
    window.localStorage.setItem(THEME_KEY, nextMode);
    setThemeMode(nextMode);
  });

  modeControl.appendChild(modeLabel);
  modeControl.appendChild(modeSelect);
  const header = document.querySelector("header");
  (header || document.body).appendChild(modeControl);
  setThemeMode(document.body.classList.contains("industrial-mode") ? "industrial" : "classic");
}

const projectDetails = {
  p1: {
    coverTitle: "SceneIt",
    coverMeta: "Prototype archive for a movie discovery and tracking app.",
    pages: [
      `
        <h2>SceneIt (Prototype)</h2>
        <p>SceneIt is a movie tracking and discovery app designed to help users organize their viewing habits and discover new films. This prototype focuses on creating a seamless and intuitive user experience through thoughtful interface design and clear navigation.</p>
      `,
      `
        <h3>Core Experience</h3>
        <p>The application features a dynamic home dashboard that surfaces recommended titles, trending content, and personalized suggestions. Users can search for movies, access detailed pages with ratings and summaries, and organize films into custom lists such as Favorites and Watch Later.</p>
      `,
      `
        <h3>Archive Notes</h3>
        <p>The app is structured around four primary navigation tabs - Home, Search, Lists, and Profile - allowing users to efficiently switch between discovering content and managing their collections. Emphasis was placed on usability, information hierarchy, and minimizing friction in the browsing experience.</p>
      `,
      `
        <h3>Prototype Link</h3>
        <p>This project was designed using Figma, where wireframes and high-fidelity mockups were developed to prototype the full user flow. You can view the design and interactive prototype here: <a href='https://www.figma.com/design/5Ufsw5oWSDm5hlgJABAvjv/Marisol-Soto--SceneIt--Project-03?node-id=1-2&t=ivYGXXoVn4Ine4Hj-1' target='_blank' rel='noopener noreferrer'>SceneIt Figma Prototype</a>.</p>
        <div class='photo-gallery'><img src='images/SceneIt SC.png' alt='SceneIt prototype screenshot'></div>
      `
    ]
  },
  p2: {
    coverTitle: "Restricted Mode",
    coverMeta: "This archive is sealed until the next project is cleared for release.",
    isRestricted: true,
    pages: [
      `
        <h2>Access Restricted</h2>
        <p>This volume is sealed while the next project is still being cataloged. The archive will open once the work is ready to be released.</p>
      `,
      `
        <h3>Release Conditions</h3>
        <p>Once approval is granted, this entry will be updated with the project summary, design goals, tools used, and a direct link to the finished work.</p>
      `
    ]
  },
  p3: {
    coverTitle: "The Hidden Chapter",
    coverMeta: "Independent bookstore website developed for coursework.",
    pages: [
      `
        <h2>The Hidden Chapter</h2>
        <p>The Hidden Chapter is an independent bookstore website developed as part of Project 03 for a web development and project management course. The project demonstrates the integration of HTML/CSS skills and project management principles (PMUPM Chapters 3, 4, and 7) to create a professional, two-page website.</p>
      `,
      `
        <h3>Archive Notes</h3>
        <p>The website serves as a marketing and informational platform, highlighting the bookstore's offerings, store information, and community engagement, while following best practices in repository organization, version control, and documentation.</p>
        <p>View it here: <a href='https://msoto2027.github.io/the-hidden-chapter/' target='_blank' rel='noopener noreferrer'>The Hidden Chapter Website</a>.</p>
      `
    ]
  },
  p4: {
    coverTitle: "Disney Guide",
    coverMeta: "Prototype planning guide for first-time Walt Disney World visitors.",
    pages: [
      `
        <h2>Walt Disney World First-Time Visitor Guide</h2>
        <p>This project is a comprehensive planning guide designed specifically for first-time visitors to Walt Disney World. The prototype focuses on helping users navigate the complexity of planning a multi-day trip across the resort's four main parks: Magic Kingdom, EPCOT, Disney's Hollywood Studios, and Disney's Animal Kingdom.</p>
      `,
      `
        <h3>Audience</h3>
        <p>The target audience includes families with children, young adult couples, and first-time adult visitors who often feel overwhelmed by the scale of the resort and the volume of available attractions and dining options.</p>
      `,
      `
        <h3>Archive Notes</h3>
        <p>This guide addresses the problem of decision overload by organizing each park into clear, digestible sections that highlight key attractions, must-do experiences, and recommended dining options. The content is structured to support itinerary planning.</p>
      `,
      `
        <h3>Prototype Link</h3>
        <p>Designed as a prototype, this project emphasizes information architecture, clarity, and user-centered decision-making. View it here: <a href='https://synthesisproductdwguide.my.canva.site/' target='_blank' rel='noopener noreferrer'>Disney World Guide Prototype</a>.</p>
      `
    ]
  },
  p5: {
    coverTitle: "Restricted Mode",
    coverMeta: "This archive remains under lock until its contents are ready to be published.",
    isRestricted: true,
    pages: [
      `
        <h2>Access Restricted</h2>
        <p>This section is being held behind restriction for another upcoming archive entry.</p>
      `,
      `
        <h3>Release Conditions</h3>
        <p>When the next project is ready, this book will open to a summary, screenshots, and links to the finished work.</p>
      `
    ]
  },
  p6: {
    coverTitle: "Itinera",
    coverMeta: "Travel-planning tool combining itineraries, packing lists, and expenses.",
    pages: [
      `
        <h2>Itinera</h2>
        <p>I'm currently building Itinera, a web-based travel planning tool that combines your itinerary, packing list, and expenses all in one place. The goal is to make planning trips easier without bouncing between apps.</p>
      `,
      `
        <h3>Archive Notes</h3>
        <p>This project is focused on bringing the most common trip-planning tasks into one streamlined workspace.</p>
        <p>Project link: <a href='https://github.com/msoto2027/itinera' target='_blank' rel='noopener noreferrer'>Itinera on GitHub</a></p>
      `
    ]
  }
};

let closeBookTimer;

function getPageData(book, pageIndex) {
  const pages = book.pages || [];
  const safeIndex = Math.max(0, Math.min(pageIndex, Math.max(0, pages.length - 1)));

  return {
    content: pages[safeIndex] || "",
    pageNumber: safeIndex + 1,
    totalPages: Math.max(1, pages.length)
  };
}

function createBookMarkup(book) {
  const coverClasses = book.isRestricted ? "archive-cover archive-cover-restricted" : "archive-cover";
  const pageData = getPageData(book, 0);

  return `
    <div class="archive-book" data-page-index="0" data-total-pages="${pageData.totalPages}">
      <section class="${coverClasses}" aria-hidden="true">
        <p class="archive-kicker">Project Archive</p>
        <h2 class="archive-cover-title">${book.coverTitle}</h2>
        <p class="archive-cover-meta">${book.coverMeta}</p>
      </section>
      <div class="archive-pages">
        <article class="archive-page archive-page-single" data-page="Page ${pageData.pageNumber}">
          ${pageData.content}
        </article>
        <div class="archive-page-turn" aria-hidden="true"></div>
      </div>
      <div class="archive-controls">
        <button type="button" class="archive-nav archive-nav-prev" data-direction="prev" disabled>Previous Page</button>
        <p class="archive-progress">Page 1 of ${pageData.totalPages}</p>
        <button type="button" class="archive-nav archive-nav-next" data-direction="next" ${pageData.totalPages > 1 ? "" : "disabled"}>Next Page</button>
      </div>
    </div>
  `;
}

function updateArchiveControls(bookElement) {
  const pageIndex = Number(bookElement.dataset.pageIndex || 0);
  const totalPages = Number(bookElement.dataset.totalPages || 1);
  const prevButton = bookElement.querySelector(".archive-nav-prev");
  const nextButton = bookElement.querySelector(".archive-nav-next");
  const progress = bookElement.querySelector(".archive-progress");

  if (prevButton) {
    prevButton.disabled = pageIndex === 0;
  }

  if (nextButton) {
    nextButton.disabled = pageIndex >= totalPages - 1;
  }

  if (progress) {
    progress.textContent = `Page ${pageIndex + 1} of ${totalPages}`;
  }
}

function renderArchivePage(bookElement, book, pageIndex) {
  const pageData = getPageData(book, pageIndex);
  const page = bookElement.querySelector(".archive-page-single");

  if (!page) {
    return;
  }

  page.innerHTML = pageData.content;
  page.dataset.page = `Page ${pageData.pageNumber}`;

  bookElement.dataset.pageIndex = String(pageIndex);
  updateArchiveControls(bookElement);
}

function flipArchivePage(direction) {
  const modalBody = document.getElementById("modal-body");
  const bookElement = modalBody ? modalBody.querySelector(".archive-book") : null;
  const projectKey = bookElement ? bookElement.dataset.project : "";
  const book = projectDetails[projectKey];

  if (!book || !bookElement || bookElement.classList.contains("is-turning")) {
    return;
  }

  const currentIndex = Number(bookElement.dataset.pageIndex || 0);
  const nextIndex = direction === "next" ? currentIndex + 1 : currentIndex - 1;
  const totalPages = Number(bookElement.dataset.totalPages || 1);

  if (nextIndex < 0 || nextIndex >= totalPages) {
    return;
  }

  bookElement.classList.add("is-turning", direction === "next" ? "turn-next" : "turn-prev");

  window.setTimeout(function() {
    renderArchivePage(bookElement, book, nextIndex);
  }, 210);

  window.setTimeout(function() {
    bookElement.classList.remove("is-turning", "turn-next", "turn-prev");
  }, 460);
}

document.addEventListener("DOMContentLoaded", function() {
  injectDustOverlay();
  initThemeToggle();

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
        return;
      }

      const navButton = event.target.closest(".archive-nav");

      if (navButton) {
        flipArchivePage(navButton.dataset.direction);
      }
    });

    document.addEventListener("keydown", function(event) {
      if (event.key === "Escape" && modal.style.display === "block") {
        closeBook();
      } else if (event.key === "ArrowRight" && modal.style.display === "block") {
        flipArchivePage("next");
      } else if (event.key === "ArrowLeft" && modal.style.display === "block") {
        flipArchivePage("prev");
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
  content.querySelector(".archive-book").dataset.project = project;
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
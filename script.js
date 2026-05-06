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
        <h3>Problem I Am Solving</h3>
        <p>SceneIt addresses the challenge of helping users discover what to watch and keep track of what they have already seen. Many movie apps feel cluttered or disconnected, so this project focuses on making movie discovery, search, and list management feel simple and unified.</p>
      `,
      `
        <h3>Process</h3>
        <p>I planned the experience around key user tasks: browse, search, save, and review. I created wireframes and interface flows in Figma, then refined layouts to improve clarity, visual hierarchy, and navigation between Home, Search, Lists, and Profile.</p>
      `,
      `
        <h3>Final Result</h3>
        <p>The final prototype delivers a movie-tracking experience with a recommendation-focused dashboard, searchable titles, detail pages, and custom collection tools such as Favorites and Watch Later.</p>
        <p>Prototype: <a href='https://www.figma.com/design/5Ufsw5oWSDm5hlgJABAvjv/Marisol-Soto--SceneIt--Project-03?node-id=1-2&t=ivYGXXoVn4Ine4Hj-1' target='_blank' rel='noopener noreferrer'>SceneIt Figma Prototype</a>.</p>
        <div class='photo-gallery'><img src='images/SceneIt SC.png' alt='SceneIt prototype screenshot'></div>
      `,
      `
        <h3>Reflection</h3>
        <p>This project strengthened my UX decision-making and taught me how to balance feature richness with simplicity. If I continue this project, I would expand personalization and test the flow with real users to validate interaction choices.</p>
      `
    ]
  },
  p2: {
    coverTitle: "How I Work",
    coverMeta: "My project process focused on clarity, usability, and continuous improvement.",
    pages: [
      `
        <section class='how-i-work-page how-i-work-intro'>
          <p class='how-i-work-kicker'>Process Journal</p>
          <h2>How I Work</h2>
          <p>I approach every project with a focus on clarity, usability, and continuous improvement. My goal is not just to build something that works, but something that is efficient, maintainable, and meaningful to the user.</p>
        </section>
      `,
      `
        <section class='how-i-work-page how-i-work-step'>
          <h3><span class='how-i-work-number'>1</span>Understand the Problem</h3>
          <p>I start by clearly defining the purpose of the project and the needs of the user. This includes identifying requirements, constraints, and the overall goal before writing any code.</p>
        </section>
      `,
      `
        <section class='how-i-work-page how-i-work-step'>
          <h3><span class='how-i-work-number'>2</span>Plan and Design</h3>
          <p>Before development, I outline the structure of the application. I create basic layouts, map out functionality, and choose appropriate tools or technologies to ensure a solid foundation.</p>
        </section>
      `,
      `
        <section class='how-i-work-page how-i-work-step'>
          <h3><span class='how-i-work-number'>3</span>Build with Intent</h3>
          <p>During development, I focus on writing clean, organized, and readable code. I break problems into smaller parts and test features as I go to avoid larger issues later.</p>
        </section>
      `,
      `
        <section class='how-i-work-page how-i-work-step'>
          <h3><span class='how-i-work-number'>4</span>Test and Refine</h3>
          <p>I review my work carefully by testing functionality, fixing bugs, and improving performance. I also look for ways to simplify or optimize my code.</p>
        </section>
      `,
      `
        <section class='how-i-work-page how-i-work-step'>
          <h3><span class='how-i-work-number'>5</span>Reflect and Improve</h3>
          <p>After completing a project, I evaluate what worked well and what could be improved. This helps me grow and apply better practices in future work.</p>
        </section>
      `,
      `
        <section class='how-i-work-page how-i-work-values'>
          <h3>Values</h3>
          <p>I value consistency, attention to detail, and a willingness to learn. Each project is an opportunity to strengthen my skills and create something better than before.</p>
        </section>
      `
    ]
  },
  p3: {
    coverTitle: "The Hidden Chapter",
    coverMeta: "Independent bookstore website developed for coursework.",
    pages: [
      `
        <h3>Problem I Am Solving</h3>
        <p>The Hidden Chapter solves the problem of limited digital presence for a small independent bookstore. The goal was to create a clear, engaging web experience that communicates offerings, store identity, and community value.</p>
      `,
      `
        <h3>Process</h3>
        <p>I planned this project as a two-page site and organized development around structure, readability, and maintainability. I applied HTML and CSS best practices and incorporated project management concepts to guide scope, documentation, and version control.</p>
      `,
      `
        <h3>Final Result</h3>
        <p>The final site presents the bookstore as a professional and welcoming space, with clear content sections for store information, offerings, and engagement. It functions as both a marketing and informational platform.</p>
        <p>Live site: <a href='https://msoto2027.github.io/the-hidden-chapter/' target='_blank' rel='noopener noreferrer'>The Hidden Chapter Website</a>.</p>
      `,
      `
        <h3>Reflection</h3>
        <p>This project improved my ability to align technical implementation with communication goals. I learned the value of planning content hierarchy early and maintaining clean repository practices from the beginning.</p>
      `
    ]
  },
  p4: {
    coverTitle: "Disney Guide",
    coverMeta: "Prototype planning guide for first-time Walt Disney World visitors.",
    pages: [
      `
        <h3>Problem I Am Solving</h3>
        <p>First-time Walt Disney World visitors often face decision overload because of the resort's scale and the large number of attractions, dining options, and logistics. This project focuses on reducing overwhelm with structured planning guidance.</p>
      `,
      `
        <h3>Process</h3>
        <p>I designed the guide as a prototype centered on information architecture and decision support. I mapped the experience by park, grouped recommendations into digestible sections, and prioritized clarity so users can quickly build practical itineraries.</p>
      `,
      `
        <h3>Final Result</h3>
        <p>The final prototype delivers a planning-focused guide that helps users compare park priorities, identify must-do experiences, and plan with greater confidence.</p>
        <p>Prototype: <a href='https://synthesisproductdwguide.my.canva.site/' target='_blank' rel='noopener noreferrer'>Disney World Guide Prototype</a>.</p>
      `,
      `
        <h3>Reflection</h3>
        <p>This project reinforced the importance of organizing complex information into simple user pathways. I learned how strong structure can reduce stress for users and make planning tasks feel manageable.</p>
      `
    ]
  },
  p5: {
    coverTitle: "Future Projects",
    coverMeta: "Concept pipeline featuring PolicyPal, an insurance simplifier app.",
    pages: [
      `
        <h2>PolicyPal - Insurance Simplifier App</h2>
        <h3>Concept</h3>
        <p>An application that helps users better understand their insurance policies by breaking down complex coverage into simple, clear language.</p>
      `,
      `
        <h3>Key Features</h3>
        <ul>
          <li>Input and manage multiple policies (auto, home, umbrella, etc.)</li>
          <li>Coverage breakdown in plain language</li>
          <li>Suggestions for potential coverage gaps</li>
          <li>Visual dashboard of protection levels</li>
        </ul>
      `,
      `
        <h3>Why I Want to Build It</h3>
        <p>This project connects directly to my experience in the insurance industry and allows me to create something practical that could help real people make informed decisions.</p>
      `,
      `
        <h2>Travel Smart Companion (Itinera Expansion)</h2>
        <h3>Concept</h3>
        <p>An enhanced version of my existing travel planner that adds smarter tools for organizing and optimizing trips.</p>
      `,
      `
        <h3>Key Features</h3>
        <ul>
          <li>Weather-based packing suggestions</li>
          <li>Travel reminders (documents, reservations, deadlines)</li>
          <li>Interactive trip timeline</li>
        </ul>
      `,
      `
        <h3>Why I Want to Build It</h3>
        <p>I enjoy traveling, and this project builds on something I have already created while adding more advanced functionality.</p>
      `,
      `
        <h2>Movie Mood Matcher</h2>
        <h3>Concept</h3>
        <p>A movie recommendation app that suggests films based on the user’s mood and preferences.</p>
      `,
      `
        <h3>Key Features</h3>
        <ul>
          <li>Mood-based filtering (e.g., happy, suspenseful, nostalgic)</li>
          <li>Personalized recommendations</li>
          <li>Watch history and ratings</li>
          <li>Custom watchlists</li>
        </ul>
      `,
      `
        <h3>Why I Want to Build It</h3>
        <p>This expands on my movie organization app and introduces more interactive and dynamic features.</p>
      `
    ]
  },
  p6: {
    coverTitle: "Itinera",
    coverMeta: "Travel-planning tool combining itineraries, packing lists, and expenses.",
    pages: [
      `
        <h3>Problem I Am Solving</h3>
        <p>Trip planning is usually fragmented across multiple apps and notes, which makes it hard to stay organized. Itinera solves this by combining itinerary planning, packing management, and expense tracking in one workspace.</p>
      `,
      `
        <h3>Process</h3>
        <p>I am developing Itinera iteratively, starting with core planning workflows and expanding features in small, testable steps. I focus on practical user flows, readable code structure, and making each feature work together as one cohesive experience.</p>
      `,
      `
        <h3>Final Result</h3>
        <p>Itinera is an active build with core functionality centered on unified trip planning. The project direction is to provide a single, reliable tool for end-to-end travel preparation.</p>
        <p>Project link: <a href='https://github.com/msoto2027/itinera' target='_blank' rel='noopener noreferrer'>Itinera on GitHub</a></p>
      `,
      `
        <h3>Reflection</h3>
        <p>This project continues to teach me how to design for real-life workflows and prioritize features by user value. I am refining both technical structure and usability with each iteration.</p>
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
const profile = {
  name: "Madhav Reddy Nalla",
  initials: "MN",
  role: "Final-Year B.Tech",
  location: "India",
  focus: "Full-stack development, cloud apps, and practical AI tools",
  email: "madhavnalla21@gmail.com",
  phone: "+91 7989026208",
  resumeUrl: "./resume.pdf",
  badge: "Available for internships and full-time roles",
  summary:
    "I build clean, user-focused products that solve real problems. I enjoy turning ideas into fast, reliable web applications with strong UI, backend APIs, and deployment workflows.",
  about: [
    "I am a 4-2 B.Tech student who likes product-driven engineering. My main interest is creating useful software with thoughtful design, scalable architecture, and measurable impact.",
    "I work across frontend, backend, and deployment, and I am currently focused on improving performance, UX polish, and real-world project quality for internships and early-career roles.",
    "I work with AIML and cloud platforms, and I am always looking to learn new technologies and best practices to build better products.",
    "I am passionate about building projects that solve real problems and have a positive impact on users. I am excited to continue growing as a developer and contribute to meaningful projects in the future."
  ],
  stats: [
    { value: "10+", label: "Projects Built" },
    { value: "4", label: "Core Domains" },
    { value: "2", label: "Hackathon Entries" },
    { value: "2026", label: "Graduation Year" }
  ],
  skills: [
    { name: "JavaScript", detail: "Modern ES6+, async flows, DOM APIs" },
    { name: "React", detail: "Reusable components, hooks, responsive UI" },
    { name: "Node.js", detail: "REST APIs, middleware, auth" },
    { name: "Python", detail: "Automation scripts and data handling" },
    { name: "SQL / MongoDB", detail: "Schema design and optimized queries" },
    { name: "Git & GitHub", detail: "Version control, PR workflows, deployment" },
    { name: "Cloud Basics", detail: "Hosting, CI/CD, environment config" },
    { name: "UI/UX", detail: "Clean layouts, motion, and interaction design" }
  ],
  projects: [
    {
      title: "JALANDHAR",
      description:
        "A Farmer Helper App Which Provides Farming Tips, Weather Updates, and Market Prices.",
      stack: ["React", "Node.js", "Express", "MongoDB"],
      code: "https://github.com/your-username/smart-campus-assistant",
      live: "https://your-live-demo-link.vercel.app"
    },
    {
      title: "Placement Tracker Dashboard",
      description:
        "A dashboard to track company drives, coding progress, and interview preparation milestones in one place.",
      stack: ["JavaScript", "Chart.js", "Firebase"],
      code: "https://github.com/your-username/placement-tracker",
      live: "https://your-live-demo-link.vercel.app"
    },
    {
      title: "Portfolio + Blog Engine",
      description:
        "A personal site with markdown-based blog posts, smooth animations, and project case-study pages.",
      stack: ["HTML", "CSS", "JavaScript","node.js","express","SQLite","python","external APIs"],
      code: "https://github.com/your-username/portfolio-blog",
      live: "https://your-live-demo-link.vercel.app"
    }
  ],
  timeline: [
    { 
      period: "2022 - 2026",
      title: "B.Tech (Computer Science and Engineering)",
      org: "TKR Engineering College",
      detail: "Focused on core computer science areas including Artificial Intelligence, Machine Learning, Web Technologies, Cloud Computing, Data Science, and Software Development, supported by hands-on projects and research-driven learning."
    },
    {
      period: "2025",
      title: "Full-Stack Project Sprint",
      org: "Self-Driven / Team Collaboration",
      detail: "Built and deployed multiple end-to-end projects with authentication, APIs, and responsive UX."
    },
    {
      period: "2024",
      title: "Problem Solving and Development Focus",
      org: "College + Online Platforms",
      detail: "Practiced DSA and strengthened core development foundations through mini-projects and consistency."
    }
  ],
  achievements: [
    {
      title: "Consistent Project Builder",
      detail: "Shipped multiple working prototypes from idea to deployment with iterative improvements."
    },
    {
      title: "Strong Engineering Fundamentals",
      detail: "Hands-on understanding of full-stack flow, Git workflows, and debugging in real project setups."
    },
    {
      title: "Career Ready Focus",
      detail: "Preparing for internships and full-time roles with portfolio quality, coding practice, and communication."
    }
  ],
  socials: [
    { label: "GitHub", value: "github.com/Madhug5", url: "https://github.com/Madhug5" },
    { label: "LinkedIn", value: "linkedin.com/in/your-profile", url: "https://www.linkedin.com/in/your-profile" },
    { label: "Email", value: "madhavnalla21@gmail.com", url: "mailto:madhavnalla21@gmail.com" },
    { label: "Phone", value: "+91 7989026208", url: "tel:+917989026208" }
  ]
};

function setText(id, value) {
  const node = document.getElementById(id);
  if (node) node.textContent = value;
}

function setHref(id, value) {
  const node = document.getElementById(id);
  if (node) node.href = value;
}

function renderStats() {
  const grid = document.getElementById("statsGrid");
  if (!grid) return;

  grid.innerHTML = profile.stats
    .map(
      (item) => `
        <article class="stat">
          <strong>${item.value}</strong>
          <span>${item.label}</span>
        </article>
      `
    )
    .join("");
}

function renderSkills() {
  const grid = document.getElementById("skillGrid");
  if (!grid) return;

  grid.innerHTML = profile.skills
    .map(
      (skill) => `
        <article class="skill-card tilt">
          <h3>${skill.name}</h3>
          <p class="skill-meta">${skill.detail}</p>
        </article>
      `
    )
    .join("");
}

function renderProjects() {
  const grid = document.getElementById("projectGrid");
  if (!grid) return;

  grid.innerHTML = profile.projects
    .map(
      (project) => `
        <article class="project-card tilt">
          <h3>${project.title}</h3>
          <p>${project.description}</p>
          <div class="chips">
            ${project.stack.map((item) => `<span class="chip">${item}</span>`).join("")}
          </div>
          <div class="project-links">
            <a href="${project.code}" target="_blank" rel="noreferrer">Code</a>
            <a href="${project.live}" target="_blank" rel="noreferrer">Live</a>
          </div>
        </article>
      `
    )
    .join("");
}

function renderTimeline() {
  const node = document.getElementById("timeline");
  if (!node) return;

  node.innerHTML = profile.timeline
    .map(
      (item) => `
        <article class="timeline-item tilt">
          <span class="timeline-meta">${item.period}</span>
          <h3>${item.title}</h3>
          <p><strong>${item.org}</strong></p>
          <p>${item.detail}</p>
        </article>
      `
    )
    .join("");
}

function renderAchievements() {
  const node = document.getElementById("achievementGrid");
  if (!node) return;

  node.innerHTML = profile.achievements
    .map(
      (item) => `
        <article class="achievement-card tilt">
          <h3>${item.title}</h3>
          <p>${item.detail}</p>
        </article>
      `
    )
    .join("");
}

function renderSocials() {
  const node = document.getElementById("socialList");
  if (!node) return;

  node.innerHTML = profile.socials
    .map(
      (item) => `
        <a class="social-card" href="${item.url}" target="_blank" rel="noreferrer">
          <strong>${item.label}</strong>
          <span>${item.value}</span>
        </a>
      `
    )
    .join("");
}

function setupScrollReveal() {
  const revealNodes = document.querySelectorAll("[data-reveal]");
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.16 }
  );

  revealNodes.forEach((node, index) => {
    node.style.transitionDelay = `${index * 60}ms`;
    observer.observe(node);
  });
}

function setupActiveNav() {
  const links = [...document.querySelectorAll("nav a")];
  const sections = links
    .map((link) => {
      const id = link.getAttribute("href")?.replace("#", "");
      return document.getElementById(id);
    })
    .filter(Boolean);

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;

        links.forEach((link) => {
          const active = link.getAttribute("href") === `#${entry.target.id}`;
          link.classList.toggle("active", active);
        });
      });
    },
    {
      threshold: 0.34,
      rootMargin: "-15% 0px -45% 0px"
    }
  );

  sections.forEach((section) => observer.observe(section));
}

function setupTiltCards() {
  const cards = document.querySelectorAll(".tilt");

  cards.forEach((card) => {
    card.addEventListener("pointermove", (event) => {
      const rect = card.getBoundingClientRect();
      const x = event.clientX - rect.left;
      const y = event.clientY - rect.top;
      const rotateX = ((y / rect.height) - 0.5) * -8;
      const rotateY = ((x / rect.width) - 0.5) * 8;
      card.style.transform = `perspective(900px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
    });

    card.addEventListener("pointerleave", () => {
      card.style.transform = "perspective(900px) rotateX(0deg) rotateY(0deg)";
    });
  });
}

function injectProfile() {
  document.title = `${profile.name} | Portfolio`;

  setText("brandName", profile.name);
  setText("heroBadge", profile.badge);
  setText("heroName", profile.name.split(" ")[0]);
  setText("heroRole", profile.role);
  setText("heroSummary", profile.summary);
  setText("heroMeta", `${profile.location} • ${profile.focus}`);
  setText("avatar", profile.initials);
  setText("cardName", profile.name);
  setText("cardRole", profile.role);
  setText("aboutLine1", profile.about[0]);
  setText("aboutLine2", profile.about[1]);
  setText("contactCopy", `Reach me at ${profile.email} or ${profile.phone}.`);
  setText("footerText", `© ${new Date().getFullYear()} ${profile.name}. Built for GitHub Pages.`);

  setHref("resumeLink", profile.resumeUrl);
  setHref("contactResumeLink", profile.resumeUrl);
  setHref("emailLink", `mailto:${profile.email}`);

  renderStats();
  renderSkills();
  renderProjects();
  renderTimeline();
  renderAchievements();
  renderSocials();
}

injectProfile();
setupScrollReveal();
setupActiveNav();
setupTiltCards();

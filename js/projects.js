// ======================================================
// PROJECT OBJECT STRUCTURE
// ======================================================
//
// id                  -> Unique project ID
// slug                -> Future SEO-friendly URL
// title               -> Project title
// category            -> Project category
// shortDescription    -> Homepage card description
// detailedDescription -> Project details page description
// thumbnail           -> Project card image
// screenshots         -> Project gallery images
// technologies        -> Tech stack (Array)
// features            -> Project features (Array)
// github              -> GitHub repository
// liveDemo            -> Live project link
// badges              -> Featured, Live, In Progress etc.
// showOnHome          -> Show on homepage or not
// year                -> Project completion year
//
// ======================================================

const projects = [
  {
    id: 1,

    slug: "personal-portfolio", // Future SEO URL

    title: "Personal Portfolio",

    category: "Frontend Development",

    shortDescription:
      "Modern responsive portfolio website with dynamic project and skill management.",

    overviewHeading: "Designing My Digital Identity",

    detailedDescription:
      "A professional portfolio website built with HTML, CSS and JavaScript. The project follows reusable components, dynamic rendering, responsive layouts and clean architecture.",

    thumbnail: "images/projects/project1/placeholder.png",

    screenshots: [
      "images/projects/project1/p1-img1.jpg",
      "images/projects/project1/p1-img1.jpg",
      "images/projects/project1/p1-img2.jpg",
    ],

technologies: [
  {
    name: "HTML5",
    role: "Structure",
    icon: "fa-brands fa-html5",
    className: "html5-tech"
  },
  {
    name: "CSS3",
    role: "Styling",
    icon: "fa-brands fa-css3-alt",
    className: "css3-tech"
  },
  {
    name: "JavaScript",
    role: "Logic",
    icon: "fa-brands fa-js",
    className: "javascript-tech"
  },
  {
    name: "Local Storage",
    role: "Browser API",
    icon: "fa-solid fa-database",
    className: "localstorage-tech"
  }
],

    features: [
  {
    title: "CRUD Operations",
    description: "Create, edit, update and delete tasks with a smooth workflow.",
    icon: "fa-solid fa-pen-to-square",
  },

  {
    title: "Task Categories",
    description: "Organize tasks into different categories for better management.",
    icon: "fa-solid fa-folder-tree",
  },

  {
    title: "Priority Levels",
    description: "Assign priorities to focus on the most important tasks first.",
    icon: "fa-solid fa-flag",
  },

  {
    title: "Local Storage",
    description: "Automatically saves tasks in the browser without a database.",
    icon: "fa-solid fa-database",
  },

  {
    title: "Search Tasks",
    description: "Quickly find tasks using instant search functionality.",
    icon: "fa-solid fa-magnifying-glass",
  },

  {
    title: "Responsive UI",
    description: "Works smoothly across desktop, tablet and mobile devices.",
    icon: "fa-solid fa-mobile-screen-button",
  },
],

    github: "https://github.com/rao-awais-18/personal-portfolio", // temporary placeholder, replace with your own repo link

    liveDemo: "https://rao-awais-18.github.io/personal-portfolio/", // temporary placeholder, replace with your own live demo link

    // resources can be used to add additional links like case studies, Figma designs, etc. You can add as many resources as you want. Each resource should have a title, url and icon (Font Awesome icon class)
    resources: [
      {
        title: "Case Study",

        url: "#",

        icon: "fa-solid fa-file-lines",
      },

      {
        title: "Figma Design",

        url: "#",

        icon: "fa-brands fa-figma",
      },
    ],

    badges: ["Featured", "In Progress"],

    showOnHome: true,

    year: 2026,

    duration: "3 Weeks",

    status: "In Progress",

    role: "Frontend Developer",

    client: "Personal Project", // company, owner name

    version: "1.0",

    lastUpdated: "July 2026",

    platform: "Web",
  },






  {
    id: 2,

    slug: "ngo-management-system",

    title: "NGO Management System",

    category: "Full Stack Development",

    shortDescription:
      "Complete NGO management system with member registration and donation tracking.",

    overviewHeading: "Digitalizing NGOs Management",

    detailedDescription:
      "A complete management system for NGOs including member management, donations, reports, authentication and dashboard.",

    thumbnail: "images/projects/project1/placeholder.png",

    screenshots: [
      "images/projects/project2/p2i-img1.png",
      "images/projects/project2/p2i-img2.png",
      "images/projects/project2/p2i-img3.png",
    ],

technologies: [
  {
    name: "HTML5",
    role: "Structure",
    icon: "fa-brands fa-html5",
    className: "html5-tech"
  },
  {
    name: "CSS3",
    role: "Styling",
    icon: "fa-brands fa-css3-alt",
    className: "css3-tech"
  },
  {
    name: "JavaScript",
    role: "Logic",
    icon: "fa-brands fa-js",
    className: "javascript-tech"
  },
  {
    name: "Local Storage",
    role: "Browser API",
    icon: "fa-solid fa-database",
    className: "localstorage-tech"
  }
],

    features: [
  {
    title: "CRUD Operations",
    description: "Create, edit, update and delete tasks with a smooth workflow.",
    icon: "fa-solid fa-pen-to-square",
  },

  {
    title: "Task Categories",
    description: "Organize tasks into different categories for better management.",
    icon: "fa-solid fa-folder-tree",
  },

  {
    title: "Priority Levels",
    description: "Assign priorities to focus on the most important tasks first.",
    icon: "fa-solid fa-flag",
  },

  {
    title: "Local Storage",
    description: "Automatically saves tasks in the browser without a database.",
    icon: "fa-solid fa-database",
  },

  {
    title: "Search Tasks",
    description: "Quickly find tasks using instant search functionality.",
    icon: "fa-solid fa-magnifying-glass",
  },

  {
    title: "Responsive UI",
    description: "Works smoothly across desktop, tablet and mobile devices.",
    icon: "fa-solid fa-mobile-screen-button",
  },
],

    github: "#",

    liveDemo: "#",

    badges: ["Featured"],

    showOnHome: true,

    year: 2026,

    duration: "3 Weeks",

    status: "In Progress",

    role: "Frontend Developer",

    client: "Personal Project", // company, owner name

    version: "1.0",

    lastUpdated: "July 2026",

    platform: "Web",
  },





  {
    id: 3,

    slug: "task-manager-app",

    title: "Task Manager App",

    category: "JavaScript Application",

    shortDescription:
      "Task management application with local storage and productivity features.",

    overviewHeading: "Designing Your Online Task Management",

    detailedDescription:
      "A JavaScript-based task manager allowing users to organize daily work using categories, priorities, deadlines and local storage.",

    thumbnail: "images/projects/project1/placeholder.png",

    screenshots: [
      "images/projects/project3/p3-img1.png",
      "images/projects/project3/p3-img1.png",
      "images/projects/project3/p3-img1.png",
    ],

    technologies: [
  {
    name: "HTML5",
    role: "Structure",
    icon: "fa-brands fa-html5",
    className: "html5-tech"
  },
  {
    name: "CSS3",
    role: "Styling",
    icon: "fa-brands fa-css3-alt",
    className: "css3-tech"
  },
  {
    name: "JavaScript",
    role: "Logic",
    icon: "fa-brands fa-js",
    className: "javascript-tech"
  },
  {
    name: "Local Storage",
    role: "Browser API",
    icon: "fa-solid fa-database",
    className: "localstorage-tech"
  }
],

    features: [
  {
    title: "CRUD Operations",
    description: "Create, edit, update and delete tasks with a smooth workflow.",
    icon: "fa-solid fa-pen-to-square",
  },

  {
    title: "Task Categories",
    description: "Organize tasks into different categories for better management.",
    icon: "fa-solid fa-folder-tree",
  },

  {
    title: "Priority Levels",
    description: "Assign priorities to focus on the most important tasks first.",
    icon: "fa-solid fa-flag",
  },

  {
    title: "Local Storage",
    description: "Automatically saves tasks in the browser without a database.",
    icon: "fa-solid fa-database",
  },

  {
    title: "Search Tasks",
    description: "Quickly find tasks using instant search functionality.",
    icon: "fa-solid fa-magnifying-glass",
  },

  {
    title: "Responsive UI",
    description: "Works smoothly across desktop, tablet and mobile devices.",
    icon: "fa-solid fa-mobile-screen-button",
  },
],

    github: "#",

    liveDemo: "#",

    badges: ["Coming Soon"],

    showOnHome: true,

    year: 2025,

    duration: "3 Weeks",

    status: "In Progress",

    role: "Frontend Developer",

    client: "Personal Project", // company, owner name

    version: "1.0",

    lastUpdated: "July 2026",

    platform: "Web",
  },

  // more objects here!
];

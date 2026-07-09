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

    detailedDescription:
      "A professional portfolio website built with HTML, CSS and JavaScript. The project follows reusable components, dynamic rendering, responsive layouts and clean architecture.",

    thumbnail: "images/projects/project1/placeholder.png",

    screenshots: [
      "images/projects/project1/p1-img1.jpg",
      "images/projects/project1/p1-img1.jpg",
      "images/projects/project1/p1-img2.jpg",
    ],

    technologies: ["HTML5", "CSS3", "JavaScript", "Bootstrap", "Font Awesome"],

    features: [
      "Fully Responsive Layout",
      "Dynamic Project Rendering",
      "Dynamic Skills Rendering",
      "Animated Hero Section",
      "Glassmorphism UI",
      "Project Detail Page",
    ],

    github: "#",

    liveDemo: "#",

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

    detailedDescription:
      "A complete management system for NGOs including member management, donations, reports, authentication and dashboard.",

    thumbnail: "images/projects/project1/placeholder.png",

    screenshots: [
      "images/projects/project2/p2i-img1.png",
      "images/projects/project2/p2i-img2.png",
      "images/projects/project2/p2i-img3.png",
    ],

    technologies: ["HTML5", "CSS3", "JavaScript", "PHP", "MySQL", "Bootstrap"],

    features: [
      "Secure Login",
      "Admin Dashboard",
      "Donation Management",
      "Member Management",
      "Reports",
      "Responsive Design",
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

    detailedDescription:
      "A JavaScript-based task manager allowing users to organize daily work using categories, priorities, deadlines and local storage.",

    thumbnail: "images/projects/project1/placeholder.png",

    screenshots: [
      "images/projects/project3/p3-img1.png",
      "images/projects/project3/p3-img1.png",
      "images/projects/project3/p3-img1.png",
    ],

    technologies: ["HTML5", "CSS3", "JavaScript", "Local Storage"],

    features: [
      "CRUD Operations",
      "Task Categories",
      "Priority Levels",
      "Local Storage",
      "Search Tasks",
      "Responsive UI",
    ],

    github: "#",

    liveDemo: "#",

    badges: ["Coming Soon"],

    showOnHome: false,

    year: 2025,

    duration: "3 Weeks",

    status: "In Progress",

    role: "Frontend Developer",

    client: "Personal Project", // company, owner name

    version: "1.0",

    lastUpdated: "July 2026",

    platform: "Web"
  },

  // more objects here! 
];

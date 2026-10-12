// group -> matches a filter id below
export const skillFilters = [
  { id: "all", label: "All" },
  { id: "languages", label: "Languages" },
  { id: "frameworks", label: "Frameworks" },
  { id: "mobile", label: "Mobile" },
  { id: "apis", label: "APIs & Cloud" },
  { id: "tools", label: "Tools" },
  { id: "architecture", label: "Architecture" },
];

export const skills = [
  // Languages
  { name: "Dart", group: "languages", category: "Programming Languages", level: "Advanced" },
  { name: "JavaScript", group: "languages", category: "Programming Languages", level: "Intermediate" },
  { name: "Swift (Basic)", group: "languages", category: "Programming Languages", level: "Basic" },
  { name: "Node.js", group: "languages", category: "Programming Languages", level: "Basic" },

  // Frameworks & State management
  { name: "Flutter", group: "frameworks", category: "Frameworks & State Management", level: "Advanced" },
  { name: "GetX", group: "frameworks", category: "Frameworks & State Management", level: "Advanced" },
  { name: "BLoC", group: "frameworks", category: "Frameworks & State Management", level: "Intermediate" },

  // Mobile platforms
  { name: "Android", group: "mobile", category: "Mobile Platforms", level: "Advanced" },
  { name: "iOS", group: "mobile", category: "Mobile Platforms", level: "Intermediate" },
  { name: "Cross-Platform", group: "mobile", category: "Mobile Platforms", level: "Advanced" },

  // APIs & Databases
  { name: "REST APIs", group: "apis", category: "APIs & Databases", level: "Advanced" },
  { name: "Firebase", group: "apis", category: "APIs & Databases", level: "Advanced" },
  { name: "MongoDB", group: "apis", category: "APIs & Databases", level: "Intermediate" },

  // Cloud & SDKs
  { name: "Agora", group: "apis", category: "Cloud & SDKs", level: "Advanced" },
  { name: "ZegoCloud", group: "apis", category: "Cloud & SDKs", level: "Advanced" },
  { name: "Google Maps SDK", group: "apis", category: "Cloud & SDKs", level: "Advanced" },
  { name: "Firebase Cloud Messaging", group: "apis", category: "Cloud & SDKs", level: "Advanced" },

  // Payments
  { name: "Stripe", group: "apis", category: "Payments", level: "Intermediate" },
  { name: "Razorpay", group: "apis", category: "Payments", level: "Advanced" },

  // Architecture & methodology
  { name: "Clean Architecture", group: "architecture", category: "Architecture & Methodology", level: "Advanced" },
  { name: "MVC", group: "architecture", category: "Architecture & Methodology", level: "Advanced" },
  { name: "MVVM", group: "architecture", category: "Architecture & Methodology", level: "Intermediate" },
  { name: "SOLID Principles", group: "architecture", category: "Architecture & Methodology", level: "Advanced" },
  { name: "Agile / Scrum", group: "architecture", category: "Architecture & Methodology", level: "Advanced" },

  // Tools & DevOps
  { name: "Git / GitHub", group: "tools", category: "Tools & DevOps", level: "Advanced" },
  { name: "Postman", group: "tools", category: "Tools & DevOps", level: "Advanced" },
  { name: "Flutter DevTools", group: "tools", category: "Tools & DevOps", level: "Advanced" },
  { name: "Xcode", group: "tools", category: "Tools & DevOps", level: "Intermediate" },
  { name: "GitHub Actions", group: "tools", category: "Tools & DevOps", level: "Intermediate" },
  { name: "Fastlane", group: "tools", category: "Tools & DevOps", level: "Intermediate" },
];

// Order used when grouping skills into sections on the Skills page
export const categoryOrder = [
  "Programming Languages",
  "Frameworks & State Management",
  "Mobile Platforms",
  "APIs & Databases",
  "Cloud & SDKs",
  "Payments",
  "Architecture & Methodology",
  "Tools & DevOps",
];

// A short list used for the Home page preview
export const featuredSkills = [
  "Dart",
  "Flutter",
  "GetX",
  "BLoC",
  "JavaScript",
  "Firebase",
  "MongoDB",
  "Agora",
  "ZegoCloud",
  "Google Maps SDK",
  "Razorpay",
  "REST APIs",
];

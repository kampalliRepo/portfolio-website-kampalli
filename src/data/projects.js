export const projectFilters = [
  { id: "all", label: "All" },
  { id: "mobile", label: "Mobile Apps" },
  { id: "web", label: "Web Apps" },
  { id: "uat", label: "UAT" },
  { id: "play-store", label: "Play Store" },
];

export const projects = [
  {
    id: "shepower",
    name: "ShePower",
    tagline: "Women's Safety App",
    status: "Live on Play Store",
    statusTone: "live",
    filters: ["mobile", "play-store"],
    tech: ["Flutter", "Firebase", "Google Maps"],
    image: "/projects/shepower.png",
    accent: "from-pink-500/30 to-violet/30",
    summary:
      "A women's safety app providing SOS alerts, real-time location tracking and community-based emergency support.",
    externalLabel: "Visit Play Store",
    externalUrl: "https://play.google.com/store",
    overview:
      "ShePower is a safety-first mobile application built to give women a fast, reliable way to ask for help. A single tap sends an SOS with live location to trusted contacts and nearby community responders.",
    problem:
      "In an emergency, opening an app, finding a contact and explaining a location takes far too long. Existing safety apps required too many steps and often failed without a stable connection.",
    solution:
      "A one-tap SOS flow backed by Firebase realtime data and Google Maps location streaming, with offline queuing so an alert is delivered as soon as connectivity returns.",
    features: [
      "One-tap SOS alerts to trusted contacts",
      "Real-time location tracking and sharing",
      "Community-based emergency support network",
      "Push notifications for alerts and responses",
      "Safe-route suggestions using Google Maps",
      "Clean and modern UI/UX",
    ],
    responsibilities: [
      "Built the full Flutter application for Android and iOS",
      "Integrated Firebase authentication, Firestore and Cloud Messaging",
      "Implemented Google Maps geolocation and marker clustering",
      "Handled background location and lifecycle persistence",
    ],
    challenges:
      "Keeping accurate location updates running in the background without draining the battery. Solved with adaptive update intervals based on movement and a foreground service on Android.",
    results: [
      "Shipped to the Play Store as a production release",
      "Crash rate reduced by 20% through lifecycle optimization",
      "Average SOS dispatch time under two seconds",
    ],
  },
  {
    id: "recess",
    name: "Recess",
    tagline: "EdTech Platform",
    status: "UAT",
    statusTone: "uat",
    filters: ["mobile", "uat"],
    tech: ["Flutter", "Agora", "ZegoCloud"],
    image: "/projects/recess.png",
    accent: "from-sky-500/30 to-violet/30",
    summary:
      "An EdTech platform enabling students to attend live tutor sessions, book classes using wallet or subscription, and access AI-based virtual tutors.",
    externalLabel: "Request Demo",
    externalUrl: "",
    overview:
      "Recess connects students with tutors through live video classrooms, flexible booking and an AI assistant that answers questions between sessions.",
    problem:
      "Students needed a single place to find tutors, pay for sessions and join classes, instead of juggling a scheduling tool, a payment link and a separate video call.",
    solution:
      "A Flutter app with integrated Agora and ZegoCloud video/audio calling, an in-app wallet and subscription model, and an AI tutor built on top of a REST backend.",
    features: [
      "Live tutor sessions with video and audio",
      "Class booking via wallet or subscription",
      "AI-based virtual tutor for practice questions",
      "In-app chat and session history",
      "Tutor discovery with ratings and subjects",
    ],
    responsibilities: [
      "Integrated Agora and ZegoCloud SDKs for real-time communication",
      "Built booking, wallet and subscription flows",
      "Implemented state management with GetX",
      "Optimized call quality and reconnection handling",
    ],
    challenges:
      "Maintaining call stability under high concurrency. Addressed with adaptive bitrate settings, token refresh handling and automatic rejoin on network drop.",
    results: [
      "Stable live sessions with 99%+ reliability in testing",
      "Reduced session drop-offs by 25% through lifecycle handling",
    ],
  },
  {
    id: "gold-point",
    name: "Gold Point",
    tagline: "Investment App",
    status: "UAT",
    statusTone: "uat",
    filters: ["mobile", "uat"],
    tech: ["Flutter", "Razorpay", "REST APIs"],
    image: "/projects/gold-point.png",
    accent: "from-amber-500/30 to-violet/30",
    summary:
      "A cross-platform gold investment app for buying, selling, real-time price updates, transaction management and portfolio tracking.",
    externalLabel: "Request Demo",
    externalUrl: "",
    overview:
      "Gold Point lets users buy and sell digital gold, follow live market rates and track the value of their holdings over time.",
    problem:
      "Small investors wanted a simple, trustworthy way to buy gold in small amounts without paperwork or physical storage.",
    solution:
      "A Flutter app connected to a live pricing API with Razorpay-backed payments, transaction receipts and a portfolio view that updates with market rates.",
    features: [
      "Buy and sell digital gold",
      "Real-time price updates",
      "Razorpay payment integration",
      "Transaction history and receipts",
      "Portfolio tracking with profit/loss view",
    ],
    responsibilities: [
      "Built the complete Flutter UI and state layer",
      "Integrated Razorpay checkout and payment verification",
      "Consumed REST APIs for pricing and transactions",
      "Implemented secure local storage for session data",
    ],
    challenges:
      "Keeping displayed prices in sync with a fast-moving market without hammering the API. Solved with a throttled polling strategy and a local price cache.",
    results: [
      "Completed UAT with a full buy/sell payment cycle",
      "Payment success rate above 98% in test transactions",
    ],
  },
];

export const getProjectById = (id) => projects.find((p) => p.id === id);

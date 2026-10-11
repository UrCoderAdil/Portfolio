export const selectedProjects = [
  {
    "id": 9,
    "title": "SEHAT GRID",
    "category": "AI-Assisted Healthcare Coordination",
    "year": "2026",
    "desc": "A deployed MVP connecting public and private hospitals in Islamabad through reviewed primary-care referrals, shared capacity, and funding plans.",
    "tech": [
      "Next.js",
      "TypeScript",
      "FastAPI",
      "Three.js",
      "OR-Tools"
    ],
    "highlights": [
      "Won 2nd place (1st Runner Up) in AICON’26 Build with AI at NUST, earning a PKR 25,000 prize.",
      "Built role-based workspaces for hospital reception, onboarding, and government planning, with AI-assisted service matching."
    ],
    "mark": "SG",
    "accent": "#0d9488",
    "link": "https://sehat-grid.vercel.app/",
    "linkLabel": "View Live Demo",
    "featured": true,
    "img": "/projects/sehat-grid.png",
    "award": "AICON’26 · 2nd Place"
  },
  {
    "id": 8,
    "title": "WhatsApp Business Assistant",
    "category": "AI Agent & Business Automation",
    "year": "2026",
    "desc": "A multi-tenant WhatsApp assistant that connects conversational AI to business knowledge, customer profiles, and operational tools, with a web administration dashboard.",
    "tech": [
      "FastAPI",
      "LangGraph",
      "Gemini",
      "Next.js",
      "SQLAlchemy"
    ],
    "highlights": [
      "Combines tenant-specific prompts, conversation memory, knowledge lookup, and human handoff.",
      "Provides tool-based workflows for order status and appointments, with sandbox integrations for development."
    ],
    "mark": "WA",
    "accent": "#2563eb",
    "link": "https://github.com/UrCoderAdil/WA_bot",
    "linkLabel": "View GitHub",
    "featured": true,
    "img": "/projects/wa.png"
  },
  {
    "id": 5,
    "title": "PipeForge",
    "category": "MLOps & DevOps Platform",
    "year": "2026",
    "desc": "A full-stack platform for composing pipelines, tracking executions, and managing machine learning experiments and model versions through a unified dashboard.",
    "tech": [
      "Next.js",
      "NestJS",
      "Prisma",
      "PostgreSQL",
      "Socket.IO"
    ],
    "highlights": [
      "Streams stage status and execution logs through an event-driven backend.",
      "Organizes pipeline execution with factory, decorator, and state patterns; includes CI workflows and container configuration."
    ],
    "mark": "PF",
    "accent": "#6366f1",
    "link": "https://github.com/UrCoderAdil/PipeForge",
    "linkLabel": "View GitHub",
    "featured": false,
    "img": "/projects/pipeforge.png"
  },
  {
    "id": 4,
    "title": "FashionStyler",
    "category": "AI Recommendation System",
    "year": "2026",
    "desc": "A personal styling application that combines photo analysis with explainable outfit recommendations tailored to body shape, seasonal colors, and style preferences.",
    "tech": [
      "React",
      "FastAPI",
      "PyTorch",
      "CLIP",
      "MediaPipe"
    ],
    "highlights": [
      "Ranks outfits using visual embeddings, body compatibility, color analysis, and preference scoring.",
      "Connects a React lookbook to a Python API, with pose-guided garment overlays and shareable style cards."
    ],
    "mark": "FS",
    "accent": "#a855f7",
    "link": "https://github.com/UrCoderAdil/FashionStyler",
    "linkLabel": "View GitHub",
    "featured": false,
    "img": "/projects/fashionstyler.png"
  },
  {
    "id": 6,
    "title": "Sign Language Translator",
    "category": "Computer Vision & Accessibility",
    "year": "2026",
    "desc": "A computer vision prototype that extracts hand landmarks and classifies static signs, exposing predictions through image uploads and a streaming API.",
    "tech": [
      "Python",
      "MediaPipe",
      "OpenCV",
      "scikit-learn",
      "FastAPI"
    ],
    "highlights": [
      "Pairs landmark feature extraction with a persisted Random Forest classifier and confidence scores.",
      "Includes data collection and training tools, WebSocket classification, and English-to-gloss helpers; recognition requires a trained model."
    ],
    "mark": "SL",
    "accent": "#0891b2",
    "link": "https://github.com/UrCoderAdil/SignLanguage_Translator",
    "linkLabel": "View GitHub",
    "featured": false,
    "img": "/projects/signlanguage.png"
  },
  {
    "id": 7,
    "title": "ShadowCaster",
    "category": "Computer Vision Game",
    "year": "2026",
    "desc": "An interactive browser game that turns webcam-captured hand shadows into controls for a procedural world, blending computer vision with real-time rendering.",
    "tech": [
      "JavaScript",
      "OpenCV.js",
      "Canvas",
      "Vite"
    ],
    "highlights": [
      "Uses contour geometry and temporal smoothing to recognize hand-shadow shapes.",
      "Separates camera calibration, gesture processing, world simulation, rendering, and audio into dedicated modules."
    ],
    "mark": "SC",
    "accent": "#059669",
    "link": "https://github.com/UrCoderAdil/ShadowCaster_Game",
    "linkLabel": "View GitHub",
    "featured": false,
    "img": "/projects/shadowcaster.png"
  }
];

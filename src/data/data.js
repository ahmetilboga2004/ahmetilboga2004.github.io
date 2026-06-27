export const HERO_DATA = {
  name: 'Ahmet İlboga',
  title: 'Full Stack Developer',
  bio: 'I develop digital products for people as a solo developer. I mainly work on web applications and backend services. I focus on building products that are useful, easy to use, and based on real user needs.',
  location: 'Istanbul, Turkey',
  open: true,
}

export const SKILLS = [
  'Go',
  'Node.js',
  'REST API',
  'PostgreSQL',
  'Redis',
  'Docker',
  'Vue.js',
  'Backend Services',
  'System Architecture',
  'Solo Development',
]

export const PROJECTS = [
  {
    id: '1',
    title: 'Turizm Personeli',
    category: 'Job Platform',
    year: '2025',
    description:
      'A job platform designed to make the hiring process easier for tourism workers and employers. Focused on reducing friction in job discovery and applications within the tourism sector.',
    technologies: ['Go', 'Node.js', 'Vue', 'PostgreSQL', 'Redis', 'Docker', 'Tailwind'],
    link: null,
  },
  {
    id: '2',
    title: 'ICE - 2D Aim & Reflex Trainer',
    category: 'Game',
    year: '2026',
    description:
      'ICE | A minimalist, 2D Cyberpunk rhythm-based aim trainer. This is an aim browser-based aim & rhythm development game with different difficulty levels and types, where you can improve your aim for FPS games.',
    technologies:['Vue'],
    link: 'https://ice.absolca.com'
  },
  {
    id: '3',
    title: "AnyKey - Rent Any Key",
    category: 'Adtech',
    year: '2026',
    description: 'AnyKey is a minimalist advertising platform that transforms the keyboard into a digital marketplace. Users can lease any key as a dedicated ad space, turning every keystroke into a gateway that redirects curious explorers to their brand or website.',
    technologies: ['Go', 'Htmx', 'PostgreSQL', 'JavaScript', 'CSS'],
    link: 'https://anykey.absolca.com'
  },
  {
    id: '4',
    title: "LiteRT-LM API Bridge",
    category: 'Open Source',
    year: '2026',
    description: "LiteBridge is a high-performance and lightweight bridge (gateway) implementation that delivers Google's LiteRT-LM models via an OpenAI-compatible API.",
    technologies: ['Python', 'Huggingface', 'LiteRT-LM'],
    link: 'https://github.com/ahmetilboga2004/LiteRT-LM-API-Bridge'
  },
  {
    id: '5',
    title: "Pinokio - Visual UI Feedback Extension",
    category: 'Extension',
    year: '2026',
    description: "Pinokio is a browser extension that provides visual feedback for user interactions on web pages. It enhances user experience by visually indicating actions such as clicks, form submissions, and other interactive events.",
    technologies: ['TypeScript', 'CSS', 'HTML', 'Vite', 'Supabase'],
  }
]

export const EXPERIENCE = [
  {
    id: '1',
    role: 'Solo Developer',
    company: 'Independent',
    period: '2021 — Present',
    description:
      'Developing and maintaining personal digital products end-to-end. Responsible for backend services, APIs, databases, and frontend implementation while working independently on all stages of the product.',
  },
]

export const SOCIALS = [
  {
    id: '1',
    name: 'Email',
    url: 'mailto:ilbogaahmet4747@gmail.com',
    label: 'ilbogaahmet4747@gmail.com',
  },
  {
    id: '2',
    name: 'GitHub',
    url: 'https://github.com/ahmetilboga2004',
    label: '@ahmetilboga2004',
  },
  {
    id: '3',
    name: 'LinkedIn',
    url: 'https://www.linkedin.com/in/ahmet-ilboga/',
    label: 'Ahmet İlboğa',
  },
  {
    id: '4',
    name: 'Instagram',
    url: 'https://www.instagram.com/ahmet_ilboga47/',
    label: '@ahmet_ilboga47',
  },
]

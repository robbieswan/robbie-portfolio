export interface Project {
  id: string
  title: string
  category: string
  description: string
  tags: string[]
  image: string | null
  imageStyle?: 'landscape' | 'portrait'
  featured: boolean
  placeholderEmoji: string | null
  placeholderGradient: string | null
  link?: string
  imageOverlay?: string
}

export const projects: Project[] = [
  {
    id: 'gabb-music',
    title: 'Gabb Music+',
    category: 'Mobile App · Music Streaming · ML Safety',
    description: "Drove 70%+ of company plan upgrades by launching the music industry's first safety streaming product. Owned end-to-end ML filtering — NLP sentiment analysis, computer vision, and 1.8M+ tracks through AI-powered content filtration. Available on iOS and Android.",
    tags: ['iOS & Android', 'NLP', 'Computer Vision', 'A/B Testing', 'GTM'],
    image: '/images/gabb-banner.webp',
    featured: true,
    placeholderEmoji: null,
    placeholderGradient: null,
    link: 'https://gabb.com/gabb-music/',
  },
  {
    id: 'safety-engine',
    title: "Led Creation of World's First Music Safety Engine",
    category: 'ML Engineering · Safety · Product Strategy',
    description: 'Built the largest known human-in-the-loop ML pipeline for music content classification — 70K+ album images to 99.9% accuracy. This became the core differentiator that made Gabb Music the lowest-complaint product company-wide.',
    tags: ['ML Pipeline', 'Python', 'Computer Vision', 'Human-in-the-loop'],
    image: '/images/gabb-explanation-dark.png',
    featured: false,
    placeholderEmoji: null,
    placeholderGradient: null,
    link: 'https://gabb.com/gabb-music/',
  },
  {
    id: 'mtp',
    title: 'Market Turning Points — Stock Visualizer',
    category: 'Fintech AI · Data Visualization',
    description: "Built the 0→1 AI forecasting tool that became the company's core revenue driver. 100+ automated chart visualizations powered by proprietary ML cycle algorithms. Drove 40%+ YoY revenue growth.",
    tags: ['Python', 'ML Forecasting', 'REST APIs', 'Data Viz', 'Fintech'],
    image: '/images/mtp-home.png',
    imageOverlay: 'linear-gradient(180deg, rgba(250,250,247,0) 0%, rgba(250,250,247,0.4) 50%, rgba(250,250,247,0.85) 100%)',
    featured: true,
    placeholderEmoji: null,
    placeholderGradient: null,
  },
  {
    id: 'spoken',
    title: 'spokenstories.app',
    category: 'Voice AI · Personal Storytelling',
    description: 'Shipped end-to-end in 3 weeks. Families upload recordings of a loved one and hear personal stories narrated in their voice. Built with Claude AI for story generation, ElevenLabs for voice cloning, and Supabase for the backend.',
    tags: ['Claude AI', 'ElevenLabs', 'Supabase', 'Bolt.new'],
    image: '/images/spoken-stories.png',
    featured: false,
    placeholderEmoji: null,
    placeholderGradient: null,
    link: 'https://spokenstories.app',
  },
  {
    id: 'ratewatch',
    title: 'ratewatch.us',
    category: 'Fintech · Rate Tracking',
    description: 'Mortgage rate monitoring platform with real-time alerts. Users set target rates and get notified the moment rates drop — helping them act fast on refinance and purchase opportunities.',
    tags: ['Fintech', 'Real-time APIs', 'Alerts', 'Consumer SaaS'],
    image: '/images/ratewatch.png',
    featured: false,
    placeholderEmoji: null,
    placeholderGradient: null,
    link: 'https://ratewatch.us',
  },
  {
    id: 'rap-model',
    title: 'Rap Lyrics Language Model',
    category: 'ML · NLP · Generative AI',
    description: 'Fine-tuned a small language model on a rap lyrics corpus with custom tokenization and style-conditioned generation. Open source on GitHub.',
    tags: ['Python', 'NLP', 'Small LLM', 'Open Source'],
    image: null,
    featured: false,
    placeholderEmoji: '🎤',
    placeholderGradient: 'linear-gradient(135deg, rgba(16,185,129,0.12), rgba(6,182,212,0.12))',
    link: 'https://github.com/robbieswan',
  },
  {
    id: 'disaster',
    title: 'US Natural Disaster Predictor',
    category: 'ML · Neural Network · Capstone',
    description: 'Led a 10-person SCRUM team as President of BYU-I AI Society. Shipped a neural network predicting US natural disasters in a 4-month agile sprint. B.S. Computer Science, ML Emphasis — GPA 3.9.',
    tags: ['Neural Networks', 'Python', 'SCRUM', 'BYU-Idaho'],
    image: null,
    featured: false,
    placeholderEmoji: '🌍',
    placeholderGradient: 'linear-gradient(135deg, rgba(239,68,68,0.12), rgba(249,115,22,0.12))',
    link: 'https://github.com/robbieswan',
  },
]

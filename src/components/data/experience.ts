export interface Role {
  company: string
  title: string
  location: string
  dates: string
  bullets: string[]
}

export const experience: Role[] = [
  {
    company: 'Gabb Music',
    title: 'Senior Manager, Music Products',
    location: 'Lehi UT & Nashville TN',
    dates: '2024 – Present',
    bullets: [
      'Drove 70%+ of company plan upgrades by launching Gabb Music+, the #1 reason users purchased the highest-tier plan, directly attributable to product design, A/B testing, and GTM execution of the newly launched music streaming app.',
      'Grew service to over 100k+ customers with 150% growth YoY. Planned, led, and launched product on both internal hardware devices as well as iOS and Google Play stores.',
      'Built code observability framework for product. Led to diagnosing multiple critical billing bugs via Mixpanel, shipped the fix, and confirmed resolution with live data — reducing subscription error rate by 90% for the quarter.',
    ],
  },
  {
    company: 'Gabb Music',
    title: 'Technical Product Manager',
    location: 'Lehi UT & Nashville TN',
    dates: '2023 – 2024',
    bullets: [
      'Architected the music industry\'s first true safety streaming product: owned ML strategy for contextual filtering using NLP sentiment analysis, computer vision album-art grading, and billions of metadata signals — creating first and only label approved (Sony, Universal, Warner, etc.) filtration system on proprietary data.',
      'Built the largest known human-in-the-loop ML training pipeline for album artwork classification in the music industry — classified 70K+ images to 99.9% accuracy, creating the first safety product built on copyrighted major-label data.',
      'Made Gabb Music the lowest CS-complaint product company-wide and #1 driver of plan upgrades — directly attributable to filtration quality and crash-rate improvements.',
    ],
  },
  {
    company: 'Market Turning Points',
    title: 'AI Product Manager',
    location: 'Fintech AI · Lehi, UT',
    dates: '2021 – 2023',
    bullets: [
      'Created GTM strategy for a new ML-powered stock optimization product — enabling institutional and retail investors to apply proprietary models to their own portfolios; achieved 55% higher customer adoption and 28% revenue increase at launch.',
      'Led a 5-person engineering team; shipped AI MVP in under 1 month with near-perfect on-time delivery — writing the GTM playbook while executing in high ambiguity.',
      'Launched targeted campaign messaging the new AI forecasting feature & drove a 200%+ increase in membership pre-orders within the first month, validating AI as the core acquisition hook.',
    ],
  },
  {
    company: 'Market Turning Points',
    title: 'ML Software Engineer',
    location: 'Fintech AI · Lehi, UT',
    dates: '2020 – 2021',
    bullets: [
      'Built the 0→1 AI forecasting tool that became the company\'s core commercial product — directly powering 40%+ YoY revenue growth.',
      'Engineered 100+ automated market chart visualizations powered by real-time financial APIs and proprietary ML cycle algorithms — delivering daily trading signals to 900+ institutional and retail investors.',
    ],
  },
]

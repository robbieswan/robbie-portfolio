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
      'Drove 70%+ of company plan upgrades — tunedIQ became the #1 reason users purchased the highest-tier plan',
      'Diagnosed a critical billing bug via Mixpanel; shipped fix and confirmed resolution — reducing subscription error rate by 90%',
      'Moved a high-stakes product launch more than one week ahead of schedule via redesigned cross-functional QA protocol',
    ],
  },
  {
    company: 'Gabb Music',
    title: 'Technical Product Manager',
    location: 'Lehi UT & Nashville TN',
    dates: '2023 – 2024',
    bullets: [
      "Architected the music industry's first true safety streaming product — owned ML strategy using NLP, computer vision, and 1.8M+ track-level filtration",
      'Built the largest known human-in-the-loop ML training pipeline for album artwork classification — 70K+ images to 99.9% accuracy',
      'Made Gabb Music the lowest CS-complaint product company-wide and #1 driver of plan upgrades',
    ],
  },
  {
    company: 'Market Turning Points',
    title: 'Product Manager',
    location: 'Fintech AI · Lehi, UT',
    dates: '2021 – 2023',
    bullets: [
      'Created GTM strategy for ML-powered stock optimization — 55% higher customer adoption and 28% revenue increase at launch',
      'Drove 200%+ increase in membership pre-orders within first month via AI forecasting feature campaign',
      'Led 5-person engineering team; shipped MVP in under 1 month',
    ],
  },
  {
    company: 'Market Turning Points',
    title: 'ML Software Engineer',
    location: 'Fintech AI · Lehi, UT',
    dates: '2020 – 2021',
    bullets: [
      "Built the 0→1 AI forecasting tool that became the company's core commercial product — powering 40%+ YoY revenue growth",
      'Engineered 100+ automated market chart visualizations delivering daily trading signals to 900+ institutional investors',
    ],
  },
]

'use client'

import { motion } from 'framer-motion'

const stats = [
  { number: '5', suffix: '+', label: 'Years Leading Consumer Products', icon: '🚀' },
  { number: '200', suffix: 'K+', label: 'Customers Across Products Led', icon: '👥' },
  { number: 'Summa', suffix: ' CL', label: 'CS & ML Graduate', icon: '🎓' },
  { number: 'Ex', suffix: '-Pres', label: 'AI Society · 200+ Members', icon: '🧠' },
]

export default function StatsBar() {
  return (
    <div className="stats-bar">
      <div className="stats-grid">
        {stats.map((stat, i) => (
          <motion.div
            key={stat.label}
            className="stat-item"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.6, delay: i * 0.12, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="stat-icon">{stat.icon}</div>
            <div className="stat-number">
              {stat.number}
              <span className="stat-accent">{stat.suffix}</span>
            </div>
            <div className="stat-label">{stat.label}</div>
          </motion.div>
        ))}
      </div>

      <style>{`
        .stats-bar {
          padding: 48px 0;
          border-top: 1px solid rgba(0,0,0,0.06);
          border-bottom: 1px solid rgba(0,0,0,0.06);
          background: rgba(255,255,255,0.5);
          backdrop-filter: blur(12px);
        }
        .stats-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          max-width: 1100px;
          margin: 0 auto;
          padding: 0 40px;
          gap: 0;
        }
        .stat-item {
          text-align: center;
          padding: 8px 16px;
          border-right: 1px solid rgba(0,0,0,0.06);
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 6px;
        }
        .stat-item:last-child { border-right: none; }
        .stat-icon {
          font-size: 22px;
          margin-bottom: 2px;
        }
        .stat-number {
          font-size: clamp(28px, 3.5vw, 40px);
          font-weight: 800;
          letter-spacing: -0.04em;
          color: var(--ink);
          line-height: 1;
        }
        .stat-accent { color: var(--accent); }
        .stat-label {
          font-size: 11px;
          color: var(--muted);
          font-weight: 600;
          line-height: 1.4;
          letter-spacing: 0.02em;
          text-transform: uppercase;
          max-width: 160px;
        }

        @media (max-width: 768px) {
          .stats-bar { padding: 36px 0; }
          .stats-grid {
            grid-template-columns: repeat(2, 1fr);
            gap: 28px 0;
            padding: 0 20px;
          }
          .stat-item {
            padding: 8px 10px;
          }
          .stat-item:nth-child(2) { border-right: none; }
          .stat-item:nth-child(3),
          .stat-item:nth-child(4) {
            border-top: 1px solid rgba(0,0,0,0.06);
            padding-top: 28px;
          }
          .stat-item:nth-child(4) { border-right: none; }
        }

        @media (max-width: 400px) {
          .stats-grid {
            grid-template-columns: 1fr;
            gap: 24px;
          }
          .stat-item {
            border-right: none !important;
            border-top: none !important;
            padding: 0;
          }
          .stat-item + .stat-item {
            border-top: 1px solid rgba(0,0,0,0.06) !important;
            padding-top: 24px;
          }
        }
      `}</style>
    </div>
  )
}

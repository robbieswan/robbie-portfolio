'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'

export default function Hero() {
  return (
    <section id="hero">
      <div className="hero-grid">
        {/* Text column */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="hero-text"
        >
          {/* Title */}
          <h1 className="hero-title">
            Product Leader.
          </h1>
          <div className="hero-ex-title">Ex-ML Engineer</div>

          {/* Subtitle */}
          <p className="hero-subtitle">
            5+ years shipping consumer SaaS products at the intersection of AI, product strategy, and design.
          </p>

          {/* Description */}
          <p className="hero-desc">
            I turn ML into products people actually use. From building the music industry&apos;s
            first safety streaming platform to launching an AI voice app in 3 weeks — I ship fast,
            own outcomes, and obsess over the user.
          </p>

          {/* CTAs */}
          <div className="hero-actions">
            <motion.a
              href="#projects"
              className="btn-primary"
              whileHover={{ y: -2, boxShadow: '0 14px 32px rgba(37,99,235,0.28)' }}
            >
              View my work
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M7 17L17 7M17 7H7M17 7v10" />
              </svg>
            </motion.a>
            <motion.a
              href="mailto:robbie.swanson2@gmail.com"
              className="btn-secondary"
              whileHover={{ y: -2 }}
            >
              Say hello →
            </motion.a>
          </div>
        </motion.div>

        {/* Photo column */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="hero-photo-col"
        >
          <div className="hero-photo-card">
            <Image
              src="/images/profile.jpg"
              alt="Robbie Swanson"
              width={400}
              height={500}
              style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'top center' }}
              priority
            />
          </div>

          {/* Badge */}
          <div className="hero-badge">
            <div className="badge-name">Robbie Swanson</div>
            <div className="badge-role">Senior PM · ML Engineer · Lehi, UT</div>
            <div className="badge-chips">
              {['AI/ML', 'Mobile', 'Fintech'].map((chip) => (
                <span key={chip} className="badge-chip">{chip}</span>
              ))}
            </div>
          </div>
        </motion.div>
      </div>

      <style>{`
        #hero {
          min-height: 100vh;
          min-height: 100svh;
          display: flex;
          align-items: center;
          padding: 120px 40px 80px;
          max-width: 1100px;
          margin: 0 auto;
        }
        .hero-grid {
          display: grid;
          grid-template-columns: 1fr minmax(0, 400px);
          gap: 70px;
          align-items: center;
          width: 100%;
        }
        .hero-text { min-width: 0; }
        .hero-title {
          font-size: clamp(40px, 5.5vw, 78px);
          font-weight: 800;
          line-height: 1.0;
          letter-spacing: -0.04em;
          color: var(--ink);
          margin-bottom: 8px;
        }
        .hero-ex-title {
          font-size: clamp(16px, 1.8vw, 20px);
          font-weight: 500;
          color: var(--muted);
          letter-spacing: -0.01em;
          margin-bottom: 28px;
        }
        .hero-subtitle {
          font-size: clamp(16px, 1.8vw, 18px);
          font-weight: 400;
          color: var(--ink-light);
          margin-bottom: 20px;
          line-height: 1.6;
          max-width: 480px;
        }
        .hero-desc {
          font-size: clamp(14px, 1.5vw, 16px);
          line-height: 1.75;
          color: var(--muted);
          margin-bottom: 36px;
          max-width: 480px;
        }
        .hero-actions {
          display: flex;
          gap: 12px;
          flex-wrap: wrap;
        }
        .btn-primary {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          padding: 14px 28px;
          background: var(--ink);
          color: white;
          border-radius: 100px;
          font-size: 15px;
          font-weight: 700;
          text-decoration: none;
          border: 2px solid var(--ink);
          transition: all 0.25s cubic-bezier(0.34,1.56,0.64,1);
        }
        .btn-primary:hover {
          background: var(--accent);
          border-color: var(--accent);
          box-shadow: 0 14px 32px rgba(37,99,235,0.28);
        }
        .btn-secondary {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          padding: 14px 28px;
          background: transparent;
          color: var(--ink);
          border-radius: 100px;
          font-size: 15px;
          font-weight: 700;
          text-decoration: none;
          border: 2px solid rgba(0,0,0,0.12);
          transition: all 0.25s ease;
        }
        .btn-secondary:hover {
          border-color: var(--ink);
        }
        .hero-photo-col {
          position: relative;
          min-width: 0;
        }
        .hero-photo-card {
          border-radius: 28px;
          overflow: hidden;
          aspect-ratio: 4/5;
          box-shadow: 0 0 0 1px rgba(255,255,255,0.85), 0 40px 80px rgba(0,0,0,0.13), 0 8px 20px rgba(0,0,0,0.08);
          animation: cardFloat 7s ease-in-out infinite;
        }
        .hero-badge {
          position: absolute;
          bottom: 20px;
          left: 20px;
          right: 20px;
          background: var(--glass);
          backdrop-filter: blur(20px);
          -webkit-backdrop-filter: blur(20px);
          border-radius: 16px;
          padding: 14px 18px;
          border: 1px solid var(--glass-border);
          overflow: hidden;
        }
        .badge-name { font-size: 16px; font-weight: 700; color: var(--ink); white-space: nowrap; overflow: hidden; text-overflow: ellipsis; }
        .badge-role { font-size: 12px; color: var(--muted); font-weight: 500; margin-top: 2px; white-space: nowrap; overflow: hidden; text-overflow: ellipsis; }
        .badge-chips { display: flex; gap: 5px; margin-top: 8px; flex-wrap: wrap; }
        .badge-chip {
          font-size: 10px;
          font-weight: 700;
          padding: 3px 8px;
          border-radius: 100px;
          background: rgba(37,99,235,0.1);
          color: var(--accent);
          white-space: nowrap;
        }

        @media (max-width: 768px) {
          #hero {
            padding: 100px 20px 60px;
            min-height: auto;
          }
          .hero-grid {
            grid-template-columns: 1fr !important;
            gap: 48px;
          }
          .hero-photo-col {
            max-width: 320px;
            margin: 0 auto;
            order: -1;
          }
          .hero-title {
            font-size: clamp(36px, 10vw, 52px);
          }
          .hero-actions {
            flex-direction: column;
            align-items: stretch;
          }
          .btn-primary, .btn-secondary {
            justify-content: center;
            padding: 14px 24px;
          }
        }

        @media (min-width: 769px) and (max-width: 1024px) {
          .hero-grid {
            grid-template-columns: 1fr minmax(0, 300px) !important;
            gap: 40px;
          }
          #hero {
            padding: 120px 30px 80px;
          }
        }
      `}</style>
    </section>
  )
}

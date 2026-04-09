'use client'

import { motion } from 'framer-motion'
import { experience } from '@/components/data/experience'

export default function Experience() {
  return (
    <section id="experience" style={{ padding: '100px 0' }}>
      <div style={{ maxWidth: '1100px', margin: '0 auto', padding: '0 40px' }} className="exp-container">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          style={{ marginBottom: '56px' }}
        >
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', fontSize: '11px', fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--muted)', marginBottom: '14px' }}>
            <span style={{ display: 'block', width: '20px', height: '2px', background: 'currentColor', borderRadius: '2px' }} />
            Work history
          </div>
          <h2 style={{ fontSize: 'clamp(38px, 4vw, 56px)', fontWeight: 800, letterSpacing: '-0.04em', lineHeight: 1.05, color: 'var(--ink)' }}>
            Where I&apos;ve{' '}
            <em style={{ fontFamily: 'var(--font-display)', fontStyle: 'italic', fontWeight: 300, color: 'var(--accent)' }}>
              shipped
            </em>
          </h2>
        </motion.div>

        {/* List */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
          {experience.map((role, i) => (
            <motion.div
              key={`${role.company}-${role.dates}`}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-30px' }}
              transition={{ duration: 0.6, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] }}
              whileHover={{ x: 5, background: 'rgba(255,255,255,0.9)', boxShadow: '0 8px 30px rgba(0,0,0,0.07)' }}
              style={{
                background: 'rgba(255,255,255,0.62)',
                borderRadius: 'var(--radius-sm)',
                border: '1px solid rgba(255,255,255,0.85)',
                padding: '26px 30px',
                transition: 'all 0.3s ease',
                cursor: 'default',
              }}
            >
              {/* Header row */}
              <div className="exp-header-row" style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', gap: '20px', marginBottom: '12px', flexWrap: 'wrap' }}>
                <div>
                  <div style={{ fontSize: '19px', fontWeight: 800, letterSpacing: '-0.02em', color: 'var(--ink)' }}>
                    {role.title}
                  </div>
                  <div style={{ fontSize: '14px', color: 'var(--accent)', fontWeight: 600, marginTop: '2px' }}>
                    {role.company} · {role.location}
                  </div>
                </div>
                <div style={{ fontSize: '12px', color: 'var(--muted)', fontWeight: 600, whiteSpace: 'nowrap', background: 'rgba(0,0,0,0.04)', padding: '4px 10px', borderRadius: '100px' }}>
                  {role.dates}
                </div>
              </div>

              {/* Bullets */}
              <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '5px' }}>
                {role.bullets.map((bullet, j) => (
                  <li
                    key={j}
                    style={{
                      fontSize: '13px',
                      lineHeight: 1.65,
                      color: 'var(--ink-light)',
                      paddingLeft: '16px',
                      position: 'relative',
                    }}
                  >
                    <span style={{ position: 'absolute', left: 0, color: 'var(--accent)', fontWeight: 700, fontSize: '11px', top: '3px' }}>
                      →
                    </span>
                    {bullet}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          #experience { padding: 60px 0 !important; }
          .exp-container { padding: 0 20px !important; }
        }
        @media (max-width: 500px) {
          .exp-header-row {
            flex-direction: column !important;
            gap: 8px !important;
          }
        }
      `}</style>
    </section>
  )
}

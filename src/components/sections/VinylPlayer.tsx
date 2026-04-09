'use client'

import { useState, useEffect, useCallback } from 'react'
import { motion } from 'framer-motion'

const TRACKS = [
  'Why I Left ML for Product',
  'The 3am Mixpanel Bug',
  'Ship It or Regret It',
  'Hot Takes on AI Hype',
]

export default function VinylPlayer() {
  const [isPlaying, setIsPlaying] = useState(false)
  const [currentTrack, setCurrentTrack] = useState(0)
  const [progress, setProgress] = useState(0)

  const nextTrack = useCallback(() => {
    setCurrentTrack((prev) => (prev + 1) % TRACKS.length)
    setProgress(0)
  }, [])

  const prevTrack = useCallback(() => {
    setCurrentTrack((prev) => (prev - 1 + TRACKS.length) % TRACKS.length)
    setProgress(0)
  }, [])

  useEffect(() => {
    if (!isPlaying) return
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          nextTrack()
          return 0
        }
        return prev + 0.14
      })
    }, 100)
    return () => clearInterval(interval)
  }, [isPlaying, nextTrack])

  return (
    <section id="vinyl" style={{ padding: '100px 0', background: 'rgba(0,0,0,0.02)' }}>
      <div style={{ maxWidth: '1100px', margin: '0 auto', padding: '0 40px' }} className="vinyl-container">
        <div className="vinyl-grid" style={{ display: 'grid', gridTemplateColumns: '1fr 460px', gap: '90px', alignItems: 'center' }}>
          {/* Copy */}
          <motion.div
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          >
            <div style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', fontSize: '11px', fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--muted)', marginBottom: '14px' }}>
              <span style={{ display: 'block', width: '20px', height: '2px', background: 'currentColor', borderRadius: '2px' }} />
              Featured product
            </div>
            <h2 style={{ fontSize: 'clamp(32px, 3.5vw, 50px)', fontWeight: 800, letterSpacing: '-0.04em', lineHeight: 1.05, marginBottom: '20px' }}>
              The music{' '}
              <em style={{ fontFamily: 'var(--font-display)', fontStyle: 'italic', color: 'var(--accent)', fontWeight: 300 }}>
                safety engine.
              </em>
            </h2>
            <p style={{ fontSize: '15px', lineHeight: 1.75, color: 'var(--muted)', marginBottom: '12px' }}>
              When I joined Gabb, I inherited a product not living up to its safety promise. So I
              architected the music industry&apos;s first true ML filtering platform — from scratch.
            </p>
            <p style={{ fontSize: '15px', lineHeight: 1.75, color: 'var(--muted)', marginBottom: '12px' }}>
              1.8 million tracks. 70,000+ album images classified. 99.9% accuracy. The result became
              the #1 reason families upgraded their plan.
            </p>
            <p style={{ marginTop: '20px', fontSize: '14px', fontWeight: 700, color: 'var(--ink)' }}>
              Currently spinning on Gabb Music+
            </p>
          </motion.div>

          {/* Player */}
          <motion.div
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          >
            {/* Disc */}
            <div className="disc-container" style={{ position: 'relative', width: '100%', maxWidth: '300px', aspectRatio: '1', margin: '0 auto 28px' }}>
              <div
                className="disc-vinyl"
                style={{
                  width: '100%',
                  height: '100%',
                  borderRadius: '50%',
                  background: 'conic-gradient(from 0deg, #1a1a1a, #2a2a2a, #111, #222, #1a1a1a)',
                  boxShadow: '0 0 0 2px #333, 0 30px 80px rgba(0,0,0,0.45)',
                  position: 'relative',
                  animation: isPlaying ? 'spin 4s linear infinite' : 'none',
                  transition: 'box-shadow 0.5s',
                }}
              >
                {/* Grooves */}
                <div
                  style={{
                    position: 'absolute',
                    inset: '16px',
                    borderRadius: '50%',
                    background: 'repeating-radial-gradient(circle at 50% 50%, transparent 0, transparent 5px, rgba(255,255,255,0.025) 5px, rgba(255,255,255,0.025) 6px)',
                  }}
                />
                {/* Label with curved text */}
                <div
                  style={{
                    position: 'absolute',
                    top: '50%',
                    left: '50%',
                    transform: 'translate(-50%, -50%)',
                    width: '96px',
                    height: '96px',
                    borderRadius: '50%',
                    background: 'linear-gradient(135deg, #2563EB 0%, #7C3AED 100%)',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center',
                    boxShadow: '0 4px 24px rgba(37,99,235,0.5)',
                    overflow: 'hidden',
                  }}
                >
                  {/* Curved "GABB MUSIC" text around top */}
                  <svg width="96" height="96" viewBox="0 0 96 96" style={{ position: 'absolute', inset: 0 }}>
                    <defs>
                      <path id="topArc" d="M 48,48 m -33,0 a 33,33 0 1,1 66,0" />
                      <path id="botArc" d="M 48,48 m 33,0 a 33,33 0 1,1 -66,0" />
                    </defs>
                    <text fill="rgba(255,255,255,0.6)" fontSize="7" fontWeight="700" letterSpacing="2" fontFamily="'Plus Jakarta Sans', sans-serif">
                      <textPath href="#topArc" startOffset="50%" textAnchor="middle">ROBBIE SWANSON</textPath>
                    </text>
                    <text fill="rgba(255,255,255,0.5)" fontSize="6" fontWeight="600" letterSpacing="1.5" fontFamily="'Plus Jakarta Sans', sans-serif">
                      <textPath href="#botArc" startOffset="50%" textAnchor="middle">NOW PLAYING</textPath>
                    </text>
                  </svg>
                  <div style={{ fontSize: '20px', fontWeight: 800, color: 'white', letterSpacing: '-0.02em', zIndex: 1 }}>RS</div>
                </div>
                {/* Center hole */}
                <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', width: '12px', height: '12px', borderRadius: '50%', background: '#0a0a0a', zIndex: 2 }} />
              </div>

              {/* Tonearm */}
              <div
                className="tonearm"
                style={{
                  position: 'absolute',
                  top: '-10px',
                  right: '10px',
                  width: '90px',
                  height: '140px',
                  transformOrigin: '70px 14px',
                  transition: 'transform 0.9s cubic-bezier(0.34, 1.2, 0.64, 1)',
                  transform: isPlaying ? 'rotate(-18deg)' : 'rotate(-35deg)',
                }}
              >
                {/* Pivot */}
                <div style={{ position: 'absolute', top: '6px', right: '8px', width: '16px', height: '16px', borderRadius: '50%', background: 'linear-gradient(135deg, #ccc, #777)', border: '1px solid #999', zIndex: 2 }} />
                {/* Shaft */}
                <div style={{ position: 'absolute', top: '12px', right: '14px', width: '5px', height: '110px', background: 'linear-gradient(180deg, #aaa 0%, #666 100%)', borderRadius: '3px', transformOrigin: 'center 6px', transform: 'rotate(-12deg)' }}>
                  {/* Head / cartridge */}
                  <div style={{ position: 'absolute', bottom: '-2px', left: '-4px', width: '14px', height: '8px', background: '#444', borderRadius: '2px' }} />
                </div>
              </div>
            </div>

            {/* Controls */}
            <div
              style={{
                width: '100%',
                maxWidth: '300px',
                margin: '0 auto',
                background: 'rgba(255,255,255,0.85)',
                backdropFilter: 'blur(20px)',
                borderRadius: '18px',
                padding: '18px 22px',
                border: '1px solid rgba(255,255,255,0.95)',
                boxShadow: '0 8px 32px rgba(0,0,0,0.08)',
              }}
            >
              {/* Now playing */}
              <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '14px' }}>
                <div style={{ width: '42px', height: '42px', borderRadius: '10px', background: 'linear-gradient(135deg, #2563EB, #7C3AED)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '18px', flexShrink: 0 }}>
                  🎵
                </div>
                <div style={{ flex: 1, minWidth: 0 }}>
                  <div style={{ fontSize: '14px', fontWeight: 700, color: 'var(--ink)', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>
                    {TRACKS[currentTrack]}
                  </div>
                  <div style={{ fontSize: '11px', color: 'var(--muted)', fontWeight: 500 }}>
                    Robbie Swanson · Portfolio
                  </div>
                </div>
              </div>

              {/* Progress */}
              <div
                onClick={(e) => {
                  const rect = e.currentTarget.getBoundingClientRect()
                  const pct = ((e.clientX - rect.left) / rect.width) * 100
                  setProgress(pct)
                }}
                style={{ height: '3px', background: 'rgba(0,0,0,0.08)', borderRadius: '3px', marginBottom: '14px', cursor: 'pointer', overflow: 'hidden' }}
              >
                <div style={{ height: '100%', background: 'linear-gradient(90deg, #2563EB, #7C3AED)', borderRadius: '3px', width: `${progress}%`, transition: 'width 0.1s linear' }} />
              </div>

              {/* Buttons */}
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '18px' }}>
                <button onClick={prevTrack} style={ctrlStyle}>⏮</button>
                <motion.button
                  onClick={() => setIsPlaying(!isPlaying)}
                  whileHover={{ scale: 1.08 }}
                  style={{
                    ...ctrlStyle,
                    width: '50px',
                    height: '50px',
                    background: 'var(--ink)',
                    color: 'white',
                    fontSize: '17px',
                  }}
                  onMouseEnter={(e) => { e.currentTarget.style.background = 'var(--accent)' }}
                  onMouseLeave={(e) => { e.currentTarget.style.background = 'var(--ink)' }}
                >
                  {isPlaying ? '⏸' : '▶'}
                </motion.button>
                <button onClick={nextTrack} style={ctrlStyle}>⏭</button>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      <style>{`
        @media (max-width: 1024px) {
          .vinyl-grid { grid-template-columns: 1fr 360px !important; gap: 40px !important; }
        }
        @media (max-width: 768px) {
          .vinyl-grid { grid-template-columns: 1fr !important; gap: 48px !important; }
          .vinyl-container { padding: 0 20px !important; }
          .disc-container { max-width: 260px !important; }
          .tonearm { transform: scale(0.85) !important; right: 0px !important; top: -10px !important; }
        }
        @media (max-width: 400px) {
          .disc-container { max-width: 220px !important; }
          .tonearm { display: none !important; }
        }
      `}</style>
    </section>
  )
}

const ctrlStyle: React.CSSProperties = {
  background: 'none',
  border: 'none',
  cursor: 'pointer',
  color: 'var(--muted)',
  width: '34px',
  height: '34px',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  borderRadius: '50%',
  transition: 'all 0.2s',
  fontSize: '15px',
}

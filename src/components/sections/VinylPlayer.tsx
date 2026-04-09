'use client'

import { useState, useEffect, useCallback, useRef } from 'react'
import { motion } from 'framer-motion'

const TRACKS = [
  { title: 'Apparitions', subtitle: 'My Philosophy on Product', src: '/audio/apparitions.mp3', gradient: 'linear-gradient(135deg, #2563EB 0%, #7C3AED 100%)' },
  { title: 'Troubled Times', subtitle: 'An Intro to Robbie', src: '/audio/troubled-times.mp3', gradient: 'linear-gradient(135deg, #F97316 0%, #EC4899 100%)' },
]

export default function VinylPlayer() {
  const [isPlaying, setIsPlaying] = useState(false)
  const [currentTrack, setCurrentTrack] = useState(0)
  const [progress, setProgress] = useState(0)
  const audioRef = useRef<HTMLAudioElement | null>(null)

  // Initialize audio on mount
  useEffect(() => {
    audioRef.current = new Audio(TRACKS[0].src)
    audioRef.current.preload = 'metadata'
    return () => {
      audioRef.current?.pause()
      audioRef.current = null
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  // Sync progress with audio currentTime
  useEffect(() => {
    if (!isPlaying || !audioRef.current) return
    const interval = setInterval(() => {
      const audio = audioRef.current
      if (audio && audio.duration) {
        setProgress((audio.currentTime / audio.duration) * 100)
      }
    }, 200)
    return () => clearInterval(interval)
  }, [isPlaying])

  // Handle track end → next track
  useEffect(() => {
    const audio = audioRef.current
    if (!audio) return
    const handleEnded = () => {
      setCurrentTrack((prev) => (prev + 1) % TRACKS.length)
    }
    audio.addEventListener('ended', handleEnded)
    return () => audio.removeEventListener('ended', handleEnded)
  }, [])

  // When currentTrack changes, load and play the new track
  useEffect(() => {
    const audio = audioRef.current
    if (!audio) return
    const wasPlaying = isPlaying
    audio.src = TRACKS[currentTrack].src
    audio.load()
    setProgress(0)
    if (wasPlaying) {
      audio.play().catch(() => {})
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentTrack])

  const togglePlay = useCallback(() => {
    const audio = audioRef.current
    if (!audio) return
    if (isPlaying) {
      audio.pause()
      setIsPlaying(false)
    } else {
      audio.play().then(() => setIsPlaying(true)).catch(() => {})
    }
  }, [isPlaying])

  const nextTrack = useCallback(() => {
    setCurrentTrack((prev) => (prev + 1) % TRACKS.length)
  }, [])

  const prevTrack = useCallback(() => {
    setCurrentTrack((prev) => (prev - 1 + TRACKS.length) % TRACKS.length)
  }, [])

  const seekTo = useCallback((e: React.MouseEvent<HTMLDivElement>) => {
    const audio = audioRef.current
    if (!audio || !audio.duration) return
    const rect = e.currentTarget.getBoundingClientRect()
    const pct = (e.clientX - rect.left) / rect.width
    audio.currentTime = pct * audio.duration
    setProgress(pct * 100)
  }, [])

  const track = TRACKS[currentTrack]

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
              When I joined Gabb, I inherited a product that wasn&apos;t advanced enough to scale
              and filter well enough to make the product truly safe and scalable for families. So I
              helped build the music industry&apos;s first true ML filtering platform that kids love and parents trust.
            </p>
            <p style={{ fontSize: '15px', lineHeight: 1.75, color: 'var(--muted)', marginBottom: '12px' }}>
              Millions of tracks. 70,000+ album images classified. 99.9% accuracy. The result became
              the #1 reason families upgraded their plan.
            </p>
            <a href="#vinyl-player" style={{ marginTop: '20px', fontSize: '14px', fontWeight: 700, color: 'var(--ink)', display: 'inline-flex', alignItems: 'center', gap: '8px', textDecoration: 'none' }}>
              Listen to the tracks that describe me ↓
            </a>
          </motion.div>

          {/* Player */}
          <motion.div
            id="vinyl-player"
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
                }}
              >
                {/* Grooves */}
                <div style={{ position: 'absolute', inset: '16px', borderRadius: '50%', background: 'repeating-radial-gradient(circle at 50% 50%, transparent 0, transparent 5px, rgba(255,255,255,0.025) 5px, rgba(255,255,255,0.025) 6px)' }} />
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
                    background: track.gradient,
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center',
                    boxShadow: '0 4px 24px rgba(37,99,235,0.5)',
                    overflow: 'hidden',
                    transition: 'background 0.6s ease',
                  }}
                >
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
                  transform: isPlaying ? 'rotate(-5deg)' : 'rotate(-35deg)',
                }}
              >
                <div style={{ position: 'absolute', top: '6px', right: '8px', width: '16px', height: '16px', borderRadius: '50%', background: 'linear-gradient(135deg, #ccc, #777)', border: '1px solid #999', zIndex: 2 }} />
                <div style={{ position: 'absolute', top: '12px', right: '14px', width: '5px', height: '110px', background: 'linear-gradient(180deg, #aaa 0%, #666 100%)', borderRadius: '3px', transformOrigin: 'center 6px', transform: 'rotate(-12deg)' }}>
                  <div style={{ position: 'absolute', bottom: '-2px', left: '-4px', width: '14px', height: '8px', background: '#444', borderRadius: '2px' }} />
                </div>
              </div>
            </div>

            {/* Controls card */}
            <div style={{ width: '100%', maxWidth: '300px', margin: '0 auto', background: 'rgba(255,255,255,0.85)', backdropFilter: 'blur(20px)', borderRadius: '18px', padding: '18px 22px', border: '1px solid rgba(255,255,255,0.95)', boxShadow: '0 8px 32px rgba(0,0,0,0.08)' }}>
              {/* Now playing */}
              <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '14px' }}>
                <div style={{ width: '42px', height: '42px', borderRadius: '10px', background: track.gradient, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '18px', flexShrink: 0, transition: 'background 0.6s ease' }}>
                  🎵
                </div>
                <div style={{ flex: 1, minWidth: 0 }}>
                  <div style={{ fontSize: '14px', fontWeight: 700, color: 'var(--ink)', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>
                    {track.title}
                  </div>
                  <div style={{ fontSize: '11px', color: 'var(--muted)', fontWeight: 500 }}>
                    {track.subtitle}
                  </div>
                </div>
              </div>

              {/* Progress bar */}
              <div onClick={seekTo} style={{ height: '3px', background: 'rgba(0,0,0,0.08)', borderRadius: '3px', marginBottom: '14px', cursor: 'pointer', overflow: 'hidden' }}>
                <div style={{ height: '100%', background: track.gradient, borderRadius: '3px', width: `${Math.min(progress, 100)}%`, transition: 'width 0.2s linear, background 0.6s ease' }} />
              </div>

              {/* Controls */}
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '18px' }}>
                {/* Prev */}
                <button onClick={prevTrack} className="ctrl-btn" aria-label="Previous track">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M6 6h2v12H6zm3.5 6l8.5 6V6z" />
                  </svg>
                </button>

                {/* Play/Pause */}
                <motion.button
                  onClick={togglePlay}
                  whileHover={{ scale: 1.08 }}
                  className="ctrl-btn ctrl-play"
                  aria-label={isPlaying ? 'Pause' : 'Play'}
                >
                  {isPlaying ? (
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M6 4h4v16H6zM14 4h4v16h-4z" />
                    </svg>
                  ) : (
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M8 5v14l11-7z" />
                    </svg>
                  )}
                </motion.button>

                {/* Next */}
                <button onClick={nextTrack} className="ctrl-btn" aria-label="Next track">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M6 18l8.5-6L6 6v12zM16 6v12h2V6h-2z" />
                  </svg>
                </button>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      <style>{`
        .ctrl-btn {
          background: none;
          border: none;
          cursor: pointer;
          color: var(--muted);
          width: 34px;
          height: 34px;
          display: flex;
          align-items: center;
          justify-content: center;
          border-radius: 50%;
          transition: all 0.2s;
          padding: 0;
        }
        .ctrl-btn:hover { color: var(--ink); background: rgba(0,0,0,0.05); }
        .ctrl-play {
          width: 50px !important;
          height: 50px !important;
          background: var(--ink) !important;
          color: white !important;
        }
        .ctrl-play:hover { background: var(--accent) !important; }

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

'use client'

import { useState, useEffect } from 'react'
import RSLogo from '@/components/ui/RSLogo'

export default function Nav() {
  const [menuOpen, setMenuOpen] = useState(false)

  // Close mobile menu on resize to desktop
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 768) setMenuOpen(false)
    }
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [menuOpen])

  return (
    <>
      <nav className="site-nav">
        <div className="nav-inner">
          <a href="#" className="nav-logo-link">
            <RSLogo />
            <span className="nav-name">Robbie Swanson</span>
          </a>

          {/* Desktop links */}
          <ul className="nav-links-desktop">
            <li><a href="#projects">Work</a></li>
            <li><a href="#experience">Experience</a></li>
            <li><a href="#vinyl">Music</a></li>
            <li>
              <a href="mailto:robbie.swanson2@gmail.com" className="nav-cta">
                Say hello
              </a>
            </li>
          </ul>

          {/* Hamburger */}
          <button
            className="nav-hamburger"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
            aria-expanded={menuOpen}
          >
            <span className={`hamburger-line ${menuOpen ? 'open-top' : ''}`} />
            <span className={`hamburger-line ${menuOpen ? 'open-mid' : ''}`} />
            <span className={`hamburger-line ${menuOpen ? 'open-bot' : ''}`} />
          </button>
        </div>
      </nav>

      {/* Mobile menu overlay */}
      {menuOpen && (
        <div className="mobile-menu-overlay" onClick={() => setMenuOpen(false)}>
          <div className="mobile-menu" onClick={(e) => e.stopPropagation()}>
            <a href="#projects" onClick={() => setMenuOpen(false)}>Work</a>
            <a href="#experience" onClick={() => setMenuOpen(false)}>Experience</a>
            <a href="#vinyl" onClick={() => setMenuOpen(false)}>Music</a>
            <a
              href="mailto:robbie.swanson2@gmail.com"
              onClick={() => setMenuOpen(false)}
              className="mobile-cta"
            >
              Say hello
            </a>
          </div>
        </div>
      )}

      <style>{`
        .site-nav {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          z-index: 100;
          backdrop-filter: blur(24px);
          -webkit-backdrop-filter: blur(24px);
          background: rgba(250,250,247,0.82);
          border-bottom: 1px solid rgba(0,0,0,0.06);
        }
        .nav-inner {
          max-width: 1100px;
          margin: 0 auto;
          padding: 16px 40px;
          display: flex;
          align-items: center;
          justify-content: space-between;
        }
        .nav-logo-link {
          display: flex;
          align-items: center;
          gap: 10px;
          text-decoration: none;
          color: var(--ink);
          flex-shrink: 0;
        }
        .nav-name {
          font-size: 15px;
          font-weight: 700;
          letter-spacing: -0.02em;
        }
        .nav-links-desktop {
          display: flex;
          gap: 28px;
          list-style: none;
          align-items: center;
        }
        .nav-links-desktop a {
          font-size: 14px;
          font-weight: 500;
          color: var(--ink-light);
          text-decoration: none;
          transition: color 0.2s;
        }
        .nav-links-desktop a:hover { color: var(--accent); }
        .nav-cta {
          background: var(--ink) !important;
          color: white !important;
          padding: 8px 20px !important;
          border-radius: 100px !important;
          font-size: 13px !important;
          font-weight: 700 !important;
          transition: all 0.2s !important;
        }
        .nav-cta:hover {
          background: var(--accent) !important;
          transform: translateY(-1px);
        }
        .nav-hamburger {
          display: none;
          flex-direction: column;
          gap: 5px;
          background: none;
          border: none;
          cursor: pointer;
          padding: 8px;
          z-index: 101;
        }
        .hamburger-line {
          display: block;
          width: 21px;
          height: 1.5px;
          background: var(--ink);
          border-radius: 2px;
          transition: all 0.3s ease;
        }
        .open-top { transform: rotate(45deg) translateY(6.5px); }
        .open-mid { opacity: 0; }
        .open-bot { transform: rotate(-45deg) translateY(-6.5px); }

        .mobile-menu-overlay {
          position: fixed;
          inset: 0;
          z-index: 99;
          background: rgba(0,0,0,0.2);
          backdrop-filter: blur(4px);
        }
        .mobile-menu {
          position: fixed;
          top: 66px;
          left: 0;
          right: 0;
          z-index: 100;
          background: rgba(250,250,247,0.97);
          backdrop-filter: blur(18px);
          border-bottom: 1px solid rgba(0,0,0,0.06);
          padding: 8px 0 16px;
          display: flex;
          flex-direction: column;
        }
        .mobile-menu a {
          display: block;
          padding: 14px 24px;
          font-size: 16px;
          color: var(--ink-light);
          text-decoration: none;
          border-bottom: 1px solid rgba(0,0,0,0.04);
          transition: color 0.2s, background 0.2s;
        }
        .mobile-menu a:hover {
          color: var(--accent);
          background: rgba(37,99,235,0.04);
        }
        .mobile-cta {
          color: var(--accent) !important;
          font-weight: 700 !important;
        }

        @media (max-width: 768px) {
          .nav-links-desktop { display: none !important; }
          .nav-hamburger { display: flex !important; }
          .nav-inner { padding: 14px 20px; }
        }
      `}</style>
    </>
  )
}

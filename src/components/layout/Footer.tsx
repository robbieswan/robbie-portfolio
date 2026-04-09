'use client'

import RSLogo from '@/components/ui/RSLogo'

export default function Footer() {
  return (
    <footer
      style={{
        padding: '56px 0 36px',
        borderTop: '1px solid rgba(0,0,0,0.06)',
        background: 'rgba(255,255,255,0.32)',
      }}
    >
      <div
        className="footer-inner"
        style={{
          maxWidth: '1100px',
          margin: '0 auto',
          padding: '0 40px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          flexWrap: 'wrap',
          gap: '20px',
        }}
      >
        {/* Left */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
          <RSLogo />
          <span style={{ fontSize: '15px', fontWeight: 700, color: 'var(--ink)' }}>
            Robbie Swanson
          </span>
        </div>

        {/* Center links */}
        <ul style={{ display: 'flex', gap: '22px', listStyle: 'none', flexWrap: 'wrap' }}>
          {[
            { label: 'LinkedIn', href: 'https://linkedin.com/in/robbie-swanson-17661a194' },
            { label: 'GitHub', href: 'https://github.com/robbieswan' },
            { label: 'spoken.app', href: 'https://spokenstories.app' },
            { label: 'Email', href: 'mailto:robbie.swanson2@gmail.com' },
          ].map((link) => (
            <li key={link.label}>
              <a
                href={link.href}
                target={link.href.startsWith('mailto') ? undefined : '_blank'}
                rel={link.href.startsWith('mailto') ? undefined : 'noopener noreferrer'}
                style={{
                  fontSize: '13px',
                  color: 'var(--muted)',
                  textDecoration: 'none',
                  fontWeight: 600,
                  transition: 'color 0.2s',
                }}
                onMouseEnter={(e) => { e.currentTarget.style.color = 'var(--accent)' }}
                onMouseLeave={(e) => { e.currentTarget.style.color = 'var(--muted)' }}
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        {/* Right */}
        <div style={{ fontSize: '12px', color: 'var(--muted)' }}>
          Built with Claude · 2025
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .footer-inner {
            flex-direction: column !important;
            align-items: center !important;
            text-align: center;
          }
        }
      `}</style>
    </footer>
  )
}

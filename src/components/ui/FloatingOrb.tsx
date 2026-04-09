'use client'

import Image from 'next/image'

export default function FloatingOrb() {
  const handleClick = () => {
    window.open('mailto:robbie.swanson2@gmail.com?subject=Hey%20Robbie!', '_self')
  }

  return (
    <div
      onClick={handleClick}
      role="link"
      tabIndex={0}
      onKeyDown={(e) => { if (e.key === 'Enter') handleClick() }}
      style={{
        position: 'fixed',
        bottom: '30px',
        right: '30px',
        zIndex: 200,
        cursor: 'pointer',
      }}
    >
      <div style={{ position: 'relative', width: '62px', height: '62px' }}>
        {/* Glow */}
        <div
          style={{
            position: 'absolute',
            inset: '-10px',
            borderRadius: '50%',
            background: 'radial-gradient(circle, rgba(37,99,235,0.35) 0%, transparent 70%)',
            animation: 'orbpulse 3s ease-in-out infinite',
          }}
        />
        {/* White ring */}
        <div
          style={{
            position: 'absolute',
            inset: '-3px',
            borderRadius: '50%',
            border: '2.5px solid white',
            boxShadow: '0 0 22px rgba(37,99,235,0.45)',
          }}
        />
        {/* Photo */}
        <Image
          src="/images/profile.jpg"
          alt="Contact Robbie"
          width={62}
          height={62}
          style={{
            width: '62px',
            height: '62px',
            borderRadius: '50%',
            objectFit: 'cover',
            objectPosition: 'top',
            display: 'block',
          }}
        />
        {/* Online dot */}
        <div
          style={{
            position: 'absolute',
            bottom: 0,
            right: 0,
            width: '18px',
            height: '18px',
            background: '#22C55E',
            borderRadius: '50%',
            border: '2.5px solid var(--cream)',
            animation: 'pulse-dot 2s infinite',
          }}
        />
      </div>

      {/* Tooltip */}
      <div
        className="orb-tooltip"
        style={{
          position: 'absolute',
          bottom: '74px',
          right: 0,
          background: 'var(--ink)',
          color: 'white',
          padding: '9px 13px',
          borderRadius: '11px',
          fontSize: '12px',
          fontWeight: 700,
          whiteSpace: 'nowrap',
          pointerEvents: 'none',
          opacity: 0,
          transform: 'translateY(8px)',
          transition: 'all 0.3s ease',
        }}
      >
        Say hello 👋
        <div
          style={{
            position: 'absolute',
            top: '100%',
            right: '20px',
            border: '5px solid transparent',
            borderTopColor: 'var(--ink)',
          }}
        />
      </div>

      <style>{`
        div:hover > .orb-tooltip {
          opacity: 1 !important;
          transform: translateY(0) !important;
        }
        @media (max-width: 768px) {
          .floating-orb {
            bottom: 20px !important;
            right: 20px !important;
          }
        }
      `}</style>
    </div>
  )
}

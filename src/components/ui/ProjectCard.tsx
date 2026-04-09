'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import type { Project } from '@/components/data/projects'

export default function ProjectCard({ project, index }: { project: Project; index: number }) {
  const cardBg = project.placeholderEmoji
    ? project.placeholderGradient?.replace(/0\.12/g, '0.06') || 'rgba(255,255,255,0.78)'
    : 'rgba(255,255,255,0.78)'

  const cardContent = (
    <>
      {/* Image or placeholder */}
      {project.image ? (
        <div style={{ position: 'relative' }}>
          <Image
            src={project.image}
            alt={project.title}
            width={800}
            height={project.imageStyle === 'portrait' ? 1000 : 450}
            className={project.imageStyle === 'portrait' ? 'project-img-portrait' : 'project-img'}
          />
          {project.imageOverlay && (
            <div style={{ position: 'absolute', inset: 0, background: project.imageOverlay, pointerEvents: 'none' }} />
          )}
        </div>
      ) : (
        <div
          className="project-placeholder"
          style={{ background: project.placeholderGradient || 'rgba(0,0,0,0.04)' }}
        >
          {project.placeholderEmoji}
        </div>
      )}

      {/* Body */}
      <div className="project-body">
        <div className="project-cat">{project.category}</div>
        <div className="project-title">{project.title}</div>
        <p className="project-desc">{project.description}</p>
        <div className="project-tags">
          {project.tags.map((tag) => (
            <span key={tag} className="project-tag">{tag}</span>
          ))}
        </div>
        {project.link && (
          <div className="project-link-row">
            View project →
          </div>
        )}
      </div>
    </>
  )

  const sharedProps = {
    className: `project-card ${project.featured ? 'project-card-featured' : ''}`,
    initial: { opacity: 0, y: 28 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, margin: '-50px' },
    transition: { duration: 0.6, delay: (index % 3) * 0.1, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] },
    whileHover: { y: -8, boxShadow: '0 24px 60px rgba(0,0,0,0.13)' },
    style: { background: cardBg },
  }

  return (
    <>
      {project.link ? (
        <motion.a
          href={project.link}
          target="_blank"
          rel="noopener noreferrer"
          {...sharedProps}
        >
          {cardContent}
        </motion.a>
      ) : (
        <motion.div {...sharedProps}>
          {cardContent}
        </motion.div>
      )}

      <style>{`
        .project-card {
          backdrop-filter: blur(20px);
          -webkit-backdrop-filter: blur(20px);
          border-radius: var(--radius);
          border: 1px solid rgba(255,255,255,0.92);
          box-shadow: 0 4px 20px rgba(0,0,0,0.06);
          overflow: hidden;
          transition: all 0.4s cubic-bezier(0.34,1.56,0.64,1);
          display: flex;
          flex-direction: column;
          cursor: default;
          text-decoration: none;
          color: inherit;
        }
        a.project-card { cursor: pointer; }
        .project-card-featured {
          grid-column: span 2;
        }
        .project-img {
          width: 100%;
          aspect-ratio: 16/9;
          object-fit: cover;
          object-position: top;
          display: block;
        }
        .project-img-portrait {
          width: 100%;
          aspect-ratio: 9/13;
          object-fit: cover;
          object-position: top;
          display: block;
        }
        .project-placeholder {
          width: 100%;
          aspect-ratio: 16/9;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 52px;
        }
        .project-body {
          padding: 22px 24px;
          flex: 1;
          display: flex;
          flex-direction: column;
          min-width: 0;
        }
        .project-cat {
          font-size: 11px;
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: 0.08em;
          color: var(--accent);
          margin-bottom: 7px;
        }
        .project-title {
          font-size: clamp(16px, 1.5vw, 19px);
          font-weight: 800;
          letter-spacing: -0.02em;
          color: var(--ink);
          margin-bottom: 8px;
          word-wrap: break-word;
          overflow-wrap: break-word;
        }
        .project-desc {
          font-size: 13px;
          line-height: 1.65;
          color: var(--muted);
          flex: 1;
          margin-bottom: 14px;
        }
        .project-tags {
          display: flex;
          flex-wrap: wrap;
          gap: 5px;
        }
        .project-tag {
          font-size: 10px;
          font-weight: 700;
          padding: 3px 9px;
          border-radius: 100px;
          background: rgba(37,99,235,0.07);
          color: var(--accent);
          border: 1px solid rgba(37,99,235,0.12);
          white-space: nowrap;
        }
        .project-link-row {
          margin-top: 14px;
          font-size: 13px;
          font-weight: 700;
          color: var(--accent);
          transition: opacity 0.2s;
        }
        a.project-card:hover .project-link-row {
          opacity: 0.7;
        }

        @media (max-width: 1024px) {
          .project-card-featured { grid-column: span 2; }
        }
        @media (max-width: 768px) {
          .project-card-featured { grid-column: span 1 !important; }
          .project-body { padding: 18px 20px; }
          .project-placeholder { font-size: 40px; }
        }
      `}</style>
    </>
  )
}

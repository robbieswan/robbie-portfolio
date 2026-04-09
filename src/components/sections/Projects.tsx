'use client'

import { motion } from 'framer-motion'
import { projects } from '@/components/data/projects'
import ProjectCard from '@/components/ui/ProjectCard'

export default function Projects() {
  return (
    <section id="projects">
      <div className="projects-container">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="section-header"
        >
          <div className="section-tag">
            <span className="section-tag-line" />
            Selected work
          </div>
          <h2 className="section-title">
            Products I&apos;ve{' '}
            <em>built</em>
          </h2>
        </motion.div>

        {/* Grid */}
        <div className="projects-grid">
          {projects.map((project, i) => (
            <ProjectCard key={project.id} project={project} index={i} />
          ))}
        </div>
      </div>

      <style>{`
        #projects { padding: 100px 0; }
        .projects-container {
          max-width: 1100px;
          margin: 0 auto;
          padding: 0 40px;
        }
        .section-header { margin-bottom: 56px; }
        .section-tag {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          font-size: 11px;
          font-weight: 700;
          letter-spacing: 0.1em;
          text-transform: uppercase;
          color: var(--muted);
          margin-bottom: 14px;
        }
        .section-tag-line {
          display: block;
          width: 20px;
          height: 2px;
          background: currentColor;
          border-radius: 2px;
        }
        .section-title {
          font-size: clamp(32px, 4vw, 56px);
          font-weight: 800;
          letter-spacing: -0.04em;
          line-height: 1.05;
          color: var(--ink);
        }
        .section-title em {
          font-family: var(--font-display);
          font-style: italic;
          font-weight: 300;
          color: var(--accent);
        }
        .projects-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 18px;
        }

        @media (max-width: 1024px) {
          .projects-grid {
            grid-template-columns: repeat(2, 1fr) !important;
          }
        }
        @media (max-width: 768px) {
          #projects { padding: 60px 0; }
          .projects-container { padding: 0 20px; }
          .projects-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  )
}

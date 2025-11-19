import React, { useEffect, useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import projectsData from '../data/projects.json';

const filters = [
  { id: 'all', label: 'All' },
  { id: 'product', label: 'Products' },
  { id: 'service', label: 'Services' }
];

const containerVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.21, 0.61, 0.35, 1],
      when: 'beforeChildren',
      staggerChildren: 0.08
    }
  }
};

const cardVariants = {
  hidden: { opacity: 0, y: 40, scale: 0.9, rotateX: 10 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    rotateX: 0,
    transition: {
      duration: 0.55,
      ease: [0.16, 1, 0.3, 1]
    }
  },
  exit: {
    opacity: 0,
    y: -20,
    scale: 0.96,
    transition: { duration: 0.25, ease: 'easeInOut' }
  }
};

const ProjectCard = ({ project, index }) => {
  const accent = project.accent || '#a92b4e';

  return (
    <motion.article
      layout
      variants={cardVariants}
      whileHover={{
        y: -10,
        rotateX: 4,
        rotateY: -4,
        boxShadow: '0 35px 120px rgba(15,23,42,0.38)',
        transition: { type: 'spring', stiffness: 220, damping: 18 }
      }}
      whileTap={{ scale: 0.98, rotateX: 0, rotateY: 0 }}
      className="group relative rounded-3xl border border-slate-800/60 bg-slate-950/70 overflow-hidden backdrop-blur-xl cursor-pointer"
      style={{
        backgroundImage:
          'radial-gradient(circle at top left, rgba(248,250,252,0.12), transparent 55%)'
      }}
      onClick={() => {
        window.open(`/projects/${project.type}/${project.id}`, '_blank', 'noopener,noreferrer');
      }}
    >
      {/* Glow ring */}
      <div
        className="pointer-events-none absolute -inset-[1px] opacity-0 group-hover:opacity-100 transition-opacity duration-300"
        style={{
          background:
            'conic-gradient(from 180deg at 50% 50%, rgba(248,250,252,0.18), transparent, rgba(248,250,252,0.4), transparent)'
        }}
      />

      {/* Thumbnail */}
      <div className="relative overflow-hidden rounded-3xl m-2 mb-0">
        <motion.div
          className="relative h-52 md:h-56 overflow-hidden rounded-2xl"
          whileHover={{
            scale: 1.03
          }}
          transition={{ type: 'spring', stiffness: 200, damping: 22 }}
        >
          <img
            src={project.thumbnail}
            alt={project.title}
            className="w-full h-full object-cover transform group-hover:scale-[1.08] transition-transform duration-[900ms] ease-[cubic-bezier(0.16,1,0.3,1)]"
          />
          {/* gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-slate-950/0 to-slate-900/10" />
        </motion.div>

        {/* floating badge */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-10% 0px -10% 0px' }}
          transition={{ delay: index * 0.03 + 0.1, duration: 0.35 }}
          className="absolute bottom-4 left-4 flex items-center gap-2"
        >
          <span
            className="inline-flex items-center rounded-full px-3 py-1 text-[11px] uppercase tracking-[0.22em] bg-slate-950/80 border border-slate-700/80 text-slate-200"
          >
            {project.type === 'product' ? 'Product' : 'Service'}
          </span>
          <span
            className="text-xs text-slate-300/80 px-2 py-1 rounded-full border border-slate-700/70 bg-slate-900/80"
          >
            {project.year}
          </span>
        </motion.div>
      </div>

      {/* Content */}
      <div className="px-5 pt-4 pb-5">
        <h3 className="text-base md:text-lg font-semibold tracking-tight text-slate-50 mb-1">
          {project.title}
        </h3>
        {project.subtitle && (
          <p className="text-xs md:text-sm text-slate-300/90 mb-3">
            {project.subtitle}
          </p>
        )}

        <p className="text-[13px] leading-relaxed text-slate-400 line-clamp-3 mb-4">
          {project.description}
        </p>

        <div className="flex flex-wrap items-center gap-2 mb-4">
          {project.tags?.slice(0, 3).map(tag => (
            <span
              key={tag}
              className="text-[11px] uppercase tracking-[0.18em] px-3 py-1 rounded-full bg-slate-900/80 border border-slate-700/70 text-slate-300"
            >
              {tag}
            </span>
          ))}
        </div>

        <div className="flex items-center justify-between">
          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              if (project.website) {
                window.open(project.website, '_blank', 'noopener,noreferrer');
              }
            }}
            className="inline-flex items-center gap-2 text-[12px] uppercase tracking-[0.22em] text-slate-100/90"
          >
            <span>Visit</span>
            <span
              className="h-[1px] w-8 bg-slate-200 group-hover:w-10 transition-all duration-300"
              style={{ backgroundColor: accent }}
            />
          </button>

          <span
            className="h-7 w-7 rounded-full border border-slate-600/70 flex items-center justify-center text-slate-200 text-xs group-hover:border-slate-200/90 group-hover:bg-slate-900/60 transition-colors"
          >
            ↗
          </span>
        </div>
      </div>
    </motion.article>
  );
};

const ProjectExploreSection = () => {
  const [activeFilter, setActiveFilter] = useState('all');

  const filteredProjects = useMemo(() => {
    if (activeFilter === 'all') return projectsData;
    return projectsData.filter(p => p.type === activeFilter);
  }, [activeFilter]);

  return (
    <section className="min-h-screen bg-slate-950 text-slate-50 py-20" id="project-explore">
      <div className="container mx-auto px-4 max-w-6xl">
        {/* Header */}
        <motion.header
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.21, 0.61, 0.35, 1] }}
          className="mb-10 md:mb-14 flex flex-col md:flex-row md:items-end md:justify-between gap-6"
        >
          <div>
            <p className="text-[11px] uppercase tracking-[0.3em] text-slate-400 mb-3">
              Explore our work
            </p>
            <h2 className="text-3xl md:text-5xl font-semibold tracking-tight">
              Project <span className="text-rose-400">Explore</span>
            </h2>
            <p className="mt-3 max-w-xl text-sm md:text-base text-slate-400">
              A shared gallery for products and services, with animated cards, tilt, and glowing highlights that match your brand.
            </p>
          </div>

          {/* Filters */}
          <div className="inline-flex items-center gap-2 rounded-full bg-slate-900/80 border border-slate-700/70 px-1 py-1 backdrop-blur">
            {filters.map((f) => (
              <button
                key={f.id}
                onClick={() => setActiveFilter(f.id)}
                className={`relative px-4 md:px-5 py-1.5 md:py-2 rounded-full text-[11px] md:text-[12px] uppercase tracking-[0.26em] transition-colors ${
                  activeFilter === f.id
                    ? 'text-slate-50'
                    : 'text-slate-400 hover:text-slate-100'
                }`}
              >
                {activeFilter === f.id && (
                  <motion.span
                    layoutId="pill-bg"
                    className="absolute inset-0 rounded-full bg-slate-50/5 border border-slate-500/40"
                    transition={{ type: 'spring', stiffness: 360, damping: 30 }}
                  />
                )}
                <span className="relative z-10">{f.label}</span>
              </button>
            ))}
          </div>
        </motion.header>

        {/* Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8"
        >
          <AnimatePresence initial={false}>
            {filteredProjects.map((project, index) => (
              <ProjectCard key={project.id} project={project} index={index} />
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
};

export default ProjectExploreSection;

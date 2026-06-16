import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { projects } from '../data/projects';
import { ArrowLeft, ExternalLink, Code as Github, X } from 'lucide-react';

const ProjectDetail = () => {
    const { id } = useParams();
    const project = projects.find(p => p.id === parseInt(id));
    const [isModalOpen, setIsModalOpen] = useState(false);

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    if (!project) {
        return (
            <div className="min-h-screen flex flex-col items-center justify-center text-white">
                <h1 className="text-4xl font-bold mb-4">Project Not Found</h1>
                <Link to="/" className="text-blue-400 hover:underline">Back to Home</Link>
            </div>
        );
    }

    return (
        <div className="relative overflow-hidden min-h-screen">
            <div className="absolute left-0 top-10 h-48 w-48 rounded-full bg-white/20 blur-3xl"></div>
            <div className="absolute right-0 top-1/4 h-80 w-80 rounded-full bg-sky-200/20 blur-3xl"></div>

            <header className="relative mx-auto flex max-w-6xl items-center justify-between gap-6 px-6 py-6 sm:px-10">
                <Link to="/" className="rounded-full bg-white/10 px-5 py-3 text-lg font-semibold text-white shadow-lg shadow-slate-900/10 transition hover:bg-white/20 flex items-center gap-2">
                    <ArrowLeft size={20} /> Back
                </Link>
                <div className="hidden rounded-full bg-white/10 px-5 py-3 text-white/90 shadow-lg shadow-slate-900/10 md:block">Project Detail</div>
            </header>

            <main className="relative mx-auto max-w-6xl px-6 pb-20 sm:px-10">
                <motion.section 
                    initial={{ opacity: 0, y: 24 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="mt-10 rounded-[2.5rem] border border-white/15 bg-white/10 p-6 shadow-2xl shadow-slate-950/20 backdrop-blur-xl md:p-10"
                >
                    <div className="grid gap-8 lg:grid-cols-2 lg:gap-10">
                        <div className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-slate-950/40 backdrop-blur-sm shadow-xl w-full h-auto max-h-[600px] flex items-center justify-center">
                            <img 
                                src={project.image} 
                                alt={project.title} 
                                className="w-full h-auto max-h-[600px] object-contain transition-transform duration-700 ease-out hover:scale-105 cursor-pointer"
                                onClick={() => setIsModalOpen(true)}
                            />
                        </div>
                        
                        <div className="space-y-6 text-white">
                            <span className="inline-flex rounded-full bg-sky-100/15 px-4 py-2 text-sm font-semibold uppercase tracking-[0.32em] text-sky-100">Featured Project</span>
                            <h1 className="text-4xl font-extrabold sm:text-5xl">{project.title}</h1>
                            <p className="max-w-3xl text-lg leading-8 text-slate-100/90 md:text-xl">{project.description}</p>
                            
                            <div className="grid gap-4 sm:grid-cols-2">
                                <div className="rounded-3xl bg-white/10 p-6 text-slate-50 shadow-lg shadow-slate-950/10">
                                    <h2 className="font-semibold text-white">Platform</h2>
                                    <p className="mt-2 text-sm text-slate-200">{project.platform || 'N/A'}</p>
                                </div>
                                <div className="rounded-3xl bg-white/10 p-6 text-slate-50 shadow-lg shadow-slate-950/10">
                                    <h2 className="font-semibold text-white">Stack</h2>
                                    <p className="mt-2 text-sm text-slate-200">{project.stack || 'N/A'}</p>
                                </div>
                                <div className="rounded-3xl p-6 shadow-lg shadow-slate-950/10 bg-white/5">
                                    <h2 className="font-semibold text-white">Url</h2>
                                    <a href={project.url || '#'} target="_blank" rel="noopener noreferrer" className="mt-2 block text-sm text-white hover:text-blue-500 font-black break-all flex items-center gap-1">
                                        {project.url || 'N/A'} {project.url && <ExternalLink size={14} />}
                                    </a>
                                </div>
                                <div className="rounded-3xl p-6 shadow-lg shadow-slate-950/10 bg-white/5">
                                    <h2 className="font-semibold text-white">GitHub</h2>
                                    <a href={project.github || '#'} target="_blank" rel="noopener noreferrer" className="mt-2 block text-sm text-white hover:text-blue-500 font-black break-all flex items-center gap-1">
                                        {project.github || 'N/A'} {project.github && <Github size={14} />}
                                    </a>
                                </div>
                            </div>

                            <div className="flex flex-col gap-4 sm:flex-row">
                                <Link to="/" className="inline-flex items-center justify-center rounded-full bg-gradient-to-r from-[#4FC3F7] to-[#01579B] px-8 py-4 text-base font-bold text-white shadow-lg shadow-[#01579B]/30 transition hover:scale-[1.02]">Home</Link>
                                <button 
                                    onClick={() => setIsModalOpen(true)}
                                    className="inline-flex items-center justify-center rounded-full border border-white/20 bg-white/10 px-8 py-4 text-base font-semibold text-white transition hover:bg-white/20"
                                >
                                    View Image
                                </button>
                            </div>
                        </div>
                    </div>
                </motion.section>

                {/* <motion.section 
                    initial={{ opacity: 0, y: 24 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="mt-10 rounded-[2.5rem] border border-white/15 bg-[#ffffff1a] p-6 shadow-2xl shadow-slate-950/20 backdrop-blur-xl md:p-10"
                >
                    <h2 className="text-3xl font-extrabold text-white">Project Highlights</h2>
                    <div className="mt-6 grid gap-6 md:grid-cols-3">
                        <article className="rounded-3xl bg-white/10 p-5 text-slate-100 shadow-lg shadow-slate-950/10">
                            <h3 className="font-semibold text-white">Responsive Design</h3>
                            <p className="mt-3 text-sm leading-6 text-slate-200">Optimized layouts for every screen size with smooth transitions and readable text.</p>
                        </article>
                        <article className="rounded-3xl bg-white/10 p-5 text-slate-100 shadow-lg shadow-slate-950/10">
                            <h3 className="font-semibold text-white">Modern UI</h3>
                            <p className="mt-3 text-sm leading-6 text-slate-200">Clean visuals, bold color energy, and refined spacing across the page.</p>
                        </article>
                        <article className="rounded-3xl bg-white/10 p-5 text-slate-100 shadow-lg shadow-slate-950/10">
                            <h3 className="font-semibold text-white">Fast Experience</h3>
                            <p className="mt-3 text-sm leading-6 text-slate-200">Lightweight layout and accessible components for a polished user experience.</p>
                        </article>
                    </div>
                </motion.section> */}
            </main>

            {/* Image Modal */}
            {isModalOpen && (
                <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-md" onClick={() => setIsModalOpen(false)}>
                    <div className="relative max-w-4xl w-full overflow-hidden rounded-[2rem] border border-white/15 bg-slate-900 shadow-2xl" onClick={e => e.stopPropagation()}>
                        <button 
                            onClick={() => setIsModalOpen(false)}
                            className="absolute right-4 top-4 z-10 flex h-10 w-10 items-center justify-center rounded-full bg-black/50 text-white transition hover:bg-black/80"
                        >
                            <X size={20} />
                        </button>
                        <div className="p-2">
                            <img src={project.image} alt={project.title} className="max-h-[80vh] w-full object-contain rounded-[1.5rem]" />
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default ProjectDetail;

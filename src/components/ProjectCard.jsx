import React from 'react';
import { Link } from 'react-router-dom';
import { ExternalLink } from 'lucide-react';

const ProjectCard = ({ project }) => {
    return (
        <Link 
            to={`/projects/${project.id}`} 
            className="group bg-slate-900/50 rounded-2xl overflow-hidden border border-blue-900/40 hover:border-blue-500 transition-all duration-300 hover:-translate-y-1 flex flex-col h-full"
        >
            <div className="relative overflow-hidden aspect-video w-full bg-slate-950">
                <img 
                    src={project.image} 
                    alt={`${project.title} Screenshot`} 
                    className="w-full h-full object-cover transform transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-slate-950/20 group-hover:bg-slate-950/0 transition"></div>
            </div>
            <div className="p-6 bg-slate-900/90 flex-grow flex flex-col justify-between items-center gap-4 border-t border-blue-950">
                <h3 className="text-lg font-bold tracking-wide text-slate-200 group-hover:text-blue-400 transition line-clamp-2">
                    {project.title}
                </h3>
                <span className="inline-flex items-center gap-1 text-sm text-sky-400 font-medium">
                    Explore Project <ExternalLink size={16} />
                </span>
            </div>
        </Link>
    );
};

export default ProjectCard;

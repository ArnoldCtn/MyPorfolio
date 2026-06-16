import React from 'react';
import { projects } from '../data/projects';
import ProjectCard from '../components/ProjectCard';

const AllProjects = () => {
    const categories = ['web', 'mobile', 'desktop'];

    return (
        <main className="max-w-7xl mx-auto px-6 py-12">
            <h1 className="text-4xl sm:text-5xl font-extrabold text-blue-400 mb-12 text-center uppercase">All Projects</h1>

            {categories.map((category) => {
                const categorizedProjects = projects.filter(p => p.category === category);
                
                if (categorizedProjects.length === 0) return null;

                return (
                    <div key={category} className="mb-16">
                        <h2 className="text-3xl font-extrabold text-sky-400 mb-8 capitalize">{category} Projects</h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                            {categorizedProjects.map((project) => (
                                <ProjectCard key={project.id} project={project} />
                            ))}
                        </div>
                    </div>
                );
            })}
        </main>
    );
};

export default AllProjects;

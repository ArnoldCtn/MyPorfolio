import React from 'react';
import { motion } from 'framer-motion';
import { Code2, Layout, Smartphone, Mail, Phone, MapPin, ArrowRight } from 'lucide-react';
import { projects } from '../data/projects';
import ProjectCard from '../components/ProjectCard';
import ServiceCard from '../components/ServiceCard';
import ContactForm from '../components/ContactForm';
import { Link } from 'react-router-dom';

const fadeInVariant = {
    hidden: { opacity: 0, y: 30, filter: 'blur(10px)' },
    visible: { 
        opacity: 1, 
        y: 0, 
        filter: 'blur(0px)',
        transition: { duration: 0.8, ease: "easeOut" }
    }
};

const Home = () => {
    return (
        <main className="max-w-7xl mx-auto px-6" id="home">
            {/* Hero / Info Section */}
            <motion.section 
                id="info" 
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeInVariant}
                className="min-h-[calc(100vh-72px)] flex flex-col justify-center items-center text-center gap-6 py-12"
            >
                <span className="text-blue-400 text-sm md:text-base font-bold tracking-widest uppercase bg-blue-950/60 px-4 py-1.5 rounded-full border border-blue-800/60">
                    Available for Freelance & Contracts
                </span>
                <h1 className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-extrabold tracking-tight max-w-5xl leading-tight">
                    I'm A Rising <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-sky-400 to-indigo-400">Web & Mobile</span> <span className="bg-clip-text text-transparent bg-gradient-to-r from-indigo-400 to-blue-400">FullStack</span> Developer
                </h1>
                <p className="text-slate-400 text-lg sm:text-xl md:text-2xl max-w-2xl font-light">
                    I Design Modern, Fluid, and User-Friendly Websites and Applications.
                </p>
                <div className="mt-4">
                    <a href="#ContactME" className="relative inline-flex items-center justify-center p-0.5 overflow-hidden text-base font-bold text-white rounded-full group bg-gradient-to-br from-blue-600 to-sky-500 hover:text-white transition">
                        <span className="relative px-8 py-3.5 transition-all ease-in duration-75 bg-slate-950 rounded-full group-hover:bg-opacity-0">
                            Hire Me Now
                        </span>
                    </a>
                </div>
            </motion.section>

            {/* About Me Section */}
            <motion.section 
                id="aboutME" 
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-100px" }}
                variants={fadeInVariant}
                className="min-h-screen flex flex-col lg:flex-row items-center justify-center gap-12 lg:gap-20 py-20"
            >
                <div className="w-full max-w-md lg:max-w-lg relative group shrink-0">
                    <div className="absolute -inset-1.5 bg-gradient-to-r from-blue-600 to-sky-500 rounded-3xl blur opacity-40 group-hover:opacity-70 transition duration-500"></div>
                    <div className="relative overflow-hidden rounded-2xl border border-blue-900/50 bg-slate-900/10 flex items-center justify-center">
                        <img 
                            src="/images/me.jpg" 
                            alt="About Me" 
                            className="w-full h-auto max-h-[500px] object-contain transform transition-transform duration-700 hover:scale-105"
                        />
                    </div>
                </div>
                
                <div className="flex flex-col gap-6 max-w-xl text-center lg:text-left items-center lg:items-start">
                    <h2 className="text-3xl sm:text-5xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-indigo-200 uppercase">
                        About Me
                    </h2>
                    <h3 className="text-xl sm:text-2xl font-semibold text-sky-400 uppercase">
                        Full-Stack Web & Mobile Engineer
                    </h3>
                    <p className="text-slate-300 text-base sm:text-lg leading-relaxed font-light">
                        I am a rising and passionate developer whose aim is to build modern, highly performant, and useful cross-platform ecosystems. Based in Cameroon, I love turning complex logic challenges into elegant, clean architectural patterns.
                    </p>
                    <div className="pt-2">
                        <a href="#ContactME" className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-500 text-white font-bold px-6 py-3 rounded-xl transition shadow-lg shadow-blue-950/50">
                            <span>Get In Touch</span>
                            <ArrowRight size={20} />
                        </a>
                    </div>
                </div>
            </motion.section>

            {/* Services Section */}
            <motion.section 
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-100px" }}
                variants={fadeInVariant}
                className="min-h-screen flex flex-col justify-center items-center py-20"
            >
                <div className="text-center mb-16">
                    <h2 className="text-3xl sm:text-5xl font-extrabold text-blue-400 mb-4 uppercase">My Core Expertises</h2>
                    <div className="h-1 w-20 bg-blue-500 mx-auto rounded-full"></div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full">
                    <ServiceCard 
                        icon={Code2} 
                        title="HTML DEVELOPMENT" 
                        description="Structuring modern, standard-compliant semantic mockups optimized for top-tier accessibility and performance metrics."
                        delay={100}
                    />
                    <ServiceCard 
                        icon={Layout} 
                        title="Laravel X TailwindCSS" 
                        description="Crafting highly stylized custom web apps built with reliable architectural MVC models coupled with clean functional utility frameworks."
                        delay={200}
                    />
                    <ServiceCard 
                        icon={Smartphone} 
                        title="React Native Development" 
                        description="Building premium native applications executing seamlessly across Android and iOS touchscreens utilizing fluid responsive styling paradigms."
                        delay={300}
                    />
                </div>
            </motion.section>

            {/* Featured Work Section */}
            <motion.section 
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-100px" }}
                variants={fadeInVariant}
                className="min-h-screen flex flex-col justify-center items-center py-20"
            >
                <div className="text-center mb-16">
                    <h2 className="text-3xl sm:text-5xl font-extrabold text-blue-400 mb-4 uppercase">Featured Work</h2>
                    <div className="h-1 w-20 bg-blue-500 mx-auto rounded-full"></div>
                </div>
            
                <div className="w-full">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 w-full">
                        {projects.slice(0, 6).map((project) => (
                            <ProjectCard key={project.id} project={project} />
                        ))}
                    </div>
                    
                    {projects.length > 6 && (
                        <div className="mt-8 text-center">
                            <Link to="/projects" className="relative inline-flex items-center justify-center p-0.5 overflow-hidden text-base font-bold text-white rounded-full group bg-gradient-to-br from-blue-600 to-sky-500 hover:text-white transition">
                                <span className="relative px-8 py-3.5 transition-all ease-in duration-75 bg-slate-950 rounded-full group-hover:bg-opacity-0">
                                    View All Projects
                                </span>
                            </Link>
                        </div>
                    )}
                </div>
            </motion.section>
            
            {/* Contact Section */}
            <motion.section 
                id="ContactME" 
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-100px" }}
                variants={fadeInVariant}
                className="min-h-screen flex flex-col justify-center items-center py-20"
            >
                <div className="text-center mb-12">
                    <h2 className="text-3xl sm:text-5xl font-extrabold text-blue-400 mb-4 uppercase">Contact Me</h2>
                    <div className="h-1 w-20 bg-blue-500 mx-auto rounded-full"></div>
                </div>
                
                <div className="flex flex-col lg:flex-row items-stretch justify-center gap-12 w-full max-w-5xl">
                    <ContactForm />

                    <div className="w-full lg:w-2/5 flex flex-col justify-between gap-6">
                        <div className="flex items-center gap-5 p-6 bg-slate-900/40 border border-blue-900/30 rounded-2xl h-full">
                            <div className="text-3xl text-blue-400 bg-blue-950/60 p-4 rounded-xl border border-blue-900/50 flex items-center justify-center">
                                <Mail size={24} />
                            </div>
                            <div className="overflow-hidden">
                                <h4 className="text-sm font-bold uppercase text-slate-400 tracking-wider">Email</h4>
                                <p className="text-base sm:text-lg text-slate-200 font-medium truncate">arnoldctn@gmail.com</p>
                            </div>
                        </div>

                        <div className="flex items-center gap-5 p-6 bg-slate-900/40 border border-blue-900/30 rounded-2xl h-full">
                            <div className="text-3xl text-blue-400 bg-blue-950/60 p-4 rounded-xl border border-blue-900/50 flex items-center justify-center">
                                <Phone size={24} />
                            </div>
                            <div>
                                <h4 className="text-sm font-bold uppercase text-slate-400 tracking-wider">Tel</h4>
                                <p className="text-base sm:text-lg text-slate-200 font-medium">+237-696-69-29-61</p>
                                <p className="text-base sm:text-lg text-slate-200 font-medium">+237-675-82-87-11</p>
                            </div>
                        </div>

                        <div className="flex items-center gap-5 p-6 bg-slate-900/40 border border-blue-900/30 rounded-2xl h-full">
                            <div className="text-3xl text-blue-400 bg-blue-950/60 p-4 rounded-xl border border-blue-900/50 flex items-center justify-center">
                                <MapPin size={24} />
                            </div>
                            <div>
                                <h4 className="text-sm font-bold uppercase text-slate-400 tracking-wider">Location</h4>
                                <p className="text-base sm:text-lg text-slate-200 font-medium">Cameroon</p>
                            </div>
                        </div>
                    </div>
                </div>
            </motion.section>
        </main>
    );
};

export default Home;

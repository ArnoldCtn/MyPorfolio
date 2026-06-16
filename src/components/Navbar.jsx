import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const location = useLocation();

    // Close menu when route changes
    useEffect(() => {
        setIsOpen(false);
    }, [location]);

    const navLinks = [
        { name: 'Home', path: '/#home' },
        { name: 'Info', path: '/#info' },
        { name: 'Projects', path: '/projects' },
        { name: 'About Me', path: '/#aboutME' },
        { name: 'Contact Me', path: '/#ContactME' },
    ];

    const handleScroll = (id) => {
        if (location.pathname === '/') {
            const element = document.getElementById(id.replace('/#', ''));
            if (element) {
                element.scrollIntoView({ behavior: 'smooth' });
            }
        }
    };

    return (
        <header className="sticky top-0 z-50 w-full bg-slate-900/80 backdrop-blur-md border-b border-blue-900/40 transition-all duration-300">
            <nav className="max-w-7xl mx-auto flex justify-between items-center px-6 py-4">
                {/* Logo Section */}
                <Link to="/" onClick={() => handleScroll('/#home')} className="group flex items-center gap-2">
                    <h1 className="text-2xl md:text-3xl font-black tracking-wider bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-sky-400 group-hover:from-sky-400 group-hover:to-blue-500 transition duration-300">
                        My Portfolio
                    </h1>
                </Link>

                {/* Menu Links & Profile Wrapper */}
                <div className="flex items-center gap-6">
                    {/* Desktop Navigation */}
                    <div className="hidden md:flex items-center gap-8 lg:gap-12">
                        <ul className="flex gap-8 lg:gap-10 text-base lg:text-lg font-semibold tracking-wide">
                            {navLinks.map((link) => (
                                <li key={link.name}>
                                    {link.path.startsWith('/#') ? (
                                        <Link 
                                            to={link.path} 
                                            onClick={() => handleScroll(link.path)}
                                            className="text-slate-300 hover:text-blue-400 transition"
                                        >
                                            {link.name}
                                        </Link>
                                    ) : (
                                        <Link to={link.path} className="text-slate-300 hover:text-blue-400 transition">
                                            {link.name}
                                        </Link>
                                    )}
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* User Profile */}
                    <div className="relative group">
                        <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-500 to-sky-500 rounded-full blur opacity-60 group-hover:opacity-100 transition duration-300"></div>
                        <img 
                            src="/images/me.jpg" 
                            alt="Avatar" 
                            className="relative size-10 rounded-full object-cover border border-slate-900 cursor-pointer"
                        />
                    </div>

                    {/* Mobile Menu Toggle */}
                    <button 
                        onClick={() => setIsOpen(!isOpen)}
                        className="text-blue-400 hover:text-sky-300 cursor-pointer focus:outline-none md:hidden flex items-center justify-center"
                    >
                        {isOpen ? <X size={32} /> : <Menu size={32} />}
                    </button>
                </div>
            </nav>

            {/* Mobile Drawer */}
            <div 
                className={`fixed top-[72px] left-0 w-[75%] h-[calc(100vh-72px)] bg-slate-900/95 backdrop-blur-lg p-8 transition-transform duration-300 ease-in-out border-r border-blue-900/50 md:hidden flex flex-col gap-8 ${
                    isOpen ? 'translate-x-0' : '-translate-x-full'
                }`}
            >
                <ul className="flex flex-col gap-6 text-lg font-semibold tracking-wide">
                    {navLinks.map((link) => (
                        <li key={link.name}>
                            {link.path.startsWith('/#') ? (
                                <Link 
                                    to={link.path} 
                                    onClick={() => handleScroll(link.path)}
                                    className="block py-2 text-slate-300 hover:text-blue-400 transition"
                                >
                                    {link.name}
                                </Link>
                            ) : (
                                <Link to={link.path} className="block py-2 text-slate-300 hover:text-blue-400 transition">
                                    {link.name}
                                </Link>
                            )}
                        </li>
                    ))}
                </ul>
            </div>
        </header>
    );
};

export default Navbar;

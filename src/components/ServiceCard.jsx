import React from 'react';

const ServiceCard = ({ icon: Icon, title, description, delay = 0 }) => {
    return (
        <div 
            className="bg-slate-900/60 backdrop-blur border border-blue-900/40 p-8 rounded-2xl text-center flex flex-col items-center gap-4 transition-all duration-300 hover:-translate-y-2 hover:border-blue-500 hover:bg-slate-900/90 group"
            style={{ transitionDelay: `${delay}ms` }}
        >
            <div className="size-14 bg-blue-950 rounded-xl flex items-center justify-center text-3xl text-blue-400 border border-blue-800/60 group-hover:bg-blue-600 group-hover:text-white transition duration-300">
                <Icon size={24} />
            </div>
            <h3 className="text-xl font-bold text-slate-100 group-hover:text-blue-400 transition uppercase">
                {title}
            </h3>
            <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
                {description}
            </p>
        </div>
    );
};

export default ServiceCard;

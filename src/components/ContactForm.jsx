import React, { useState } from 'react';

const ContactForm = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        messageContent: ''
    });
    const [status, setStatus] = useState({
        submitting: false,
        success: null,
        error: null
    });

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setStatus({ submitting: true, success: null, error: null });

        const accessKey = import.meta.env.VITE_WEB3FORMS_ACCESS_KEY;

        if (!accessKey || accessKey === 'YOUR_ACCESS_KEY_HERE') {
            setStatus({
                submitting: false,
                success: null,
                error: 'Web3Forms Access Key is missing. Please check your .env file.'
            });
            return;
        }

        const data = {
            ...formData,
            access_key: accessKey,
            subject: `New Contact Form Submission from ${formData.name}`,
            from_name: 'My Portfolio',
        };

        try {
            const response = await fetch('https://api.web3forms.com/submit', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json'
                },
                body: JSON.stringify(data)
            });

            const result = await response.json();

            if (result.success) {
                setStatus({
                    submitting: false,
                    success: 'Thank you for your message! I will get back to you soon.',
                    error: null
                });
                setFormData({ name: '', email: '', messageContent: '' });
            } else {
                setStatus({
                    submitting: false,
                    success: null,
                    error: result.message || 'Something went wrong. Please try again later.'
                });
            }
        } catch (err) {
            setStatus({
                submitting: false,
                success: null,
                error: 'Failed to send message. Please check your internet connection.'
            });
        }
    };

    return (
        <div className="w-full lg:w-3/5 bg-slate-900/50 backdrop-blur p-6 sm:p-10 rounded-2xl border border-blue-900/40">
            {status.success && (
                <div className="bg-green-500 text-white p-3 rounded-xl mb-6 text-center">
                    {status.success}
                </div>
            )}
            {status.error && (
                <div className="bg-red-500 text-white p-3 rounded-xl mb-6 text-center">
                    {status.error}
                </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                    <label className="block text-sm font-semibold text-slate-300 mb-2">Name</label>
                    <input 
                        type="text" 
                        name="name" 
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="Enter Name" 
                        required
                        className="w-full p-4 rounded-xl bg-slate-950 border border-blue-900/60 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 outline-none text-slate-100 transition"
                    />
                </div>
                <div>
                    <label className="block text-sm font-semibold text-slate-300 mb-2">Email Address</label>
                    <input 
                        type="email" 
                        name="email" 
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="Enter Email" 
                        required
                        className="w-full p-4 rounded-xl bg-slate-950 border border-blue-900/60 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 outline-none text-slate-100 transition"
                    />
                </div>
                <div>
                    <label className="block text-sm font-semibold text-slate-300 mb-2">Message</label>
                    <textarea 
                        name="messageContent" 
                        value={formData.messageContent}
                        onChange={handleChange}
                        rows="5" 
                        placeholder="Your Message" 
                        required
                        className="w-full p-4 rounded-xl bg-slate-950 border border-blue-900/60 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 outline-none text-slate-100 transition resize-none"
                    ></textarea>
                </div>
                
                <button 
                    type="submit" 
                    disabled={status.submitting}
                    className="w-full py-4 bg-blue-600 hover:bg-blue-500 disabled:bg-blue-800 rounded-xl text-white font-bold tracking-wide transition shadow-lg shadow-blue-950/50 cursor-pointer"
                >
                    {status.submitting ? 'Sending...' : 'Send Message'}
                </button>
            </form>
        </div>
    );
};

export default ContactForm;

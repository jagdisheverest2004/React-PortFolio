import { useState } from "react";
import emailjs from "@emailjs/browser";
import { 
    FaPhone, 
    FaEnvelope, 
    FaLinkedin, 
    FaGithub, 
    FaMapMarkerAlt, 
    FaPaperPlane, 
    FaUser, 
    FaComment,
    FaCheckCircle,
    FaExclamationCircle
} from "react-icons/fa";

function Contact() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });
    const [isLoading, setIsLoading] = useState(false);
    const [submitStatus, setSubmitStatus] = useState(null); // 'success' or 'error'

    const handleInputChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsLoading(true);
        setSubmitStatus(null);

        try {
            // Replace these with your actual EmailJS service ID, template ID, and public key
            const serviceId = 'service_your_service_id';
            const templateId = 'template_your_template_id';
            const publicKey = 'your_public_key';

            const templateParams = {
                from_name: formData.name,
                from_email: formData.email,
                message: formData.message,
                to_name: 'Jagdish Everest'
            };

            await emailjs.send(serviceId, templateId, templateParams, publicKey);
            setSubmitStatus('success');
            setFormData({ name: '', email: '', message: '' });
        } catch (error) {
            console.error('Email send failed:', error);
            setSubmitStatus('error');
        } finally {
            setIsLoading(false);
            setTimeout(() => setSubmitStatus(null), 5000);
        }
    };

    const contactInfo = [
        {
            icon: <FaPhone className="text-cyan-400 text-xl" />,
            title: "Phone",
            value: "+91 8778900128",
            href: "tel:+918778900128",
            description: "Available Mon - Fri, 9am - 6pm IST"
        },
        {
            icon: <FaEnvelope className="text-cyan-400 text-xl" />,
            title: "Email",
            value: "Jagdisheverest23@gmail.com",
            href: "mailto:Jagdisheverest23@gmail.com",
            description: "I'll respond within 24 hours"
        },
        {
            icon: <FaMapMarkerAlt className="text-cyan-400 text-xl" />,
            title: "Location",
            value: "Chennai, India",
            href: null,
            description: "Available for remote work globally"
        }
    ];

    const socialLinks = [
        {
            icon: <FaLinkedin className="text-2xl" />,
            name: "LinkedIn",
            url: "https://linkedin.com/in/jagdish-everest",
            color: "text-blue-500 hover:text-blue-400"
        },
        {
            icon: <FaGithub className="text-2xl" />,
            name: "GitHub",
            url: "https://github.com/jagdisheverest2004",
            color: "text-gray-400 hover:text-gray-300"
        }
    ];

    return (
        <div className="contact p-4 sm:p-8 bg-black/20 backdrop-blur-lg border border-slate-700 rounded-xl shadow-lg">
            <motion.h2 
                className="text-4xl font-bold text-center mb-4 text-cyan-300"
                initial={{ opacity: 0, y: -30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
            >
                Get in Touch
            </motion.h2>
            <motion.p 
                className="text-center text-slate-400 mb-12 max-w-2xl mx-auto"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.2 }}
            >
                Have a project in mind? Let's discuss how we can work together to bring your ideas to life.
            </motion.p>

            <div className="grid md:grid-cols-2 gap-12">
                {/* Contact Information */}
                <motion.div 
                    className="space-y-6"
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                >
                    <h3 className="text-2xl font-bold text-white mb-6">Contact Information</h3>
                    
                    {contactInfo.map((item, index) => (
                        <motion.div 
                            key={index}
                            className="bg-slate-800/50 border border-slate-700 rounded-lg p-6 hover:border-cyan-400 transition-all duration-300 hover:bg-slate-800"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.1 * index }}
                        >
                            <div className="flex items-start gap-4">
                                <div className="mt-1">
                                    {item.icon}
                                </div>
                                <div className="flex-1">
                                    <h4 className="font-semibold text-white mb-1">{item.title}</h4>
                                    {item.href ? (
                                        <a 
                                            href={item.href} 
                                            className="text-cyan-300 hover:text-cyan-200 transition-colors font-medium block"
                                        >
                                            {item.value}
                                        </a>
                                    ) : (
                                        <span className="text-cyan-300 font-medium block">{item.value}</span>
                                    )}
                                    <p className="text-slate-400 text-sm mt-1">{item.description}</p>
                                </div>
                            </div>
                        </motion.div>
                    ))}

                    {/* Social Media Links */}
                    <div className="mt-8">
                        <h4 className="text-lg font-semibold text-white mb-4">Connect with me</h4>
                        <div className="flex gap-4">
                            {socialLinks.map((social, index) => (
                                <motion.a
                                    key={index}
                                    href={social.url}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className={`p-3 rounded-lg bg-slate-800/50 border border-slate-700 hover:border-cyan-400 transition-all duration-300 ${social.color}`}
                                    whileHover={{ scale: 1.1, y: -2 }}
                                    whileTap={{ scale: 0.95 }}
                                >
                                    {social.icon}
                                </motion.a>
                            ))}
                        </div>
                    </div>
                </motion.div>

                {/* Contact Form */}
                <motion.div 
                    className="bg-slate-800/30 border border-slate-600 rounded-lg p-6"
                    initial={{ opacity: 0, x: 50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: 0.6 }}
                >
                    <h3 className="text-2xl font-bold text-white mb-6">Send me a message</h3>
                    
                    {submitStatus && (
                        <motion.div 
                            className={`mb-6 p-4 rounded-lg flex items-center gap-3 ${
                                submitStatus === 'success' 
                                    ? 'bg-green-500/20 border border-green-500/30 text-green-400' 
                                    : 'bg-red-500/20 border border-red-500/30 text-red-400'
                            }`}
                            initial={{ opacity: 0, y: -20 }}
                            animate={{ opacity: 1, y: 0 }}
                        >
                            {submitStatus === 'success' ? <FaCheckCircle /> : <FaExclamationCircle />}
                            {submitStatus === 'success' 
                                ? 'Message sent successfully! I\'ll get back to you soon.' 
                                : 'Failed to send message. Please try again or contact me directly.'
                            }
                        </motion.div>
                    )}

                    <form onSubmit={handleSubmit} className="space-y-6">
                        <div>
                            <label className="block text-white font-semibold mb-2" htmlFor="name">
                                <FaUser className="inline mr-2 text-cyan-400" />
                                Name
                            </label>
                            <input
                                type="text"
                                id="name"
                                name="name"
                                value={formData.name}
                                onChange={handleInputChange}
                                required
                                className="w-full px-4 py-3 bg-slate-700/50 border border-slate-600 rounded-lg text-white placeholder-slate-400 focus:border-cyan-400 focus:outline-none focus:bg-slate-700 transition-all duration-300"
                                placeholder="Your full name"
                            />
                        </div>

                        <div>
                            <label className="block text-white font-semibold mb-2" htmlFor="email">
                                <FaEnvelope className="inline mr-2 text-cyan-400" />
                                Email
                            </label>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                value={formData.email}
                                onChange={handleInputChange}
                                required
                                className="w-full px-4 py-3 bg-slate-700/50 border border-slate-600 rounded-lg text-white placeholder-slate-400 focus:border-cyan-400 focus:outline-none focus:bg-slate-700 transition-all duration-300"
                                placeholder="your.email@example.com"
                            />
                        </div>

                        <div>
                            <label className="block text-white font-semibold mb-2" htmlFor="message">
                                <FaComment className="inline mr-2 text-cyan-400" />
                                Message
                            </label>
                            <textarea
                                id="message"
                                name="message"
                                value={formData.message}
                                onChange={handleInputChange}
                                required
                                rows={6}
                                className="w-full px-4 py-3 bg-slate-700/50 border border-slate-600 rounded-lg text-white placeholder-slate-400 focus:border-cyan-400 focus:outline-none focus:bg-slate-700 transition-all duration-300 resize-none"
                                placeholder="Tell me about your project or just say hello!"
                            />
                        </div>

                        <motion.button
                            type="submit"
                            disabled={isLoading}
                            className={`w-full py-3 px-6 rounded-lg font-semibold transition-all duration-300 flex items-center justify-center gap-3 ${
                                isLoading 
                                    ? 'bg-slate-600 text-slate-400 cursor-not-allowed'
                                    : 'bg-gradient-to-r from-cyan-500 to-purple-600 text-white hover:from-purple-600 hover:to-pink-600 hover:scale-105'
                            }`}
                            whileHover={!isLoading ? { scale: 1.02 } : {}}
                            whileTap={!isLoading ? { scale: 0.98 } : {}}
                        >
                            {isLoading ? (
                                <>
                                    <div className="animate-spin rounded-full h-5 w-5 border-2 border-slate-300 border-t-transparent"></div>
                                    Sending...
                                </>
                            ) : (
                                <>
                                    <FaPaperPlane />
                                    Send Message
                                </>
                            )}
                        </motion.button>
                    </form>
                </motion.div>
            </div>
        </div>
    );
}

export default Contact;
import {
    FaGithub,
    FaLinkedin,
    FaEnvelope,
    FaPhone,
    FaMapMarkerAlt,
    FaPaperPlane,
    FaUser,
    FaComment,
    FaCheckCircle,
    FaExclamationCircle
} from 'react-icons/fa';
import { motion } from 'framer-motion';


function Contact({ isDarkMode, isLoading, submitStatus, formData, handleInputChange, handleSubmit, contactRef }) {
    return (
        <section id="contact" ref={contactRef} className="py-20 px-4">
            <div className="max-w-6xl mx-auto">
                <motion.h2
                    className="text-4xl font-bold text-center mb-6 bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                >
                    Get In Touch
                </motion.h2>
                <motion.p
                    className={`text-center mb-16 max-w-2xl mx-auto ${isDarkMode ? 'text-gray-400' : 'text-gray-800'}`}
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    viewport={{ once: true }}
                >
                    Have a project in mind? Let's discuss how we can work together to bring your ideas to life.
                </motion.p>

                <div className="grid md:grid-cols-2 gap-16">
                    {/* Contact Information */}
                    <motion.div
                        className="space-y-8"
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6 }}
                        viewport={{ once: true }}
                    >
                        <h3 className="text-2xl font-bold mb-6">Contact Information</h3>

                        <div className="space-y-6">
                            {[
                                {
                                    icon: <FaPhone className="text-cyan-500 text-xl" />,
                                    title: "Phone",
                                    value: "+91 8778900128",
                                    href: "tel:+918778900128",
                                    description: "Available Mon - Fri, 9am - 6pm IST"
                                },
                                {
                                    icon: <FaEnvelope className="text-purple-500 text-xl" />,
                                    title: "Email",
                                    value: "Jagdisheverest23@gmail.com",
                                    href: "mailto:Jagdisheverest23@gmail.com",
                                    description: "I'll respond within 24 hours"
                                },
                                {
                                    icon: <FaMapMarkerAlt className="text-red-500 text-xl" />,
                                    title: "Location",
                                    value: "Chennai, India",
                                    href: null,
                                    description: "Available for remote work globally"
                                }
                            ].map((item, index) => (
                                <motion.div
                                    key={index}
                                    className={`${isDarkMode ? 'bg-slate-800/50 border-slate-700 hover:bg-slate-800' : 'bg-white border-gray-200 hover:bg-gray-50'} border rounded-xl p-6 hover:shadow-lg transition-all duration-300`}
                                    whileHover={{ x: 5 }}
                                >
                                    <div className="flex items-start gap-4">
                                        <div className="mt-1">
                                            {item.icon}
                                        </div>
                                        <div className="flex-1">
                                            <h4 className="font-semibold mb-1">{item.title}</h4>
                                            {item.href ? (
                                                <a
                                                    href={item.href}
                                                    className="text-cyan-500 hover:text-cyan-400 transition-colors font-medium block"
                                                >
                                                    {item.value}
                                                </a>
                                            ) : (
                                                <span className="text-cyan-500 font-medium block">{item.value}</span>
                                            )}
                                            <p className={`text-sm mt-1 ${isDarkMode ? 'text-gray-400' : 'text-gray-800'}`}>{item.description}</p>
                                        </div>
                                    </div>
                                </motion.div>
                            ))}
                        </div>

                        <div>
                            <h4 className="text-lg font-semibold mb-4">Connect with me</h4>
                            <div className="flex gap-4">
                                {[
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
                                        color: isDarkMode ? "text-gray-700 hover:text-gray-300" : "text-gray-800 hover:text-gray-800"
                                    }
                                ].map((social, index) => (
                                    <motion.a
                                        key={index}
                                        href={social.url}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className={`p-4 rounded-xl ${isDarkMode ? 'bg-slate-800/50 border-slate-700 hover:bg-slate-800' : 'bg-gray-50 border-gray-200 hover:bg-white shadow-md'} border transition-all duration-300 ${social.color}`}
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
                        className={`${isDarkMode ? 'bg-slate-800/30 border-slate-600' : 'bg-white border-gray-200'} border rounded-2xl p-8`}
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        viewport={{ once: true }}
                    >
                        <h3 className="text-2xl font-bold mb-6">Send me a message</h3>

                        {submitStatus && (
                            <motion.div
                                className={`mb-6 p-4 rounded-lg flex items-center gap-3 ${submitStatus === 'success'
                                        ? 'bg-cyan-500/20 border border-cyan-500/30 text-cyan-400'
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
                                <label className="block font-semibold mb-2" htmlFor="name">
                                    <FaUser className="inline mr-2 text-cyan-500" />
                                    Name
                                </label>
                                <input
                                    type="text"
                                    id="name"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleInputChange}
                                    required
                                    className={`w-full px-4 py-3 ${isDarkMode ? 'bg-slate-700/50 border-slate-600 text-white placeholder-gray-400 focus:border-cyan-500 focus:bg-slate-700' : 'bg-gray-50 border-gray-200 text-gray-900 placeholder-gray-500 focus:border-cyan-500 focus:bg-white'} border rounded-lg focus:outline-none transition-all duration-300`}
                                    placeholder="Your full name"
                                />
                            </div>

                            <div>
                                <label className="block font-semibold mb-2" htmlFor="email">
                                    <FaEnvelope className="inline mr-2 text-purple-500" />
                                    Email
                                </label>
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleInputChange}
                                    required
                                    className={`w-full px-4 py-3 ${isDarkMode ? 'bg-slate-700/50 border-slate-600 text-white placeholder-gray-400 focus:border-cyan-500 focus:bg-slate-700' : 'bg-gray-50 border-gray-200 text-gray-900 placeholder-gray-500 focus:border-cyan-500 focus:bg-white'} border rounded-lg focus:outline-none transition-all duration-300`}
                                    placeholder="your.email@example.com"
                                />
                            </div>

                            <div>
                                <label className="block font-semibold mb-2" htmlFor="message">
                                    <FaComment className="inline mr-2 text-red-500" />
                                    Message
                                </label>
                                <textarea
                                    id="message"
                                    name="message"
                                    value={formData.message}
                                    onChange={handleInputChange}
                                    required
                                    rows={6}
                                    className={`w-full px-4 py-3 ${isDarkMode ? 'bg-slate-700/50 border-slate-600 text-white placeholder-gray-400 focus:border-cyan-500 focus:bg-slate-700' : 'bg-gray-50 border-gray-200 text-gray-900 placeholder-gray-500 focus:border-cyan-500 focus:bg-white'} border rounded-lg focus:outline-none transition-all duration-300 resize-none`}
                                    placeholder="Tell me about your project or just say hello!"
                                />
                            </div>

                            <motion.button
                                type="submit"
                                disabled={isLoading}
                                className={`w-full py-4 px-6 rounded-lg font-semibold transition-all duration-300 flex items-center justify-center gap-3 ${isLoading
                                        ? isDarkMode ? 'bg-slate-600 text-slate-400 cursor-not-allowed' : 'bg-gray-300 text-gray-500 cursor-not-allowed'
                                        : 'bg-gradient-to-r from-cyan-400 to-purple-500 text-white hover:shadow-lg'
                                    }`}
                                whileHover={!isLoading ? { scale: 1.02 } : {}}
                                whileTap={!isLoading ? { scale: 0.98 } : {}}
                            >
                                {isLoading ? (
                                    <>
                                        <div className="animate-spin rounded-full h-5 w-5 border-2 border-gray-300 border-t-transparent"></div>
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
        </section>
    );
}

export default Contact;
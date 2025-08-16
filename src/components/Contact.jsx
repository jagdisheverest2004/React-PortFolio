function Contact() {
    // Helper component for list items to avoid repetition
    const ContactItem = ({ title, value, href }) => (
        <li className="p-4 bg-slate-800/50 border border-slate-700 rounded-lg flex justify-between items-center transition-all duration-300 hover:border-cyan-400 hover:bg-slate-800">
            <span className="font-semibold text-slate-300">{title}:</span>
            {href ? (
                <a href={href} className="text-cyan-300 hover:underline">{value}</a>
            ) : (
                <span className="text-white">{value}</span>
            )}
        </li>
    );

    return (
        <div className="contact p-4 sm:p-8 bg-black/20 backdrop-blur-lg border border-slate-700 rounded-xl shadow-lg">
            <h2 className="text-4xl font-bold text-center mb-8 text-cyan-300">Get in Touch</h2>
            <ul className="space-y-4 max-w-md mx-auto">
                <ContactItem title="Phone" value="123-456-7890" href="tel:123-456-7890" />
                <ContactItem title="Email" value="info@yourdomain.com" href="mailto:info@yourdomain.com" />
                <ContactItem title="Address" value="123 Main St, Anytown, USA" />
                <ContactItem title="Hours" value="Mon - Fri, 9am - 5pm" />
            </ul>
        </div>
    );
}

export default Contact;
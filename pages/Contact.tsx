
import React from 'react';
import { Mail, Phone, MapPin, MessageSquare, Clock } from 'lucide-react';
import { WHATSAPP_NUMBER, BRAND_EMAIL } from '../constants';

const Contact: React.FC = () => {
  return (
    <div className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-display font-extrabold text-brand-dark mb-6">Let's Connect</h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Ready to start your next project? We're available for consulting and new commissions.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Info Cards */}
          <div className="lg:col-span-1 space-y-6">
            <ContactCard 
              icon={<MessageSquare className="text-brand-cyan" />}
              title="Chat with us"
              detail="Fastest response time via WhatsApp"
              action={WHATSAPP_NUMBER}
              href={`https://wa.me/${WHATSAPP_NUMBER}`}
            />
            <ContactCard 
              icon={<Mail className="text-brand-cyan" />}
              title="Email us"
              detail="For detailed inquiries and quotes"
              action={BRAND_EMAIL}
              href={`mailto:${BRAND_EMAIL}`}
            />
            <ContactCard 
              icon={<Clock className="text-brand-cyan" />}
              title="Work hours"
              detail="Mon - Sat: 9:00 AM - 6:00 PM"
              action="Available for urgent requests"
            />
            <ContactCard 
              icon={<MapPin className="text-brand-cyan" />}
              title="Our Studio"
              detail="Kigali, Rwanda"
              action="Visit by appointment"
            />
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2">
            <form className="bg-white p-8 md:p-12 rounded-3xl shadow-xl border border-gray-100 grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-sm font-bold text-gray-700">Full Name</label>
                <input type="text" className="w-full px-5 py-4 bg-gray-50 rounded-xl outline-none focus:ring-2 focus:ring-brand-cyan transition-all" placeholder="John Doe" />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-bold text-gray-700">Email Address</label>
                <input type="email" className="w-full px-5 py-4 bg-gray-50 rounded-xl outline-none focus:ring-2 focus:ring-brand-cyan transition-all" placeholder="john@example.com" />
              </div>
              <div className="md:col-span-2 space-y-2">
                <label className="text-sm font-bold text-gray-700">Subject</label>
                <input type="text" className="w-full px-5 py-4 bg-gray-50 rounded-xl outline-none focus:ring-2 focus:ring-brand-cyan transition-all" placeholder="Project Inquiry" />
              </div>
              <div className="md:col-span-2 space-y-2">
                <label className="text-sm font-bold text-gray-700">Message</label>
                <textarea rows={6} className="w-full px-5 py-4 bg-gray-50 rounded-xl outline-none focus:ring-2 focus:ring-brand-cyan transition-all" placeholder="How can we help you?"></textarea>
              </div>
              <div className="md:col-span-2">
                <button type="submit" className="w-full bg-brand-dark text-white py-5 rounded-2xl font-bold text-lg hover:bg-brand-cyan transition-all shadow-lg">
                  Send Message
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

const ContactCard: React.FC<{ icon: React.ReactNode; title: string; detail: string; action: string; href?: string }> = ({ icon, title, detail, action, href }) => (
  <div className="bg-white p-6 rounded-2xl border border-gray-100 flex items-start space-x-4">
    <div className="w-12 h-12 bg-brand-cyan/10 rounded-xl flex items-center justify-center flex-shrink-0">
      {icon}
    </div>
    <div>
      <h3 className="font-bold text-brand-dark">{title}</h3>
      <p className="text-sm text-gray-500 mb-2">{detail}</p>
      {href ? (
        <a href={href} className="text-brand-cyan font-bold hover:underline break-all">{action}</a>
      ) : (
        <span className="text-brand-dark font-bold">{action}</span>
      )}
    </div>
  </div>
);

export default Contact;


import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, ChevronRight, CheckCircle2 } from 'lucide-react';
import { SERVICES, PORTFOLIO, getIcon } from '../constants';

const Home: React.FC<{ isPrintingEnabled: boolean }> = ({ isPrintingEnabled }) => {
  return (
    <div className="overflow-hidden">
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center pt-20">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-br from-brand-dark/5 to-transparent"></div>
          <div className="absolute top-0 right-0 w-1/2 h-full bg-brand-cyan/5 blur-3xl rounded-full -translate-y-1/2 translate-x-1/2"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="inline-flex items-center space-x-2 px-4 py-2 bg-brand-cyan/10 rounded-full text-brand-cyan font-bold text-sm tracking-widest uppercase">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-cyan opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-brand-cyan"></span>
                </span>
                <span>Next-Gen 3D Solutions</span>
              </div>
              <h1 className="text-6xl md:text-8xl font-display font-extrabold text-brand-dark tracking-tighter leading-[0.9]">
                Visualizing <br />
                <span className="gradient-text">the Future.</span>
              </h1>
              <p className="text-xl text-gray-600 max-w-lg leading-relaxed">
                Rwooga transforms complex ideas into stunning 3D visualizations, animations, and precision-engineered 3D printed products.
              </p>
              <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4 pt-4">
                <Link to="/portfolio" className="bg-brand-dark text-white px-8 py-4 rounded-xl font-bold flex items-center justify-center hover:shadow-2xl transition-all hover:-translate-y-1 group">
                  View Portfolio
                  <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
                </Link>
                <Link to="/shop" className="bg-white border-2 border-gray-100 text-brand-dark px-8 py-4 rounded-xl font-bold flex items-center justify-center hover:border-brand-cyan transition-all">
                  Shop Products
                </Link>
              </div>
              
              <div className="flex items-center space-x-8 pt-8 border-t border-gray-100">
                <Stat label="Completed Projects" value="250+" />
                <Stat label="Happy Clients" value="120+" />
                <Stat label="Years Exp." value="8+" />
              </div>
            </div>

            <div className="relative">
              <div className="relative rounded-3xl overflow-hidden shadow-2xl">
                <img 
                  src="https://picsum.photos/id/160/800/1000" 
                  alt="3D Visualization Render" 
                  className="w-full h-full object-cover aspect-[4/5]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-brand-dark/60 via-transparent to-transparent"></div>
                <div className="absolute bottom-8 left-8 right-8 glass p-6 rounded-2xl">
                  <p className="text-white font-bold text-lg mb-1">Modern Office Complex</p>
                  <p className="text-white/80 text-sm">3D Visualization & Interior Design</p>
                </div>
              </div>
              
              {/* Floating Badge */}
              <div className="absolute -top-6 -right-6 bg-white p-4 rounded-2xl shadow-xl flex items-center space-x-3 border border-gray-50">
                <div className="w-12 h-12 bg-orange-100 rounded-xl flex items-center justify-center text-orange-500">
                  <CheckCircle2 size={24} />
                </div>
                <div>
                  <p className="text-sm font-bold text-brand-dark">Premium Quality</p>
                  <p className="text-xs text-gray-500">Top-tier 3D Prints</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-sm font-bold text-brand-cyan uppercase tracking-[0.2em] mb-4">Our Services</h2>
            <h3 className="text-4xl md:text-5xl font-display font-extrabold text-brand-dark">What We Excel At</h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {SERVICES.map((service) => (
              <div key={service.id} className="bg-white p-8 rounded-3xl hover:shadow-2xl transition-all group hover:-translate-y-2 border border-gray-100">
                <div className="w-14 h-14 bg-brand-cyan/10 rounded-2xl flex items-center justify-center text-brand-cyan mb-6 group-hover:bg-brand-cyan group-hover:text-white transition-colors">
                  {getIcon(service.icon)}
                </div>
                <h4 className="text-xl font-bold text-brand-dark mb-4">{service.title}</h4>
                <p className="text-gray-600 mb-6 line-clamp-3">{service.description}</p>
                <Link to="/services" className="inline-flex items-center font-bold text-brand-dark hover:text-brand-cyan transition-colors">
                  Learn More <ChevronRight size={18} className="ml-1" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio Highlight */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-end mb-12">
            <div className="max-w-xl">
              <h3 className="text-4xl font-display font-extrabold text-brand-dark mb-4">Mastering the Art of Digital & Physical Realism</h3>
              <p className="text-gray-600">Take a look at some of our recent breakthroughs in architecture, product design, and 3D printing.</p>
            </div>
            <Link to="/portfolio" className="mt-6 md:mt-0 font-bold text-brand-dark flex items-center hover:text-brand-cyan transition-colors">
              Explore Full Portfolio <ArrowRight size={20} className="ml-2" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {PORTFOLIO.slice(0, 3).map((item) => (
              <div key={item.id} className="relative group overflow-hidden rounded-3xl aspect-square">
                <img src={item.image} alt={item.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                <div className="absolute inset-0 bg-brand-dark/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <div className="text-center p-6 transform translate-y-4 group-hover:translate-y-0 transition-transform">
                    <p className="text-white font-bold text-2xl mb-2">{item.title}</p>
                    <p className="text-white/80 uppercase text-xs tracking-widest">{item.category}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-brand-dark relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 pointer-events-none">
          <div className="absolute top-0 left-0 w-96 h-96 bg-brand-cyan rounded-full blur-[120px] -translate-x-1/2 -translate-y-1/2"></div>
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-brand-orange rounded-full blur-[120px] translate-x-1/2 translate-y-1/2"></div>
        </div>

        <div className="max-w-4xl mx-auto px-4 text-center relative z-10">
          <h2 className="text-4xl md:text-5xl font-display font-extrabold text-white mb-8">Ready to bring your project to life?</h2>
          <p className="text-xl text-emerald-100/70 mb-12">Whether it's a 3D visualization for a client or a custom 3D printed part, we've got you covered.</p>
          <div className="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-6">
            <Link to="/contact" className="w-full sm:w-auto bg-brand-cyan text-white px-10 py-5 rounded-2xl font-bold hover:bg-white hover:text-brand-dark transition-all shadow-xl shadow-cyan-900/20">
              Start a Conversation
            </Link>
            {isPrintingEnabled && (
              <Link to="/custom-request" className="w-full sm:w-auto bg-transparent border-2 border-white/20 text-white px-10 py-5 rounded-2xl font-bold hover:bg-white/10 transition-all">
                Request Custom Design
              </Link>
            )}
          </div>
        </div>
      </section>
    </div>
  );
};

const Stat: React.FC<{ label: string; value: string }> = ({ label, value }) => (
  <div>
    <p className="text-3xl font-display font-extrabold text-brand-dark">{value}</p>
    <p className="text-sm text-gray-500 uppercase tracking-tighter">{label}</p>
  </div>
);

export default Home;

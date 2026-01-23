
import React from 'react';
import { ArrowRight, Box, Video, Palette, Printer } from 'lucide-react';
import { Link } from 'react-router-dom';

const Services: React.FC = () => {
  return (
    <div className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mb-20">
          <h1 className="text-4xl md:text-6xl font-display font-extrabold text-brand-dark mb-8">Our Core <span className="text-brand-cyan">Expertise.</span></h1>
          <p className="text-xl text-gray-600 leading-relaxed">
            From digital concepts to physical reality, we provide a full spectrum of 3D services tailored for modern brands, architects, and innovators.
          </p>
        </div>

        <div className="space-y-24">
          <ServiceDetail 
            id="viz"
            icon={<Box size={40} />}
            title="3D Visualization & Renders"
            description="We create stunning, photorealistic visuals that help architects and real estate developers sell their ideas before construction begins. Our product renders allow marketing agencies to showcase products with unmatched clarity."
            features={['Architectural Renders', 'Interior Design Visuals', 'Product Photography Replacement', '360° VR Tours']}
            image="https://picsum.photos/id/190/800/600"
            reverse={false}
          />

          <ServiceDetail 
            id="anim"
            icon={<Video size={40} />}
            title="Animation & Promo Movies"
            description="Movement brings emotion. We produce high-quality animated advertisements and promotional movies that capture attention and communicate complex features simply."
            features={['Product Explainer Videos', 'Architectural Walkthroughs', 'TV Advertisements', 'Logo Animations']}
            image="https://picsum.photos/id/201/800/600"
            reverse={true}
          />

          <ServiceDetail 
            id="custom"
            icon={<Palette size={40} />}
            title="Custom 3D Design"
            description="Our design team specializes in turning abstract problems into functional 3D models. Whether it's a replacement part for machinery or a custom art piece, we design with manufacturing in mind."
            features={['Mechanical Part Design', 'Prototyping', 'Artistic Sculpting', 'CAD Optimization']}
            image="https://picsum.photos/id/202/800/600"
            reverse={false}
          />

          <ServiceDetail 
            id="print"
            icon={<Printer size={40} />}
            title="Professional 3D Printing"
            description="Equipped with state-of-the-art 3D printers, we manufacture ready-made products and custom commissions using a variety of materials including PLA, PETG, and Resin."
            features={['Rapid Prototyping', 'Batch Production', 'Custom Functional Parts', 'Architectural Models']}
            image="https://picsum.photos/id/203/800/600"
            reverse={true}
          />
        </div>

        {/* Bottom CTA */}
        <div className="mt-32 bg-brand-dark rounded-[3rem] p-12 md:p-20 text-center relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-brand-cyan/20 blur-3xl rounded-full"></div>
          <h2 className="text-3xl md:text-5xl font-display font-bold text-white mb-8">Not sure what you need?</h2>
          <p className="text-emerald-100/70 text-lg mb-12 max-w-2xl mx-auto">
            Schedule a free consultation with our 3D experts to discuss your project requirements and find the best solution.
          </p>
          <Link to="/contact" className="inline-flex items-center bg-brand-cyan text-white px-10 py-5 rounded-2xl font-bold hover:bg-white hover:text-brand-dark transition-all">
            Contact Specialist <ArrowRight className="ml-2" />
          </Link>
        </div>
      </div>
    </div>
  );
};

const ServiceDetail: React.FC<{ 
  id: string; 
  icon: React.ReactNode; 
  title: string; 
  description: string; 
  features: string[]; 
  image: string;
  reverse: boolean;
}> = ({ icon, title, description, features, image, reverse }) => (
  <div className={`flex flex-col lg:flex-row gap-16 items-center ${reverse ? 'lg:flex-row-reverse' : ''}`}>
    <div className="lg:w-1/2 space-y-8">
      <div className="text-brand-cyan">{icon}</div>
      <h3 className="text-3xl md:text-4xl font-display font-bold text-brand-dark">{title}</h3>
      <p className="text-lg text-gray-600 leading-relaxed">{description}</p>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {features.map(f => (
          <div key={f} className="flex items-center space-x-3 text-gray-700 font-medium">
            <div className="w-2 h-2 bg-brand-cyan rounded-full" />
            <span>{f}</span>
          </div>
        ))}
      </div>
      <div className="pt-4">
        <Link to="/contact" className="inline-flex items-center font-bold text-brand-dark hover:text-brand-cyan transition-colors group">
          Request Quote <ArrowRight size={20} className="ml-2 group-hover:translate-x-1 transition-transform" />
        </Link>
      </div>
    </div>
    <div className="lg:w-1/2 relative group">
      <div className="absolute inset-0 bg-brand-cyan/20 rounded-3xl -rotate-2 group-hover:rotate-0 transition-transform"></div>
      <img src={image} alt={title} className="relative rounded-3xl shadow-xl w-full h-full object-cover aspect-video" />
    </div>
  </div>
);

export default Services;

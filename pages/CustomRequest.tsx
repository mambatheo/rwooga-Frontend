
import React, { useState } from 'react';
import { Upload, Send, AlertTriangle, CheckCircle2 } from 'lucide-react';
import { WHATSAPP_NUMBER } from '../constants';

const CustomRequest: React.FC<{ isEnabled: boolean }> = ({ isEnabled }) => {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    projectType: 'mechanical',
    description: '',
    deadline: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate submission
    setTimeout(() => {
      setIsSubmitted(true);
      // Construct WhatsApp message
      const message = encodeURIComponent(
        `Hi Rwooga! I have a custom project request.\n\n` +
        `Name: ${formData.name}\n` +
        `Type: ${formData.projectType}\n` +
        `Description: ${formData.description}\n` +
        `Deadline: ${formData.deadline}`
      );
      window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${message}`, '_blank');
    }, 1000);
  };

  if (!isEnabled) {
    return (
      <div className="min-h-[80vh] flex items-center justify-center px-4">
        <div className="max-w-md w-full text-center p-12 glass rounded-3xl">
          <AlertTriangle size={64} className="mx-auto text-orange-500 mb-6" />
          <h1 className="text-3xl font-display font-bold text-brand-dark mb-4">Service Paused</h1>
          <p className="text-gray-600 mb-8">
            We are currently not accepting new custom 3D printing requests. Please check back later or browse our shop for ready-made products.
          </p>
          <a href="/" className="inline-block bg-brand-dark text-white px-8 py-3 rounded-xl font-bold">
            Back to Home
          </a>
        </div>
      </div>
    );
  }

  return (
    <div className="py-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-display font-extrabold text-brand-dark mb-6">Custom Design Request</h1>
          <p className="text-xl text-gray-600">
            Have a unique idea or a complex problem? Upload your sketches or describe your project, and we'll handle the design and printing.
          </p>
        </div>

        {isSubmitted ? (
          <div className="bg-white p-12 rounded-3xl shadow-xl text-center border border-gray-100 animate-in zoom-in duration-500">
            <div className="w-20 h-20 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-8">
              <CheckCircle2 size={40} />
            </div>
            <h2 className="text-3xl font-display font-bold text-brand-dark mb-4">Request Sent!</h2>
            <p className="text-gray-600 mb-8">
              Redirecting you to WhatsApp to finalize details and file sharing...
            </p>
            <button 
              onClick={() => setIsSubmitted(false)}
              className="text-brand-cyan font-bold hover:underline"
            >
              Send another request
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="bg-white p-8 md:p-12 rounded-3xl shadow-xl border border-gray-100">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
              <div className="space-y-2">
                <label className="block text-sm font-bold text-gray-700 uppercase tracking-wider">Full Name</label>
                <input 
                  required
                  type="text" 
                  className="w-full px-5 py-4 bg-gray-50 border-transparent rounded-xl focus:bg-white focus:ring-2 focus:ring-brand-cyan transition-all outline-none"
                  placeholder="John Doe"
                  value={formData.name}
                  onChange={(e) => setFormData({...formData, name: e.target.value})}
                />
              </div>
              <div className="space-y-2">
                <label className="block text-sm font-bold text-gray-700 uppercase tracking-wider">Email Address</label>
                <input 
                  required
                  type="email" 
                  className="w-full px-5 py-4 bg-gray-50 border-transparent rounded-xl focus:bg-white focus:ring-2 focus:ring-brand-cyan transition-all outline-none"
                  placeholder="john@example.com"
                  value={formData.email}
                  onChange={(e) => setFormData({...formData, email: e.target.value})}
                />
              </div>

              <div>
                <label className="block text-sm font-bold text-gray-700 uppercase tracking-wider">Phone Number</label>
                <input
                  required
                  type="tel"
                  className="w-full px-5 py-4 bg-gray-50 border-transparent rounded-xl focus:bg-white focus:ring-2 focus:ring-brand-cyan transition-all outline-none"
                  placeholder="07xx xxx xxx"
                  value={formData.phone}
                  onChange={(e) => setFormData({...formData, phone: e.target.value})}
                />
              </div>

            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
              <div className="space-y-2">
                <label className="block text-sm font-bold text-gray-700 uppercase tracking-wider">Product Category</label>
                <select 
                  className="w-full px-5 py-4 bg-gray-50 border-transparent rounded-xl focus:bg-white focus:ring-2 focus:ring-brand-cyan transition-all outline-none appearance-none"
                  value={formData.projectType}
                  onChange={(e) => setFormData({...formData, projectType: e.target.value})}
                >
                 <option value="">Select a type</option>
                  <option value="3d-visualization">3D Visualization</option>
                  <option value="animation">Animation</option>
                  <option value="custom-design">Custom Design</option>
                  <option value="3d-printing">3D Printing</option>
                  <option value="other">Other</option>
                </select>
              </div>
              <div className="space-y-2">
                <label className="block text-sm font-bold text-gray-700 uppercase tracking-wider">Desired Deadline</label>
                <input 
                  type="date" 
                  className="w-full px-5 py-4 bg-gray-50 border-transparent rounded-xl focus:bg-white focus:ring-2 focus:ring-brand-cyan transition-all outline-none"
                  value={formData.deadline}
                  onChange={(e) => setFormData({...formData, deadline: e.target.value})}
                />
              </div>
            </div>

            <div className="space-y-2 mb-8">
              <label className="block text-sm font-bold text-gray-700 uppercase tracking-wider">Project Description</label>
              <textarea 
                required
                rows={5}
                className="w-full px-5 py-4 bg-gray-50 border-transparent rounded-xl focus:bg-white focus:ring-2 focus:ring-brand-cyan transition-all outline-none"
                placeholder="Describe what you need, dimensions, materials, etc."
                value={formData.description}
                onChange={(e) => setFormData({...formData, description: e.target.value})}
              ></textarea>
            </div>

            <div className="mb-10 p-8 border-2 border-dashed border-gray-200 rounded-2xl bg-gray-50 text-center cursor-pointer hover:border-brand-cyan hover:bg-white transition-all">
              <div className="flex flex-col items-center">
                <Upload className="text-gray-400 mb-4" size={40} />
                <p className="text-lg font-bold text-gray-700">Click to upload or drag files here</p>
                <p className="text-gray-500 text-sm mt-1">Images, Sketches, or CAD files (STL, OBJ)</p>
                <input type="file" className="hidden" multiple />
              </div>
            </div>

            <button 
              type="submit"
              className="w-full bg-brand-dark text-white py-5 rounded-2xl font-bold text-xl flex items-center justify-center space-x-3 hover:bg-brand-cyan transition-all shadow-xl shadow-cyan-900/10"
            >
              <Send size={24} />
              <span>Submit Request</span>
            </button>
          </form>
        )}
      </div>
    </div>
  );
};

export default CustomRequest;

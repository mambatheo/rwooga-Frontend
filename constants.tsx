
import React from 'react';
import { 
  Box, 
  Video, 
  Printer, 
  Layout, 
  Layers, 
  Palette, 
  Cpu 
} from 'lucide-react';
import { Service, PortfolioItem, Product } from './types';

export const WHATSAPP_NUMBER = "+250784269593";
export const BRAND_EMAIL = "phedokat@gmail.com";

export const SERVICES: Service[] = [
  {
    id: 'viz',
    title: '3D Visualization',
    description: 'Hyper-realistic architectural and product renderings that bring your blueprints to life.',
    icon: 'Layout',
    image: 'https://picsum.photos/id/1/800/600'
  },
  {
    id: 'anim',
    title: 'Animated Movies & Ads',
    description: 'Engaging promotional content and storytelling through high-end 3D animation.',
    icon: 'Video',
    image: 'https://picsum.photos/id/2/800/600'
  },
  {
    id: 'custom',
    title: 'Custom 3D Design',
    description: 'Bespoke design services for unique mechanical parts, art, or prototypes.',
    icon: 'Palette',
    image: 'https://picsum.photos/id/3/800/600'
  },
  {
    id: 'print',
    title: '3D Printing',
    description: 'Precision manufacturing of custom designs and ready-made products in various materials.',
    icon: 'Printer',
    image: 'https://picsum.photos/id/4/800/600'
  }
];

export const PORTFOLIO: PortfolioItem[] = [
  { id: '1', title: 'Modern Villa Viz', category: 'visualization', image: 'https://picsum.photos/id/10/800/600', description: 'Architectural visualization for a luxury villa.' },
  { id: '2', title: 'Smartphone Pro Ad', category: 'animation', image: 'https://picsum.photos/id/11/800/600', description: 'Product promotional animation.' },
  { id: '3', title: 'Custom Drone Frame', category: 'print', image: 'https://picsum.photos/id/12/800/600', description: 'Lightweight 3D printed drone structure.' },
  { id: '4', title: 'Interior Design View', category: 'visualization', image: 'https://picsum.photos/id/13/800/600', description: 'Realistic lounge interior render.' },
  { id: '5', title: 'Action Figure Custom', category: 'product', image: 'https://picsum.photos/id/14/800/600', description: 'Highly detailed custom character design.' },
  { id: '6', title: 'Logo Animation', category: 'animation', image: 'https://picsum.photos/id/15/800/600', description: 'Dynamic 3D logo reveal.' },
];

export const PRODUCTS: Product[] = [
  {
    id: 'p1',
    name: 'Geometric Planter',
    price: 15000,
    currency: 'RWF',
    image: 'https://picsum.photos/id/20/400/400',
    category: 'Home Decor',
    variants: { size: ['Small', 'Medium', 'Large'], material: ['PLA', 'PETG'], color: ['Cyan', 'White', 'Black'] }
  },
  {
    id: 'p2',
    name: 'Minimalist Phone Stand',
    price: 8000,
    currency: 'RWF',
    image: 'https://picsum.photos/id/21/400/400',
    category: 'Accessories',
    variants: { size: ['Standard'], material: ['PLA'], color: ['Silver', 'Gold', 'Black'] }
  },
  {
    id: 'p3',
    name: 'Articulated Dragon',
    price: 25000,
    currency: 'RWF',
    image: 'https://picsum.photos/id/22/400/400',
    category: 'Toys',
    variants: { size: ['Medium'], material: ['Silk PLA'], color: ['Rainbow', 'Blue-Green'] }
  }
];

export const getIcon = (name: string) => {
  switch (name) {
    case 'Layout': return <Layout size={24} />;
    case 'Video': return <Video size={24} />;
    case 'Palette': return <Palette size={24} />;
    case 'Printer': return <Printer size={24} />;
    case 'Layers': return <Layers size={24} />;
    case 'Cpu': return <Cpu size={24} />;
    default: return <Box size={24} />;
  }
};

import React from 'react';
import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin, Facebook, Twitter, Instagram, Linkedin, BookOpen, GraduationCap } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-white pt-12 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
          {/* Company Info */}
          <div className="md:col-span-2">
            <div className="flex items-center mb-4">
              <BookOpen className="h-8 w-8 text-blue-400" />
              <span className="ml-2 text-xl font-bold">EduMind</span>
            </div>
            <p className="text-gray-400 mb-4">
              Empowering teachers, parents, and students through innovative educational resources.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors duration-200">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors duration-200">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors duration-200">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors duration-200">
                <Linkedin size={20} />
              </a>
            </div>
          </div>
          
          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link to="/" className="text-gray-400 hover:text-blue-400 transition-colors duration-200">Home</Link></li>
              <li><Link to="/about" className="text-gray-400 hover:text-blue-400 transition-colors duration-200">About Us</Link></li>
              <li><Link to="/blog" className="text-gray-400 hover:text-blue-400 transition-colors duration-200">Blog</Link></li>
              <li><Link to="/apps" className="text-gray-400 hover:text-blue-400 transition-colors duration-200">Apps</Link></li>
              <li><Link to="/games" className="text-gray-400 hover:text-blue-400 transition-colors duration-200">Games</Link></li>
              <li><Link to="/policy" className="text-gray-400 hover:text-blue-400 transition-colors duration-200">Privacy Policy</Link></li>
            </ul>
          </div>
          
          {/* Educator Resources */}
          <div>
            <h3 className="text-lg font-semibold mb-4">
              <div className="flex items-center">
                <GraduationCap className="h-5 w-5 mr-2" />
                Educator Resources
              </div>
            </h3>
            <ul className="space-y-2">
              <li><Link to="/educators/dashboard" className="text-gray-400 hover:text-blue-400 transition-colors duration-200">Dashboard</Link></li>
              <li><Link to="/educators/lab" className="text-gray-400 hover:text-blue-400 transition-colors duration-200">Immersive Lab</Link></li>
              <li><a href="#" className="text-gray-400 hover:text-blue-400 transition-colors duration-200">Teacher Training</a></li>
              <li><a href="#" className="text-gray-400 hover:text-blue-400 transition-colors duration-200">Lesson Plans</a></li>
              <li><a href="#" className="text-gray-400 hover:text-blue-400 transition-colors duration-200">Support Center</a></li>
            </ul>
          </div>
          
          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <MapPin className="h-5 w-5 text-blue-400 mr-2 mt-0.5" />
                <span className="text-gray-400">123 Education Lane, Knowledge City, 12345</span>
              </li>
              <li className="flex items-center">
                <Phone className="h-5 w-5 text-blue-400 mr-2" />
                <span className="text-gray-400">(123) 456-7890</span>
              </li>
              <li className="flex items-center">
                <Mail className="h-5 w-5 text-blue-400 mr-2" />
                <span className="text-gray-400">info@edumind.com</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400 text-sm">
          <p>&copy; {new Date().getFullYear()} EduMind. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
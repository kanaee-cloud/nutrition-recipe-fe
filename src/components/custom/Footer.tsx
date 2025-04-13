import { Instagram, Twitter, Facebook, Mail } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-[#051853] text-white pt-12 pb-6">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div className="col-span-1 md:col-span-1">
            <h3 className="text-xl font-bold mb-4">The Recipe</h3>
            <p className="text-sm opacity-80 mb-4">
              Your Assistant Partner in the Kitchen, helping you create delicious meals with ease.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-blue-400 transition-colors">
                <Instagram size={20} />
              </a>
              <a href="#" className="hover:text-blue-400 transition-colors">
                <Twitter size={20} />
              </a>
              <a href="#" className="hover:text-blue-400 transition-colors">
                <Facebook size={20} />
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="text-lg font-medium mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-sm opacity-80 hover:opacity-100">Home</a></li>
              <li><a href="#" className="text-sm opacity-80 hover:opacity-100">About</a></li>
              <li><a href="#" className="text-sm opacity-80 hover:opacity-100">Features</a></li>
              <li><a href="#" className="text-sm opacity-80 hover:opacity-100">Pricing</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-medium mb-4">Resources</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-sm opacity-80 hover:opacity-100">Blog</a></li>
              <li><a href="#" className="text-sm opacity-80 hover:opacity-100">Recipes</a></li>
              <li><a href="#" className="text-sm opacity-80 hover:opacity-100">Cooking Tips</a></li>
              <li><a href="#" className="text-sm opacity-80 hover:opacity-100">FAQ</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-medium mb-4">Contact Us</h4>
            <div className="flex items-center text-sm opacity-80 mb-2">
              <Mail size={16} className="mr-2" />
              <span>support@therecipe.com</span>
            </div>
            <p className="text-sm opacity-80">
              123 Culinary Street<br />
              Foodie City, FC 54321
            </p>
          </div>
        </div>
        
        <div className="border-t border-white/20 pt-6 mt-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-sm opacity-70 mb-4 md:mb-0">
              © 2025 The Recipe. All rights reserved.
            </p>
            <div className="flex space-x-6">
              <a href="#" className="text-xs opacity-70 hover:opacity-100">Privacy Policy</a>
              <a href="#" className="text-xs opacity-70 hover:opacity-100">Terms of Service</a>
              <a href="#" className="text-xs opacity-70 hover:opacity-100">Cookie Policy</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
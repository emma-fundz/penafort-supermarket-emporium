
import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin, Facebook, Instagram, Twitter } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* About */}
          <div>
            <div className="flex items-center mb-4">
              <img 
                src="/lovable-uploads/f137e1ee-3a31-44c7-9a41-5c0ac99fbb28.png" 
                alt="Penafort Supermarket Logo" 
                className="h-12 w-auto mr-2"
              />
              <h3 className="text-xl font-bold">Penafort</h3>
            </div>
            <p className="text-gray-400 mb-4">
              Penafort Supermarket offers a variety of groceries, household items, and fast-moving consumer goods with a focus on quality, convenience, and exceptional customer service.
            </p>
            <div className="flex space-x-4">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-green-400">
                <Facebook size={20} />
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-green-400">
                <Instagram size={20} />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-green-400">
                <Twitter size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4 border-b border-gray-700 pb-2">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-gray-400 hover:text-green-400">Home</Link>
              </li>
              <li>
                <Link to="/shop" className="text-gray-400 hover:text-green-400">Shop</Link>
              </li>
              <li>
                <Link to="/promotions" className="text-gray-400 hover:text-green-400">Promotions</Link>
              </li>
              <li>
                <Link to="/about" className="text-gray-400 hover:text-green-400">About Us</Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-400 hover:text-green-400">Contact</Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-lg font-semibold mb-4 border-b border-gray-700 pb-2">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <MapPin size={20} className="text-green-400 mr-2 mt-1 flex-shrink-0" />
                <span className="text-gray-400">Iba, Ojo, Lagos, Nigeria</span>
              </li>
              <li className="flex items-center">
                <Phone size={20} className="text-green-400 mr-2 flex-shrink-0" />
                <span className="text-gray-400">+234 123 456 7890</span>
              </li>
              <li className="flex items-center">
                <Mail size={20} className="text-green-400 mr-2 flex-shrink-0" />
                <span className="text-gray-400">info@penafortsupermarket.com</span>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="text-lg font-semibold mb-4 border-b border-gray-700 pb-2">Newsletter</h3>
            <p className="text-gray-400 mb-4">Subscribe to our newsletter for updates on promotions and new products.</p>
            <form className="space-y-2">
              <input 
                type="email" 
                placeholder="Your Email Address" 
                className="w-full px-4 py-2 rounded-md bg-gray-800 border border-gray-700 text-white focus:outline-none focus:ring-1 focus:ring-green-400"
                required
              />
              <button 
                type="submit" 
                className="w-full px-4 py-2 bg-green-600 hover:bg-green-700 text-white rounded-md transition duration-300"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 mt-8 pt-6 text-center">
          <p className="text-gray-500">
            &copy; {currentYear} Penafort Supermarket - A subsidiary of Penafort Energy Nigeria Limited. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;


import { useState } from 'react';
import { Link } from 'react-router-dom';
import { ShoppingCart, Menu, X, User, Search } from 'lucide-react';
import { Button } from './ui/button';
import CartDrawer from './CartDrawer';
import { useCart } from '@/context/CartContext';
import { motion } from 'framer-motion';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [isCartOpen, setIsCartOpen] = useState(false);
  const { getCartCount } = useCart();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const toggleCart = () => {
    setIsCartOpen(!isCartOpen);
  };

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Searching for:', searchQuery);
    // Implement search functionality
  };

  return (
    <>
      <motion.nav 
        className="bg-white shadow-md sticky top-0 z-50"
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="container mx-auto px-4 py-3">
          <div className="flex justify-between items-center">
            {/* Logo */}
            <Link to="/" className="flex items-center space-x-2">
              <img 
                src="/lovable-uploads/f137e1ee-3a31-44c7-9a41-5c0ac99fbb28.png" 
                alt="Penafort Supermarket Logo" 
                className="h-12 w-auto"
              />
              <span className="text-xl font-bold text-green-600 hidden md:inline-block">Penafort</span>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              <Link to="/" className="text-gray-700 hover:text-green-600 font-medium">Home</Link>
              <Link to="/shop" className="text-gray-700 hover:text-green-600 font-medium">Shop</Link>
              <Link to="/promotions" className="text-gray-700 hover:text-green-600 font-medium">Promotions</Link>
              <Link to="/about" className="text-gray-700 hover:text-green-600 font-medium">About Us</Link>
              <Link to="/contact" className="text-gray-700 hover:text-green-600 font-medium">Contact</Link>
            </div>

            {/* Search, Cart & User - Desktop */}
            <div className="hidden md:flex items-center space-x-4">
              <div className="relative">
                <form onSubmit={handleSearch} className="flex items-center">
                  <input
                    type="text"
                    placeholder="Search products..."
                    className="py-1 px-3 border border-gray-300 rounded-l-md focus:outline-none focus:ring-1 focus:ring-green-500"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                  />
                  <Button 
                    type="submit" 
                    className="bg-green-600 hover:bg-green-700 text-white p-2 rounded-r-md"
                  >
                    <Search size={18} />
                  </Button>
                </form>
              </div>
              <Link to="/account" className="text-gray-700 hover:text-green-600">
                <User size={24} />
              </Link>
              <button 
                onClick={toggleCart}
                className="text-gray-700 hover:text-green-600 relative"
              >
                <ShoppingCart size={24} />
                {getCartCount() > 0 && (
                  <motion.span 
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    className="absolute -top-2 -right-2 bg-green-600 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center"
                  >
                    {getCartCount()}
                  </motion.span>
                )}
              </button>
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden flex items-center space-x-4">
              <button 
                onClick={toggleCart}
                className="text-gray-700 hover:text-green-600 relative"
              >
                <ShoppingCart size={24} />
                {getCartCount() > 0 && (
                  <motion.span 
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    className="absolute -top-2 -right-2 bg-green-600 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center"
                  >
                    {getCartCount()}
                  </motion.span>
                )}
              </button>
              <button onClick={toggleMenu} className="text-gray-700">
                {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>

          {/* Mobile Menu */}
          {isMenuOpen && (
            <motion.div 
              className="md:hidden mt-4 pb-4"
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              transition={{ duration: 0.3 }}
            >
              <div className="flex flex-col space-y-4">
                <form onSubmit={handleSearch} className="flex items-center mb-2">
                  <input
                    type="text"
                    placeholder="Search products..."
                    className="flex-grow py-2 px-3 border border-gray-300 rounded-l-md focus:outline-none focus:ring-1 focus:ring-green-500"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                  />
                  <Button 
                    type="submit" 
                    className="bg-green-600 hover:bg-green-700 text-white p-2 rounded-r-md"
                  >
                    <Search size={18} />
                  </Button>
                </form>
                <Link 
                  to="/" 
                  className="text-gray-700 hover:text-green-600 font-medium py-2 border-b border-gray-100"
                  onClick={toggleMenu}
                >
                  Home
                </Link>
                <Link 
                  to="/shop" 
                  className="text-gray-700 hover:text-green-600 font-medium py-2 border-b border-gray-100"
                  onClick={toggleMenu}
                >
                  Shop
                </Link>
                <Link 
                  to="/promotions" 
                  className="text-gray-700 hover:text-green-600 font-medium py-2 border-b border-gray-100"
                  onClick={toggleMenu}
                >
                  Promotions
                </Link>
                <Link 
                  to="/about" 
                  className="text-gray-700 hover:text-green-600 font-medium py-2 border-b border-gray-100"
                  onClick={toggleMenu}
                >
                  About Us
                </Link>
                <Link 
                  to="/contact" 
                  className="text-gray-700 hover:text-green-600 font-medium py-2 border-b border-gray-100"
                  onClick={toggleMenu}
                >
                  Contact
                </Link>
                <Link 
                  to="/account" 
                  className="text-gray-700 hover:text-green-600 font-medium py-2 flex items-center"
                  onClick={toggleMenu}
                >
                  <User size={18} className="mr-2" /> My Account
                </Link>
              </div>
            </motion.div>
          )}
        </div>
      </motion.nav>

      {/* Cart Drawer */}
      <CartDrawer isOpen={isCartOpen} onClose={() => setIsCartOpen(false)} />
    </>
  );
};

export default Navbar;

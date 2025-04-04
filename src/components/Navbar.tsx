
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { ShoppingCart, Menu, X, User, Search } from 'lucide-react';
import { Button } from './ui/button';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Searching for:', searchQuery);
    // Implement search functionality
  };

  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="container mx-auto px-4 py-3">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <img 
              src="/public/lovable-uploads/eff43fc9-75e8-4f20-83f1-73e60244a7ad.png" 
              alt="Penafort Supermarket Logo" 
              className="h-12 w-auto"
            />
            <span className="text-xl font-bold text-penafort-dark hidden md:inline-block">Penafort</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link to="/" className="text-gray-700 hover:text-penafort font-medium">Home</Link>
            <Link to="/shop" className="text-gray-700 hover:text-penafort font-medium">Shop</Link>
            <Link to="/promotions" className="text-gray-700 hover:text-penafort font-medium">Promotions</Link>
            <Link to="/about" className="text-gray-700 hover:text-penafort font-medium">About Us</Link>
            <Link to="/contact" className="text-gray-700 hover:text-penafort font-medium">Contact</Link>
          </div>

          {/* Search, Cart & User - Desktop */}
          <div className="hidden md:flex items-center space-x-4">
            <div className="relative">
              <form onSubmit={handleSearch} className="flex items-center">
                <input
                  type="text"
                  placeholder="Search products..."
                  className="py-1 px-3 border border-gray-300 rounded-l-md focus:outline-none focus:ring-1 focus:ring-penafort"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
                <Button 
                  type="submit" 
                  className="bg-penafort hover:bg-penafort-dark text-white p-2 rounded-r-md"
                >
                  <Search size={18} />
                </Button>
              </form>
            </div>
            <Link to="/account" className="text-gray-700 hover:text-penafort">
              <User size={24} />
            </Link>
            <Link to="/cart" className="text-gray-700 hover:text-penafort relative">
              <ShoppingCart size={24} />
              <span className="absolute -top-2 -right-2 bg-penafort text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                0
              </span>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center space-x-4">
            <Link to="/cart" className="text-gray-700 hover:text-penafort relative">
              <ShoppingCart size={24} />
              <span className="absolute -top-2 -right-2 bg-penafort text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                0
              </span>
            </Link>
            <button onClick={toggleMenu} className="text-gray-700">
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 pb-4 animate-fade-in">
            <div className="flex flex-col space-y-4">
              <form onSubmit={handleSearch} className="flex items-center mb-2">
                <input
                  type="text"
                  placeholder="Search products..."
                  className="flex-grow py-2 px-3 border border-gray-300 rounded-l-md focus:outline-none focus:ring-1 focus:ring-penafort"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
                <Button 
                  type="submit" 
                  className="bg-penafort hover:bg-penafort-dark text-white p-2 rounded-r-md"
                >
                  <Search size={18} />
                </Button>
              </form>
              <Link 
                to="/" 
                className="text-gray-700 hover:text-penafort font-medium py-2 border-b border-gray-100"
                onClick={toggleMenu}
              >
                Home
              </Link>
              <Link 
                to="/shop" 
                className="text-gray-700 hover:text-penafort font-medium py-2 border-b border-gray-100"
                onClick={toggleMenu}
              >
                Shop
              </Link>
              <Link 
                to="/promotions" 
                className="text-gray-700 hover:text-penafort font-medium py-2 border-b border-gray-100"
                onClick={toggleMenu}
              >
                Promotions
              </Link>
              <Link 
                to="/about" 
                className="text-gray-700 hover:text-penafort font-medium py-2 border-b border-gray-100"
                onClick={toggleMenu}
              >
                About Us
              </Link>
              <Link 
                to="/contact" 
                className="text-gray-700 hover:text-penafort font-medium py-2 border-b border-gray-100"
                onClick={toggleMenu}
              >
                Contact
              </Link>
              <Link 
                to="/account" 
                className="text-gray-700 hover:text-penafort font-medium py-2 flex items-center"
                onClick={toggleMenu}
              >
                <User size={18} className="mr-2" /> My Account
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;


import { ArrowRight, ShoppingBag } from 'lucide-react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Button } from './ui/button';

const Hero = () => {
  return (
    <section className="relative bg-gradient-to-r from-gray-100 to-gray-200 overflow-hidden py-16 lg:py-24">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-full h-full bg-grid-pattern"></div>
      </div>
      
      {/* Green Shape */}
      <motion.div 
        className="absolute -bottom-10 -left-10 w-72 h-72 rounded-full bg-gradient-to-r from-penafort to-penafort-light opacity-70 filter blur-3xl"
        animate={{ 
          scale: [1, 1.1, 1],
          opacity: [0.7, 0.8, 0.7],
        }}
        transition={{ 
          duration: 8,
          repeat: Infinity,
          repeatType: "reverse"
        }}
      ></motion.div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col lg:flex-row items-center">
          <motion.div 
            className="lg:w-1/2 mb-8 lg:mb-0"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
          >
            <motion.h1 
              className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 text-gray-900"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
            >
              <motion.span 
                className="text-penafort"
                animate={{ 
                  color: ["#2e7d32", "#388e3c", "#2e7d32"],
                }}
                transition={{ 
                  duration: 4,
                  repeat: Infinity,
                  repeatType: "reverse"  
                }}
              >
                Fresh
              </motion.span> & Quality Groceries
            </motion.h1>
            <motion.p 
              className="text-lg text-gray-700 mb-8 max-w-xl"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.4 }}
            >
              Shop at Penafort Supermarket for the best selection of groceries, household essentials, and more at competitive prices. Serving the community of Iba, Ojo, Lagos.
            </motion.p>
            <motion.div 
              className="flex flex-col sm:flex-row space-y-3 sm:space-y-0 sm:space-x-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.6 }}
            >
              <Button 
                asChild 
                className="bg-penafort hover:bg-penafort-dark text-white px-6 py-2 rounded-md transition-colors duration-300 flex items-center justify-center"
              >
                <Link to="/shop">
                  <ShoppingBag size={20} className="mr-2" />
                  Shop Now
                </Link>
              </Button>
              <Button 
                variant="outline"
                asChild
                className="border border-penafort text-penafort hover:bg-penafort hover:text-white px-6 py-2 rounded-md transition-colors duration-300 flex items-center justify-center"
              >
                <Link to="/promotions">
                  Current Promotions
                  <ArrowRight size={16} className="ml-2" />
                </Link>
              </Button>
            </motion.div>
          </motion.div>
          
          <motion.div 
            className="lg:w-1/2 relative"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
          >
            <div className="relative mx-auto max-w-md lg:max-w-lg">
              <motion.div 
                className="bg-white rounded-2xl shadow-xl overflow-hidden"
                whileHover={{ scale: 1.03 }}
                transition={{ duration: 0.5 }}
              >
                <img 
                  src="https://images.unsplash.com/photo-1542838132-92c53300491e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80" 
                  alt="Penafort Supermarket Interior" 
                  className="w-full h-auto object-cover aspect-video"
                />
              </motion.div>
              
              {/* Floating Cards */}
              <motion.div 
                className="absolute -bottom-6 -left-6 bg-white p-4 rounded-lg shadow-lg"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.8 }}
                whileHover={{ 
                  y: -5,
                  boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)"
                }}
              >
                <div className="flex items-center">
                  <div className="bg-green-100 p-2 rounded-full mr-3">
                    <ShoppingBag size={24} className="text-penafort" />
                  </div>
                  <div>
                    <p className="font-bold text-gray-900">Free Delivery</p>
                    <p className="text-xs text-gray-600">On orders over ₦10,000</p>
                  </div>
                </div>
              </motion.div>
              
              <motion.div 
                className="absolute -top-6 -right-6 bg-white p-4 rounded-lg shadow-lg hidden sm:block"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 1 }}
                whileHover={{ 
                  y: -5,
                  boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)"
                }}
              >
                <div className="bg-red-100 p-2 rounded-full mb-2 flex items-center justify-center">
                  <span className="text-red-600 font-bold">25%</span>
                </div>
                <p className="text-xs font-medium text-gray-900 text-center">Weekend Special</p>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

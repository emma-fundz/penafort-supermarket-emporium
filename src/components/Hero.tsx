
import { ArrowRight, ShoppingBag } from 'lucide-react';
import { Link } from 'react-router-dom';

const Hero = () => {
  return (
    <section className="relative bg-gradient-to-r from-gray-100 to-gray-200 overflow-hidden py-16 lg:py-24">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-full h-full bg-grid-pattern"></div>
      </div>
      
      {/* Green Shape */}
      <div className="absolute -bottom-10 -left-10 w-72 h-72 rounded-full bg-gradient-to-r from-penafort to-penafort-light opacity-70 filter blur-3xl"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col lg:flex-row items-center">
          <div className="lg:w-1/2 mb-8 lg:mb-0 animate-fade-in">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 text-gray-900">
              <span className="text-penafort">Fresh</span> & Quality Groceries
            </h1>
            <p className="text-lg text-gray-700 mb-8 max-w-xl">
              Shop at Penafort Supermarket for the best selection of groceries, household essentials, and more at competitive prices. Serving the community of Iba, Ojo, Lagos.
            </p>
            <div className="flex flex-col sm:flex-row space-y-3 sm:space-y-0 sm:space-x-4">
              <Link to="/shop" className="btn-primary flex items-center justify-center">
                <ShoppingBag size={20} className="mr-2" />
                Shop Now
              </Link>
              <Link to="/promotions" className="border border-penafort text-penafort hover:bg-penafort hover:text-white px-6 py-2 rounded-md transition-colors duration-300 flex items-center justify-center">
                Current Promotions
                <ArrowRight size={16} className="ml-2" />
              </Link>
            </div>
          </div>
          
          <div className="lg:w-1/2 relative animate-slide-up">
            <div className="relative mx-auto max-w-md lg:max-w-lg">
              <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1542838132-92c53300491e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80" 
                  alt="Penafort Supermarket Interior" 
                  className="w-full h-auto object-cover aspect-video"
                />
              </div>
              
              {/* Floating Cards */}
              <div className="absolute -bottom-6 -left-6 bg-white p-4 rounded-lg shadow-lg">
                <div className="flex items-center">
                  <div className="bg-green-100 p-2 rounded-full mr-3">
                    <ShoppingBag size={24} className="text-penafort" />
                  </div>
                  <div>
                    <p className="font-bold text-gray-900">Free Delivery</p>
                    <p className="text-xs text-gray-600">On orders over ₦10,000</p>
                  </div>
                </div>
              </div>
              
              <div className="absolute -top-6 -right-6 bg-white p-4 rounded-lg shadow-lg hidden sm:block">
                <div className="bg-red-100 p-2 rounded-full mb-2">
                  <span className="text-red-600 font-bold">25%</span>
                </div>
                <p className="text-xs font-medium text-gray-900">Weekend Special</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

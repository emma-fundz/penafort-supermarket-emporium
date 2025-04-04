
import { Link } from 'react-router-dom';

const PromoBanners = () => {
  return (
    <section className="py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Banner 1 */}
          <div className="relative h-64 md:h-80 rounded-2xl overflow-hidden group">
            <img 
              src="https://images.unsplash.com/photo-1594057842243-23dab30997e9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80"
              alt="Fresh Produce Special Offer"
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-penafort-dark/80 to-transparent">
              <div className="p-8 flex flex-col h-full justify-center text-white max-w-xs">
                <span className="text-sm font-semibold uppercase tracking-wider mb-2">Limited Time Offer</span>
                <h3 className="text-3xl font-bold mb-3">Fresh Produce Special</h3>
                <p className="mb-4 text-white/90">Get up to 25% off on all fresh fruits and vegetables this weekend!</p>
                <Link to="/promotions" className="bg-white text-penafort-dark py-2 px-4 rounded-md self-start hover:bg-gray-100 transition-colors duration-300 font-medium">
                  Shop Now
                </Link>
              </div>
            </div>
          </div>
          
          {/* Banner 2 */}
          <div className="relative h-64 md:h-80 rounded-2xl overflow-hidden group">
            <img 
              src="https://images.unsplash.com/photo-1624517452488-04869289c4ca?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80"
              alt="Household Essentials Discount"
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-l from-penafort-dark/80 to-transparent">
              <div className="p-8 flex flex-col h-full justify-center items-end text-white max-w-xs ml-auto">
                <span className="text-sm font-semibold uppercase tracking-wider mb-2">Special Deal</span>
                <h3 className="text-3xl font-bold mb-3 text-right">Household Essentials</h3>
                <p className="mb-4 text-white/90 text-right">Buy 3 get 1 free on selected household products!</p>
                <Link to="/promotions" className="bg-white text-penafort-dark py-2 px-4 rounded-md hover:bg-gray-100 transition-colors duration-300 font-medium">
                  View Offers
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PromoBanners;

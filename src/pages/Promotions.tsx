
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Calendar, Clock, ShoppingBag, Tag } from "lucide-react";
import Newsletter from "@/components/Newsletter";

// Placeholder data for demonstrating the promotions page
const promotions = [
  {
    id: 1,
    title: "Weekend Special: 25% Off Fresh Produce",
    description: "Get 25% off all fresh fruits and vegetables this weekend. Stock up on nutritious essentials for your family.",
    image: "https://images.unsplash.com/photo-1610348725531-843dff563e2c",
    discount: "25%",
    endDate: "2025-04-20",
    category: "Fresh Produce",
    featured: true,
  },
  {
    id: 2,
    title: "Buy 1 Get 1 Free on Bakery Items",
    description: "Purchase any bakery item and get another one of equal or lesser value for free. Perfect for breakfast or dessert.",
    image: "https://images.unsplash.com/photo-1608198093002-ad4e005484ec",
    discount: "BOGO",
    endDate: "2025-04-15",
    category: "Bakery",
    featured: true,
  },
  {
    id: 3,
    title: "Household Essentials Bundle",
    description: "Save ₦2,000 when you purchase any 3 household essential items. Limited time offer.",
    image: "https://images.unsplash.com/photo-1563453392212-326f5e854473",
    discount: "Bundle",
    endDate: "2025-04-25",
    category: "Household",
    featured: true,
  },
  {
    id: 4,
    title: "15% Off All Dairy Products",
    description: "Enjoy 15% off our entire range of dairy products including milk, cheese, yogurt, and more.",
    image: "https://images.unsplash.com/photo-1628088062854-d1870b4553da",
    discount: "15%",
    endDate: "2025-04-12",
    category: "Dairy",
    featured: false,
  },
  {
    id: 5,
    title: "Premium Meat Selection: 10% Off",
    description: "Get 10% off our premium range of meats, including beef, chicken, and lamb.",
    image: "https://images.unsplash.com/photo-1607623814075-e51df1bdc82f",
    discount: "10%",
    endDate: "2025-04-18",
    category: "Meat & Seafood",
    featured: false,
  },
  {
    id: 6,
    title: "Beverage Bonanza: Buy 3 Pay for 2",
    description: "Purchase any 3 beverages and only pay for 2. Applicable on all soft drinks, juices, and water.",
    image: "https://images.unsplash.com/photo-1596803244897-0f57d32549dc",
    discount: "1 Free",
    endDate: "2025-04-30",
    category: "Beverages",
    featured: false,
  },
];

const formatDate = (dateString: string) => {
  const options: Intl.DateTimeFormatOptions = { 
    year: 'numeric', 
    month: 'long', 
    day: 'numeric' 
  };
  return new Date(dateString).toLocaleDateString('en-US', options);
};

const Promotions = () => {
  const featuredPromotions = promotions.filter(promo => promo.featured);
  const regularPromotions = promotions.filter(promo => !promo.featured);

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        {/* Page Header */}
        <div className="bg-gray-100 py-8">
          <div className="container mx-auto px-4">
            <h1 className="text-3xl font-bold text-gray-900">Current Promotions</h1>
            <div className="flex items-center mt-2">
              <a href="/" className="text-gray-600 hover:text-penafort">
                Home
              </a>
              <span className="mx-2 text-gray-400">/</span>
              <span className="text-penafort">Promotions</span>
            </div>
          </div>
        </div>

        {/* Featured Promotions */}
        <section className="py-12">
          <div className="container mx-auto px-4">
            <h2 className="section-heading">Featured Offers</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
              {featuredPromotions.map((promo) => (
                <div key={promo.id} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
                  <div className="relative">
                    <img 
                      src={promo.image} 
                      alt={promo.title}
                      className="w-full h-48 object-cover"
                    />
                    <div className="absolute top-0 right-0 bg-red-500 text-white font-bold py-1 px-3 rounded-bl-lg">
                      {promo.discount} OFF
                    </div>
                  </div>
                  
                  <div className="p-6">
                    <div className="flex items-center mb-2">
                      <Tag size={18} className="text-penafort mr-2" />
                      <span className="text-sm font-medium text-gray-600">{promo.category}</span>
                    </div>
                    
                    <h3 className="text-xl font-bold mb-3 text-gray-900">{promo.title}</h3>
                    <p className="text-gray-600 mb-4">{promo.description}</p>
                    
                    <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                      <div className="flex items-center">
                        <Calendar size={16} className="mr-1" />
                        <span>Ends: {formatDate(promo.endDate)}</span>
                      </div>
                    </div>
                    
                    <a 
                      href={`/shop?promotion=${promo.id}`}
                      className="block w-full text-center bg-penafort hover:bg-penafort-dark text-white py-2 rounded-md transition-colors duration-300"
                    >
                      Shop Now
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Promotional Banner */}
        <section className="py-12 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="bg-gradient-to-r from-penafort to-penafort-light rounded-2xl overflow-hidden shadow-lg">
              <div className="grid grid-cols-1 md:grid-cols-2 items-center">
                <div className="p-8 md:p-12 text-white">
                  <h2 className="text-3xl md:text-4xl font-bold mb-4">Free Delivery on Your First Order!</h2>
                  <p className="mb-6 text-white/90">
                    Sign up for an account and get free delivery on your first order with no minimum purchase. 
                    Use code <span className="font-bold">FIRSTORDER</span> at checkout.
                  </p>
                  <a 
                    href="/shop" 
                    className="inline-block bg-white text-penafort-dark px-6 py-3 rounded-md font-medium hover:bg-gray-100 transition-colors duration-300"
                  >
                    Shop Now
                  </a>
                  <div className="mt-6 flex items-center text-sm">
                    <Clock size={16} className="mr-2" />
                    <span>Limited time offer. Terms and conditions apply.</span>
                  </div>
                </div>
                <div className="hidden md:block relative h-full">
                  <img 
                    src="https://images.unsplash.com/photo-1652169889237-84a2f2f386e6" 
                    alt="Delivery promotion"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-20"></div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Regular Promotions */}
        <section className="py-12">
          <div className="container mx-auto px-4">
            <h2 className="section-heading">More Offers</h2>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
              {regularPromotions.map((promo) => (
                <div key={promo.id} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
                  <div className="relative">
                    <img 
                      src={promo.image} 
                      alt={promo.title}
                      className="w-full h-48 object-cover"
                    />
                    <div className="absolute top-0 right-0 bg-red-500 text-white font-bold py-1 px-3 rounded-bl-lg">
                      {promo.discount} OFF
                    </div>
                  </div>
                  
                  <div className="p-4">
                    <div className="flex items-center mb-1">
                      <Tag size={16} className="text-penafort mr-1" />
                      <span className="text-xs font-medium text-gray-600">{promo.category}</span>
                    </div>
                    
                    <h3 className="text-lg font-bold mb-2 text-gray-900">{promo.title}</h3>
                    <p className="text-sm text-gray-600 mb-3">{promo.description}</p>
                    
                    <div className="flex items-center justify-between text-xs text-gray-500 mb-3">
                      <div className="flex items-center">
                        <Calendar size={14} className="mr-1" />
                        <span>Valid until: {formatDate(promo.endDate)}</span>
                      </div>
                    </div>
                    
                    <a 
                      href={`/shop?promotion=${promo.id}`}
                      className="block w-full text-center bg-penafort hover:bg-penafort-dark text-white py-2 rounded-md transition-colors duration-300"
                    >
                      Shop Now
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Newsletter Section */}
        <Newsletter />
      </main>
      <Footer />
    </div>
  );
};

export default Promotions;


import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Newsletter from "@/components/Newsletter";
import { CheckCircle, User, Award, ShoppingBag } from "lucide-react";

const About = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        {/* Page Header */}
        <div className="bg-gray-100 py-8">
          <div className="container mx-auto px-4">
            <h1 className="text-3xl font-bold text-gray-900">About Us</h1>
            <div className="flex items-center mt-2">
              <a href="/" className="text-gray-600 hover:text-penafort">
                Home
              </a>
              <span className="mx-2 text-gray-400">/</span>
              <span className="text-penafort">About Us</span>
            </div>
          </div>
        </div>

        {/* Hero Section */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-bold mb-6 text-gray-900">
                  Welcome to <span className="text-penafort">Penafort</span> Supermarket
                </h2>
                <p className="text-gray-600 mb-6">
                  Penafort Supermarket is a premier retail establishment operating under Penafort Energy 
                  Nigeria Limited. Located in Iba, Ojo, Lagos, we are dedicated to providing our customers 
                  with high-quality groceries, household items, and fast-moving consumer goods at competitive prices.
                </p>
                <p className="text-gray-600 mb-6">
                  Since our establishment, we have been committed to offering an exceptional shopping 
                  experience through efficient store operations, meticulous inventory management, and 
                  outstanding customer service. Our strategic location in Iba allows us to serve the 
                  local community with a wide range of products that meet their daily needs.
                </p>
                <div className="grid grid-cols-2 gap-4">
                  <div className="flex items-start">
                    <CheckCircle size={20} className="text-penafort mt-1 mr-2 flex-shrink-0" />
                    <span className="text-gray-700">Quality Products</span>
                  </div>
                  <div className="flex items-start">
                    <CheckCircle size={20} className="text-penafort mt-1 mr-2 flex-shrink-0" />
                    <span className="text-gray-700">Competitive Pricing</span>
                  </div>
                  <div className="flex items-start">
                    <CheckCircle size={20} className="text-penafort mt-1 mr-2 flex-shrink-0" />
                    <span className="text-gray-700">Excellent Customer Service</span>
                  </div>
                  <div className="flex items-start">
                    <CheckCircle size={20} className="text-penafort mt-1 mr-2 flex-shrink-0" />
                    <span className="text-gray-700">Convenient Location</span>
                  </div>
                </div>
              </div>
              <div className="relative">
                <div className="bg-white p-4 rounded-lg shadow-lg">
                  <img
                    src="https://images.unsplash.com/photo-1578916171728-46686eac8d58?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80"
                    alt="Penafort Supermarket Interior"
                    className="w-full h-auto rounded-lg"
                  />
                </div>
                <div className="absolute -bottom-6 -left-6 bg-penafort text-white p-6 rounded-lg shadow-lg hidden md:block">
                  <p className="text-xl font-bold">Serving the community since 2018</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Our Mission & Values */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center mb-12">
              <h2 className="text-3xl font-bold mb-4 text-gray-900">Our Mission & Values</h2>
              <p className="text-gray-600">
                At Penafort Supermarket, we are guided by a clear mission and strong values that define 
                how we operate and serve our customers every day.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
                <div className="w-12 h-12 bg-penafort-light/20 rounded-full flex items-center justify-center mb-4">
                  <ShoppingBag size={24} className="text-penafort" />
                </div>
                <h3 className="text-xl font-bold mb-3 text-gray-900">Our Mission</h3>
                <p className="text-gray-600">
                  To provide high-quality products at competitive prices while delivering exceptional 
                  customer service, making Penafort Supermarket the preferred shopping destination in Iba, Ojo.
                </p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
                <div className="w-12 h-12 bg-penafort-light/20 rounded-full flex items-center justify-center mb-4">
                  <Award size={24} className="text-penafort" />
                </div>
                <h3 className="text-xl font-bold mb-3 text-gray-900">Quality Commitment</h3>
                <p className="text-gray-600">
                  We are committed to sourcing and offering only the highest quality products. 
                  We carefully select our suppliers and regularly review our product offerings to ensure 
                  they meet our strict standards.
                </p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
                <div className="w-12 h-12 bg-penafort-light/20 rounded-full flex items-center justify-center mb-4">
                  <User size={24} className="text-penafort" />
                </div>
                <h3 className="text-xl font-bold mb-3 text-gray-900">Customer Focus</h3>
                <p className="text-gray-600">
                  Our customers are at the heart of everything we do. We strive to understand their needs 
                  and preferences, creating a shopping experience that is convenient, enjoyable, and satisfying.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Our Team */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <h2 className="section-heading">Our Leadership Team</h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
              <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
                <img
                  src="https://randomuser.me/api/portraits/men/32.jpg"
                  alt="John Adeyemi - CEO"
                  className="w-full h-64 object-cover object-center"
                />
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-1">John Adeyemi</h3>
                  <p className="text-penafort font-medium mb-3">Chief Executive Officer</p>
                  <p className="text-gray-600 mb-4">
                    John brings over 15 years of retail management experience to Penafort Supermarket, 
                    leading our strategic vision and operations.
                  </p>
                </div>
              </div>

              <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
                <img
                  src="https://randomuser.me/api/portraits/women/44.jpg"
                  alt="Sarah Okafor - Operations Manager"
                  className="w-full h-64 object-cover object-center"
                />
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-1">Sarah Okafor</h3>
                  <p className="text-penafort font-medium mb-3">Operations Manager</p>
                  <p className="text-gray-600 mb-4">
                    Sarah oversees the day-to-day operations of our supermarket, ensuring efficient 
                    processes and exceptional customer experiences.
                  </p>
                </div>
              </div>

              <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
                <img
                  src="https://randomuser.me/api/portraits/men/67.jpg"
                  alt="Michael Nwosu - Procurement Manager"
                  className="w-full h-64 object-cover object-center"
                />
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-1">Michael Nwosu</h3>
                  <p className="text-penafort font-medium mb-3">Procurement Manager</p>
                  <p className="text-gray-600 mb-4">
                    Michael leads our procurement team, building relationships with suppliers and 
                    ensuring we offer the best products at competitive prices.
                  </p>
                </div>
              </div>
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

export default About;

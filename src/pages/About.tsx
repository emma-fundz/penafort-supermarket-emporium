
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Newsletter from "@/components/Newsletter";
import { motion } from "framer-motion";
import { CheckCircle, Coffee, ShoppingCart, Truck, Users } from "lucide-react";

const About = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="relative py-20 bg-gradient-to-r from-gray-900 to-green-900 text-white text-center">
          <div className="absolute inset-0 bg-black opacity-50"></div>
          <div className="container mx-auto px-4 relative z-10">
            <motion.h1 
              className="text-4xl md:text-5xl font-bold mb-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              About Penafort Supermarket
            </motion.h1>
            <motion.p 
              className="max-w-xl mx-auto text-lg text-gray-200"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              Your trusted neighborhood supermarket providing quality groceries and household essentials since 2010.
            </motion.p>
          </div>
        </section>

        {/* Our Story Section */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="flex flex-col lg:flex-row items-center">
              <motion.div 
                className="lg:w-1/2 mb-10 lg:mb-0 lg:pr-10"
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
              >
                <h2 className="text-3xl font-bold mb-6 text-gray-800">Our Story</h2>
                <p className="text-gray-600 mb-4">
                  Penafort Supermarket began as a small corner shop in Iba, Lagos in 2010. Founded by the Adenuga family, 
                  our mission was simple: provide fresh, quality groceries to our local community at fair prices with exceptional service.
                </p>
                <p className="text-gray-600 mb-4">
                  Over the years, we've grown from that humble beginning to become one of the most trusted supermarkets 
                  in the Ojo area. Our expansion has allowed us to offer a wider range of products, but we've never lost 
                  sight of our core values: quality, affordability, and community.
                </p>
                <p className="text-gray-600">
                  Today, Penafort Supermarket is a subsidiary of Penafort Energy Nigeria Limited, employing over 50 staff 
                  and serving thousands of customers every week. We remain committed to supporting local suppliers and being 
                  an active part of the community that has supported us for over a decade.
                </p>
              </motion.div>
              <motion.div 
                className="lg:w-1/2"
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
              >
                <img 
                  src="https://images.unsplash.com/photo-1578916171728-46686eac8d58?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80" 
                  alt="Penafort Supermarket Store Front" 
                  className="rounded-lg shadow-xl w-full h-auto object-cover"
                />
              </motion.div>
            </div>
          </div>
        </section>

        {/* Values Section */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <motion.h2 
                className="text-3xl font-bold mb-4 text-gray-800"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                Our Core Values
              </motion.h2>
              <motion.p 
                className="text-gray-600 max-w-2xl mx-auto"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
              >
                These principles guide everything we do at Penafort Supermarket, from how we source our products 
                to how we interact with our customers.
              </motion.p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {/* Value 1 */}
              <motion.div 
                className="bg-white p-6 rounded-lg shadow-md text-center hover:shadow-lg transition-shadow"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                whileHover={{ y: -10 }}
              >
                <div className="w-16 h-16 mx-auto bg-green-100 rounded-full flex items-center justify-center mb-4">
                  <CheckCircle size={30} className="text-green-600" />
                </div>
                <h3 className="text-xl font-semibold mb-3 text-gray-800">Quality</h3>
                <p className="text-gray-600">
                  We are committed to offering only the freshest and highest quality products to our customers. 
                  We carefully select our suppliers and regularly inspect our inventory.
                </p>
              </motion.div>
              
              {/* Value 2 */}
              <motion.div 
                className="bg-white p-6 rounded-lg shadow-md text-center hover:shadow-lg transition-shadow"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                whileHover={{ y: -10 }}
              >
                <div className="w-16 h-16 mx-auto bg-green-100 rounded-full flex items-center justify-center mb-4">
                  <Users size={30} className="text-green-600" />
                </div>
                <h3 className="text-xl font-semibold mb-3 text-gray-800">Community</h3>
                <p className="text-gray-600">
                  We believe in being an active part of our local community. We support local farmers, 
                  producers, and regularly participate in community events and initiatives.
                </p>
              </motion.div>
              
              {/* Value 3 */}
              <motion.div 
                className="bg-white p-6 rounded-lg shadow-md text-center hover:shadow-lg transition-shadow"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                whileHover={{ y: -10 }}
              >
                <div className="w-16 h-16 mx-auto bg-green-100 rounded-full flex items-center justify-center mb-4">
                  <ShoppingCart size={30} className="text-green-600" />
                </div>
                <h3 className="text-xl font-semibold mb-3 text-gray-800">Affordability</h3>
                <p className="text-gray-600">
                  We strive to make quality groceries accessible to everyone. Our commitment is to offer fair 
                  prices while never compromising on the quality of our products.
                </p>
              </motion.div>
              
              {/* Value 4 */}
              <motion.div 
                className="bg-white p-6 rounded-lg shadow-md text-center hover:shadow-lg transition-shadow"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                whileHover={{ y: -10 }}
              >
                <div className="w-16 h-16 mx-auto bg-green-100 rounded-full flex items-center justify-center mb-4">
                  <Coffee size={30} className="text-green-600" />
                </div>
                <h3 className="text-xl font-semibold mb-3 text-gray-800">Service</h3>
                <p className="text-gray-600">
                  Customer satisfaction is at the heart of everything we do. Our friendly staff is always 
                  ready to assist you and make your shopping experience pleasant and convenient.
                </p>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Our Team Section */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <motion.h2 
                className="text-3xl font-bold mb-4 text-gray-800"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                Meet Our Team
              </motion.h2>
              <motion.p 
                className="text-gray-600 max-w-2xl mx-auto"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
              >
                The dedicated individuals who work hard every day to bring you the best shopping experience.
              </motion.p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* Team Member 1 */}
              <motion.div 
                className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                whileHover={{ y: -10 }}
              >
                <img 
                  src="https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80" 
                  alt="John Adenuga - CEO" 
                  className="w-full h-64 object-cover object-center"
                />
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-1 text-gray-800">John Adenuga</h3>
                  <p className="text-green-600 font-medium mb-3">Chief Executive Officer</p>
                  <p className="text-gray-600">
                    John founded Penafort Supermarket in 2010 and has overseen its growth and development into 
                    the trusted community supermarket it is today.
                  </p>
                </div>
              </motion.div>
              
              {/* Team Member 2 */}
              <motion.div 
                className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                whileHover={{ y: -10 }}
              >
                <img 
                  src="https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80" 
                  alt="Sarah Okafor - Operations Manager" 
                  className="w-full h-64 object-cover object-center"
                />
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-1 text-gray-800">Sarah Okafor</h3>
                  <p className="text-green-600 font-medium mb-3">Operations Manager</p>
                  <p className="text-gray-600">
                    Sarah oversees the day-to-day operations of our supermarket, ensuring everything runs 
                    smoothly and customers receive the best service possible.
                  </p>
                </div>
              </motion.div>
              
              {/* Team Member 3 */}
              <motion.div 
                className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                whileHover={{ y: -10 }}
              >
                <img 
                  src="https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80" 
                  alt="Michael Eze - Procurement Director" 
                  className="w-full h-64 object-cover object-center"
                />
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-1 text-gray-800">Michael Eze</h3>
                  <p className="text-green-600 font-medium mb-3">Procurement Director</p>
                  <p className="text-gray-600">
                    Michael is responsible for sourcing the highest quality products and maintaining 
                    relationships with our suppliers to ensure we always have what our customers need.
                  </p>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-16 bg-green-600 text-white">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 text-center">
              {/* Stat 1 */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                <h3 className="text-4xl font-bold mb-2">10+</h3>
                <p className="text-green-100">Years in Business</p>
              </motion.div>
              
              {/* Stat 2 */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
              >
                <h3 className="text-4xl font-bold mb-2">5,000+</h3>
                <p className="text-green-100">Happy Customers Weekly</p>
              </motion.div>
              
              {/* Stat 3 */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                <h3 className="text-4xl font-bold mb-2">10,000+</h3>
                <p className="text-green-100">Products Available</p>
              </motion.div>
              
              {/* Stat 4 */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
              >
                <h3 className="text-4xl font-bold mb-2">50+</h3>
                <p className="text-green-100">Team Members</p>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Vision & Mission Section */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              {/* Vision */}
              <motion.div
                className="bg-white p-8 rounded-lg shadow-lg"
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
              >
                <h3 className="text-2xl font-bold mb-4 text-gray-800">Our Vision</h3>
                <p className="text-gray-600 mb-4">
                  To be the preferred supermarket choice for every household in our community, known for 
                  our quality products, competitive prices, and exceptional customer service.
                </p>
                <p className="text-gray-600">
                  We aspire to grow our presence while maintaining the personal touch and community 
                  connection that has been our foundation since day one.
                </p>
              </motion.div>
              
              {/* Mission */}
              <motion.div
                className="bg-white p-8 rounded-lg shadow-lg"
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
              >
                <h3 className="text-2xl font-bold mb-4 text-gray-800">Our Mission</h3>
                <p className="text-gray-600 mb-4">
                  To provide our customers with a wide selection of high-quality groceries and household 
                  essentials at fair prices, in a clean, welcoming environment with excellent customer service.
                </p>
                <p className="text-gray-600">
                  We are committed to supporting local suppliers, implementing sustainable practices, 
                  and contributing positively to our community's development.
                </p>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="py-16 bg-gray-100">
          <div className="container mx-auto px-4 text-center">
            <motion.h2 
              className="text-3xl font-bold mb-6 text-gray-800"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              Visit Penafort Supermarket Today
            </motion.h2>
            <motion.p 
              className="text-gray-600 max-w-2xl mx-auto mb-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              Experience the difference at Penafort Supermarket. We're more than just a place to shop; 
              we're a part of your community.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="flex flex-col sm:flex-row justify-center gap-4"
            >
              <a 
                href="/shop" 
                className="bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-md font-medium transition-colors flex items-center justify-center"
              >
                <ShoppingCart size={20} className="mr-2" />
                Shop Now
              </a>
              <a 
                href="/contact" 
                className="bg-white hover:bg-gray-100 text-green-600 border border-green-600 px-6 py-3 rounded-md font-medium transition-colors flex items-center justify-center"
              >
                <Truck size={20} className="mr-2" />
                Find Our Store
              </a>
            </motion.div>
          </div>
        </section>

        <Newsletter />
      </main>
      <Footer />
    </div>
  );
};

export default About;

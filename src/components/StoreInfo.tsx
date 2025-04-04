
import { Clock, MapPin, Truck } from 'lucide-react';

const StoreInfo = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          {/* Map */}
          <div className="bg-gray-200 rounded-xl overflow-hidden h-96 shadow-md">
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3963.8582836122515!2d3.1711!3d6.5122!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x103b86c7e4c4fb27%3A0xce46b2b8c886a312!2sIba%2C%20Ojo%2C%20Lagos!5e0!3m2!1sen!2sng!4v1617974185283!5m2!1sen!2sng" 
              width="100%" 
              height="100%" 
              style={{ border: 0 }} 
              allowFullScreen 
              loading="lazy"
              title="Penafort Supermarket Location"
            ></iframe>
          </div>
          
          {/* Store Info */}
          <div className="px-4 md:px-8">
            <h2 className="text-3xl font-bold mb-6 text-gray-900">Visit Our Store</h2>
            
            <div className="space-y-6">
              <div className="flex items-start">
                <div className="bg-penafort-light/20 p-3 rounded-full mr-4">
                  <MapPin size={24} className="text-penafort" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-1">Location</h3>
                  <p className="text-gray-600">Iba, Ojo, Lagos, Nigeria</p>
                  <p className="text-gray-600">Near Iba Housing Estate</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="bg-penafort-light/20 p-3 rounded-full mr-4">
                  <Clock size={24} className="text-penafort" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-1">Opening Hours</h3>
                  <div className="grid grid-cols-2 gap-x-4 text-gray-600">
                    <p>Monday - Friday:</p>
                    <p>8:00 AM - 9:00 PM</p>
                    <p>Saturday:</p>
                    <p>8:00 AM - 8:00 PM</p>
                    <p>Sunday:</p>
                    <p>9:00 AM - 7:00 PM</p>
                  </div>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="bg-penafort-light/20 p-3 rounded-full mr-4">
                  <Truck size={24} className="text-penafort" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-1">Delivery Service</h3>
                  <p className="text-gray-600">We offer same-day delivery for orders placed before 3:00 PM within Iba and surrounding areas.</p>
                  <p className="text-gray-600 mt-1">Free delivery on orders over ₦10,000.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StoreInfo;

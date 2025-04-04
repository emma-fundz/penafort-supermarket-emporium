
import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { MapPin, Phone, Mail, Clock, Send } from "lucide-react";
import { toast } from "@/components/ui/use-toast";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Validate form
    if (!formData.name || !formData.email || !formData.message) {
      toast({
        title: "Error",
        description: "Please fill out all required fields.",
        variant: "destructive",
      });
      return;
    }
    
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      toast({
        title: "Message Sent",
        description: "Thank you for contacting us. We will get back to you soon!",
      });
      
      setFormData({
        name: "",
        email: "",
        phone: "",
        subject: "",
        message: "",
      });
      
      setIsSubmitting(false);
    }, 1500);
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        {/* Page Header */}
        <div className="bg-gray-100 py-8">
          <div className="container mx-auto px-4">
            <h1 className="text-3xl font-bold text-gray-900">Contact Us</h1>
            <div className="flex items-center mt-2">
              <a href="/" className="text-gray-600 hover:text-penafort">
                Home
              </a>
              <span className="mx-2 text-gray-400">/</span>
              <span className="text-penafort">Contact</span>
            </div>
          </div>
        </div>

        {/* Contact Info and Form */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* Contact Information */}
              <div>
                <h2 className="text-2xl font-bold mb-6 text-gray-900">Get In Touch</h2>
                <p className="text-gray-600 mb-8">
                  Have questions about our products, services, or need assistance? 
                  Contact our friendly team using the information below or fill out the contact form.
                </p>
                
                <div className="space-y-6">
                  <div className="flex items-start">
                    <div className="bg-penafort-light/20 p-3 rounded-full mr-4">
                      <MapPin size={24} className="text-penafort" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg mb-1 text-gray-900">Our Location</h3>
                      <p className="text-gray-600">Iba, Ojo</p>
                      <p className="text-gray-600">Lagos, Nigeria</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="bg-penafort-light/20 p-3 rounded-full mr-4">
                      <Phone size={24} className="text-penafort" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg mb-1 text-gray-900">Phone</h3>
                      <p className="text-gray-600">+234 123 456 7890</p>
                      <p className="text-gray-600">+234 987 654 3210</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="bg-penafort-light/20 p-3 rounded-full mr-4">
                      <Mail size={24} className="text-penafort" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg mb-1 text-gray-900">Email</h3>
                      <p className="text-gray-600">info@penafortsupermarket.com</p>
                      <p className="text-gray-600">customer.care@penafortsupermarket.com</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="bg-penafort-light/20 p-3 rounded-full mr-4">
                      <Clock size={24} className="text-penafort" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg mb-1 text-gray-900">Opening Hours</h3>
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
                </div>

                {/* Social Media Links */}
                <div className="mt-8">
                  <h3 className="font-semibold text-lg mb-3 text-gray-900">Follow Us</h3>
                  <div className="flex space-x-4">
                    <a href="#" className="bg-gray-200 hover:bg-penafort hover:text-white p-3 rounded-full transition-colors duration-300">
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
                      </svg>
                    </a>
                    <a href="#" className="bg-gray-200 hover:bg-penafort hover:text-white p-3 rounded-full transition-colors duration-300">
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                        <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                        <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                      </svg>
                    </a>
                    <a href="#" className="bg-gray-200 hover:bg-penafort hover:text-white p-3 rounded-full transition-colors duration-300">
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"></path>
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
              
              {/* Contact Form */}
              <div>
                <div className="bg-white rounded-xl shadow-lg p-8">
                  <h2 className="text-2xl font-bold mb-6 text-gray-900">Send Us a Message</h2>
                  
                  <form onSubmit={handleSubmit}>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
                      <div>
                        <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Name *</label>
                        <input
                          type="text"
                          id="name"
                          name="name"
                          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-penafort focus:border-penafort"
                          value={formData.name}
                          onChange={handleChange}
                          required
                        />
                      </div>
                      
                      <div>
                        <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email *</label>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-penafort focus:border-penafort"
                          value={formData.email}
                          onChange={handleChange}
                          required
                        />
                      </div>
                    </div>
                    
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
                      <div>
                        <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">Phone</label>
                        <input
                          type="tel"
                          id="phone"
                          name="phone"
                          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-penafort focus:border-penafort"
                          value={formData.phone}
                          onChange={handleChange}
                        />
                      </div>
                      
                      <div>
                        <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">Subject</label>
                        <select
                          id="subject"
                          name="subject"
                          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-penafort focus:border-penafort"
                          value={formData.subject}
                          onChange={handleChange}
                        >
                          <option value="">Select a subject</option>
                          <option value="General Inquiry">General Inquiry</option>
                          <option value="Product Question">Product Question</option>
                          <option value="Delivery Issue">Delivery Issue</option>
                          <option value="Feedback">Feedback</option>
                          <option value="Other">Other</option>
                        </select>
                      </div>
                    </div>
                    
                    <div className="mb-6">
                      <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">Message *</label>
                      <textarea
                        id="message"
                        name="message"
                        rows={5}
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-penafort focus:border-penafort"
                        value={formData.message}
                        onChange={handleChange}
                        required
                      ></textarea>
                    </div>
                    
                    <button
                      type="submit"
                      className="w-full bg-penafort hover:bg-penafort-dark text-white py-3 rounded-md flex items-center justify-center transition-colors duration-300 disabled:opacity-70"
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? (
                        "Sending..."
                      ) : (
                        <>
                          Send Message
                          <Send size={18} className="ml-2" />
                        </>
                      )}
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Map Section */}
        <section className="py-12 bg-gray-50">
          <div className="container mx-auto px-4">
            <h2 className="text-2xl font-bold mb-8 text-center text-gray-900">Find Us</h2>
            <div className="bg-white rounded-xl overflow-hidden shadow-lg h-96">
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
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Contact;


import { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Star } from 'lucide-react';
import { 
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

// Expanded testimonials with more details and varied content
const testimonials = [
  {
    id: 1,
    name: "Chinwe Okonkwo",
    role: "Regular Customer",
    image: "https://randomuser.me/api/portraits/women/79.jpg",
    content: "Penafort Supermarket always has the freshest produce in the area. Their fruits and vegetables are superior to other stores I've visited. The staff is also very friendly and helpful.",
    rating: 5,
    purchasedItems: ["Fresh Vegetables", "Imported Fruits", "Organic Herbs"]
  },
  {
    id: 2,
    name: "Emmanuel Adeyemi",
    role: "Local Resident",
    image: "https://randomuser.me/api/portraits/men/32.jpg",
    content: "I love the convenient location and the wide variety of products they offer. It's my one-stop shop for all household needs. Their prices are also quite competitive compared to other supermarkets in Iba.",
    rating: 4,
    purchasedItems: ["Household Essentials", "Snacks", "Beverages"]
  },
  {
    id: 3,
    name: "Blessing Nnamdi",
    role: "Weekly Shopper",
    image: "https://randomuser.me/api/portraits/women/44.jpg",
    content: "The quality of meat and seafood at Penafort is exceptional. Everything is always fresh and properly stored. I also appreciate their weekly promotions which help me save money on groceries.",
    rating: 5,
    purchasedItems: ["Fresh Fish", "Beef", "Poultry"]
  },
  {
    id: 4,
    name: "Oluwaseun Adeleke",
    role: "Family Shopper",
    image: "https://randomuser.me/api/portraits/men/45.jpg",
    content: "As a father of three, I appreciate the wide range of products available for my growing family. The kids' section has everything we need, and the staff always helps me find what I'm looking for.",
    rating: 5,
    purchasedItems: ["Baby Products", "School Supplies", "Family Snacks"]
  },
  {
    id: 5,
    name: "Amara Chukwu",
    role: "Health Enthusiast",
    image: "https://randomuser.me/api/portraits/women/66.jpg",
    content: "I'm particular about healthy living, and Penafort has an impressive selection of organic products. Their fresh juice bar is also a fantastic addition. I stop by almost every morning!",
    rating: 4,
    purchasedItems: ["Organic Produce", "Health Supplements", "Fresh Juices"]
  }
];

// Shopping experience images
const shoppingImages = [
  "https://images.unsplash.com/photo-1542838132-92c53300491e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
  "https://images.unsplash.com/photo-1633649363405-f0af9a9b9775?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
  "https://images.unsplash.com/photo-1542838132-92c53300491e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
  "https://images.unsplash.com/photo-1579113800032-c38bd7635818?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
];

const Testimonials = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // Auto-rotate shopping images
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex(prev => (prev + 1) % shoppingImages.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="py-16 bg-gradient-to-br from-gray-50 to-gray-100">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">What Our Customers Say</h2>
          <div className="w-24 h-1 bg-penafort mx-auto mb-6"></div>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Don't just take our word for it — see what our valued customers have to say about their shopping experience at Penafort Supermarket.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {/* Shopping Experience Images */}
          <div className="col-span-1 md:col-span-1 rounded-2xl overflow-hidden shadow-xl h-[450px] relative">
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent z-10"></div>
            <img 
              src={shoppingImages[currentImageIndex]} 
              alt="Shopping Experience" 
              className="w-full h-full object-cover transition-opacity duration-1000"
            />
            <div className="absolute bottom-6 left-6 z-20 text-white">
              <h3 className="text-2xl font-bold mb-2">Happy Customers</h3>
              <p className="text-white/90">Experience the Penafort difference</p>
            </div>
          </div>
          
          {/* Testimonials Carousel */}
          <div className="col-span-1 md:col-span-2 bg-white rounded-2xl shadow-xl p-8 relative">
            <Carousel 
              opts={{
                align: "start",
                loop: true
              }}
              className="w-full"
            >
              <CarouselContent>
                {testimonials.map((testimonial) => (
                  <CarouselItem key={testimonial.id} className="md:basis-1/2 lg:basis-1/2">
                    <div className="h-full flex flex-col bg-white rounded-xl border border-gray-100 p-6 transition-all duration-300 hover:shadow-md">
                      {/* Rating */}
                      <div className="flex mb-4">
                        {[...Array(5)].map((_, i) => (
                          <Star
                            key={i}
                            className={`w-5 h-5 ${i < testimonial.rating ? 'fill-yellow-400 text-yellow-400' : 'text-gray-300'}`}
                          />
                        ))}
                      </div>
                      
                      {/* Content */}
                      <p className="text-gray-600 mb-6 italic flex-grow">"{testimonial.content}"</p>
                      
                      {/* Purchased Items */}
                      <div className="mb-4">
                        <p className="text-xs font-medium text-gray-500 mb-2">FREQUENTLY PURCHASES</p>
                        <div className="flex flex-wrap gap-2">
                          {testimonial.purchasedItems.map((item, idx) => (
                            <span key={idx} className="text-xs bg-gray-100 text-gray-600 px-2 py-1 rounded-full">
                              {item}
                            </span>
                          ))}
                        </div>
                      </div>
                      
                      {/* Customer */}
                      <div className="flex items-center mt-auto pt-4 border-t border-gray-100">
                        <img 
                          src={testimonial.image} 
                          alt={testimonial.name}
                          className="w-12 h-12 rounded-full object-cover mr-4 border-2 border-penafort"
                        />
                        <div>
                          <h4 className="font-semibold text-gray-900">{testimonial.name}</h4>
                          <p className="text-sm text-gray-500">{testimonial.role}</p>
                        </div>
                      </div>
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
              
              <div className="hidden md:block">
                <CarouselPrevious className="absolute -left-4 top-1/2" />
                <CarouselNext className="absolute -right-4 top-1/2" />
              </div>
            </Carousel>
            
            <div className="flex justify-center gap-2 mt-6 md:hidden">
              <button className="p-2 rounded-full bg-penafort/10 text-penafort hover:bg-penafort/20">
                <ChevronLeft size={20} />
              </button>
              <button className="p-2 rounded-full bg-penafort/10 text-penafort hover:bg-penafort/20">
                <ChevronRight size={20} />
              </button>
            </div>
          </div>
        </div>
        
        {/* Customer Collage */}
        <div className="grid grid-cols-2 md:grid-cols-6 gap-3 mt-12">
          <div className="col-span-2 md:col-span-3 relative overflow-hidden rounded-xl h-64 md:h-80 group">
            <img 
              src="https://images.unsplash.com/photo-1556740738-b6a63e27c4df?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80" 
              alt="Happy Customer"
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
            <div className="absolute bottom-6 left-6 text-white">
              <h3 className="text-xl font-bold">Customer Satisfaction</h3>
              <p className="text-white/80">Our top priority</p>
            </div>
          </div>
          <div className="col-span-2 md:col-span-1 relative overflow-hidden rounded-xl group">
            <img 
              src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80" 
              alt="Customer Shopping"
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
          </div>
          <div className="col-span-2 md:col-span-2 relative overflow-hidden rounded-xl group">
            <img 
              src="https://images.unsplash.com/photo-1607083206968-13611e3d76db?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80" 
              alt="Customer with Products"
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
            <div className="absolute bottom-6 left-6 text-white">
              <h3 className="text-xl font-bold">Quality Products</h3>
              <p className="text-white/80">Every time you shop</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;

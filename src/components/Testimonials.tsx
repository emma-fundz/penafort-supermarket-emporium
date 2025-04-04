
const testimonials = [
  {
    id: 1,
    name: 'Chinwe Okonkwo',
    role: 'Regular Customer',
    image: 'https://randomuser.me/api/portraits/women/79.jpg',
    content: "Penafort Supermarket always has the freshest produce in the area. Their fruits and vegetables are superior to other stores I've visited. The staff is also very friendly and helpful.",
    rating: 5
  },
  {
    id: 2,
    name: 'Emmanuel Adeyemi',
    role: 'Local Resident',
    image: 'https://randomuser.me/api/portraits/men/32.jpg',
    content: "I love the convenient location and the wide variety of products they offer. It's my one-stop shop for all household needs. Their prices are also quite competitive compared to other supermarkets in Iba.",
    rating: 4
  },
  {
    id: 3,
    name: 'Blessing Nnamdi',
    role: 'Weekly Shopper',
    image: 'https://randomuser.me/api/portraits/women/44.jpg',
    content: 'The quality of meat and seafood at Penafort is exceptional. Everything is always fresh and properly stored. I also appreciate their weekly promotions which help me save money on groceries.',
    rating: 5
  }
];

const Testimonials = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="section-heading">What Our Customers Say</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
          {testimonials.map((testimonial) => (
            <div key={testimonial.id} className="bg-white rounded-xl shadow-md p-6 transition-transform duration-300 hover:-translate-y-2">
              {/* Stars */}
              <div className="flex mb-4">
                {[...Array(5)].map((_, i) => (
                  <svg
                    key={i}
                    className={`w-5 h-5 ${i < testimonial.rating ? 'text-yellow-400' : 'text-gray-300'}`}
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              
              {/* Content */}
              <p className="text-gray-600 mb-6 italic">"{testimonial.content}"</p>
              
              {/* Customer */}
              <div className="flex items-center">
                <img 
                  src={testimonial.image} 
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full object-cover mr-4"
                />
                <div>
                  <h4 className="font-semibold text-gray-900">{testimonial.name}</h4>
                  <p className="text-sm text-gray-500">{testimonial.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;

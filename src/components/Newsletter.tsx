
import { useState } from 'react';
import { toast } from '@/components/ui/use-toast';

const Newsletter = () => {
  const [email, setEmail] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!email) {
      toast({
        title: "Error",
        description: "Please enter your email address.",
        variant: "destructive",
      });
      return;
    }
    
    setIsLoading(true);
    
    // Simulate API call
    setTimeout(() => {
      toast({
        title: "Success!",
        description: "You have successfully subscribed to our newsletter.",
      });
      setEmail('');
      setIsLoading(false);
    }, 1500);
  };

  return (
    <section className="py-16 bg-gradient-to-r from-penafort to-penafort-light text-white">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">Subscribe to Our Newsletter</h2>
          <p className="mb-8 text-white/90">
            Subscribe to our newsletter and be the first to know about new products, special offers, and exclusive discounts.
          </p>
          
          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Your email address"
              className="flex-grow px-4 py-3 rounded-md focus:outline-none text-gray-800"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <button
              type="submit"
              className="bg-white text-penafort-dark px-6 py-3 rounded-md font-medium hover:bg-gray-100 transition-colors duration-300 disabled:opacity-70"
              disabled={isLoading}
            >
              {isLoading ? 'Subscribing...' : 'Subscribe'}
            </button>
          </form>
          
          <p className="mt-4 text-sm text-white/80">
            By subscribing, you agree to receive promotional emails from Penafort Supermarket.
            You can unsubscribe at any time.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Newsletter;

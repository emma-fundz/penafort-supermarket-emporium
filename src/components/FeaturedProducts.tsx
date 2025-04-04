
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { ShoppingCart, Heart } from 'lucide-react';

const products = [
  {
    id: 1,
    name: 'Fresh Organic Apples',
    category: 'Fruits',
    price: 1500,
    discountPrice: 1200,
    image: 'https://images.unsplash.com/photo-1619546813926-a78fa6372cd2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80',
    rating: 4.5,
    reviewCount: 24,
    isNew: true,
    isSale: true
  },
  {
    id: 2,
    name: 'Premium Rice (5kg)',
    category: 'Grains',
    price: 5000,
    discountPrice: null,
    image: 'https://images.unsplash.com/photo-1586201375761-83865001e8ac?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80',
    rating: 4.8,
    reviewCount: 36,
    isNew: false,
    isSale: false
  },
  {
    id: 3,
    name: 'Chocolate Chip Cookies',
    category: 'Bakery',
    price: 1800,
    discountPrice: 1500,
    image: 'https://images.unsplash.com/photo-1499636136210-6f4ee915583e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80',
    rating: 4.3,
    reviewCount: 18,
    isNew: false,
    isSale: true
  },
  {
    id: 4,
    name: 'Fresh Milk (1L)',
    category: 'Dairy',
    price: 1200,
    discountPrice: null,
    image: 'https://images.unsplash.com/photo-1563636619-e9143da7973b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80',
    rating: 4.7,
    reviewCount: 42,
    isNew: true,
    isSale: false
  },
  {
    id: 5,
    name: 'Laundry Detergent',
    category: 'Household',
    price: 3500,
    discountPrice: 2800,
    image: 'https://images.unsplash.com/photo-1585441695325-21557c7c0e63?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80',
    rating: 4.4,
    reviewCount: 31,
    isNew: false,
    isSale: true
  },
  {
    id: 6,
    name: 'Premium Coffee Beans',
    category: 'Beverages',
    price: 4500,
    discountPrice: null,
    image: 'https://images.unsplash.com/photo-1559056199-641a0ac8b55e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80',
    rating: 4.9,
    reviewCount: 27,
    isNew: true,
    isSale: false
  },
  {
    id: 7,
    name: 'Fresh Chicken (Whole)',
    category: 'Meat',
    price: 3200,
    discountPrice: null,
    image: 'https://images.unsplash.com/photo-1587593810167-a84920ea0781?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80',
    rating: 4.6,
    reviewCount: 19,
    isNew: false,
    isSale: false
  },
  {
    id: 8,
    name: 'Pasta (Pack of 3)',
    category: 'Grains',
    price: 2200,
    discountPrice: 1800,
    image: 'https://images.unsplash.com/photo-1551462147-ff29053bfc14?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80',
    rating: 4.2,
    reviewCount: 23,
    isNew: false,
    isSale: true
  }
];

const FeaturedProducts = () => {
  const [hoveredProduct, setHoveredProduct] = useState<number | null>(null);

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('en-NG', {
      style: 'currency',
      currency: 'NGN',
      maximumFractionDigits: 0
    }).format(price);
  };

  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <h2 className="section-heading">Featured Products</h2>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-12">
          {products.map((product) => (
            <div 
              key={product.id} 
              className="product-card"
              onMouseEnter={() => setHoveredProduct(product.id)}
              onMouseLeave={() => setHoveredProduct(null)}
            >
              <div className="relative">
                <Link to={`/product/${product.id}`}>
                  <img 
                    src={product.image} 
                    alt={product.name}
                    className="w-full h-64 object-cover"
                  />
                </Link>
                
                {/* Product Labels */}
                <div className="absolute top-2 left-2 flex flex-col gap-2">
                  {product.isNew && (
                    <span className="bg-blue-500 text-white text-xs font-bold px-2 py-1 rounded">NEW</span>
                  )}
                  {product.isSale && (
                    <span className="bg-red-500 text-white text-xs font-bold px-2 py-1 rounded">SALE</span>
                  )}
                </div>
                
                {/* Quick Actions */}
                <div 
                  className={`absolute bottom-0 left-0 right-0 bg-white bg-opacity-90 p-2 flex justify-center gap-2 transition-all duration-300 ${
                    hoveredProduct === product.id ? 'opacity-100' : 'opacity-0'
                  }`}
                >
                  <button className="bg-penafort hover:bg-penafort-dark text-white p-2 rounded-full transition-colors duration-300">
                    <ShoppingCart size={18} />
                  </button>
                  <button className="bg-gray-200 hover:bg-gray-300 text-gray-700 p-2 rounded-full transition-colors duration-300">
                    <Heart size={18} />
                  </button>
                </div>
              </div>
              
              <div className="p-4">
                <div className="flex justify-between items-center mb-1">
                  <span className="text-sm text-gray-500">{product.category}</span>
                  <div className="flex items-center">
                    <span className="text-amber-500">★</span>
                    <span className="text-sm text-gray-600 ml-1">{product.rating} ({product.reviewCount})</span>
                  </div>
                </div>
                
                <Link to={`/product/${product.id}`}>
                  <h3 className="font-medium text-gray-800 hover:text-penafort transition-colors duration-300 mb-2">
                    {product.name}
                  </h3>
                </Link>
                
                <div className="flex items-center">
                  {product.discountPrice ? (
                    <>
                      <span className="font-bold text-gray-900 mr-2">{formatPrice(product.discountPrice)}</span>
                      <span className="text-sm text-gray-500 line-through">{formatPrice(product.price)}</span>
                    </>
                  ) : (
                    <span className="font-bold text-gray-900">{formatPrice(product.price)}</span>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-10">
          <Link to="/shop" className="btn-primary inline-flex items-center">
            View All Products
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default FeaturedProducts;

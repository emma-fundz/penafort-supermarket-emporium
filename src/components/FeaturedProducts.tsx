import { Link } from 'react-router-dom';
import ProductCard from './ProductCard';

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
  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <h2 className="section-heading">Featured Products</h2>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-12">
          {products.map((product) => (
            <ProductCard
              key={product.id}
              {...product}
            />
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

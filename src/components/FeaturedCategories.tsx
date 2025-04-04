
import { Link } from 'react-router-dom';

const categories = [
  {
    id: 1,
    name: 'Fresh Produce',
    image: 'https://images.unsplash.com/photo-1610348725531-843dff563e2c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80',
    link: '/shop/fresh-produce',
    count: 45
  },
  {
    id: 2,
    name: 'Dairy & Eggs',
    image: 'https://images.unsplash.com/photo-1628088062854-d1870b4553da?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80',
    link: '/shop/dairy-eggs',
    count: 32
  },
  {
    id: 3,
    name: 'Bakery',
    image: 'https://images.unsplash.com/photo-1608198093002-ad4e005484ec?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80',
    link: '/shop/bakery',
    count: 28
  },
  {
    id: 4,
    name: 'Meat & Seafood',
    image: 'https://images.unsplash.com/photo-1607623814075-e51df1bdc82f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80',
    link: '/shop/meat-seafood',
    count: 36
  },
  {
    id: 5,
    name: 'Household',
    image: 'https://images.unsplash.com/photo-1563453392212-326f5e854473?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80',
    link: '/shop/household',
    count: 54
  },
  {
    id: 6,
    name: 'Beverages',
    image: 'https://images.unsplash.com/photo-1596803244897-0f57d32549dc?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80',
    link: '/shop/beverages',
    count: 40
  }
];

const FeaturedCategories = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="section-heading">Shop by Category</h2>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-5 mt-12">
          {categories.map((category) => (
            <Link to={category.link} key={category.id} className="group">
              <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
                <div className="relative h-48 overflow-hidden">
                  <img 
                    src={category.image}
                    alt={category.name}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-20 transition-opacity duration-300 group-hover:bg-opacity-0"></div>
                </div>
                <div className="p-4 text-center">
                  <h3 className="font-semibold text-gray-800 group-hover:text-penafort transition-colors duration-300">
                    {category.name}
                  </h3>
                  <p className="text-sm text-gray-500">{category.count} items</p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedCategories;

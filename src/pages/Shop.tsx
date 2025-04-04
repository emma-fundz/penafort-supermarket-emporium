
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useState } from "react";
import { Filter, SlidersHorizontal, Grid, List, ChevronDown } from "lucide-react";

// Placeholder data for demonstration
const categories = [
  { id: "all", name: "All Categories" },
  { id: "fresh-produce", name: "Fresh Produce" },
  { id: "dairy-eggs", name: "Dairy & Eggs" },
  { id: "bakery", name: "Bakery" },
  { id: "meat-seafood", name: "Meat & Seafood" },
  { id: "household", name: "Household" },
  { id: "beverages", name: "Beverages" },
];

const products = [
  {
    id: 1,
    name: "Fresh Organic Apples",
    category: "Fresh Produce",
    price: 1500,
    discountPrice: 1200,
    image: "https://images.unsplash.com/photo-1619546813926-a78fa6372cd2",
    rating: 4.5,
    reviewCount: 24,
    isNew: true,
    isSale: true,
  },
  {
    id: 2,
    name: "Premium Rice (5kg)",
    category: "Grains",
    price: 5000,
    discountPrice: null,
    image: "https://images.unsplash.com/photo-1586201375761-83865001e8ac",
    rating: 4.8,
    reviewCount: 36,
    isNew: false,
    isSale: false,
  },
  // More products from the FeaturedProducts component
  {
    id: 3,
    name: "Chocolate Chip Cookies",
    category: "Bakery",
    price: 1800,
    discountPrice: 1500,
    image: "https://images.unsplash.com/photo-1499636136210-6f4ee915583e",
    rating: 4.3,
    reviewCount: 18,
    isNew: false,
    isSale: true,
  },
  {
    id: 4,
    name: "Fresh Milk (1L)",
    category: "Dairy",
    price: 1200,
    discountPrice: null,
    image: "https://images.unsplash.com/photo-1563636619-e9143da7973b",
    rating: 4.7,
    reviewCount: 42,
    isNew: true,
    isSale: false,
  },
  {
    id: 5,
    name: "Laundry Detergent",
    category: "Household",
    price: 3500,
    discountPrice: 2800,
    image: "https://images.unsplash.com/photo-1585441695325-21557c7c0e63",
    rating: 4.4,
    reviewCount: 31,
    isNew: false,
    isSale: true,
  },
  {
    id: 6,
    name: "Premium Coffee Beans",
    category: "Beverages",
    price: 4500,
    discountPrice: null,
    image: "https://images.unsplash.com/photo-1559056199-641a0ac8b55e",
    rating: 4.9,
    reviewCount: 27,
    isNew: true,
    isSale: false,
  },
];

const Shop = () => {
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid");
  const [showFilters, setShowFilters] = useState(false);

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat("en-NG", {
      style: "currency",
      currency: "NGN",
      maximumFractionDigits: 0,
    }).format(price);
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        {/* Page Header */}
        <div className="bg-gray-100 py-8">
          <div className="container mx-auto px-4">
            <h1 className="text-3xl font-bold text-gray-900">Shop</h1>
            <div className="flex items-center mt-2">
              <a href="/" className="text-gray-600 hover:text-penafort">
                Home
              </a>
              <span className="mx-2 text-gray-400">/</span>
              <span className="text-penafort">Shop</span>
            </div>
          </div>
        </div>

        {/* Shop Content */}
        <div className="container mx-auto px-4 py-8">
          <div className="flex flex-col md:flex-row">
            {/* Sidebar - Categories & Filters */}
            <div className="md:w-1/4 pr-0 md:pr-6 mb-6 md:mb-0">
              <div className="md:sticky md:top-24">
                <div className="bg-white rounded-lg shadow-md p-4 mb-4">
                  <h3 className="font-semibold text-gray-900 mb-4">Categories</h3>
                  <ul className="space-y-2">
                    {categories.map((category) => (
                      <li key={category.id}>
                        <button className="w-full text-left py-1 text-gray-700 hover:text-penafort">
                          {category.name}
                        </button>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="bg-white rounded-lg shadow-md p-4">
                  <h3 className="font-semibold text-gray-900 mb-4">Filter by Price</h3>
                  <div className="px-2">
                    <input 
                      type="range" 
                      min="0" 
                      max="10000" 
                      step="500"
                      className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-penafort"
                    />
                    <div className="flex justify-between mt-2 text-sm text-gray-600">
                      <span>₦0</span>
                      <span>₦10,000+</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Products */}
            <div className="md:w-3/4">
              {/* Toolbar */}
              <div className="bg-white rounded-lg shadow-md p-4 mb-6 flex flex-wrap justify-between items-center gap-3">
                <div className="flex items-center">
                  <button
                    onClick={() => setShowFilters(!showFilters)}
                    className="md:hidden flex items-center mr-4 text-sm font-medium text-gray-700"
                  >
                    <Filter size={18} className="mr-1" /> Filters
                  </button>
                  <span className="text-sm text-gray-600">Showing {products.length} products</span>
                </div>

                <div className="flex items-center">
                  <div className="mr-4">
                    <label htmlFor="sort" className="text-sm text-gray-600 mr-2">
                      Sort by:
                    </label>
                    <select
                      id="sort"
                      className="text-sm border-gray-300 rounded-md focus:ring-penafort focus:border-penafort"
                    >
                      <option>Featured</option>
                      <option>Price: Low to High</option>
                      <option>Price: High to Low</option>
                      <option>Newest</option>
                    </select>
                  </div>

                  <div className="flex space-x-2">
                    <button
                      onClick={() => setViewMode("grid")}
                      className={`p-1 rounded ${
                        viewMode === "grid" ? "bg-gray-200" : "hover:bg-gray-100"
                      }`}
                    >
                      <Grid size={20} />
                    </button>
                    <button
                      onClick={() => setViewMode("list")}
                      className={`p-1 rounded ${
                        viewMode === "list" ? "bg-gray-200" : "hover:bg-gray-100"
                      }`}
                    >
                      <List size={20} />
                    </button>
                  </div>
                </div>
              </div>

              {/* Mobile Filters */}
              {showFilters && (
                <div className="md:hidden bg-white rounded-lg shadow-md p-4 mb-6">
                  <div className="mb-4">
                    <div className="flex justify-between items-center">
                      <h3 className="font-semibold text-gray-900">Categories</h3>
                      <button onClick={() => setShowFilters(false)}>
                        <ChevronDown size={18} />
                      </button>
                    </div>
                    <ul className="mt-2 space-y-1">
                      {categories.map((category) => (
                        <li key={category.id}>
                          <button className="w-full text-left py-1 text-gray-700 hover:text-penafort">
                            {category.name}
                          </button>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              )}

              {/* Products Grid/List */}
              {viewMode === "grid" ? (
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                  {products.map((product) => (
                    <div key={product.id} className="product-card">
                      <div className="relative">
                        <a href={`/product/${product.id}`}>
                          <img
                            src={product.image}
                            alt={product.name}
                            className="w-full h-64 object-cover"
                          />
                        </a>

                        {/* Product Labels */}
                        <div className="absolute top-2 left-2 flex flex-col gap-2">
                          {product.isNew && (
                            <span className="bg-blue-500 text-white text-xs font-bold px-2 py-1 rounded">
                              NEW
                            </span>
                          )}
                          {product.isSale && (
                            <span className="bg-red-500 text-white text-xs font-bold px-2 py-1 rounded">
                              SALE
                            </span>
                          )}
                        </div>
                      </div>

                      <div className="p-4">
                        <div className="flex justify-between items-center mb-1">
                          <span className="text-sm text-gray-500">{product.category}</span>
                          <div className="flex items-center">
                            <span className="text-amber-500">★</span>
                            <span className="text-sm text-gray-600 ml-1">
                              {product.rating} ({product.reviewCount})
                            </span>
                          </div>
                        </div>

                        <a href={`/product/${product.id}`}>
                          <h3 className="font-medium text-gray-800 hover:text-penafort transition-colors duration-300 mb-2">
                            {product.name}
                          </h3>
                        </a>

                        <div className="flex items-center">
                          {product.discountPrice ? (
                            <>
                              <span className="font-bold text-gray-900 mr-2">
                                {formatPrice(product.discountPrice)}
                              </span>
                              <span className="text-sm text-gray-500 line-through">
                                {formatPrice(product.price)}
                              </span>
                            </>
                          ) : (
                            <span className="font-bold text-gray-900">
                              {formatPrice(product.price)}
                            </span>
                          )}
                        </div>

                        <button className="mt-4 w-full bg-penafort hover:bg-penafort-dark text-white py-2 rounded-md transition-colors duration-300">
                          Add to Cart
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              ) : (
                <div className="space-y-6">
                  {products.map((product) => (
                    <div key={product.id} className="product-card">
                      <div className="flex flex-col md:flex-row">
                        <div className="relative md:w-1/3">
                          <a href={`/product/${product.id}`}>
                            <img
                              src={product.image}
                              alt={product.name}
                              className="w-full h-64 md:h-full object-cover"
                            />
                          </a>
                          <div className="absolute top-2 left-2 flex flex-col gap-2">
                            {product.isNew && (
                              <span className="bg-blue-500 text-white text-xs font-bold px-2 py-1 rounded">
                                NEW
                              </span>
                            )}
                            {product.isSale && (
                              <span className="bg-red-500 text-white text-xs font-bold px-2 py-1 rounded">
                                SALE
                              </span>
                            )}
                          </div>
                        </div>
                        <div className="p-4 md:w-2/3">
                          <div className="flex justify-between items-center mb-1">
                            <span className="text-sm text-gray-500">{product.category}</span>
                            <div className="flex items-center">
                              <span className="text-amber-500">★</span>
                              <span className="text-sm text-gray-600 ml-1">
                                {product.rating} ({product.reviewCount})
                              </span>
                            </div>
                          </div>

                          <a href={`/product/${product.id}`}>
                            <h3 className="text-lg font-medium text-gray-800 hover:text-penafort transition-colors duration-300 mb-2">
                              {product.name}
                            </h3>
                          </a>

                          <p className="text-gray-600 mb-4">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
                            facilisi. Suspendisse potenti. Cras facilisis fringilla nisi, at
                            sagittis mi.
                          </p>

                          <div className="flex items-center mb-4">
                            {product.discountPrice ? (
                              <>
                                <span className="font-bold text-xl text-gray-900 mr-2">
                                  {formatPrice(product.discountPrice)}
                                </span>
                                <span className="text-gray-500 line-through">
                                  {formatPrice(product.price)}
                                </span>
                              </>
                            ) : (
                              <span className="font-bold text-xl text-gray-900">
                                {formatPrice(product.price)}
                              </span>
                            )}
                          </div>

                          <button className="bg-penafort hover:bg-penafort-dark text-white py-2 px-6 rounded-md transition-colors duration-300">
                            Add to Cart
                          </button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Shop;

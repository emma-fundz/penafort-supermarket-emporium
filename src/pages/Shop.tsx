import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ProductCard from "@/components/ProductCard";
import { useState, useEffect } from "react";
import { Filter, SlidersHorizontal, Grid, List, ChevronDown, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Slider } from "@/components/ui/slider";
import Newsletter from "@/components/Newsletter";

const categories = [
  { id: "all", name: "All Categories" },
  { id: "fresh-produce", name: "Fresh Produce" },
  { id: "dairy-eggs", name: "Dairy & Eggs" },
  { id: "bakery", name: "Bakery" },
  { id: "meat-seafood", name: "Meat & Seafood" },
  { id: "household", name: "Household" },
  { id: "beverages", name: "Beverages" },
  { id: "snacks", name: "Snacks" },
  { id: "frozen", name: "Frozen Foods" },
  { id: "canned", name: "Canned Goods" },
];

const products = [
  {
    id: 1,
    name: "Fresh Organic Apples",
    category: "Fresh Produce",
    price: 1500,
    discountPrice: 1200,
    image: "https://images.unsplash.com/photo-1619546813926-a78fa6372cd2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80",
    rating: 4.5,
    reviewCount: 24,
    isNew: true,
    isSale: true,
    tags: ["organic", "fruit", "fresh"]
  },
  {
    id: 2,
    name: "Premium Rice (5kg)",
    category: "Grains",
    price: 5000,
    discountPrice: null,
    image: "https://images.unsplash.com/photo-1586201375761-83865001e8ac?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80",
    rating: 4.8,
    reviewCount: 36,
    isNew: false,
    isSale: false,
    tags: ["grain", "staple", "premium"]
  },
  {
    id: 3,
    name: "Chocolate Chip Cookies",
    category: "Bakery",
    price: 1800,
    discountPrice: 1500,
    image: "https://images.unsplash.com/photo-1499636136210-6f4ee915583e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80",
    rating: 4.3,
    reviewCount: 18,
    isNew: false,
    isSale: true,
    tags: ["sweet", "bakery", "snack"]
  },
  {
    id: 4,
    name: "Fresh Milk (1L)",
    category: "Dairy & Eggs",
    price: 1200,
    discountPrice: null,
    image: "https://images.unsplash.com/photo-1563636619-e9143da7973b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80",
    rating: 4.7,
    reviewCount: 42,
    isNew: true,
    isSale: false,
    tags: ["dairy", "fresh", "beverage"]
  },
  {
    id: 5,
    name: "Laundry Detergent",
    category: "Household",
    price: 3500,
    discountPrice: 2800,
    image: "https://images.unsplash.com/photo-1585441695325-21557c7c0e63?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80",
    rating: 4.4,
    reviewCount: 31,
    isNew: false,
    isSale: true,
    tags: ["cleaning", "household"]
  },
  {
    id: 6,
    name: "Premium Coffee Beans",
    category: "Beverages",
    price: 4500,
    discountPrice: null,
    image: "https://images.unsplash.com/photo-1559056199-641a0ac8b55e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80",
    rating: 4.9,
    reviewCount: 27,
    isNew: true,
    isSale: false,
    tags: ["coffee", "beverage", "premium"]
  },
  {
    id: 7,
    name: "Fresh Chicken (Whole)",
    category: "Meat & Seafood",
    price: 3200,
    discountPrice: null,
    image: "https://images.unsplash.com/photo-1587593810167-a84920ea0781?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80",
    rating: 4.6,
    reviewCount: 19,
    isNew: false,
    isSale: false,
    tags: ["meat", "protein", "fresh"]
  },
  {
    id: 8,
    name: "Pasta (Pack of 3)",
    category: "Grains",
    price: 2200,
    discountPrice: 1800,
    image: "https://images.unsplash.com/photo-1551462147-ff29053bfc14?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80",
    rating: 4.2,
    reviewCount: 23,
    isNew: false,
    isSale: true,
    tags: ["pasta", "grain", "italian"]
  },
  {
    id: 9,
    name: "Organic Avocados",
    category: "Fresh Produce",
    price: 2500,
    discountPrice: 2000,
    image: "https://images.unsplash.com/photo-1523049673857-eb18f1d7b578?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80",
    rating: 4.8,
    reviewCount: 34,
    isNew: false,
    isSale: true,
    tags: ["organic", "fruit", "fresh"]
  },
  {
    id: 10,
    name: "Orange Juice (1L)",
    category: "Beverages",
    price: 1000,
    discountPrice: null,
    image: "https://images.unsplash.com/photo-1600271886742-f049cd451bba?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80",
    rating: 4.5,
    reviewCount: 28,
    isNew: true,
    isSale: false,
    tags: ["juice", "beverage", "fruit"]
  },
  {
    id: 11,
    name: "Premium Chocolate Bar",
    category: "Snacks",
    price: 1200,
    discountPrice: null,
    image: "https://images.unsplash.com/photo-1548907040-4baa42d10847?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80",
    rating: 4.7,
    reviewCount: 42,
    isNew: false,
    isSale: false,
    tags: ["chocolate", "snack", "sweet"]
  },
  {
    id: 12,
    name: "Fresh Bread Loaf",
    category: "Bakery",
    price: 800,
    discountPrice: null,
    image: "https://images.unsplash.com/photo-1549931319-a545dcf3bc7b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80",
    rating: 4.6,
    reviewCount: 31,
    isNew: true,
    isSale: false,
    tags: ["bread", "bakery", "fresh"]
  }
];

const Shop = () => {
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid");
  const [showFilters, setShowFilters] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [priceRange, setPriceRange] = useState([0, 5000]);
  const [sortBy, setSortBy] = useState("featured");
  const [filteredProducts, setFilteredProducts] = useState(products);
  const [isFiltering, setIsFiltering] = useState(false);

  useEffect(() => {
    setIsFiltering(true);
    
    let filtered = [...products];
    
    if (selectedCategory !== "all") {
      filtered = filtered.filter(product => 
        product.category.toLowerCase() === selectedCategory.replace(/-/g, ' ').toLowerCase()
      );
    }
    
    filtered = filtered.filter(product => {
      const effectivePrice = product.discountPrice || product.price;
      return effectivePrice >= priceRange[0] && effectivePrice <= priceRange[1];
    });
    
    switch (sortBy) {
      case "price-low-high":
        filtered.sort((a, b) => {
          const priceA = a.discountPrice || a.price;
          const priceB = b.discountPrice || b.price;
          return priceA - priceB;
        });
        break;
      case "price-high-low":
        filtered.sort((a, b) => {
          const priceA = a.discountPrice || a.price;
          const priceB = b.discountPrice || b.price;
          return priceB - priceA;
        });
        break;
      case "newest":
        filtered.sort((a, b) => (a.isNew === b.isNew ? 0 : a.isNew ? -1 : 1));
        break;
      case "rating":
        filtered.sort((a, b) => b.rating - a.rating);
        break;
      default: // featured
        break;
    }
    
    setTimeout(() => {
      setFilteredProducts(filtered);
      setIsFiltering(false);
    }, 300);
  }, [selectedCategory, priceRange, sortBy]);

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat("en-NG", {
      style: "currency",
      currency: "NGN",
      maximumFractionDigits: 0,
    }).format(price);
  };

  const resetFilters = () => {
    setSelectedCategory("all");
    setPriceRange([0, 5000]);
    setSortBy("featured");
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <motion.section 
          className="bg-gradient-to-r from-green-700 to-green-900 py-12 text-white"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <div className="container mx-auto px-4">
            <h1 className="text-3xl md:text-4xl font-bold mb-4">Shop Our Products</h1>
            <div className="flex items-center">
              <a href="/" className="text-gray-200 hover:text-white transition-colors">
                Home
              </a>
              <span className="mx-2 text-gray-300">/</span>
              <span className="text-white font-medium">Shop</span>
            </div>
          </div>
        </motion.section>

        <div className="container mx-auto px-4 py-8">
          <div className="flex flex-col lg:flex-row">
            <motion.div 
              className="lg:w-1/4 pr-0 lg:pr-6 mb-6 lg:mb-0 hidden lg:block"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
            >
              <div className="lg:sticky lg:top-24 space-y-6">
                <div className="bg-white rounded-lg shadow-md p-4">
                  <h3 className="font-semibold text-gray-900 mb-4 flex items-center justify-between">
                    Categories
                    {selectedCategory !== "all" && (
                      <button 
                        onClick={() => setSelectedCategory("all")}
                        className="text-xs text-gray-500 hover:text-penafort"
                      >
                        Reset
                      </button>
                    )}
                  </h3>
                  <ul className="space-y-2">
                    {categories.map((category) => (
                      <li key={category.id}>
                        <button 
                          className={`w-full text-left py-1 px-2 rounded transition-colors ${
                            selectedCategory === category.id
                              ? "bg-green-100 text-penafort font-medium"
                              : "text-gray-700 hover:text-penafort"
                          }`}
                          onClick={() => setSelectedCategory(category.id)}
                        >
                          {category.name}
                        </button>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="bg-white rounded-lg shadow-md p-4">
                  <h3 className="font-semibold text-gray-900 mb-4 flex items-center justify-between">
                    Filter by Price
                    {(priceRange[0] !== 0 || priceRange[1] !== 5000) && (
                      <button 
                        onClick={() => setPriceRange([0, 5000])}
                        className="text-xs text-gray-500 hover:text-penafort"
                      >
                        Reset
                      </button>
                    )}
                  </h3>
                  <div className="px-2">
                    <Slider
                      defaultValue={[0, 5000]}
                      min={0}
                      max={5000}
                      step={100}
                      value={priceRange}
                      onValueChange={(value) => setPriceRange(value as [number, number])}
                      className="my-6"
                    />
                    <div className="flex justify-between mt-2 text-sm text-gray-600">
                      <span>{formatPrice(priceRange[0])}</span>
                      <span>{formatPrice(priceRange[1])}</span>
                    </div>
                  </div>
                </div>

                <div className="bg-white rounded-lg shadow-md p-4">
                  <h3 className="font-semibold text-gray-900 mb-4">Product Status</h3>
                  <div className="space-y-2">
                    <label className="flex items-center space-x-2 cursor-pointer">
                      <input type="checkbox" className="rounded text-penafort focus:ring-penafort" />
                      <span className="text-gray-700">On Sale</span>
                    </label>
                    <label className="flex items-center space-x-2 cursor-pointer">
                      <input type="checkbox" className="rounded text-penafort focus:ring-penafort" />
                      <span className="text-gray-700">New Arrivals</span>
                    </label>
                    <label className="flex items-center space-x-2 cursor-pointer">
                      <input type="checkbox" className="rounded text-penafort focus:ring-penafort" />
                      <span className="text-gray-700">In Stock</span>
                    </label>
                  </div>
                </div>

                <div className="bg-white rounded-lg shadow-md p-4">
                  <h3 className="font-semibold text-gray-900 mb-4">Popular Tags</h3>
                  <div className="flex flex-wrap gap-2">
                    <button className="px-3 py-1 bg-gray-100 hover:bg-gray-200 text-gray-700 text-sm rounded-full transition-colors">
                      organic
                    </button>
                    <button className="px-3 py-1 bg-gray-100 hover:bg-gray-200 text-gray-700 text-sm rounded-full transition-colors">
                      fresh
                    </button>
                    <button className="px-3 py-1 bg-gray-100 hover:bg-gray-200 text-gray-700 text-sm rounded-full transition-colors">
                      fruit
                    </button>
                    <button className="px-3 py-1 bg-gray-100 hover:bg-gray-200 text-gray-700 text-sm rounded-full transition-colors">
                      beverage
                    </button>
                    <button className="px-3 py-1 bg-gray-100 hover:bg-gray-200 text-gray-700 text-sm rounded-full transition-colors">
                      dairy
                    </button>
                    <button className="px-3 py-1 bg-gray-100 hover:bg-gray-200 text-gray-700 text-sm rounded-full transition-colors">
                      snack
                    </button>
                  </div>
                </div>
              </div>
            </motion.div>

            <div className="lg:w-3/4">
              <div className="bg-white rounded-lg shadow-md p-4 mb-6 flex flex-wrap justify-between items-center gap-3">
                <div className="flex items-center flex-grow">
                  <button
                    onClick={() => setShowFilters(!showFilters)}
                    className="lg:hidden flex items-center mr-4 text-sm font-medium text-gray-700"
                  >
                    <Filter size={18} className="mr-1" /> Filters
                  </button>
                  <span className="text-sm text-gray-600">
                    Showing {filteredProducts.length} products
                  </span>
                </div>

                <div className="flex items-center gap-4 flex-grow sm:flex-grow-0 justify-end w-full sm:w-auto">
                  <div className="flex-grow sm:flex-grow-0">
                    <Select 
                      value={sortBy} 
                      onValueChange={(value) => setSortBy(value)}
                    >
                      <SelectTrigger className="w-[180px]">
                        <SelectValue placeholder="Sort by" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="featured">Featured</SelectItem>
                        <SelectItem value="price-low-high">Price: Low to High</SelectItem>
                        <SelectItem value="price-high-low">Price: High to Low</SelectItem>
                        <SelectItem value="newest">Newest</SelectItem>
                        <SelectItem value="rating">Best Rating</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="flex space-x-2">
                    <button
                      onClick={() => setViewMode("grid")}
                      className={`p-2 rounded-md ${
                        viewMode === "grid" 
                          ? "bg-gray-200 text-gray-800" 
                          : "text-gray-600 hover:bg-gray-100"
                      }`}
                    >
                      <Grid size={18} />
                    </button>
                    <button
                      onClick={() => setViewMode("list")}
                      className={`p-2 rounded-md ${
                        viewMode === "list" 
                          ? "bg-gray-200 text-gray-800" 
                          : "text-gray-600 hover:bg-gray-100"
                      }`}
                    >
                      <List size={18} />
                    </button>
                  </div>
                </div>
              </div>

              <AnimatePresence>
                {showFilters && (
                  <motion.div 
                    className="lg:hidden bg-white rounded-lg shadow-md p-4 mb-6"
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="flex justify-between items-center mb-4">
                      <h3 className="font-semibold text-gray-900">Filters</h3>
                      <div className="flex items-center gap-4">
                        <button 
                          onClick={resetFilters}
                          className="text-sm text-gray-500 hover:text-penafort"
                        >
                          Reset All
                        </button>
                        <button onClick={() => setShowFilters(false)}>
                          <X size={20} />
                        </button>
                      </div>
                    </div>
                    
                    <div className="mb-6">
                      <h4 className="font-medium text-gray-800 mb-2">Categories</h4>
                      <div className="flex flex-wrap gap-2">
                        {categories.map((category) => (
                          <button
                            key={category.id}
                            className={`px-3 py-1 rounded-full text-sm ${
                              selectedCategory === category.id
                                ? "bg-penafort text-white"
                                : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                            }`}
                            onClick={() => {
                              setSelectedCategory(category.id);
                              if (window.innerWidth < 768) {
                                setShowFilters(false);
                              }
                            }}
                          >
                            {category.name}
                          </button>
                        ))}
                      </div>
                    </div>
                    
                    <div className="mb-6">
                      <h4 className="font-medium text-gray-800 mb-2">Price Range</h4>
                      <Slider
                        defaultValue={[0, 5000]}
                        min={0}
                        max={5000}
                        step={100}
                        value={priceRange}
                        onValueChange={(value) => setPriceRange(value as [number, number])}
                        className="my-6"
                      />
                      <div className="flex justify-between mt-2 text-sm text-gray-600">
                        <span>{formatPrice(priceRange[0])}</span>
                        <span>{formatPrice(priceRange[1])}</span>
                      </div>
                    </div>
                    
                    <Button 
                      className="w-full bg-penafort hover:bg-penafort-dark"
                      onClick={() => setShowFilters(false)}
                    >
                      Apply Filters
                    </Button>
                  </motion.div>
                )}
              </AnimatePresence>

              {(selectedCategory !== "all" || priceRange[0] !== 0 || priceRange[1] !== 5000) && (
                <div className="bg-gray-50 rounded-lg p-3 mb-6 flex flex-wrap items-center gap-2">
                  <span className="text-sm text-gray-600 mr-2">Active Filters:</span>
                  
                  {selectedCategory !== "all" && (
                    <div className="bg-white px-3 py-1 rounded-full text-sm text-gray-700 flex items-center border">
                      Category: {categories.find(c => c.id === selectedCategory)?.name}
                      <button 
                        className="ml-2 text-gray-400 hover:text-gray-600"
                        onClick={() => setSelectedCategory("all")}
                      >
                        <X size={14} />
                      </button>
                    </div>
                  )}
                  
                  {(priceRange[0] !== 0 || priceRange[1] !== 5000) && (
                    <div className="bg-white px-3 py-1 rounded-full text-sm text-gray-700 flex items-center border">
                      Price: {formatPrice(priceRange[0])} - {formatPrice(priceRange[1])}
                      <button 
                        className="ml-2 text-gray-400 hover:text-gray-600"
                        onClick={() => setPriceRange([0, 5000])}
                      >
                        <X size={14} />
                      </button>
                    </div>
                  )}
                  
                  <button 
                    className="text-penafort hover:underline text-sm ml-auto"
                    onClick={resetFilters}
                  >
                    Clear All
                  </button>
                </div>
              )}

              <motion.div 
                initial={{ opacity: 1 }}
                animate={{ opacity: isFiltering ? 0.5 : 1 }}
                transition={{ duration: 0.3 }}
              >
                {filteredProducts.length === 0 ? (
                  <div className="bg-white rounded-lg shadow-md p-8 text-center">
                    <div className="w-16 h-16 mx-auto bg-gray-100 rounded-full flex items-center justify-center mb-4">
                      <SlidersHorizontal size={24} className="text-gray-400" />
                    </div>
                    <h3 className="text-lg font-medium text-gray-900 mb-2">No products found</h3>
                    <p className="text-gray-600 mb-6">
                      Try adjusting your filters or search criteria to find what you're looking for.
                    </p>
                    <Button onClick={resetFilters} className="bg-penafort hover:bg-penafort-dark">
                      Reset Filters
                    </Button>
                  </div>
                ) : viewMode === "grid" ? (
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {filteredProducts.map((product) => (
                      <ProductCard
                        key={product.id}
                        {...product}
                      />
                    ))}
                  </div>
                ) : (
                  <div className="space-y-6">
                    {filteredProducts.map((product) => (
                      <motion.div 
                        key={product.id} 
                        className="product-card bg-white rounded-lg shadow-md overflow-hidden"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.4 }}
                        whileHover={{ y: -5 }}
                      >
                        <div className="flex flex-col md:flex-row">
                          <div className="relative md:w-1/3">
                            <Link to={`/product/${product.id}`}>
                              <div className="overflow-hidden">
                                <motion.img
                                  src={product.image}
                                  alt={product.name}
                                  className="w-full h-64 md:h-full object-cover"
                                  whileHover={{ scale: 1.05 }}
                                  transition={{ duration: 0.4 }}
                                />
                              </div>
                            </Link>
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
                          <div className="p-6 md:w-2/3">
                            <div className="flex justify-between items-center mb-2">
                              <span className="text-sm text-gray-500">{product.category}</span>
                              <div className="flex items-center">
                                <span className="text-amber-500">★</span>
                                <span className="text-sm text-gray-600 ml-1">
                                  {product.rating} ({product.reviewCount})
                                </span>
                              </div>
                            </div>

                            <Link to={`/product/${product.id}`}>
                              <h3 className="text-xl font-medium text-gray-800 hover:text-penafort transition-colors duration-300 mb-3">
                                {product.name}
                              </h3>
                            </Link>

                            <p className="text-gray-600 mb-4 line-clamp-2">
                              Premium quality {product.name.toLowerCase()} carefully selected for our customers. 
                              Enjoy the freshness and taste that Penafort Supermarket guarantees.
                            </p>

                            <div className="flex flex-wrap gap-2 mb-4">
                              {product.tags && product.tags.map(tag => (
                                <span key={tag} className="bg-gray-100 text-gray-600 text-xs px-2 py-1 rounded-full">
                                  {tag}
                                </span>
                              ))}
                            </div>

                            <div className="flex flex-wrap justify-between items-center">
                              <div className="flex items-center mb-4 md:mb-0">
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

                              <Button className="bg-penafort hover:bg-penafort-dark">
                                Add to Cart
                              </Button>
                            </div>
                          </div>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                )}
              </motion.div>

              {filteredProducts.length > 0 && (
                <div className="mt-12 flex justify-center">
                  <nav className="flex items-center space-x-2">
                    <button className="px-3 py-2 rounded-md bg-white border border-gray-300 text-gray-700 hover:bg-gray-50">
                      Previous
                    </button>
                    <button className="px-3 py-2 rounded-md bg-penafort text-white">1</button>
                    <button className="px-3 py-2 rounded-md bg-white border border-gray-300 text-gray-700 hover:bg-gray-50">
                      2
                    </button>
                    <button className="px-3 py-2 rounded-md bg-white border border-gray-300 text-gray-700 hover:bg-gray-50">
                      3
                    </button>
                    <button className="px-3 py-2 rounded-md bg-white border border-gray-300 text-gray-700 hover:bg-gray-50">
                      Next
                    </button>
                  </nav>
                </div>
              )}
            </div>
          </div>
        </div>
        
        <Newsletter />
      </main>
      <Footer />
    </div>
  );
};

export default Shop;

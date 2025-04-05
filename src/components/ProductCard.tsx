
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ShoppingCart, Heart, Eye } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';
import { useCart } from '@/context/CartContext';
import { toast } from 'sonner';

export interface ProductCardProps {
  id: number;
  name: string;
  category: string;
  price: number;
  discountPrice: number | null;
  image: string;
  rating: number;
  reviewCount: number;
  isNew?: boolean;
  isSale?: boolean;
}

const ProductCard = ({
  id,
  name,
  category,
  price,
  discountPrice,
  image,
  rating,
  reviewCount,
  isNew = false,
  isSale = false
}: ProductCardProps) => {
  const [isHovered, setIsHovered] = useState(false);
  const { addToCart } = useCart();
  
  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('en-NG', {
      style: 'currency',
      currency: 'NGN',
      maximumFractionDigits: 0
    }).format(price);
  };

  const handleAddToCart = () => {
    addToCart({
      id,
      name,
      price: discountPrice || price,
      image,
      quantity: 1
    });
    toast.success(`${name} added to cart!`);
  };

  const handleQuickAdd = (e: React.MouseEvent) => {
    e.preventDefault();
    handleAddToCart();
  };

  const handleWishlist = (e: React.MouseEvent) => {
    e.preventDefault();
    toast.info('Added to wishlist!');
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      whileHover={{ y: -5 }}
    >
      <Card 
        className="product-card overflow-hidden h-full transition-all duration-300 hover:shadow-lg border border-gray-200"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <div className="relative">
          <Link to={`/product/${id}`}>
            <div className="overflow-hidden">
              <motion.img 
                src={image} 
                alt={name}
                className="w-full h-52 object-cover"
                whileHover={{ scale: 1.1 }}
                transition={{ duration: 0.4 }}
              />
            </div>
          </Link>
          
          {/* Product Labels */}
          <div className="absolute top-2 left-2 flex flex-col gap-2">
            {isNew && (
              <motion.span 
                className="bg-blue-500 text-white text-xs font-bold px-2 py-1 rounded"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.3 }}
              >
                NEW
              </motion.span>
            )}
            {isSale && (
              <motion.span 
                className="bg-red-500 text-white text-xs font-bold px-2 py-1 rounded"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.3, delay: 0.1 }}
              >
                SALE
              </motion.span>
            )}
          </div>
          
          {/* Quick Actions */}
          <motion.div 
            className="absolute bottom-0 left-0 right-0 bg-white bg-opacity-90 p-2 flex justify-center gap-2"
            initial={{ opacity: 0, y: 20 }}
            animate={{ 
              opacity: isHovered ? 1 : 0,
              y: isHovered ? 0 : 20
            }}
            transition={{ duration: 0.3 }}
          >
            <Button 
              size="icon" 
              variant="default" 
              className="rounded-full bg-penafort hover:bg-penafort-dark"
              onClick={handleQuickAdd}
            >
              <ShoppingCart className="h-4 w-4" />
            </Button>
            <Button 
              size="icon" 
              variant="secondary" 
              className="rounded-full"
              onClick={handleWishlist}
            >
              <Heart className="h-4 w-4" />
            </Button>
            <Button 
              size="icon" 
              variant="outline" 
              className="rounded-full"
              asChild
            >
              <Link to={`/product/${id}`}>
                <Eye className="h-4 w-4" />
              </Link>
            </Button>
          </motion.div>
        </div>
        
        <CardContent className="p-4">
          <div className="flex justify-between items-center mb-1">
            <span className="text-sm text-muted-foreground">{category}</span>
            <div className="flex items-center">
              <span className="text-amber-500">★</span>
              <span className="text-sm text-muted-foreground ml-1">{rating} ({reviewCount})</span>
            </div>
          </div>
          
          <Link to={`/product/${id}`}>
            <h3 className="font-medium text-foreground hover:text-penafort transition-colors duration-300 line-clamp-2 h-12">
              {name}
            </h3>
          </Link>
          
          <div className="flex items-center mt-2">
            {discountPrice ? (
              <>
                <span className="font-bold text-foreground mr-2">{formatPrice(discountPrice)}</span>
                <span className="text-sm text-muted-foreground line-through">{formatPrice(price)}</span>
              </>
            ) : (
              <span className="font-bold text-foreground">{formatPrice(price)}</span>
            )}
          </div>
          
          <Button 
            className="w-full mt-4 bg-penafort hover:bg-penafort-dark transition-all duration-300 transform hover:scale-105" 
            size="sm"
            onClick={handleAddToCart}
          >
            Add to Cart
          </Button>
        </CardContent>
      </Card>
    </motion.div>
  );
};

export default ProductCard;

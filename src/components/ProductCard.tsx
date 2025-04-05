
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ShoppingCart, Heart } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

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
  
  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('en-NG', {
      style: 'currency',
      currency: 'NGN',
      maximumFractionDigits: 0
    }).format(price);
  };

  return (
    <Card 
      className="product-card overflow-hidden h-full transition-all duration-300 hover:shadow-md"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="relative">
        <Link to={`/product/${id}`}>
          <img 
            src={image} 
            alt={name}
            className="w-full h-52 object-cover transition-transform duration-300 hover:scale-105"
          />
        </Link>
        
        {/* Product Labels */}
        <div className="absolute top-2 left-2 flex flex-col gap-2">
          {isNew && (
            <span className="bg-blue-500 text-white text-xs font-bold px-2 py-1 rounded">NEW</span>
          )}
          {isSale && (
            <span className="bg-red-500 text-white text-xs font-bold px-2 py-1 rounded">SALE</span>
          )}
        </div>
        
        {/* Quick Actions */}
        <div 
          className={`absolute bottom-0 left-0 right-0 bg-white bg-opacity-90 p-2 flex justify-center gap-2 transition-all duration-300 ${
            isHovered ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
          }`}
        >
          <Button 
            size="icon" 
            variant="default" 
            className="rounded-full bg-penafort hover:bg-penafort-dark"
          >
            <ShoppingCart className="h-4 w-4" />
          </Button>
          <Button 
            size="icon" 
            variant="secondary" 
            className="rounded-full"
          >
            <Heart className="h-4 w-4" />
          </Button>
        </div>
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
          className="w-full mt-4 bg-penafort hover:bg-penafort-dark" 
          size="sm"
        >
          Add to Cart
        </Button>
      </CardContent>
    </Card>
  );
};

export default ProductCard;

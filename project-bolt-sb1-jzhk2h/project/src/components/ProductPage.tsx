import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { ShoppingCart, Star, TruckIcon, Shield, ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';

const products = {
  'summer-dress-001': {
    name: 'Limited Edition Summer Dress',
    price: '59.99',
    description: 'Stunning summer dress made from breathable cotton blend. Perfect for beach days and summer parties. Features a flattering A-line cut and adjustable straps for the perfect fit. The fabric is lightweight and quick-drying, making it ideal for hot summer days.',
    rating: 4.8,
    reviews: 342,
    images: [
      'https://images.unsplash.com/photo-1515372039744-b8f02a3ae446?w=500',
      'https://images.unsplash.com/photo-1515372039744-b8f02a3ae446?w=500',
    ],
    sizes: ['XS', 'S', 'M', 'L', 'XL'],
    colors: ['Coral', 'Sky Blue', 'Mint'],
  },
  'gaming-headset-002': {
    name: 'Pro Gaming Headset X3',
    price: '129.99',
    description: 'Next-gen gaming headphones with 3D spatial audio, noise cancellation, and premium comfort. Features 50mm drivers for crystal clear sound, memory foam ear cushions, and a detachable noise-canceling microphone. Perfect for professional gaming and streaming.',
    rating: 4.9,
    reviews: 567,
    images: [
      'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=500',
      'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=500',
    ],
    features: ['3D Audio', 'Noise Cancellation', 'RGB Lighting'],
  },
  'matte-lipstick-003': {
    name: '24h Perfect Matte Lipstick',
    price: '24.99',
    description: 'Long-lasting matte lipstick that stays perfect for 24 hours. Waterproof and smudge-resistant formula enriched with vitamin E and jojoba oil for comfortable wear. The precision tip applicator ensures perfect application every time.',
    rating: 4.7,
    reviews: 892,
    images: [
      'https://images.unsplash.com/photo-1586495777744-4413f21062fa?w=500',
      'https://images.unsplash.com/photo-1586495777744-4413f21062fa?w=500',
    ],
    shades: ['Ruby Red', 'Coral Pink', 'Mauve', 'Burgundy'],
  },
};

export function ProductPage() {
  const { productId } = useParams();
  const product = products[productId as keyof typeof products];
  const [selectedSize, setSelectedSize] = useState('');
  const [selectedColor, setSelectedColor] = useState('');

  if (!product) {
    return <div>Product not found</div>;
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 py-8">
        <Link to="/" className="inline-flex items-center gap-2 text-gray-600 mb-6">
          <ArrowLeft size={20} />
          <span>Back to Feed</span>
        </Link>

        <div className="grid md:grid-cols-2 gap-8">
          <div className="space-y-4">
            <div className="aspect-square rounded-lg overflow-hidden bg-white">
              <img
                src={product.images[0]}
                alt={product.name}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="grid grid-cols-4 gap-2">
              {product.images.map((img, i) => (
                <img
                  key={i}
                  src={img}
                  alt={`${product.name} view ${i + 1}`}
                  className="aspect-square rounded-lg object-cover cursor-pointer hover:opacity-75"
                />
              ))}
            </div>
          </div>

          <div className="space-y-6">
            <div>
              <h1 className="text-3xl font-bold text-gray-900">{product.name}</h1>
              <div className="flex items-center gap-2 mt-2">
                <div className="flex items-center gap-1">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      size={16}
                      className={i < Math.floor(product.rating) ? 'text-yellow-400 fill-yellow-400' : 'text-gray-300'}
                    />
                  ))}
                </div>
                <span className="text-sm text-gray-600">
                  {product.rating} ({product.reviews} reviews)
                </span>
              </div>
            </div>

            <div className="text-3xl font-bold text-gray-900">${product.price}</div>

            <p className="text-gray-600 leading-relaxed">{product.description}</p>

            {product.sizes && (
              <div>
                <h3 className="font-medium text-gray-900 mb-2">Select Size</h3>
                <div className="flex gap-2">
                  {product.sizes.map((size) => (
                    <button
                      key={size}
                      onClick={() => setSelectedSize(size)}
                      className={`px-4 py-2 border rounded-md text-white ${
                        selectedSize === size
                          ? 'bg-black border-black'
                          : 'bg-gray-700 border-gray-700 hover:bg-gray-800'
                      }`}
                    >
                      {size}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {product.colors && (
              <div>
                <h3 className="font-medium text-gray-900 mb-2">Select Color</h3>
                <div className="flex gap-2">
                  {product.colors.map((color) => (
                    <button
                      key={color}
                      onClick={() => setSelectedColor(color)}
                      className={`px-4 py-2 border rounded-md text-white ${
                        selectedColor === color
                          ? 'bg-black border-black'
                          : 'bg-gray-700 border-gray-700 hover:bg-gray-800'
                      }`}
                    >
                      {color}
                    </button>
                  ))}
                </div>
              </div>
            )}

            <button className="w-full bg-black text-white py-4 rounded-lg font-medium hover:bg-gray-800 flex items-center justify-center gap-2">
              <ShoppingCart size={20} />
              Add to Cart
            </button>

            <div className="grid grid-cols-3 gap-4 pt-6 border-t">
              <div className="flex flex-col items-center text-center">
                <TruckIcon size={24} className="text-gray-600" />
                <span className="text-sm mt-1">Free Shipping</span>
              </div>
              <div className="flex flex-col items-center text-center">
                <Shield size={24} className="text-gray-600" />
                <span className="text-sm mt-1">1 Year Warranty</span>
              </div>
              <div className="flex flex-col items-center text-center">
                <Star size={24} className="text-gray-600" />
                <span className="text-sm mt-1">Top Rated</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
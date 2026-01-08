import React from 'react';
import { ExternalLink } from 'lucide-react';
import { PRODUCTS } from '../constants';

const ProductGallery: React.FC = () => {
  return (
    <div className="grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-6">
      {PRODUCTS.map((product) => {
        const CardContent = () => (
          <>
            <div className="relative aspect-square overflow-hidden">
              <img 
                src={product.image} 
                alt={product.code} 
                className="w-full h-full object-cover object-center"
              />
              {product.url && (
                <div className="absolute top-2 right-2 bg-white/80 p-1 rounded-full shadow-sm text-stone-600">
                  <ExternalLink size={16} />
                </div>
              )}
            </div>
            <div className="p-3 bg-white flex-grow">
              <div className="mb-2">
                <span className="font-bold text-sm text-stone-800 block mb-1">{product.code}</span>
                <div className="flex items-baseline gap-2">
                  {product.salePrice ? (
                    <>
                      <span className="text-xs text-stone-400 line-through">
                        定価 ¥{product.price.toLocaleString()}
                      </span>
                      <span className="text-lg font-bold text-pink-600">
                        セール ¥{product.salePrice.toLocaleString()}
                      </span>
                    </>
                  ) : (
                    <>
                      <span className="text-xs text-stone-400">
                        定価 ¥{product.price.toLocaleString()}
                      </span>
                      <span className="text-xs text-stone-500 ml-1">セール価格：未確定</span>
                    </>
                  )}
                </div>
              </div>
              <p className="text-xs text-stone-600 leading-relaxed">
                {product.description}
              </p>
            </div>
          </>
        );

        if (product.url) {
          return (
            <a 
              key={product.id}
              href={product.url}
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-col rounded-xl overflow-hidden shadow-md bg-white hover:shadow-lg transition-shadow cursor-pointer block group"
            >
              <CardContent />
            </a>
          );
        }

        return (
          <div 
            key={product.id}
            className="flex flex-col rounded-xl overflow-hidden shadow-md bg-white hover:shadow-lg transition-shadow"
          >
            <CardContent />
          </div>
        );
      })}
    </div>
  );
};

export default ProductGallery;
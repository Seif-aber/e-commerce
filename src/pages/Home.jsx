import { useState, useEffect } from 'react';
import ProductCard from '../components/ProductCard';

const Home = () => {
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch('https://api.escuelajs.co/api/v1/products');
        if (!response.ok) {
          throw new Error('Failed to fetch products');
        }
        const data = await response.json();
        
        // Sanitize and filter products to remove junk data from user-generated API
        const cleanedData = data
          .filter((product) => {
            // Validate title: must be at least 4 characters
            if (!product.title || product.title.length < 4) return false;
            
            // Exclude keyboard-smash test strings
            const junkPatterns = /\b(test|asdf|dsad|ffs|qwer)\b/i;
            if (junkPatterns.test(product.title)) return false;
            
            // Validate images array exists and has at least one item
            if (!product.images || !Array.isArray(product.images) || product.images.length === 0) {
              return false;
            }
            
            const imageUrl = product.images[0];
            if (!imageUrl) return false;
            
            // Exclude placeholder and generic images
            const placeholderPatterns = /placeholder|any|600x400|placeimg/i;
            if (placeholderPatterns.test(imageUrl)) return false;
            
            return true;
          })
          .reduce((uniqueProducts, product) => {
            // Remove duplicates based on title (case-insensitive)
            if (!uniqueProducts.find(p => p.title.toLowerCase() === product.title.toLowerCase())) {
              uniqueProducts.push(product);
            }
            return uniqueProducts;
          }, []);
        
        setProducts(cleanedData);
      } catch (err) {
        setError(err.message);
      } finally {
        setIsLoading(false);
      }
    };

    fetchProducts();
  }, []);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
      <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 dark:text-white mb-10 text-center">
        Discover Our Collection
      </h2>

      {isLoading && (
        <div className="flex justify-center items-center h-64">
          <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-b-4 border-blue-600 border-t-transparent dark:border-blue-400 dark:border-t-transparent"></div>
        </div>
      )}

      {error && (
        <div className="flex justify-center items-center h-64">
          <div className="bg-red-50 dark:bg-red-900/20 text-red-600 dark:text-red-400 border border-red-200 dark:border-red-800 rounded-lg p-6 max-w-lg text-center">
            <h3 className="text-lg font-bold mb-2">Oops! Something went wrong</h3>
            <p>{error}</p>
          </div>
        </div>
      )}

      {!isLoading && !error && (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      )}
    </div>
  );
};

export default Home;

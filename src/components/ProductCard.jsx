const ProductCard = ({ product }) => {
  return (
    <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-md hover:shadow-xl hover:-translate-y-1 transition-all duration-300 overflow-hidden flex flex-col h-full border border-gray-100 dark:border-gray-700">
      {/* 
        Image Container: 
        Forcing a white background even in dark mode for the image area 
        keeps product images (which often have white backgrounds) looking clean.
      */}
      <div className="bg-white p-6 h-64 flex justify-center items-center relative overflow-hidden">
        <img
          src={product.images[0] || 'https://via.placeholder.com/300'}
          alt={product.title}
          className="object-contain h-full w-full group-hover:scale-105 transition-transform duration-300"
        />
      </div>

      {/* Content Container */}
      <div className="p-5 flex flex-col flex-grow text-left">
        <span className="text-xs font-bold text-blue-600 dark:text-blue-400 uppercase tracking-wider mb-2">
          {product.category.name}
        </span>
        
        <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100 mb-3 line-clamp-2">
          {product.title}
        </h3>
        
        {/* Pushes the price and button to the bottom using mt-auto */}
        <div className="mt-auto flex items-center justify-between">
          <span className="text-2xl font-bold text-gray-900 dark:text-white">
            ${product.price.toFixed(2)}
          </span>
          <button 
            type="button"
            className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded-lg transition-colors duration-200 active:scale-95"
          >
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;

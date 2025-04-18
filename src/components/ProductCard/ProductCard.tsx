interface Product {
  name: string;
  image: string;
  model: string;
  brand: string;
  category: string;
  description: string;
}

export default function ProductCard({ product }: { product: Product }) {
  const { name, image, model, brand, category, description } = product;

  return (
    <div className="rounded-lg border border-gray-300">
      <img className="w-full h-64 object-cover" src={image} alt={name} />
      <div className="p-5 bg-white">
        <h3 className="text-xl font-semibold text-gray-800 truncate">{name}</h3>
        <p className="text-sm text-gray-500 mt-1">{model}</p>
        <p className="text-sm text-gray-600 mt-1">{brand}</p>
        <p className="text-sm text-gray-400 mt-1">{category}</p>
        <p className="text-gray-700 mt-3">{description}</p>
        <div className="mt-4 flex justify-between items-center">
          <button className="px-4 py-2 bg-blue-500 text-white rounded-full text-sm font-medium hover:bg-blue-600 transition-colors duration-300">
            Add to Cart
          </button>
          <button className="px-4 py-2 bg-blue-500 text-white rounded-full text-sm font-medium hover:bg-blue-600 transition-colors duration-300">
            View Details
          </button>
        </div>
      </div>
    </div>
  );
}

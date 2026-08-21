import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <div className="p-4 bg-white rounded-md shadow-md text-center max-w-xl mx-auto">
      <h1 className="text-2xl font-bold text-teal-600 mb-2">Welcome Home</h1>
      <p className="text-gray-600 mb-6">Explore our products and learn more about us!</p>

  
      <div className="flex justify-center gap-3 mb-6">
        <Link 
          to="/products" 
          className="bg-teal-500 text-white px-4 py-2 rounded-md hover:bg-teal-600"
        >
          Products
        </Link>
        <Link 
          to="/about" 
          className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600"
        >
          About Us
        </Link>
        <Link 
          to="/contact" 
          className="bg-green-500 text-white px-4 py-2 rounded-md hover:bg-green-600"
        >
          Contact
        </Link>
      </div>

      <div className="bg-gray-100 p-4 rounded-md text-left">
        <h2 className="font-semibold mb-2">Why Choose Us?</h2>
        <ul className="text-sm text-gray-600 space-y-1">
          <li>✓ High-quality products</li>
          <li>✓ Fast shipping</li>
          <li>✓ 24/7 Support</li>
        </ul>
      </div>
    </div>
  );
}
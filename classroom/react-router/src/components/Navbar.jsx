import { Link } from 'react-router-dom';

export default function Navbar() {
  return (
    <nav className="bg-teal-600 text-white shadow-md">
      <div className="max-w-6xl mx-auto px-4 py-3 flex justify-between items-center">
       
        <Link to="/" className="text-xl font-bold hover:text-teal-100">
          MyStore
        </Link>
        
        <div className="flex gap-6 font-medium">
          <Link to="/" className="hover:text-teal-200 transition">Home</Link>
          <Link to="/about" className="hover:text-teal-200 transition">About</Link>
          <Link to="/contact" className="hover:text-teal-200 transition">Contact</Link>
          <Link to="/products" className="hover:text-teal-200 transition">Products</Link>
    
        </div>
      </div>
    </nav>
  );
}
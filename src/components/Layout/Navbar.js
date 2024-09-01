import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="bg-blue-600 p-4">
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/" className="text-white text-2xl font-bold">GestionProjet</Link>
        <div className="space-x-4">
          <Link to="/projects" className="text-white hover:text-blue-200">Projets</Link>
          <Link to="/devis" className="text-white hover:text-blue-200">Devis</Link>
          <Link to="/achats" className="text-white hover:text-blue-200">Achats</Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
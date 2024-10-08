import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <nav className="bg-black text-white p-4">
            <div className="container mx-auto flex justify-between items-center">
                <Link to= '/' className="text-xl font-bold">Anonymous.</Link>
                
            </div>
        </nav>
    );
};

export default Navbar;

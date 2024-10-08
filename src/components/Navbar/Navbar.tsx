import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <nav className="bg-black text-white m-5">
            <div className="container mx-auto flex justify-between items-center">
                {/* Increase the size of the text */}
                <Link to="/" className="text-3xl font-bold">Anonymous.</Link>
            </div>
        </nav>
    );
};

export default Navbar;

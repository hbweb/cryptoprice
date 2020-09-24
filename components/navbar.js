import Link from 'next/link';
const Navbar = () => (    
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
    <a className="navbar-brand" href="#">CryptoPrice</a>
    <button className="navbar-toggler collapsed" type="button" data-toggle="collapse" data-target="#navbar" aria-controls="navbar" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
    </button>

    <div className="navbar-collapse collapse" id="navbar">
        <ul className="navbar-nav mr-auto">
        <li className="nav-item">
            <Link href="/"><a className="nav-link">Home</a></Link>
        </li>
        <li className="nav-item">
            <Link href="/about"><a className="nav-link">About</a></Link>        
        </li>        
        </ul>
    </div>
    </nav>
);


export default Navbar;
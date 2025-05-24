import './Navbar.css';
import { useState } from 'react';
import { Link } from 'react-router-dom'; // Import Link if using React Router
import logo from './RCALogo.png';
// import Hamburger from './Hamburger';
import { List, XLg } from 'react-bootstrap-icons';

function Navbar() {
    const [showMenu, setShowMenu] = useState(false);

    const toggleMenu = () => {
        setShowMenu(!showMenu);
    };
    const scrollToTop = () => {
        window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
    };
    const menuIcon = showMenu ? (
        // <IoClose className="HiMenu" onClick={toggleMenu} />
        <XLg className="HiMenu" onClick={toggleMenu} />
    ) : (
        // <IoMenu className="HiMenu" onClick={toggleMenu} />
        <List className="HiMenu" onClick={toggleMenu} />
    );

    return (
        < >
            <nav>

                <div className="logo">
                    <img src={logo} alt="RCA_Logo" />
                    <Link to="/" onClick={scrollToTop}>Rajasthan Cultural Association <br /> SVNIT Surat</Link> {/* Use Link here */}
                </div>

                <div className={`menu-toggle ${showMenu ? 'open' : ''}`}>
                    {menuIcon}
                </div>

                <ul className={`nav-links ${showMenu ? 'show' : ''}`} onClick={toggleMenu}>
                    <Link to="/" onClick={scrollToTop}>
                        <li>
                            Home
                        </li>
                    </Link>
                    <Link to="/About" onClick={scrollToTop}>
                        <li>
                            About
                        </li>
                    </Link>
                    <Link to="/Event" onClick={scrollToTop}>
                        <li>
                            Event
                        </li>
                    </Link>
                    <Link to="/Team" onClick={scrollToTop}>
                        <li>
                            Team
                        </li>
                    </Link>

                    <Link to="/Alumni" onClick={scrollToTop}>
                        <li>
                            Our Alumni
                        </li>
                    </Link>
                    <Link to="/Contact" onClick={scrollToTop}>
                        <li>
                            Contact
                        </li>
                    </Link>

                </ul>
            </nav>
        </>
    );
}

export default Navbar;




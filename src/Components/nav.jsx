import { useRef, useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { Link } from "react-router-dom";

function Navbar() {
  const navRef = useRef();
  const [activeLink, setActiveLink] = useState("Home");

  const showNavbar = () => {
    navRef.current.classList.toggle("responsive_nav");
  };

  const handleLinkClick = (link) => {
    setActiveLink(link);
  };

  return (
    <header>
      <div style={{ width: "9rem" }}>
        <img
          src="https://pioneerlabs.org/assets/img/logo.png"
          alt=""
          srcset=""
          style={{ width: "100%" }}
        />
      </div>
      <nav ref={navRef} className="nav-inner">
        <div>
          <Link
            to="/"
            className={activeLink === "Home" ? "active" : ""}
            onClick={() => handleLinkClick("Home")}
          >
            Home
          </Link>
        </div>
        <div className="">
          <Link
            to="/chart"
            className={activeLink === "Chart" ? "active" : ""}
            onClick={() => handleLinkClick("Chart")}
          >
            Chart
          </Link>
        </div>
        <div className="">
          <Link
            to="/crypto"
            className={activeLink === "Crypto" ? "active" : ""}
            onClick={() => handleLinkClick("Crypto")}
          >
            Crypto
          </Link>
        </div>
        <div className="">
          <Link
            to="/metaConn"
            className={activeLink === "About me" ? "active" : ""}
            onClick={() => handleLinkClick("About me")}
          >
            ConnectMetaMask
          </Link>
        </div>
        <button className="nav-btn nav-close-btn" onClick={showNavbar}>
          <FaTimes />
        </button>
      </nav>
      <button className="nav-btn" onClick={showNavbar}>
        <FaBars />
      </button>
    </header>
  );
}

export default Navbar;

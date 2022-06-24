import React, { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

const Navbar = () => {
  const [visible, setVisible] = useState(false);
  const [active, setActive] = useState(false);
  const [showMenu, setShowMenu] = useState(false);
  const location = useLocation();

  const toggleHotline = () => {
    setActive(!active);
  };

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  const handleScroll = () => {
    const currentScrollPos = window.pageYOffset;

    if (currentScrollPos > 90) {
      setVisible(true);
    } else {
      setVisible(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [visible, handleScroll, location]);

  return (
    <div
      className={`navbar-area mb-2 ${
        visible
          ? 'is-sticky sticky-active container-fluid-fluid'
          : 'container-fluid-fluid'
      }`}
    >
      <div className={`main-navbar container-fluid ${showMenu && 'show'}`}>
        <div className="container-fluid-fluid">
          <nav className="navbar navbar-expand-md navbar-light">
            <div className="collapse navbar-collapse mean-menu">
              <ul className="navbar-nav responsive-menu">
                <li
                  className={
                    location.pathname === '/' ? 'nav-item active' : 'nav-item'
                  }
                >
                  <Link to="/" className="nav-link">
                    HOME
                  </Link>
                </li>

                <li
                  className={
                    location.pathname === '/products/mobiles'
                      ? 'nav-item active'
                      : 'nav-item'
                  }
                >
                  <Link to="/products/mobiles" className="nav-link">
                    MOBILES
                  </Link>
                </li>

                <li
                  className={
                    location.pathname === '/products/laptops'
                      ? 'nav-item active'
                      : 'nav-item'
                  }
                >
                  <Link to="/products/laptops" className="nav-link">
                    LAPTOPS
                  </Link>
                </li>

                <li
                  className={
                    location.pathname === '/products/smartwaches'
                      ? 'nav-item active'
                      : 'nav-item'
                  }
                >
                  <Link to="/products/smartwaches" className="nav-link">
                    SMARTWATCHES
                  </Link>
                </li>
                <li
                  className={
                    location.pathname === '/upcoming/products'
                      ? 'nav-item active'
                      : 'nav-item'
                  }
                >
                  <Link to="/upcoming/products" className="nav-link">
                    UPCOMMING PRODUCTS
                  </Link>
                </li>

                <li
                  className={
                    location.pathname === '/contactus'
                      ? 'nav-item active'
                      : 'nav-item'
                  }
                >
                  <Link to="/contactus" className="nav-link">
                    CONTACT US
                  </Link>
                </li>
              </ul>

              <div className="others-option d-flex align-items-center">
                <div className="option-item respo-nav">
                  <span>
                    Hotline:
                    <a href="tel:16545676789">(+1) 654 567 – 6789</a>
                  </span>
                </div>
              </div>
            </div>
          </nav>
        </div>
      </div>

      <div className="others-option-for-responsive">
        <div className="container-fluid-fluid">
          <div className="responsive-logo">
            <span>Econix</span>
          </div>
          <div className="dot-menu" onClick={() => toggleHotline()}>
            <div className="inner">
              <div className="circle circle-one"></div>
              <div className="circle circle-two"></div>
              <div className="circle circle-three"></div>
            </div>
          </div>

          <div className="hamburger-menu" onClick={() => toggleMenu()}>
            {showMenu ? (
              <span className="x-icon">x</span>
            ) : (
              <i className="bx bx-menu"></i>
            )}
          </div>

          <div
            className={active ? 'active container-fluid' : 'container-fluid'}
          >
            <div className="option-inner">
              <ul className="navbar-nav responsive-menu">
                <li
                  className={
                    location.pathname === '/' ? 'nav-item active' : 'nav-item'
                  }
                >
                  <Link to="/" className="nav-link">
                    HOME
                  </Link>
                </li>

                <li
                  className={
                    location.pathname === '/products/mobiles'
                      ? 'nav-item active'
                      : 'nav-item'
                  }
                >
                  <Link to="/products/mobiles" className="nav-link">
                    MOBILES
                  </Link>
                </li>

                <li
                  className={
                    location.pathname === '/products/laptops'
                      ? 'nav-item active'
                      : 'nav-item'
                  }
                >
                  <Link to="/products/laptops" className="nav-link">
                    LAPTOPS
                  </Link>
                </li>

                <li
                  className={
                    location.pathname === '/products/smartwaches'
                      ? 'nav-item active'
                      : 'nav-item'
                  }
                >
                  <Link to="/products/smartwaches" className="nav-link">
                    SMARTWATCHES
                  </Link>
                </li>
                <li
                  className={
                    location.pathname === '/upcoming/products'
                      ? 'nav-item active'
                      : 'nav-item'
                  }
                >
                  <Link to="/upcoming/products" className="nav-link">
                    UPCOMMING PRODUCTS
                  </Link>
                </li>

                <li
                  className={
                    location.pathname === '/contactus'
                      ? 'nav-item active'
                      : 'nav-item'
                  }
                >
                  <Link to="/contactus" className="nav-link">
                    CONTACT US
                  </Link>
                </li>
              </ul>
              <div className="others-option d-flex align-items-center">
                <div className="option-item">
                  <span>
                    Hotline:
                    <a href="tel:16545676789">(+1) 654 567 – 6789</a>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;

import { useState, useContext } from 'react';
import { GiHamburgerMenu } from 'react-icons/gi';
import { FaUserCircle, FaCartPlus, FaSignOutAlt, FaUserAlt } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import LogoNirvana from '../../../public/LogoNirvana.png';
import Button from "react-bootstrap/Button";
import { ThemeContext } from "../../services/theme/theme.context";
import solyluna from '../../../public/solyluna.png';
import { Form } from "react-bootstrap";
import search from "../icons/search.svg";
import { InputGroup } from "react-bootstrap";
import { UserContext } from "../../services/authentication/user.context";

const Navlinks = [
  { id: 1, name: 'PRENDAS', link: '/clothes' },
  { id: 2, name: 'DISCOGRAFIA', link: '/music' },
  { id: 3, name: 'ACCESORIOS', link: '/accessories' },
];

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [showButtons, setShowButtons] = useState(false);
  const [userMenuOpen, setUserMenuOpen] = useState(false);
  const { user, setUser } = useContext(UserContext);
  const navigate = useNavigate();

  const handleAccountClick = () => {
    setShowButtons(!showButtons);
  };

  const handleNavClick = (link) => {
    if (link.startsWith('#')) {
      const targetId = link.substring(1);
      const targetElement = document.getElementById(targetId);
      if (targetElement) {
        targetElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    } else {
      window.location.href = link;
    }
  };

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const { toggleTheme } = useContext(ThemeContext);

  const handleLogout = () => {
    navigate('/');
    setUser(null);
    localStorage.removeItem("user");
    localStorage.removeItem("cart");
  };

  const RoleButtons = () => {
    if (!user) return null;
    switch (user.role) {
      case 1:
        return (
          <>
            <li className="py-2 px-4">
              <a
                href="/superadmin"
                className="text-xl font-bold text-black hover:text-gray-600 duration-300"
                onClick={() => handleNavClick('/superadmin')}
              >
                USUARIOS
              </a>
            </li>
            <li className="py-2 px-4">
              <a
                href="/admin"
                className="text-xl font-bold text-black hover:text-gray-600 duration-300"
                onClick={() => handleNavClick('/admin')}
              >
                PRODUCTOS
              </a>
            </li>
            <li className="py-2 px-4">
              <a
                href="/salesdashboard"
                className="text-xl font-bold text-black hover:text-gray-600 duration-300"
                onClick={() => handleNavClick('/salesdashboard')}
              >
                VENTAS
              </a>
            </li>
          </>
        );
      case 2:
        return (
          <>
            <li className="py-2 px-4">
              <a
                href="/admin"
                className="text-xl font-bold text-black hover:text-gray-600 duration-300"
                onClick={() => handleNavClick('/admin')}
              >
                PRODUCTOS
              </a>
            </li>
            <li className="py-2 px-4">
              <a
                href="/salesdashboard"
                className="text-xl font-bold text-black hover:text-gray-600 duration-300"
                onClick={() => handleNavClick('/salesdashboard')}
              >
                VENTAS
              </a>
            </li>
          </>
        );
      case 3:
        return null; // No mostrar botones adicionales aquí para el rol 3
      default:
        return null;
    }
  };

  return (
    <nav id="landingNavbar" style={{ backgroundColor: "yellow" }} className="flex justify-between items-center p-4 text-black">
      <div className="flex items-center">
        <a href="/">
          <img
            src={LogoNirvana}
            alt="LogoNirvana"
            className="w-16 sm:w-24 transition duration-300 ease-in-out transform hover:scale-150 mr-4 cursor-pointer"
          />
        </a>
        <ul className="hidden md:flex space-x-6">
          {(!user || (user && user.role === 3)) && 
            Navlinks.map(({ id, name, link }) => (
              <li key={id} className="py-2 px-4">
                <a
                  href={link}
                  className="text-xl font-bold text-black hover:text-gray-600 duration-300"
                  onClick={() => handleNavClick(link)}
                >
                  {name}
                </a>
              </li>
            ))
          }
          {RoleButtons()}
        </ul>
      </div>
      <div className="md:hidden flex items-center">
        <button
          className="ml-auto text-black focus:outline-none"
          onClick={toggleMenu}
        >
          <GiHamburgerMenu className="h-6 w-6 text-black" />
        </button>
      </div>
      <ul className={`md:hidden ${menuOpen ? 'block' : 'hidden'}`}>
        {(!user || (user && user.role === 3)) &&
          Navlinks.map(({ id, name, link }) => (
            <li key={id} className="py-2 px-4">
              <a
                href={link}
                className="text-xl font-bold text-black hover:text-gray-600 duration-300"
                onClick={() => handleNavClick(link)}
              >
                {name}
              </a>
            </li>
          ))
        }
        {RoleButtons()}
      </ul>
      <Form className="custom-form me-3">
        <InputGroup>
          <Form.Control placeholder="Buscar" aria-label="Buscar" />
          <Button variant="outline-secondary">
            <img src={search} alt="search" />
          </Button>
        </InputGroup>
      </Form>
      <div className="d-flex align-items-center">
        {!user ? (
          <>
            <i
              className="icon-hover bi bi-person-circle bg-transparent text-black text-2xl"
              onClick={handleAccountClick}
            ></i>
            {showButtons && (
              <div className="flex flex-col">
                <a
                  href="/login"
                  className="text-xs ml-2 mb-2 text-black"
                  onClick={() => handleNavClick('/login')}
                >
                  Login
                </a>
                <a
                  href="/register"
                  className="text-xs ml-2 text-black"
                  onClick={() => handleNavClick('/register')}
                >
                  Registro
                </a>
              </div>
            )}
          </>
        ) : (
          <>
            <span className="ml-2 text-black text-xl">{user.firstName} {user.lastName} </span>
            <div className="relative ml-4">
              <button className="flex items-center" onClick={() => setUserMenuOpen(!userMenuOpen)}>
                <FaUserCircle className="text-2xl text-black" />
              </button>
              {userMenuOpen && (
                <ul className="absolute right-0 mt-2 w-48 bg-white shadow-lg rounded-lg">
                  <li className="py-2 px-4 hover:bg-gray-200">
                    <a
                      href="/profile"
                      className="flex items-center text-black"
                      onClick={() => handleNavClick('/profile')}
                    >
                      <FaUserAlt className="mr-2" /> PERFIL
                    </a>
                  </li>
                  <li className="py-2 px-4 hover:bg-gray-200">
                    <a
                      href="/cart"
                      className="flex items-center text-black"
                      onClick={() => handleNavClick('/cart')}
                    >
                      <FaCartPlus className="mr-2" /> CARRITO
                    </a>
                  </li>
                  <li className="py-2 px-4 hover:bg-gray-200">
                    <button className="flex items-center text-black" onClick={handleLogout}>
                      <FaSignOutAlt className="mr-2" /> CERRAR SESIÓN
                    </button>
                  </li>
                </ul>
              )}
            </div>
          </>
        )}
      </div>
      <Button variant="link" onClick={toggleTheme}>
        <img src={solyluna} alt="Sol y luna" className="p-2 w-11 h-11" />
      </Button>
    </nav>
  );
};

export default Navbar;






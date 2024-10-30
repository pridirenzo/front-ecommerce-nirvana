import { useState, useContext } from 'react';
import { GiHamburgerMenu } from 'react-icons/gi';
import LogoNirvana from '../../../public/LogoNirvana.png';
import Button from "react-bootstrap/Button"
import { ThemeContext } from "../../services/theme/theme.context";
import solyluna from '../../../public/solyluna.png';
import { Form } from "react-bootstrap";
import search from "../icons/search.svg";
import { InputGroup } from "react-bootstrap"

const Navlinks = [
  {
    id: 1,
    name: 'INICIO',
    link: '/',
  },
  {
    id: 2,
    name: 'PRODUCTOS',
    link: '/admin',
  },
  {
    id: 3,
    name: 'USUARIOS',
    link: '/superadmin',
  },
];

const SuperAdminNavbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const [showButtons, setShowButtons] = useState(false);

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

  return (
    <nav id="supAdminNav" className="flex justify-between items-center p-4 text-black">
      <div className="flex items-center">
        <a href="/">
          <img
            src={LogoNirvana}
            alt="LogoNirvana"
            className="w-16 sm:w-24 transition duration-300 ease-in-out transform hover:scale-150 mr-4 cursor-pointer"
          />
        </a>
        <ul className="hidden md:flex space-x-6">
          {Navlinks.map(({ id, name, link }) => (
            <li key={id} className="py-2 px-4">
              <a
                href={link}
                className="text-xl font-bold text-black hover:text-gray-600 duration-300"
                onClick={() => handleNavClick(link)}
              >
                {name}
              </a>
            </li>
          ))}
        </ul>
      </div>
      <button
        className="md:hidden text-black focus:outline-none"
        onClick={toggleMenu}
      >
        <GiHamburgerMenu className="h-6 w-6 text-black" />
      </button>
      <ul
        className={`md:hidden ${menuOpen ? 'block' : 'hidden'}`}
      >
        {Navlinks.map(({ id, name, link }) => (
          <li key={id} className="py-2 px-4">
            <a
              href={link}
              className="text-xl font-bold text-black hover:text-gray-600 duration-300"
              onClick={() => handleNavClick(link)}
            >
              {name}
            </a>
          </li>
        ))}
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
        <i
          className="icon-hover bi bi-person-circle bg-transparent text-black text-2xl"
          
            onClick={handleAccountClick}
        ></i>
        {showButtons && (
          <div className="flex flex-col">
            <a
              href="/login"
              className="text-xl font-bold text-black"
              onClick={() => handleNavClick('/login')}
            >
              Login
            </a>
            <a
              href="/register"
              className="text-xl font-bold text-black"
              onClick={() => handleNavClick('/register')}
            >
              Register
            </a>
          </div>
        )}
      </div>
      <Button variant="link" onClick={toggleTheme}>
      <img src={solyluna} alt="Sol y luna" className="p-2 w-11 h-11" />
      </Button>
    </nav>
  );
};

export default SuperAdminNavbar;

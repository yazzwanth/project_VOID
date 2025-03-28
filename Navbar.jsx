import { useState } from "react"
import { Link } from "react-router-dom"
import { navLinks } from "../constants/index.js";
import Login from "./Login";

const NavItems = ({isMobile = false, onLoginClick}) => {
  return (
    <ul className={`nav-ul flex ${isMobile ? "flex-col gap-5" : "flex-row gap-6"}`}>
      {navLinks.map(({id, href, name}) => (
        <li key={id} className="nav-li">
          {name === "Login" ? (
            <Link href={href} className="nav-a" onClick={(e) => { e.preventDefault(); onLoginClick(); }}>
              {name}
            </Link>) : (
            <Link to={href} className="nav-a">
              {name}
            </Link>
          )}
        </li>
      ))}
    </ul>
  )
}

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [showLogin, setShowLogin] = useState(false);
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  }
  const handleLoginClick = () => {
    setShowLogin(true);
  }
  const handleClosePopup = () => {
    setShowLogin(false);
  }

  return (
    <header className='fixed top-0 left-0 right-0 z-50 bg-black/90 text-white'>
        <div className="max-w-10xl mx-auto">
            <div className="flex justify-between items-center py-5 mx-auto sm:px-10 px-5">
              <a href="/" className="text-neutral-400 font-bold text-xl hover:text-white transition-colors">
              Luffy
              </a>
              <button onClick={toggleMenu} className=" text-white focus:outline-none sm:hidden flex" aria-label="Toggle menu">
                <img src={isOpen ? 'assets/close.svg' : "assets/menu.svg"} alt="toggle" className="w-6 h-6" />
              </button>
              <nav className="sm:flex hidden">
                <NavItems onLoginClick={handleLoginClick}/>
              </nav>
            </div>
        </div>
        <div className={`nav-sidebar absolute top-full left-0 right-0 z-999 bg-black/90 transition-all duration-300 ease-in-out overflow-hidden ${
          isOpen ? "max-h-screen opacity-100" : "max-h-0 opacity-0"
        }`}>
          <nav className="p-5 ">
            <NavItems isMobile={true} onLoginClick={handleLoginClick} />
          </nav>
        </div>
        {showLogin && <Login onClose={handleClosePopup} />}
    </header>
  )
}

export default Navbar
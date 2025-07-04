import { useState } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white shadow-md fixed top-0 left-0 w-full z-50">
      <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
        {/* Logo */}
        <div className="text-2xl font-bold text-indigo-600">
          Owaiz React dev
        </div>

        {/* Hamburger */}
        <div className="lg:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-gray-700 focus:outline-none"
          >
            ☰
          </button>
        </div>

        {/* Nav Links */}
        <ul
          className={`${
            isOpen ? "block" : "hidden"
          } lg:flex space-y-4 lg:space-y-0 lg:space-x-6 mt-4 lg:mt-0 text-gray-700 font-medium`}
        >
          <li className="hover:text-indigo-600 transition">
            <a href="#home">Home</a>
          </li>
          <li className="hover:text-indigo-600 transition">
            <a href="#projects">Projects</a>
          </li>
          <li className="hover:text-indigo-600 transition">
            <a href="#about">About</a>
          </li>
          <li className="hover:text-indigo-600 transition">
            <a href="#contact">Contact</a>
          </li>
          <li>
            <a
              href="/resume.pdf"
              target="_blank"
              className="bg-indigo-600 text-white px-4 py-2 rounded hover:bg-indigo-700 transition"
            >
              Resume
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;

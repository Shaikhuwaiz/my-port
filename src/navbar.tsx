import { useState } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="backdrop-blur-md bg-gradient-to-r from-indigo-900/70 to-purple-900/70 shadow-lg fixed top-0 left-0 w-full z-50 border-b border-indigo-800">
      <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
        {/* Logo */}
        <div className="text-2xl font-bold text-indigo-300 tracking-wide">
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
        <ul
          className={`${
            isOpen ? "block" : "hidden"
          } lg:flex space-x-6 text-indigo-100 font-medium`}
        >
          <li className="hover:text-indigo-400 transition">
            <a href="/home">Home</a>
          </li>
          <li className="hover:text-indigo-400 transition">
            <a href="/projects">Projects</a>
          </li>
          <li className="hover:text-indigo-400 transition">
            <a href="/about">About</a>
          </li>
          <li className="hover:text-indigo-400 transition">
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

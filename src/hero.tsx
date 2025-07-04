import React from "react";

const Hero = () => {
  return (
    <>
      {/* Hero Section */}
      <section className="text-center mt-20">
        <h1 className="text-4xl font-bold">Hi, I’m Owaiz 👋</h1>
        <p className="text-lg mt-2 text-gray-600">
          Frontend & Backend Developer crafting clean UIs
        </p>
        <div className="mt-4 flex justify-center gap-4">
          <a
            href="#projects"
            className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
          >
            See Projects
          </a>
          <a
            href="#contact"
            className="border px-4 py-2 rounded hover:bg-gray-100"
          >
            Contact
          </a>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="mt-20 max-w-3xl mx-auto text-center">
        <h2 className="text-3xl font-semibold">About Me</h2>
        <p className="text-gray-600 mt-4">
          Hi, I’m Owaiz — a Full-Stack Web Developer based in India. I
          specialize in creating clean, responsive UIs with React and Tailwind
          CSS, and building scalable backend APIs using Node.js, Express, and
          MongoDB. I enjoy learning new technologies and turning ideas into
          real-world web applications.
        </p>
      </section>

      {/* Projects Section */}
      <section id="projects" className="mt-20">
        <h2 className="text-3xl font-semibold text-center">Projects</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
          <div className="bg-white p-4 rounded shadow">
            <h3 className="font-bold">Portfolio Website</h3>
            <p className="text-sm text-gray-500 mt-1">React + TailwindCSS</p>
            <a
              href="https://yourliveurl.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 text-sm mt-2 inline-block"
            >
              View Live
            </a>
          </div>
          {/* Add more project cards as needed */}
        </div>
      </section>
    </>
  );
};

export default Hero;

const Hero = () => {
  return (
    <>
      {/* Hero Section */}
      <section className="min-h-screen flex flex-col justify-center items-center bg-gradient-to-b from-[#0f172a] via-[#1e293b] to-[#0f172a] text-white px-4">
        <h1 className="text-4xl sm:text-6xl font-bold text-indigo-300 mb-4">
          Hi, I’m Owaiz 👋
        </h1>
        <p className="text-lg text-indigo-100 max-w-xl text-center">
          Frontend & Backend Developer crafting clean UIs
        </p>
        <div className="mt-6 flex gap-4">
          <a
            href="#projects"
            className="bg-indigo-600 hover:bg-indigo-700 px-5 py-2 rounded text-white transition"
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
      <section
        id="about"
        className="py-20 bg-transparent text-white mx-4 mt-10"
      >
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
      <section
        id="projects"
        className="py-20 bg-transparent text-white mx-4 mt-10"
      >
        <h2 className="text-3xl font-semibold text-center">Projects</h2>
        <div className="bg-transparent">
          <div className="bg-transparent p-4 rounded shadow">
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

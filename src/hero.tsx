import { SiReact, SiVite, SiExpress, SiMongodb } from "react-icons/si";
import { Typewriter } from "react-simple-typewriter";

const Hero = () => {
  return (
    <>
      {/* Hero Section */}
      <section className="min-h-screen flex flex-col justify-center items-center bg-tr  text-white px-4">
        <h2 className="text-3xl sm:text-5xl font-bold text-center text-blue-400">
          <Typewriter
            words={[
              "Hi, I’m Owaiz 👋",
              "I craft clean Frontend UIs",
              "I build scalable Backend APIs",
              "React • Express • MongoDB • Tailwind",
              "Passionate Full-Stack Developer",
            ]}
            loop={0}
            cursor
            cursorStyle="|"
            typeSpeed={60}
            deleteSpeed={40}
            delaySpeed={1500}
          />
        </h2>
      </section>

      {/* About Section */}
      <section
        id="about"
        className="py-20 bg-transparent text-white mx-4 mt-10"
      >
        <h2 className="text-3xl font-semibold">About Me</h2>
        <p className="text-gray-300 mt-4">
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
        <h2 className="text-3xl font-semibold text-center mb-6">Projects</h2>
        <div className="px-6 py-12 flex flex-col items-start">
          <div className="max-w-md bg-black/20 dark:bg-[#1e293b] p-4 rounded-xl shadow-lg">
            {" "}
            <div className="aspect-video w-full mb-4 rounded overflow-hidden shadow-md relative">
              <iframe
                src="https://nameage.vercel.app/"
                title="Name & Age App Preview"
                className="w-full h-full pointer-events-none overflow-hidden" // freeze + hide scroll
                frameBorder="0"
                scrolling="no" // also helps in some browsers
                allowFullScreen
              ></iframe>
              <div className="absolute inset-0 pointer-events-none z-10" />
            </div>
            <h3 className="text-xl font-semibold mb-2 text-white">
              Name & Age Preview App
            </h3>
            <div className="flex items-center gap-3 mt-2 text-xl">
              <SiReact title="React" className="text-[#61DAFB]" />
              <SiVite title="Vite" className="text-[#646CFF]" />
              <SiExpress
                title="Express"
                className="text-black-700 dark:text-white"
              />
              <SiMongodb title="MongoDB" className="text-[#47A248]" />
            </div>
            <p className="text-sm text-gray-600 dark:text-gray-400 mt-2 text-white">
              React + Express + MongoDB + Vite
            </p>
            <div className="mt-3 flex gap-4">
              <a
                href="https://nameage.vercel.app/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 text-sm"
              >
                🔗 View Live
              </a>
              <a
                href="https://github.com/Shaikhuwaiz/nameage.git"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 dark:text-gray-300 text-sm"
              >
                📁 View Code
              </a>
            </div>
          </div>{" "}
        </div>
      </section>
    </>
  );
};

export default Hero;

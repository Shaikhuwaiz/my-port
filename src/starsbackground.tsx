import { motion } from "framer-motion";

const StarsBackground = () => {
  return (
    <div className="fixed top-0 left-0 w-full h-full z-[-1] overflow-hidden">
      {/* Static Stars */}
      <div className="absolute w-full h-full bg-black">
        {[...Array(300)].map((_, i) => {
          const size = Math.random() * 2 + 1;
          return (
            <div
              key={`star-${i}`}
              className="absolute bg-white rounded-full animate-twinkle"
              style={{
                width: `${size}px`,
                height: `${size}px`,
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
                animationDuration: `${Math.random() * 3 + 2}s`,
                animationDelay: `${Math.random() * 5}s`,
                opacity: `${Math.random() * 0.5 + 0.5}`,
              }}
            />
          );
        })}

        {/* Meteors */}
        {[...Array(5)].map((_, i) => {
          const startTop = Math.random() * 60;
          const startLeft = Math.random() * 40;

          return (
            <motion.div
              key={`meteor-${i}`}
              initial={{ opacity: 0, x: 0, y: 0 }}
              animate={{
                opacity: [0, 1, 0],
                x: 500,
                y: 500,
              }}
              transition={{
                duration: 1.8,
                repeat: Infinity,
                repeatDelay: Math.random() * 5 + 2,
              }}
              className="absolute"
              style={{
                top: `${startTop}%`,
                left: `${startLeft}%`,
                width: "0.2px",
                height: "0.2px",
                background: "linear-gradient(45deg, white, transparent)",
                boxShadow: "0 0 6px rgba(255,255,255,0.5)",
                transform: "rotate(45deg)",
                opacity: 0.6,
              }}
            />
          );
        })}

        {/* Asteroids */}
        {[...Array(3)].map((_, i) => {
          const startTop = Math.random() * 100;
          const startLeft = Math.random() * 100;
          return (
            <motion.div
              key={`asteroid-${i}`}
              initial={{ x: 0, y: 0, opacity: 0 }}
              animate={{
                x: -500,
                y: 500,
                opacity: [0, 1, 0],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                repeatDelay: Math.random() * 5 + 3,
              }}
              className="absolute bg-gray-300"
              style={{
                top: `${startTop}%`,
                left: `${startLeft}%`,
                width: "12px",
                height: "12px",
                borderRadius: "50%",
              }}
            />
          );
        })}
      </div>
    </div>
  );
};

export default StarsBackground;

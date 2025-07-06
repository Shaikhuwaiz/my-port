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

        {[...Array(6)].map((_, i) => {
          const startTop = Math.random() * 60;
          const startLeft = Math.random() * 40 + 50; // Start from right 50%-90%

          return (
            <motion.div
              key={`meteor-${i}`}
              initial={{ opacity: 0, x: 0, y: 0 }}
              animate={{
                opacity: [0, 1, 0.2, 0],
                x: -600,
                y: 600,
                rotate: [50, 50, 50, 50],
              }}
              transition={{
                duration: 1.9,
                repeat: Infinity,
                repeatDelay: Math.random() * 6 + 2,
              }}
              className="absolute"
              style={{
                top: `${startTop}%`,
                left: `${startLeft}%`,
                width: "2px",
                height: "170px",
                background:
                  "linear-gradient(to bottom left, rgba(255, 255, 255, 0.4) 0%, rgba(255, 255, 255, 0) 100%)",
                borderRadius: "100px",
                boxShadow: "100px",
                transform: "rotate(50deg)",
                opacity: 0.8,
              }}
            />
          );
        })}

        {/* Asteroids - heads ↙️ and wobbling */}
        {[...Array(4)].map((_, i) => {
          const startTop = Math.random() * 40;
          const startLeft = Math.random() * 40 + 55;

          return (
            <motion.div
              key={`asteroid-${i}`}
              initial={{ opacity: 0, x: 0, y: 0, rotate: 0 }}
              animate={{
                opacity: [0, 1, 0.3, 0],
                x: -600,
                y: 600,
                rotate: [0, 30, -15, 0],
              }}
              transition={{
                duration: 5.5,
                repeat: Infinity,
                repeatDelay: Math.random() * 6 + 3,
              }}
              className="absolute"
              style={{
                top: `${startTop}%`,
                left: `${startLeft}%`,
                width: "25px",
                height: "25px",
                backgroundColor: "#888",
                borderRadius: "60% 40% 50% 70% / 50% 60% 40% 50%",
                boxShadow: "0 0 8px rgba(255, 255, 255, 0.1)",
                filter: "blur(0.3px)",
              }}
            />
          );
        })}
      </div>
    </div>
  );
};

export default StarsBackground;

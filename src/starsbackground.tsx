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
              className="absolute bg-white rounded-full animate-pulse"
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
        {[...Array(6)].map((_, i) => {
  const startTop = Math.random() * 60;
  const startLeft = Math.random() * 80;
  const angle = 200 + Math.random() * 100; // random angle between 180° to 280°
  const radians = (angle * Math.PI) / 180;
  const distance = 600;

  const x = Math.cos(radians) * distance;
  const y = Math.sin(radians) * distance;

  return (
    <motion.div
      key={`meteor-${i}`}
      initial={{ opacity: 0, x: 0, y: 0 }}
      animate={{
        opacity: [0, 1, 0],
        x,
        y,
      }}
      transition={{
        duration: 1.5,
        repeat: Infinity,
        repeatDelay: Math.random() * 5 + 2,
      }}
      className="absolute"
      style={{
        top: `${startTop}%`,
        left: `${startLeft}%`,
        width: "4px",
        height: "160px",
        background: "linear-gradient(to bottom, white, transparent)",
        borderRadius: "9999px",
        boxShadow: "0 0 8px rgba(255,255,255,0.8)",
        transform: `rotate(${angle}deg)`,
        opacity: 0.7,
      }}
    />
  );
})}

{/* Nebula Layer */}
<div className="absolute w-full h-full">
  <div
    className="absolute"
    style={{
      top: "20%",
      left: "10%",
      width: "400px",
      height: "400px",
      background: "radial-gradient(circle at center, #6a0dad88, transparent 70%)",
      filter: "blur(80px)",
      opacity: 0.5,
      transform: "rotate(25deg)",
    }}
  />
  <div
    className="absolute w-[400px] h-[400px] top-[20%] left-[10%] opacity-50 rounded-full blur-[80px] bg-[radial-gradient(circle_at_center,_#6a0dad88,_transparent_70%)] rotate-12"
    style={{
      top: "60%",
      left: "50%",
      width: "500px",
      height: "300px",
      background: "radial-gradient(circle at center, #ff008077, transparent 70%)",
      filter: "blur(100px)",
      opacity: 0.4,
      transform: "rotate(-30deg)",
    }}
  />
</div>
        {/* Asteroids */}
        {[...Array(4)].map((_, i) => {
          const startTop = Math.random() * 90;
          const startLeft = Math.random() * 100;

          return (
            <motion.div
              key={`asteroid-${i}`}
              initial={{ opacity: 0, x: 0, y: 0, rotate: 0 }}
              animate={{
                opacity: [0, 0.9, 0],
                x: -400,
                y: 300,
                rotate: [0, 25, -15, 15, 0],
              }}
              transition={{
                duration: 5,
                repeat: Infinity,
                repeatDelay: Math.random() * 6 + 2,
              }}
              className="absolute"
              style={{
                top: `${startTop}%`,
                left: `${startLeft}%`,
                width: "40px",
                height: "30px",
                backgroundColor: "#555",
                borderRadius: "50% 45% 55% 50% / 55% 60% 45% 50%",
                boxShadow: "0 0 6px rgba(255,255,255,0.1)",
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

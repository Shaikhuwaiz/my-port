import { AnimatePresence, motion } from "motion/react";
import { useState } from "react";

export default function ExitAnimation() {
  const [isVisible, setIsVisible] = useState(true);

  return (
    <div className="relative flex flex-col w-[100px] h-[160px]">
      <AnimatePresence>
        {isVisible && (
          <motion.div
            key="box"
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0 }}
            className="w-[100px] h-[100px] bg-cyan-400 rounded-lg"
          />
        )}
      </AnimatePresence>

      <motion.button
        onClick={() => setIsVisible(!isVisible)}
        whileTap={{ y: 1 }}
        className="absolute bottom-0 left-0 right-0 bg-cyan-400 text-[#0f1115] rounded-lg px-5 py-2"
      >
        {isVisible ? "Hide" : "Show"}
      </motion.button>
    </div>
  );
}

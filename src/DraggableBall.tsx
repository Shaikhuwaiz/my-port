import { motion } from "framer-motion";

function DraggableBall() {
  return (
    <motion.div
      drag
      dragConstraints={{ left: 200, right: 200, top: 200, bottom: 200 }} // Optional: constrain movement
      style={{
        width: 50,
        height: 50,
        borderRadius: "50%",
        backgroundColor: "green",
        cursor: "grab",
      }}
    />
  );
}

export default DraggableBall;

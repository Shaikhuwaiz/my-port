// TechCard.tsx
import {
  SiMongodb,
  SiTailwindcss,
  SiTypescript,
  SiJavascript,
  SiNextdotjs,
} from "react-icons/si";
import { motion } from "framer-motion";

import {
  FaReact,
  FaNodeJs,
  FaHtml5,
  FaCss3Alt,
  FaGitAlt,
  FaSass,
} from "react-icons/fa";
import {
  SiMongodb,
  SiTailwindcss,
  SiTypescript,
  SiJavascript,
  SiNextdotjs,
} from "react-icons/si";

const techItems = [
  { name: "React", icon: <FaReact size={40} />, motion: "spin" },
  { name: "MongoDB", icon: <SiMongodb size={40} />, motion: "shake" },
  { name: "Node.js", icon: <FaNodeJs size={40} /> },
  { name: "Tailwind", icon: <SiTailwindcss size={40} /> },
  { name: "TypeScript", icon: <SiTypescript size={40} /> },
  { name: "JavaScript", icon: <SiJavascript size={40} /> },
  { name: "Next.js", icon: <SiNextdotjs size={40} /> },
  { name: "HTML5", icon: <FaHtml5 size={40} /> },
  { name: "CSS3", icon: <FaCss3Alt size={40} /> },
  { name: "Git", icon: <FaGitAlt size={40} /> },
  { name: "SASS", icon: <FaSass size={40} /> },
];

const motionVariants = {
  spin: {
    animate: {
      rotate: [0, 360],
      transition: { duration: 2, repeat: Infinity, ease: "linear" },
    },
  },
  shake: {
    animate: {
      rotate: [-3, 3, -3],
      transition: { duration: 0.5, repeat: Infinity, ease: "easeInOut" },
    },
  },
} as const;

export default function TechStack() {
  return (
    <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-6 gap-6 p-6 bg-gray-50 rounded-lg shadow">
      {techItems.map((tech, idx) => (
        <motion.div
          key={idx}
          whileHover={{ scale: 1.1 }}
          className="bg-white p-4 rounded-lg flex flex-col items-center justify-center shadow hover:shadow-lg transition"
          animate={
            tech.motion ? motionVariants[tech.motion].animate : undefined
          }
        >
          <div className="mb-2 text-blue-500">{tech.icon}</div>
          <p className="text-sm font-semibold text-gray-800">{tech.name}</p>
        </motion.div>
      ))}
    </div>
  );
}

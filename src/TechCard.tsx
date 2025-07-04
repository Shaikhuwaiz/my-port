import React, { JSX } from "react";
import { motion } from "framer-motion";
import { useEffect, useRef } from "react";

import {
  FaReact,
  FaNodeJs,
  FaHtml5,
  FaCss3Alt,
  FaGitAlt,
  FaSass,
  FaCoffee,
} from "react-icons/fa";
import {
  SiMongodb,
  SiTailwindcss,
  SiTypescript,
  SiJavascript,
  SiNextdotjs,
  SiPreact,
} from "react-icons/si";

type MotionType = "spin" | "shake" | "bounce" | "brezze";

const techItems: {
  name: string;
  icon: JSX.Element;
  motion?: MotionType;
}[] = [
  {
    name: "React",
    icon: <FaReact size={40} className="text-blue-500" />,
    motion: "spin",
  },
  {
    name: "MongoDB",
    icon: <SiMongodb size={40} className="text-green-500" />,
    motion: "shake",
  },
  { name: "Node.js", icon: <FaNodeJs size={40} className="text-green-700" /> },
  {
    name: "Tailwind",
    icon: <SiTailwindcss size={40} className="text-sky-400" />,
    motion: "brezze",
  },
  {
    name: "TypeScript",
    icon: <SiTypescript size={40} className="text-blue-600" />,
  },
  {
    name: "JavaScript",
    icon: <SiJavascript size={40} className="text-yellow-400" />,
  },
  {
    name: "Next.js",
    icon: <SiNextdotjs size={40} className="text-black dark:text-white" />,
  },
  { name: "HTML5", icon: <FaHtml5 size={40} className="text-orange-500" /> },
  { name: "CSS3", icon: <FaCss3Alt size={40} className="text-blue-500" /> },
  { name: "Git", icon: <FaGitAlt size={40} className="text-orange-600" /> },
  { name: "SASS", icon: <FaSass size={40} />, motion: "bounce" },
  { name: "Preact", icon: <FaSass size={40} className="text-pink-500" /> },
];

const motionVariants: Record<MotionType, any> = {
  spin: {
    animate: {
      rotate: 360,
      transition: {
        duration: 2,
        repeat: Infinity,
        ease: "linear",
      },
    },
  },
  shake: {
    animate: {
      rotate: [-3, 3, -3],
      transition: { duration: 0.5, repeat: Infinity, ease: "easeInOut" },
    },
  },
  bounce: {
    animate: {
      y: [0, -8, 0],
      rotate: [0, -5, 0],
      transition: { duration: 0.5, repeat: Infinity, ease: "easeInOut" },
    },
  },
  brezze: {
    animate: {
      x: [0, 4, -4, 4, 0], // gentle horizontal sway
      rotate: [0, 1, -1, 1, 0], // slight rotation for realism
      transition: {
        duration: 3,
        repeat: Infinity,
        ease: "easeInOut",
      },
    },
  },
};

export default function TechStack() {
  return (
    <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-6 gap-6 p-6 bg-gray-50 rounded-lg shadow">
      {techItems.map((tech, idx) => {
        const animation =
          tech.motion && motionVariants[tech.motion]
            ? motionVariants[tech.motion].animate
            : undefined;

        return (
          <div
            key={idx}
            className="bg-white p-4 rounded-lg flex flex-col items-center justify-center shadow hover:shadow-lg hover:ring hover:ring-blue-200 transition"
          >
            {/* 🟢 Animate only the icon */}
            <motion.div
              className="mb-2 text-blue-500"
              animate={animation}
              whileHover={{ scale: 1.2 }}
            >
              {tech.icon}
            </motion.div>

            <p className="text-sm font-semibold text-gray-800">{tech.name}</p>
          </div>
        );
      })}
    </div>
  );
}

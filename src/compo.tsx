import { useEffect, useRef } from "react";

function PreactLogoAnimated() {
  const ellipse1 = useRef<SVGEllipseElement | null>(null);
  const ellipse2 = useRef<SVGEllipseElement | null>(null);

  useEffect(() => {
    let angle = 3;

    const animate = () => {
      angle += 0.5;
      if (ellipse1.current && ellipse2.current) {
        ellipse1.current.setAttribute("transform", `rotate(${52 + angle})`);
        ellipse2.current.setAttribute("transform", `rotate(${-52 + angle})`);
      }
      requestAnimationFrame(animate);
    };

    animate();
  }, []);

  return (
    <svg
      width="300"
      height="300"
      viewBox="-256 -256 2150 512"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M0,-256 221.7,-128 221.7,128 0,256 -221.7,128 -221.7,-128z"
        fill="#673ab8"
      />
      <ellipse
        ref={ellipse1}
        cx="0"
        cy="0"
        rx="75"
        ry="196"
        strokeWidth="16"
        fill="none"
        stroke="white"
      />
      <ellipse
        ref={ellipse2}
        cx="0"
        cy="0"
        rx="75"
        ry="196"
        strokeWidth="16"
        fill="none"
        stroke="white"
      />
      <circle cx="0" cy="0" r="34" fill="white" />
      <text
        x="250"
        y="128"
        fontSize="400"
        fontFamily="Helvetica Neue, helvetica, arial"
        fontWeight="400"
        fill="#673ab8"
      >
        {" "}
        PREACT
      </text>
    </svg>
  );
}

export default PreactLogoAnimated;

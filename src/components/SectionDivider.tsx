import React from "react";

interface SectionDividerProps {
  className?: string;
}

const SectionDivider: React.FC<SectionDividerProps> = ({ className }) => {
  return (
    <div className={`w-full overflow-hidden leading-[0] ${className}`}>
      <svg
        className="w-full h-12 md:h-16 text-blue-100/50"
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="none"
        viewBox="0 0 1200 60"
      >
        <defs>
          <pattern
            id="diagonalHatch"
            width="10"
            height="10"
            patternTransform="rotate(45 0 0)"
            patternUnits="userSpaceOnUse"
          >
            <line
              x1="0"
              y1="0"
              x2="0"
              y2="10"
              style={{ stroke: "currentColor", strokeWidth: 1 }}
            />
          </pattern>
        </defs>

        {/* Top Line */}
        <line
          x1="0"
          y1="10"
          x2="1200"
          y2="10"
          stroke="currentColor"
          strokeWidth="1"
        />

        {/* Bottom Line */}
        <line
          x1="0"
          y1="50"
          x2="1200"
          y2="50"
          stroke="currentColor"
          strokeWidth="1"
        />

        {/* Main Filled Area with Hatching */}
        <rect
          x="100"
          y="10"
          width="1000"
          height="40"
          fill="url(#diagonalHatch)"
          opacity="0.3"
        />

        {/* End Caps / Nodes */}
        <circle cx="100" cy="10" r="3" fill="currentColor" />
        <circle cx="1100" cy="10" r="3" fill="currentColor" />
        <circle cx="100" cy="50" r="3" fill="currentColor" />
        <circle cx="1100" cy="50" r="3" fill="currentColor" />

        {/* Vertical Ticks (Ruler style) */}
        {/* Left Side Ticks */}
        <line
          x1="150"
          y1="50"
          x2="150"
          y2="40"
          stroke="currentColor"
          strokeWidth="1"
        />
        <line
          x1="200"
          y1="50"
          x2="200"
          y2="35"
          stroke="currentColor"
          strokeWidth="1"
        />
        <line
          x1="250"
          y1="50"
          x2="250"
          y2="40"
          stroke="currentColor"
          strokeWidth="1"
        />
        <line
          x1="300"
          y1="50"
          x2="300"
          y2="35"
          stroke="currentColor"
          strokeWidth="1"
        />

        {/* Right Side Ticks */}
        <line
          x1="900"
          y1="50"
          x2="900"
          y2="35"
          stroke="currentColor"
          strokeWidth="1"
        />
        <line
          x1="950"
          y1="50"
          x2="950"
          y2="40"
          stroke="currentColor"
          strokeWidth="1"
        />
        <line
          x1="1000"
          y1="50"
          x2="1000"
          y2="35"
          stroke="currentColor"
          strokeWidth="1"
        />
        <line
          x1="1050"
          y1="50"
          x2="1050"
          y2="40"
          stroke="currentColor"
          strokeWidth="1"
        />

        {/* Dotted lines extending out */}
        <line
          x1="0"
          y1="30"
          x2="90"
          y2="30"
          stroke="currentColor"
          strokeWidth="1"
          strokeDasharray="4 4"
        />
        <line
          x1="1110"
          y1="30"
          x2="1200"
          y2="30"
          stroke="currentColor"
          strokeWidth="1"
          strokeDasharray="4 4"
        />
      </svg>
    </div>
  );
};

export default SectionDivider;

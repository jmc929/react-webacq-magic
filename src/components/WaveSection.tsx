import React from 'react';

interface WaveSectionProps {
  children?: React.ReactNode;
  className?: string;
  heightClassName?: string;
  colors?: string[];
}

const WaveSection: React.FC<WaveSectionProps> = ({ 
  children, 
  className = "", 
  heightClassName = "h-[360px] sm:h-[420px]",
  colors = ['#D7ECEF', '#CCE7EC', '#C7E4EA', '#BEE0E7', '#B5DCE4', '#B3DBE3']
}) => {
  // Definir diferentes formas de ondas para variedad visual
  const wavePaths = [
    // Onda suave tipo sine
    "M0,320 C160,240 320,400 480,320 C640,240 800,400 960,320 C1120,240 1280,400 1440,320 L1440,320 L0,320 Z",
    // Onda con más amplitud
    "M0,320 C160,200 320,440 480,320 C640,200 800,440 960,320 C1120,200 1280,440 1440,320 L1440,320 L0,320 Z",
    // Onda más sutil
    "M0,320 C160,280 320,360 480,320 C640,280 800,360 960,320 C1120,280 1280,360 1440,320 L1440,320 L0,320 Z",
    // Onda con variación
    "M0,320 C160,220 320,420 480,320 C640,220 800,420 960,320 C1120,220 1280,420 1440,320 L1440,320 L0,320 Z",
    // Onda más plana
    "M0,320 C160,300 320,340 480,320 C640,300 800,340 960,320 C1120,300 1280,340 1440,320 L1440,320 L0,320 Z",
    // Onda final más pronunciada
    "M0,320 C160,180 320,460 480,320 C640,180 800,460 960,320 C1120,180 1280,460 1440,320 L1440,320 L0,320 Z"
  ];

  return (
    <section 
      className={`relative overflow-hidden bg-[#DAEDF0] ${heightClassName} ${className}`}
      role="banner"
      aria-label="Hero section with wave background"
    >
      {/* Capas de ondas SVG */}
      {colors.map((color, index) => (
        <svg
          key={index}
          className="absolute inset-x-0 bottom-0 w-full h-auto"
          viewBox="0 0 1440 320"
          preserveAspectRatio="none"
          aria-hidden="true"
          style={{ 
            zIndex: index + 1,
            opacity: 0.85 + (index * 0.02) // Opacidad progresiva: 85% a 95%
          }}
        >
          <path
            d={wavePaths[index % wavePaths.length]}
            fill={color}
            fillOpacity="1"
          />
        </svg>
      ))}

      {/* Contenido principal */}
      <div className="relative z-10 flex items-center justify-center h-full">
        {children}
      </div>
    </section>
  );
};

export default WaveSection;

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
  heightClassName = "h-[500px] sm:h-[600px]",
  colors = ['#D7ECEF', '#CCE7EC', '#C7E4EA', '#BEE0E7', '#B5DCE4', '#B3DBE3']
}) => {
  // Paths de olas onduladas distribuidas de arriba hacia abajo formando degradado
  const wavePaths = [
    "M0,50 Q360,20 720,50 T1440,50 L1440,0 L0,0 Z",
    "M0,100 Q360,70 720,100 T1440,100 L1440,0 L0,0 Z",
    "M0,150 Q360,120 720,150 T1440,150 L1440,0 L0,0 Z",
    "M0,200 Q360,170 720,200 T1440,200 L1440,0 L0,0 Z",
    "M0,250 Q360,220 720,250 T1440,250 L1440,0 L0,0 Z"
  ];
  
  const opacities = [1, 0.9, 0.8, 0.7, 0.6];

  return (
    <section 
      className={`relative overflow-hidden bg-[#B8E3F0] ${heightClassName} ${className}`}
      role="banner"
      aria-label="Hero section with wave background"
    >
      {/* Capas de ondas SVG distribuidas de arriba hacia abajo */}
      {colors.slice(0, 5).map((color, index) => (
        <svg
          key={index}
          className="absolute inset-x-0 top-0 w-full h-full z-0"
          viewBox="0 0 1440 320"
          preserveAspectRatio="none"
          aria-hidden="true"
          style={{ 
            opacity: opacities[index],
            transform: `translateY(${index * 15}%)` // Distribuir las olas verticalmente
          }}
        >
          <path
            d={wavePaths[index]}
            fill={color}
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

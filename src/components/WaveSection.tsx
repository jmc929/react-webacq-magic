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
  // Paths de olas onduladas que cubren toda la altura
  const wavePaths = [
    "M0,0 Q360,30 720,0 T1440,0 L1440,320 L0,320 Z",
    "M0,40 Q360,70 720,40 T1440,40 L1440,320 L0,320 Z",
    "M0,80 Q360,110 720,80 T1440,80 L1440,320 L0,320 Z",
    "M0,120 Q360,150 720,120 T1440,120 L1440,320 L0,320 Z",
    "M0,160 Q360,190 720,160 T1440,160 L1440,320 L0,320 Z",
    "M0,200 Q360,230 720,200 T1440,200 L1440,320 L0,320 Z"
  ];
  
  const opacities = [0.3, 0.4, 0.5, 0.65, 0.8, 1];

  return (
    <section 
      className={`relative overflow-hidden ${heightClassName} ${className}`}
      role="banner"
      aria-label="Hero section with wave background"
      style={{ backgroundColor: colors[colors.length - 1] }}
    >
      {/* Capas de ondas SVG que cubren toda la sección */}
      {colors.slice(0, 6).map((color, index) => (
        <svg
          key={index}
          className="absolute inset-0 w-full h-full z-0"
          viewBox="0 0 1440 320"
          preserveAspectRatio="none"
          aria-hidden="true"
          style={{ 
            opacity: opacities[index]
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

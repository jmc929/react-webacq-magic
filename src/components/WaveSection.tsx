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
  // Paths de olas distribuidas de arriba hacia abajo formando degradado
  const wavePaths = [
    "M0,32L60,37.3C120,43,240,53,360,69.3C480,85,600,107,720,106.7C840,107,960,85,1080,74.7C1200,64,1320,64,1380,64L1440,64L1440,0L0,0Z",
    "M0,96L48,106.7C96,117,192,139,288,133.3C384,128,480,96,576,74.7C672,53,768,43,864,64C960,85,1056,139,1152,149.3C1248,160,1344,128,1392,112L1440,96L1440,0L0,0Z",
    "M0,128L80,133.3C160,139,320,149,480,170.7C640,192,800,224,960,213.3C1120,203,1280,149,1360,122.7L1440,96L1440,0L0,0Z",
    "M0,160L60,170.7C120,181,240,203,360,208C480,213,600,203,720,181.3C840,160,960,128,1080,128C1200,128,1320,160,1380,176L1440,192L1440,0L0,0Z",
    "M0,224L48,213.3C96,203,192,181,288,186.7C384,192,480,224,576,240C672,256,768,256,864,245.3C960,235,1056,213,1152,208C1248,203,1344,213,1392,218.7L1440,224L1440,0L0,0Z"
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

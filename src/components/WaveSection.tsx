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
  // Paths de olas basados en el diseño de referencia
  const wavePaths = [
    "M0,256L60,245.3C120,235,240,213,360,197.3C480,181,600,171,720,186.7C840,203,960,245,1080,261.3C1200,277,1320,267,1380,261.3L1440,256L1440,320L0,320Z",
    "M0,224L48,213.3C96,203,192,181,288,186.7C384,192,480,224,576,245.3C672,267,768,277,864,256C960,235,1056,181,1152,170.7C1248,160,1344,192,1392,208L1440,224L1440,320L0,320Z",
    "M0,256L80,245.3C160,235,320,213,480,186.7C640,160,800,128,960,144C1120,160,1280,224,1360,256L1440,288L1440,320L0,320Z",
    "M0,288L60,272C120,256,240,224,360,202.7C480,181,600,171,720,181.3C840,192,960,224,1080,240C1200,256,1320,256,1380,256L1440,256L1440,320L0,320Z",
    "M0,304L48,288C96,272,192,240,288,229.3C384,219,480,229,576,240C672,251,768,261,864,261.3C960,261,1056,251,1152,245.3C1248,240,1344,240,1392,240L1440,240L1440,320L0,320Z"
  ];
  
  const opacities = [1, 0.9, 0.8, 0.7, 0.9];

  return (
    <section 
      className={`relative overflow-hidden bg-[#DAEDF0] ${heightClassName} ${className}`}
      role="banner"
      aria-label="Hero section with wave background"
    >
      {/* Capas de ondas SVG */}
      {colors.slice(0, 5).map((color, index) => (
        <svg
          key={index}
          className="absolute inset-x-0 bottom-0 w-full h-auto z-0"
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

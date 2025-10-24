import React from 'react';
import WaveSection from './WaveSection';

// Ejemplo de uso del componente WaveSection
const WaveSectionExample: React.FC = () => {
  return (
    <div className="min-h-screen">
      {/* Ejemplo básico */}
      <WaveSection>
        <div className="text-center space-y-6">
          <h1 className="text-4xl md:text-6xl font-bold text-gray-800">
            Bienvenido a Acquapack
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 max-w-2xl mx-auto">
            Líderes en soluciones de tuberías para el sector agrícola, industrial y minero
          </p>
          <button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-8 rounded-lg transition-colors duration-200">
            Conoce más
          </button>
        </div>
      </WaveSection>

      {/* Ejemplo con altura personalizada */}
      <WaveSection 
        heightClassName="h-[500px] sm:h-[600px]"
        className="mt-20"
      >
        <div className="text-center">
          <h2 className="text-3xl md:text-5xl font-bold text-gray-800 mb-4">
            Nuestros Servicios
          </h2>
          <p className="text-lg text-gray-600">
            Soluciones integrales para tu industria
          </p>
        </div>
      </WaveSection>

      {/* Ejemplo con colores personalizados */}
      <WaveSection 
        colors={['#E3F2FD', '#BBDEFB', '#90CAF9', '#64B5F6', '#42A5F5', '#2196F3']}
        heightClassName="h-[400px]"
      >
        <div className="text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Colores Personalizados
          </h2>
          <p className="text-white/90">
            Usando una paleta de azules personalizada
          </p>
        </div>
      </WaveSection>
    </div>
  );
};

export default WaveSectionExample;

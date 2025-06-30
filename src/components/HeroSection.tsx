
import { Button } from '@/components/ui/button';

const HeroSection = () => {
  const scrollToServices = () => {
    const element = document.getElementById('servicios');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="inicio" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 hero-pattern"></div>
      
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-medical-blue/5 to-medical-green/5"></div>
      
      {/* Content */}
      <div className="container mx-auto px-4 text-center relative z-10">
        <div className="max-w-4xl mx-auto animate-fade-in">
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
            NOVACOR DENTAL LAB:
            <span className="block text-primary">
              Precisión, Estética y Tecnología
            </span>
            <span className="block text-2xl md:text-3xl text-gray-600 font-normal mt-2">
              para sus Pacientes
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-600 mb-8 leading-relaxed">
            Su aliado estratégico en rehabilitación oral. 
            <span className="block mt-2">
              Laboratorio dental en Bogotá especializado en prótesis fijas y removibles de alta calidad.
            </span>
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button 
              size="lg" 
              onClick={scrollToServices}
              className="medical-gradient text-white px-8 py-4 text-lg hover:opacity-90 transition-opacity"
            >
              Conoce Nuestros Servicios
            </Button>
            
            <Button 
              size="lg" 
              variant="outline" 
              onClick={() => window.location.href = 'tel:3108723348'}
              className="border-primary text-primary hover:bg-primary hover:text-white px-8 py-4 text-lg"
            >
              Llamar Ahora
            </Button>
          </div>
          
          {/* Contact Info */}
          <div className="mt-12 text-gray-600">
            <p className="text-lg">
              📍 Carrera 91 # 127c - 06 - Suba, Bogotá, Colombia
            </p>
            <p className="text-lg mt-2">
              📧 novacorlab@gmail.com | 📱 310-872-3348
            </p>
          </div>
        </div>
      </div>
      
      {/* Decorative Elements */}
      <div className="absolute top-20 left-10 w-20 h-20 bg-primary/10 rounded-full blur-xl animate-pulse"></div>
      <div className="absolute bottom-20 right-10 w-32 h-32 bg-accent/10 rounded-full blur-xl animate-pulse delay-1000"></div>
    </section>
  );
};

export default HeroSection;

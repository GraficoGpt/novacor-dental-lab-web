
import { Button } from '@/components/ui/button';
import { MapPin, Zap, Phone, Mail, Award, Clock, Shield } from 'lucide-react';

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
      
      {/* Multiple Background Gradients for depth */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-accent/5"></div>
      <div className="absolute inset-0 bg-gradient-to-tr from-primary/3 via-transparent to-accent/3"></div>
      
      {/* Animated floating elements */}
      <div className="absolute top-20 left-10 w-20 h-20 bg-primary/10 rounded-full blur-xl animate-pulse"></div>
      <div className="absolute top-40 right-20 w-16 h-16 bg-accent/15 rounded-full blur-lg animate-pulse delay-700"></div>
      <div className="absolute bottom-20 right-10 w-32 h-32 bg-accent/10 rounded-full blur-xl animate-pulse delay-1000"></div>
      <div className="absolute bottom-40 left-20 w-12 h-12 bg-primary/20 rounded-full blur-md animate-pulse delay-500"></div>
      
      {/* Content */}
      <div className="container mx-auto px-4 text-center relative z-10">
        <div className="max-w-5xl mx-auto animate-fade-in">
          {/* Badge/Credencial */}
          <div className="inline-flex items-center px-6 py-3 bg-white/90 backdrop-blur-sm rounded-full border border-primary/20 text-primary font-medium text-sm mb-8 shadow-lg hover:shadow-xl transition-all duration-300">
            <Award className="w-4 h-4 mr-2 text-primary animate-pulse" />
            Técnico Profesional Certificado • Bogotá, Colombia
          </div>
          
          <h1 className="text-4xl md:text-7xl font-bold text-gray-900 mb-8 leading-tight">
            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              NOVACOR DENTAL LAB
            </span>
            <span className="block text-3xl md:text-4xl text-gray-800 font-semibold mt-4">
              Laboratorio de Mecánica Dental Especializada
            </span>
            <span className="block text-xl md:text-2xl text-gray-600 font-normal mt-4">
              Prótesis Fijas • Removibles • Rehabilitación Oral Integral
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-600 mb-10 leading-relaxed max-w-4xl mx-auto">
            <span className="font-semibold text-gray-800">15+ años de experiencia</span> creando soluciones prostodónticas de 
            <span className="text-primary font-semibold"> alta precisión</span> con materiales premium: 
            <span className="block mt-3 text-lg">
              Zirconio • E-MAX • Metal-Porcelana • Prótesis Flexibles
            </span>
          </p>
          
          {/* Stats */}
          <div className="grid grid-cols-3 gap-6 max-w-2xl mx-auto mb-10">
            <div className="text-center p-4 bg-white/60 backdrop-blur-sm rounded-xl shadow-lg">
              <div className="text-3xl font-bold text-primary">500+</div>
              <div className="text-sm text-gray-600 font-medium">Casos Exitosos</div>
            </div>
            <div className="text-center p-4 bg-white/60 backdrop-blur-sm rounded-xl shadow-lg">
              <div className="text-3xl font-bold text-accent">48h</div>
              <div className="text-sm text-gray-600 font-medium">Tiempo Promedio</div>
            </div>
            <div className="text-center p-4 bg-white/60 backdrop-blur-sm rounded-xl shadow-lg">
              <div className="text-3xl font-bold text-green-600">100%</div>
              <div className="text-sm text-gray-600 font-medium">Garantía</div>
            </div>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <Button 
              size="lg" 
              onClick={scrollToServices}
              className="novacor-gradient text-white px-10 py-4 text-lg hover:opacity-90 transition-all duration-300 hover:scale-105 shadow-lg font-semibold"
            >
              <Shield className="w-5 h-5 mr-2" />
              Ver Nuestros Servicios
            </Button>
            
            <Button 
              size="lg" 
              variant="outline" 
              onClick={() => window.location.href = 'tel:3108723348'}
              className="border-2 border-primary text-primary hover:bg-primary hover:text-white px-10 py-4 text-lg transition-all duration-300 hover:scale-105 shadow-lg font-semibold"
            >
              <Phone className="w-5 h-5 mr-2" />
              Consulta Inmediata
            </Button>
          </div>
          
          {/* Enhanced Contact Info */}
          <div className="bg-white/70 backdrop-blur-sm rounded-2xl p-6 shadow-xl border border-white/20 max-w-3xl mx-auto">
            <div className="grid md:grid-cols-2 gap-4 text-gray-700">
              <div className="flex items-center justify-center md:justify-start space-x-3">
                <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center">
                  <MapPin className="w-6 h-6 text-primary" />
                </div>
                <div className="text-left">
                  <div className="font-semibold">Ubicación Estratégica</div>
                  <div className="text-sm">Carrera 91 # 127c-06, Suba, Bogotá</div>
                </div>
              </div>
              
              <div className="flex items-center justify-center md:justify-start space-x-3">
                <div className="w-12 h-12 bg-accent/20 rounded-full flex items-center justify-center">
                  <Zap className="w-6 h-6 text-accent" />
                </div>
                <div className="text-left">
                  <div className="font-semibold">Contacto Directo</div>
                  <div className="text-sm flex items-center gap-2">
                    <Phone className="w-4 h-4" />
                    310-872-3348 • 
                    <Mail className="w-4 h-4" />
                    novacorlab@gmail.com
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;

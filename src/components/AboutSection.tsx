
const AboutSection = () => {
  return (
    <section id="nosotros" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="animate-fade-in">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Calidad y Experiencia a su Servicio
            </h2>
            
            <div className="prose prose-lg text-gray-600 space-y-6">
              <p>
                En <strong>NOVACOR DENTAL LAB</strong>, nos especializamos en brindar soluciones de mecánica dental 
                de la más alta calidad para odontólogos y clínicas dentales en Bogotá y toda Colombia.
              </p>
              
              <p>
                Bajo la dirección técnica de <strong>Juan Coronado Vaca</strong>, Técnico Profesional con amplia 
                experiencia en el sector, nos comprometemos con la precisión, la estética y la funcionalidad 
                en cada trabajo que realizamos.
              </p>
              
              <p>
                Utilizamos tecnología avanzada y materiales premium para garantizar resultados que superen 
                las expectativas tanto del profesional como del paciente final.
              </p>
            </div>

            {/* Key Features */}
            <div className="mt-8 grid sm:grid-cols-2 gap-6">
              <div className="flex items-start space-x-3">
                <div className="w-8 h-8 bg-primary/20 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <div className="w-3 h-3 bg-primary rounded-full"></div>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">Precisión Técnica</h4>
                  <p className="text-gray-600 text-sm">Cada trabajo es ejecutado con los más altos estándares de calidad</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-3">
                <div className="w-8 h-8 bg-accent/20 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <div className="w-3 h-3 bg-accent rounded-full"></div>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">Comunicación Directa</h4>
                  <p className="text-gray-600 text-sm">Trabajamos de la mano con el odontólogo en cada caso</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-3">
                <div className="w-8 h-8 bg-blue-500/20 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">Tecnología Avanzada</h4>
                  <p className="text-gray-600 text-sm">Equipos de última generación para mejores resultados</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-3">
                <div className="w-8 h-8 bg-purple-500/20 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <div className="w-3 h-3 bg-purple-500 rounded-full"></div>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">Entrega Oportuna</h4>
                  <p className="text-gray-600 text-sm">Cumplimiento de tiempos sin comprometer la calidad</p>
                </div>
              </div>
            </div>
          </div>

          {/* Image/Visual */}
          <div className="animate-scale-in">
            <div className="relative">
              {/* Professional Image Placeholder */}
              <div className="bg-gradient-to-br from-medical-blue/10 to-medical-green/10 rounded-2xl p-8 h-96 flex items-center justify-center">
                <div className="text-center">
                  <div className="w-32 h-32 bg-primary/20 rounded-full mx-auto mb-6 flex items-center justify-center">
                    <div className="text-4xl">👨‍⚕️</div>
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">Juan Coronado Vaca</h3>
                  <p className="text-primary font-semibold">Técnico Profesional</p>
                  <p className="text-gray-600 mt-2">Director Técnico NOVACOR DENTAL LAB</p>
                </div>
              </div>
              
              {/* Decorative elements */}
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-accent/20 rounded-full blur-xl"></div>
              <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-primary/20 rounded-full blur-xl"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;

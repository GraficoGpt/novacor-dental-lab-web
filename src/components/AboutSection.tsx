
const AboutSection = () => {
  return (
    <section id="nosotros" className="py-24 bg-white relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute top-20 right-10 w-40 h-40 bg-primary/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 left-10 w-32 h-32 bg-accent/5 rounded-full blur-2xl"></div>
      
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <div className="animate-fade-in">
            <div className="inline-flex items-center px-4 py-2 bg-accent/10 rounded-full text-accent font-medium text-sm mb-8">
              <div className="w-2 h-2 bg-accent rounded-full mr-2 animate-pulse"></div>
              Acerca de Novacor Dental Lab
            </div>
            
            <h2 className="text-5xl font-bold text-gray-900 mb-8">
              Excelencia Técnica
              <span className="block text-primary mt-2">al Servicio de la Odontología</span>
            </h2>
            
            <div className="prose prose-lg text-gray-600 space-y-6 max-w-none">
              <p className="text-xl leading-relaxed">
                <strong className="text-gray-900">NOVACOR DENTAL LAB</strong> es un laboratorio especializado 
                en mecánica dental que combina <span className="text-primary font-semibold">técnicas tradicionales 
                artesanales</span> con <span className="text-accent font-semibold">tecnología de vanguardia</span> 
                para crear soluciones prostodónticas excepcionales.
              </p>
              
              <p className="text-lg leading-relaxed">
                Dirigido por <strong className="text-gray-900">Juan Coronado Vaca</strong>, Técnico Profesional 
                en Mecánica Dental con más de <span className="text-primary font-semibold">15 años de experiencia</span>, 
                nuestro laboratorio se ha consolidado como referente en Bogotá por la 
                <span className="text-accent font-semibold"> precisión técnica</span> y 
                <span className="text-primary font-semibold"> calidad estética</span> de nuestros trabajos.
              </p>
              
              <p className="text-lg leading-relaxed">
                Trabajamos exclusivamente con <strong>odontólogos especialistas y clínicas dentales</strong>, 
                ofreciendo un servicio técnico diferenciado que incluye asesoría prostodóntica, 
                seguimiento de casos complejos y garantía extendida en todos nuestros trabajos.
              </p>
            </div>

            {/* Enhanced Key Features */}
            <div className="mt-12 grid sm:grid-cols-2 gap-8">
              <div className="flex items-start space-x-4 group">
                <div className="w-12 h-12 bg-primary/20 rounded-xl flex items-center justify-center flex-shrink-0 mt-1 group-hover:scale-110 transition-transform duration-300">
                  <div className="w-4 h-4 bg-primary rounded-full"></div>
                </div>
                <div>
                  <h4 className="font-bold text-gray-900 mb-2">Precisión Microtécnica</h4>
                  <p className="text-gray-600 text-sm leading-relaxed">Tolerancias de ajuste inferior a 50 micras utilizando tecnología CAD/CAM</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4 group">
                <div className="w-12 h-12 bg-accent/20 rounded-xl flex items-center justify-center flex-shrink-0 mt-1 group-hover:scale-110 transition-transform duration-300">
                  <div className="w-4 h-4 bg-accent rounded-full"></div>
                </div>
                <div>
                  <h4 className="font-bold text-gray-900 mb-2">Comunicación Clínica</h4>
                  <p className="text-gray-600 text-sm leading-relaxed">Contacto directo con el técnico para optimización de cada caso</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4 group">
                <div className="w-12 h-12 bg-purple-500/20 rounded-xl flex items-center justify-center flex-shrink-0 mt-1 group-hover:scale-110 transition-transform duration-300">
                  <div className="w-4 h-4 bg-purple-500 rounded-full"></div>
                </div>
                <div>
                  <h4 className="font-bold text-gray-900 mb-2">Materiales Premium</h4>
                  <p className="text-gray-600 text-sm leading-relaxed">Exclusivamente materiales certificados FDA y CE de proveedores internacionales</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4 group">
                <div className="w-12 h-12 bg-blue-500/20 rounded-xl flex items-center justify-center flex-shrink-0 mt-1 group-hover:scale-110 transition-transform duration-300">
                  <div className="w-4 h-4 bg-blue-500 rounded-full"></div>
                </div>
                <div>
                  <h4 className="font-bold text-gray-900 mb-2">Tiempos Garantizados</h4>
                  <p className="text-gray-600 text-sm leading-relaxed">Entrega puntual con sistema de trazabilidad completo del proceso</p>
                </div>
              </div>
            </div>

            {/* Certifications */}
            <div className="mt-12 p-6 bg-gradient-to-r from-primary/5 to-accent/5 rounded-2xl border border-primary/10">
              <h4 className="font-bold text-gray-900 mb-4">Certificaciones y Estándares</h4>
              <div className="flex flex-wrap gap-3">
                <span className="px-4 py-2 bg-white rounded-full text-sm font-medium text-gray-700 shadow-sm">ISO 13485</span>
                <span className="px-4 py-2 bg-white rounded-full text-sm font-medium text-gray-700 shadow-sm">FDA Approved Materials</span>
                <span className="px-4 py-2 bg-white rounded-full text-sm font-medium text-gray-700 shadow-sm">CE Certified</span>
                <span className="px-4 py-2 bg-white rounded-full text-sm font-medium text-gray-700 shadow-sm">Biocompatibilidad Garantizada</span>
              </div>
            </div>
          </div>

          {/* Enhanced Visual */}
          <div className="animate-scale-in lg:pl-8">
            <div className="relative">
              {/* Professional Profile Card */}
              <div className="bg-gradient-to-br from-white to-gray-50 rounded-3xl p-8 shadow-2xl border border-gray-100 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-24 h-24 bg-primary/10 rounded-full -translate-y-12 translate-x-12"></div>
                <div className="absolute bottom-0 left-0 w-20 h-20 bg-accent/10 rounded-full translate-y-10 -translate-x-10"></div>
                
                <div className="text-center relative z-10">
                  <div className="w-32 h-32 bg-gradient-to-br from-primary/20 to-accent/20 rounded-full mx-auto mb-6 flex items-center justify-center shadow-lg">
                    <div className="text-5xl">👨‍⚕️</div>
                  </div>
                  <h3 className="text-3xl font-bold text-gray-900 mb-2">Juan Coronado Vaca</h3>
                  <p className="text-primary font-bold text-lg mb-1">Técnico Profesional en Mecánica Dental</p>
                  <p className="text-gray-600 mb-6">Director Técnico | NOVACOR DENTAL LAB</p>
                  
                  {/* Experience highlights */}
                  <div className="grid grid-cols-2 gap-4 mb-6">
                    <div className="text-center p-3 bg-primary/10 rounded-xl">
                      <div className="text-2xl font-bold text-primary">15+</div>
                      <div className="text-sm text-gray-600">Años de Experiencia</div>
                    </div>
                    <div className="text-center p-3 bg-accent/10 rounded-xl">
                      <div className="text-2xl font-bold text-accent">500+</div>
                      <div className="text-sm text-gray-600">Casos Exitosos</div>
                    </div>
                  </div>
                  
                  <div className="text-sm text-gray-500 italic">
                    "La precisión técnica y la estética natural son la base de una rehabilitación exitosa"
                  </div>
                </div>
              </div>
              
              {/* Floating elements */}
              <div className="absolute -top-6 -right-6 w-12 h-12 bg-primary/20 rounded-full blur-sm animate-pulse"></div>
              <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-accent/20 rounded-full blur-md animate-pulse delay-1000"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
